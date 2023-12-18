const crypto = require('crypto');

const CryptoJS = require('crypto-js')
const {Base64} =  require('js-base64')
const { secret, key, appid } = require('./config');
function utf8 (str) {
  return Buffer.from(str, 'utf8')
}
function base64 (str) {
  return Buffer.from(str).toString('base64');
}

function hmac (key, content)  {
  return crypto.createHmac('sha256', key)
      .update(content)
      .digest('base64');
}


function authorize (host, date) {
  const tmp = `host: ${host}\ndate: ${date}\nGET /v2.1/chat HTTP/1.1`;
  const sign = hmac(utf8(secret), utf8(tmp));
  // console.log(sign);
  const authorizationOrigin = `api_key="${key}", algorithm="hmac-sha256", headers="host date request-line", signature="${sign}"`;
  // console.log(authorizationOrigin);
  return base64(utf8(authorizationOrigin));
}

function generateAuth () {
  const host = 'spark-api.xf-yun.com';
  const date = new Date().toUTCString();
  return {
      host,
      date,
      authorization: authorize(host, date),
  };
}
function generateUrl () {
  const data = generateAuth();
  const arr = [];
  for (const k in data) {
      arr.push(`${k}=${data[k]}`);
  }
  return `wss://spark-api.xf-yun.com/v2.1/chat?${arr.join('&')}`;
}
function genParams(question) {
  const data = {
    header: {
      app_id: appid,
      uid: '1234', // Math.random().toString().substring(2)
    },
    parameter: {
      chat: {
        domain: 'generalv2',
        random_threshold: 0.5,
        max_tokens: 2048,
      },
    },
    payload: {
      message: {
        text: [{ role: 'user', content: question }],
      },
    },
  }
  return data
}
function getWebsocketUrl() {
  return new Promise((resolve, reject) => {
      var apiKey = key
      var apiSecret = secret
      var url = 'wss://spark-api.xf-yun.com/v2.1/chat'
      // var host = location.host
      var host = 'spark-api.xf-yun.com';
      var date = new Date().toGMTString()
      var algorithm = 'hmac-sha256'
      var headers = 'host date request-line'
      var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`
      var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret)
      var signature = CryptoJS.enc.Base64.stringify(signatureSha)
      var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
      var authorization = btoa(authorizationOrigin)
      url = `${url}?authorization=${authorization}&date=${date}&host=${host}`
      resolve(url)
  })
}

function getParams() {
  var params = {
    "header": {
        "app_id": appid,
        "uid": "fd3f47e4-d"
    },
    "parameter": {
        "chat": {
            "domain": "general",
            "temperature": 0.5,
            "max_tokens": 1024
        }
    },
    "payload": {
        "message": {
            "text": [
                {
                    "role": "user",
                    "content": "中国第一个皇帝是谁？"
                }
            ]
        }
    }
  }
  return JSON.stringify(params)
}

module.exports = {
  utf8,
  base64,
  hmac,
  generateUrl,
  generateAuth,
  authorize,
  getWebsocketUrl,
  genParams,
  getParams
}