// 处理超过一万的数值
const addCommas = (number) => {
  // 将数值转为字符串
  let str = number.toString();
  
  // 匹配数值的整数部分和小数部分
  let parts = str.split('.');
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  
  // 在整数部分添加逗号分隔符
  let pattern = /(\d)(?=(\d{3})+$)/g;
  integerPart = integerPart.replace(pattern, '$1,');
  
  // 返回处理后的数值
  return integerPart + decimalPart;
};

// 将小数转换为百分比，保留两位小数
const decimalToPercentage = (number, len = 2) => {
  const num = Number(number);
  return (num * 100).toFixed(len);
};


const originObj = {
  xgs: {
    age: 18,
    radio: 0.512345
  },
  hubei: '湖北',
  name: 'zhangsan',
  num: 1210809211111111,
  money: 123101231231,
  xbg: {
    q: {
      ger: '好又多',
      umax: '4678779797213123',
      len: 890,
      radxe: 0.9843
    }
  },
  xbg1: {
    q: {
      ger: '好又多',
      umax: '4678779797213123',
      len: 890,
      radxe: 0.9843
    }
  },
  xbg2: {
    q: {
      ger: '好又多',
      umax: '4678779797213123',
      len: 890,
      radxe: 0.9843
    }
  },
  xbg3: {
    q: {
      ger: '好又多',
      umax: '4678779797213123',
      len: 890,
      radxe: 0.9843
    },
    ger: '好又多',
    umax: '4678779797213123',
    len: 890,
    radxe: 0.9843
  }
}

const addCommasFn = (obj, keys = []) => {
  let fitlerKeys = keys;
  for (let key in obj) {
      if (keys.some(itemKey => itemKey === key)) {
          obj[key] = addCommas(obj[key]);
          fitlerKeys = keys.filter(item => item !== key);
      }
      if (typeof obj[key] === 'object' && !Array.isArray(obj)) {
          obj[key] = addCommasFn(obj[key], fitlerKeys);
      }
  }
  return obj;
};
const decimalToPerFn = (obj, keys = []) => {
  let fitlerKeys= keys;
  for (let key in obj) {
      if (keys.some(itemKey => itemKey === key)) {
          obj[key] = decimalToPercentage(obj[key]);
          fitlerKeys = keys.filter(item => item !== key);
      }
      if (typeof obj[key] === 'object' && !Array.isArray(obj)) {
          obj[key] = decimalToPerFn(obj[key], fitlerKeys);
      }
  }
  return obj;
};


console.time('some object')
const data = addCommasFn(originObj, ['num', 'money', 'umax'])
console.timeEnd('some object')
console.time('decimalToPerFn')
const dataPer = decimalToPerFn(originObj, ['radio', 'radxe'])
console.timeEnd('decimalToPerFn')
