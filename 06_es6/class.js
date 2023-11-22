function Phone(brand, price) {
  this.brand = brand
  this.price = price
}
 /**函数独有的静态属性和静态方法 */
Phone.name = '这是我的手机名字'
Phone.send = function () {
  console.log('这是我独有的发送信息功能')
}

// 实例可以共用构造函数上的原型方法
Phone.prototype.call = function () {
  console.log('我可以打电话');
}

function smartPhone (brand, price, color, inch) {
  Phone.call(this, brand, price)
  this.color = color
  this.inch = inch
}
smartPhone.prototype.call = function () {
  console.log('打电话')
}
smartPhone.prototype.photograph = function () {
  console.log('拍照')
}

const huawei = new Phone('Huawei', 1999)
const xiaomi = new smartPhone('xiaomi', 799, '黑色', '5.7inch')
console.log(xiaomi);
xiaomi.call()

// huawei.name  //undefined
// huawei.send()  // huawei.send is not a function


class Shouji {
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }

  call () {
    console.log('我也可以打电话')
  }
}


class smartShouji extends Shouji {
  constructor(brand, price, color, inch) {
    super(brand, price)
    this.color = color
    this.inch = inch
  }
  call () {
    console.log('我是錘子專用打電話')
  }
}
// const yijia = new Shouji('1+', 1999)
// console.log(yijia)

// yijia.call()
const chuizi = new smartShouji('锤子', 1688, '白色', '5.5inch')
console.log(chuizi)
chuizi.call()