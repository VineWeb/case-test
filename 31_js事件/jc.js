function Animal() {}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype = new Animal();
Dog.prototype.constructor = Dog; // 修复构造函数引用

const myDog = new Dog();
const animal = new Animal()
// console.log(myDog instanceof Dog);    // 输出: true
// console.log(myDog instanceof Object); // 输出: false，修复后返回 false
console.log(myDog.constructor)
console.log(animal.constructor)
// console.log(myDog.__proto__)

let o = {};
// 等价于：
o = Object.create(Object.prototype);
console.log(Object.create(Object.prototype))
console.log(Object.create(Animal.prototype), Dog.prototype.__proto__)
// function Parent (name) {
//   this.name = name
// }
// function Child () {
//   this.sex = 'boy'
//   Parent.call(this, 'child')
// }
// var child1 = new Child()
// console.log(child1)


// function Child1 () {
//   // this.sex = 'boy'
//   // Parent.call(this, 'good boy')
//   // this.name = 'bad boy'
//   this.sex = 'boy'
//   this.name = 'bad boy'
//   Parent.call(this, 'good boy')
// }
// var child2 = new Child1()
// console.log(child2)

