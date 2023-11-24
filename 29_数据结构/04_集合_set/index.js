// 集合 是一种无序且唯一的数据结构
// ES6 中有集合, 名为 Set
// 集合的常用操作: 去重,判断某元素是否在集合中, 求交集

// 去重
const arr = [1, 1, 2, 2]
const arr2 = [...new Set(arr)]
console.log(arr2)

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(1)
const has1 = set.has(2)
const has2 = set.has(3)


// 求交集
const set2 = new Set([2, 3])
const set3 = [...new Set([...set])].filter((item) => set2.has(item))
console.log(set3)


// leetcode 349. 两个数组的交集
// 交集: intersection     并集: union
// 时间复杂度 O(m * n) 空间复杂度 O(m)+O(n)+O(l)
const intersectionFun = (arr1, arr2) => {
  const set = new Set()
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  for (const value of set1) {
    if (set2.has(value)) {
      set.add(value)
    }
  }
  return [...set]
}
// 时间复杂度 O(m * n)  空间复杂度 O(m)
const intersectionFun2 = (arr1, arr2) => {
  return [...new Set(arr1)].filter(item => arr2.includes(item))
}

const inter = intersectionFun([1, 1, 2, 2], [1, 4, 9])
console.log(inter, 'inter')

for (const iterator of [1, 2]) {
}




