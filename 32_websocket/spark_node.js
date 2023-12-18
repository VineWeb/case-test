const http = require('http')
const server = http.createServer()
const { WebSocket, Server } = require('ws');
const socket1 = new WebSocket('ws://localhost:3000')
const wss = new Server({port: 3000})
const { generateUrl, genParams } = require('./utils')

// server.listen(3000, () => {
//   console.log('启动 http://localhost:3000')
// })

socket1.on('message', (client) => {
  console.log(client, client.toString())
})
socket1.on('open', () => {
  console.log('服务器已连接')
  // 可以发送信息操作
  socket1.send('孙悟空大闹天宫!!')
  // socket.send(JSON.stringify({name: '孙悟空', title: '孙悟空大闹天宫!!'}))
})

socket1.on('close', () => {
  console.log('客户端接收到服务端链接已断开')
})
wss.on('connection', (socket) => {
  console.log('客户端在服务端已经连接成功!', socket.toString())
  socket.on('close', () => {
    console.log('监听到客户端已断开链接')
  })

  socket.on('message', (message) => {
    console.log('接收到客户端发送过来的数据: '+message)
    // socket.send('我是服务端的服务3000发送过来的信息')

      // 创建星火url
    const url = generateUrl()
    // console.log('url', url)
    // 连接星火WebSocket接口
    const webSocket = new WebSocket(url)
    const webSocketServer = new Server({noServer: true})
    webSocket.on('open', () => {
        // 收到客户端发送信息，生成星火参数
        const question = genParams('你是谁')
        // console.log('question', question)
        // 发送信息到星火
        webSocket.send(JSON.stringify(question))
    })
    let content = ''
    let contentArr = []
    webSocket.on('message', (res) => { 
      // console.log('星火res', JSON.parse(res.toString('utf8')))
      const obj = JSON.parse(res.toString('utf8'))
      // console.log('星火res', res.toString('utf8'))
      const text = obj['payload']['choices']['text'];
      contentArr.push(text[0].content)
      console.log(content, '星火res text')
    })
    webSocket.on('close', () => {
      console.log(contentArr.join(''), 'contentArr')
      console.log('星火服务端链接已断开')
    })
    webSocketServer.on('connection', (serRes) => {
      // console.log(serRes, 'webSocketServer')
    })
  })
})
