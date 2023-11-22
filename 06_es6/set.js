const arr = [1, 3, 5, 7, 9, 7, 5, 3, 1]
const list = [4, 5, 6, 7, 1]
const newArr = [...new Set(arr)]
// console.log(newArr);

const aSet = new Set()
aSet.add('小明')
aSet.add('小5')
aSet.delete('小5')
// console.log(aSet.has('小明'))
// console.log(aSet)
// console.log(aSet.size)

// for(let i of aSet) {
//   console.log(i)
// }
// 并集
const union = [...new Set([...arr, ...list])]
// 交集
const intersection = [...new Set([...arr])].filter(item => new Set([...list]).has(item))
// 差集
const diff = [...new Set([...list])].filter(item => !new Set([...arr]).has(item))
console.log(diff)