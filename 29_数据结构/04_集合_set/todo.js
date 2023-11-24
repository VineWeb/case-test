// Set 操作

/**
 * 使用Set对象: new add delete has size
 *
 * 迭代Set: 多种迭代方法,  Set和Array互转,  求交集/差集
 *
 */

// Object.keys()
// Object.values()
// Object.entries()

const mySet = new Set()
mySet.add(1)
mySet.add(3)
mySet.add(3)
let o = { a: 1, b: 2 }
mySet.add(o)
mySet.add({ a: 1, b: 2 })

const has1 = mySet.has(1)
const has2 = mySet.has(3)
const has3 = mySet.has(2)
const has4 = mySet.has(o)
const has5 = mySet.has({ a: 1, b: 2 }) //  存储地址不一致
const size = mySet.size
mySet.delete(o)
mySet.delete({ a: 1, b: 2 })// 存储地址不一致


for (const key of mySet.keys()) {
  console.log(key, 'key')
}
for (const val of mySet.values()) {
  console.log(val, 'value')
}
for (const [key, value] of mySet.entries()) {
  console.log(key, ':key___', value, ':value')
}


// Set 和 Array 互转

const arr = Array.from(mySet)

const mySet2 = new Set([1, 2, 3, 4])

const intersection = [...mySet].filter(x => mySet2.has(x))


const difference = [...mySet].filter(x => !mySet2.has(x))

console.log(mySet, 'mySet')