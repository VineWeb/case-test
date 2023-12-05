/***
 * 回溯算法: 
 * 是算法设计中的一种方法
 * 回溯算法是一种渐进式寻找并构建问题解决方式的策略
 * 回溯算法会先从一个可能的动作开始解决问题, 如果不行, 就回溯并选择另一个动作, 直到问题解决
 * 
 * 
 * 全排列
 * 子集
 */


// 46. 全排列
/***
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 1.有很多路
 * 2.这些路里面, 有死路, 也有出路
 * 3.通常需要递归来模拟所有的路
 * 
 * 示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]

示例 3：
输入：nums = [1]
输出：[[1]]
 
 
 解题步骤:
 1.用递归模拟出所有情况
 2.遇到包含重复元素的情况, 就回溯。
 3.收集所有到达递归终点的情况, 并返回.
 时间复杂度: O(n!) n! = 1x2x3x...x(n-1)xn
 空间复杂度: O(n)
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  const backtrack = (path) => {
    if (path.length === nums.length) {
      return res.push(path)
    }
    nums.forEach(n => {
      if (path.includes(n)) return
      backtrack(path.concat(n))
    })
  }
  backtrack([])
  return res
};

const arr = [1, 2, 3]
const paths = permute(arr)
// console.log(paths)


/***
 * 78. 子集
 * 
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。


示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]

用递归模拟出所有情况
保证接的数字都是后面的数字
收集所有到达递归终点的情况, 并返回
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间复杂度: O(2^N)
 * 空间复杂度: O(N)
 */
var subsets = function(nums) {
  const res = []
  const backtrack = (path, l, start) => {
    if (path.length === l) {
      res.push(path)
      return
    }
    for (let i = start; i < nums.length; i++) {
      backtrack(path.concat(nums[i]), l, i+1)
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0)
  }
  return res
};

