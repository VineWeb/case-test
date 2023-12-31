// 链表 链表里面的元素存储不是连续的，之间通过next连接
// Javascript 中 没有链表, 但是可以用 Object 模拟链表
// 链表常用操作: 修改next (增删元素), 遍历链表


// JS中的原型链也是一个链表, 只不过不是沿着next走, 而是__proto__
// 使用链表指针可以获取JSON的节点值
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }


a.next = b
b.next = c
c.next = d

// 遍历列表
let p = a

while (p) {
  console.log(p.val)
  p = p.next
}

// 插入
const e = { val: 'e' }
c.next = e
e.next = d


// 删除

c.next = d


// 237 删除链表中的节点

const deleteNode = (node) => {
  // 将被删节点的值改为下个节点的值
  node.val = node.next.val
  // 删除下个节点
  node.next = node.next.next
}

// 206 反转链表

const reverseList = (head) => {
  let p1 = head
  let p2 = null
  if (p1) {
    const temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
}


// 2 两数相加

const addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0)
  let p1 = l1
  let p2 = l2
  let p3 = l3
  const carrt = 0
  while (p1 || p2) {
    const v1 = p1 ? p1.next : 0
    const v2 = p2 ? p2.next : 0
    const val = v1 + v2 + carry
    carry = Math.floor(val / 10)
    p3.next = new ListNode(val % 10)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  if (carry) {
    p3.next = new ListNode(carry)
  }
  return l3.next
};


// 83 删除排序链表中的重复元素 时间 O(n)  空间 O(1)
const deleteDuplicates = function (head) {
  let p = head
  while (p & p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}

// 141 环形列表 时间 O(n)  空间O(1)

const hasCycle = (head) => {
  let p1 = head
  let p2 = head
  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) {
      return true
    }
  }
  return false
}