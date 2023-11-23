// const obj = {}
// const arr = []
// const func = () => { }
// Object.prototype.x = 'x'

// const instanceOf = (A, B) => {
//   let p = A
//   while (p) {
//     if (p === B.prototype) {
//       return true
//     }
//     p = p.__proto__
//   }

//   return false
// }

// Function.prototype.y = 'y'



// var foo = {}, F = function () { };

// Object.prototype.a = 'value a'

// Function.prototype.b = 'value b'

// console.log(foo.a)  // 'value a'
// console.log(foo.b) // undefined
// console.log(F.a) //  'value a'
// console.log(F.b) //  'value b'

// const a = { n: 112 }


const json = {
  a: { b: { c: 1 } },
  d: { e: 2 }
}


const path = ['a', 'b', 'c']

let p = json

path.forEach(k => {
  p = p[k]
})

