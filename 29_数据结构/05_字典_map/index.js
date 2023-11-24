// 字典是一种存储唯一值的数据结构, 与集合类似, 但是它是以 *键值对* 的形式来存储

// ES6 中有字典  名为 Map  增删改查

// 349 两个数组的交集

/**
 * 
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
 */
const intersection = (arr1, arr2) => {
  const map = new Map()
  arr1.forEach(m => {
    map.set(m, true)
  });
  const res = []
  arr2.forEach(n => {
    if (map.get(n)) {
      res.push(n)
      map.delete(n)
    }
  });
  return res
}


/*
20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

1.左括号必须用相同类型的右括号闭合。
2.左括号必须以正确的顺序闭合。
3.每个右括号都有一个对应的相同类型的左括号。
*/

var isValid = function (s) {
  const len = s.length
  if (len % 2 === 1) return false
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')
  for (i = 0; i < len; i++) {
    const c = s[i] // 当前遍历的元素
    if (map.has(c)) {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (map.get(t) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};

/***
 * 

1. 两数之和
 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

 * 
 * 
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (i = 0; i < nums.length; i++) {
    const n = nums[i]
    const m = target - n
    if (map.has(m)) {
      return [map.get(m), i]
    } else {
      map.set(n, i)
    }
  }
}

/**
3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0
  const map = new Map()
  let res = 0
  for (let r = 0; r < s.length; r++) {
    const cVal = s[r];
    if (map.has(cVal) && map.get(cVal) >= l) {
      l = map.get(cVal) + 1
    }
    res = Math.max(res, r - l + 1)
    map.set(cVal, r)
  }
};

/**
76. 最小覆盖子串

给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。
 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
示例 2：

输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

};


const m = new Map()

// 增加
m.set('a', 'aa')
m.set('b', 'bb')

// 查
const aVal = m.get('a')

// 删除 m.delete(key)  删除所有 m.clear()
m.delete('b')

// 改
m.set('a', 'abc')

m.clear()


