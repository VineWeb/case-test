// 1.堆 是一种特殊的完全二叉树
// 2. 所有的节点都大于等于(最大堆)或小于等于(最小堆)它的子节点


/**
 * js中通常用数组表示堆
 * 最小堆 (最小值 heap[0])
 * 最大堆 (最大值 heap[0])
 * 左侧子节点的位置是 2 * index + 1
 * 右侧子节点的位置是 2 * index + 2
 * 父节点的位置是 (index - 1) /2
 * 
 * 
 * 堆能高效, 快速地找出最大值和最小值
 * 时间复杂度 : O(n)
 * 
 * 找出第K个最大(小)元素
 */


// 在类里 , 声明一个数组, 用来装元素.

// 主要方法: 插入, 删除堆顶, 获取堆顶, 获取堆大小


/** 一: 插入: 
 * 1. 将值插入堆的底部, 即数组的尾部;
 * 2. 然后执行上移操作: 将这个值和它的父节点进行交换, 直到父节点小于等于这个插入的值
 * 3. 大小为k的堆中插入元素的时间复杂度为O(logk)
 */

/** 二: 删除堆顶: 
 * 1. 用数组尾部元素替换堆顶 (直接删除堆顶会破坏堆结构)。
 * 2. 然后下移: 将新堆顶和它的子节点进行交换, 直到子节点大于等于这个新堆顶
 * 3. 大小为 k 的堆中删除堆顶的时间复杂度为O(logk)
 */

/** 三: 获取堆顶: 返回数组的头部
 *  四: 获取堆的大小: 返回数组的长度
 */

class MinHeap {
  constructor() {
    this.heap = []
  }
  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  getParentIndex(i) {
    return (i-1) >> 1
  }
  getLeftIndex(i) {
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  shiftUp(index) {
    if (index == 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if ( this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.pop()
/**
 * 

215. 数组中的第K个最大元素

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const h = new MinHeap()
  nums.forEach((n) => {
    h.insert(n)
    if (h.size() > k) {
        h.pop()
    }   
 })
//  console.log(h.heap)
 return h.peek()
};
// const nums = [5, 2, 4, 1, 3, 6, 0]
// const k = 4

// const kNum = findKthLargest(nums, k)
// console.log(kNum, 'Knum')

// var findKthLargest1 = function(nums, k) {
//   const newNums = nums.sort((a, b) => b-a)
// //  console.log(h.heap)
//  return newNums[k-1]
// };

// const kNum1 = findKthLargest1(nums, k)
// console.log(kNum1, 'Knum1')

/***
 * 347. 前 K 个高频元素
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
 */

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function(nums, k) {
//   const map = new Map()
//   nums.forEach(n => {
//     map.set(n, map.has(n)? map.get(n)+1: 1)
//   })
//   const list = Array.from(map).sort((a, b) => b[1]-a[1]).filter((n, i) => i<k).map(n => n[0])
//   console.log(list)
//   return list
// };
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map()
  nums.forEach(n => {
    map.set(n, map.has(n)? map.get(n)+1: 1)
  })
  const h = new MinHeap()
  map.forEach((value, key) => {
    console.log(value, key)
  })
  console.log(map)
};

const nums = [1,1,1,2,2,3]
const k = [1, 2]
topKFrequent(nums, k)


/***
23. 合并 K 个升序链表
给你一个链表数组，每个链表都已经按升序排列。
请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6

示例 2：
输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]
 */



