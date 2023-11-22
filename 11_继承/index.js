// 原型链继承
function Supper() {
  this.supProp= 'Supper property'
}
Supper.prototype.showSupperProp = function () {
  console.log(this.supProp)
}

function Sub () {
  this.subProp = 'Sub property'
}

Sub.prototype = new Supper()
Sub.prototype.constructor = Sub

Sub.prototype.showSubPerProp = function () {
  console.log(this.subProp)
}

const sub = new Sub()
sub.showSupperProp()
sub.showSubPerProp()


// 借用构造函数继承

function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function () {
  console.log(this.name)
}

function Student (name, age, school) {
  Person.call(this, name, age) // 为了得到属性
  this.school = school
}

Student.prototype = new Person() // 为了得到父类型的方法
Student.prototype.constructor = Student // 修正constructor的属性
Student.prototype.saySchool = function () {
  console.log(this.school)
}

const xiaoming = new Student('小明', 12, '前端小学')

console.log(xiaoming, 'xiaoming')

// 标识符   执行环境  全局作用域 函数作用域 

// 全局作用域  初始化时候 初始化内置对象 把全局变量以及全局下的函数挂载到全局window的属性上面
// 函数作用域内的变量 函数执行完了就释放

// a.b  先寻找a  作用域链查找 找到a后 找b 通过a的原型链查找

// 作用域 代码初始化就确定  n+1个 n定义多少个函数 1是全局
// 执行上下文 n+1 函数执行次数 n  全局 1 

// 函数执行时候产生 调用完结束