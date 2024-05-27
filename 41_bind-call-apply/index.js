const a1 = {
  num: 1,
  valueOf: () => {
    return a.num ++
  }
}

const a2 = {
  num: 1,
  toString: () => a.num ++
}
var a = 0
Object.defineProperty({a: 0}, 'a', {
  get(){
    return ++a
  }
})

if (a == 1 && a == 2 & a == 3) {
  console.log(1);
}
function getValue(name, age) {
  console.log('name:', name)
  console.log('age:', age)
  console.log('this.value: ', this.value)
  console.log( 'this:',this)
}

// const bindGet = getValue.bind(a)
// bindGet('zhangsan', 18)
// getValue.call(a, 'lisi', 19)
// getValue.apply(a, ['wangwu', 20])


console.log("********************______________*************")

// const ArrPrototype = Object.prototype.toString.call([])
// console.log(ArrPrototype)