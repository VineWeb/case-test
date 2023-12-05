/***
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 1. 新建一个新链表, 作为返回结果
 * 2.用指针遍历两个有序链表, 并比较两个链表的当前节点, 较小者先接入新链表, 并将指针后移一步.
 * 3.链表遍历结束, 返回新链表
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const res = new ListNode(0)
  let p = res
  let p1 = list1
  let p2 = list2
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }

  if (p1) {
    p.next = p1
  }
  if (p2) {
    p.next = p2
  }
  return res.next
};


/****
 * 从数组的中间元素开始, 如果中间元素正好是目标值, 则搜索过程结束
 * 如果目标值大于或者小于中间元素, 则在数组大于或者小于中间元素的那一半查找
 * 
374. 猜数字大小
猜数字游戏的规则如下：

每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：

-1：我选出的数字比你猜的数字小 pick < num
1：我选出的数字比你猜的数字大 pick > num
0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
返回我选出的数字。

 

示例 1：

输入：n = 10, pick = 6
输出：6
示例 2：

输入：n = 1, pick = 1
输出：1
示例 3：

输入：n = 2, pick = 1
输出：1
示例 4：

输入：n = 2, pick = 2
输出：2
 */

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * 时间复杂度: O(log N)
 * 空间复杂度: O(1)
 */
var guessNumber = function(n) {
  let low = 1
  let high = n
  while (low <= high) {
    const mid = Math.floor((low + hign) / 2)
    const res = guess(mid) 
    if (res === 0) {
      return mid
    } else if (res === 1) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
};

/**
 * @param {number} n
 * @return {number}
 *  时间复杂度: O(log N)
 *  空间复杂度: O(log N) 线性增长
 */
var guessNumber1 = function (n) {
  const rec = (low, high) => {
      if (low>high) return
      const mid = Math.floor((low + high) / 2)
      const res = guess(mid)
      if (res === 0) {
          return mid
      } else if (res === 1) {
          return rec(mid+1, high)
      } else {
          return rec(low, mid - 1)
      }
  }
  return rec(1, n)
};