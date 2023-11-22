// new 运算符

// new 运算符创建一个 用户定义 的 对象类型 的 实例 或 具有构造函数的内置对象的 实例。


// 创建了一个实例 (用户定义的 对象类型  ||  具有构造函数的内置对象 )

const a = new Object() // 对象类型

const num = new Number(1)


console.log(a, num)


// 1.创建一个空的简单JS对象 ===> {}
// 2.为步骤1新创建的对象添加属性  __proto__, 将该属性链接到构造函数的原型对象
// 3.将步骤1新创建的对象作为this的上下文
// 4.如果该函数没有返回对象.则返回this
function fun (name, age) {
  console.log(this, 'fun inner this')
  this.name = name
  this.age = age
  return undefined
}
const abc = new fun('小明', 18)
console.log(abc, 'abc')

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    return null
  }
}

const zhangsan = new Person('zhangsan', 20)
console.log(zhangsan, 'zhangsan')