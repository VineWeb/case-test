/***
 * 分而治之
 * 1.分而治之是 **算法设计** 中的一种方法
 * 2.它将一个问题分成多个和原问题相似的小问题, 递归解决小问题, 再将结果合并以解决原来的问题
 * 
 * 分
 * 递归解决
 * 合
 * 
 * 应用场景: 
 * 1.归并排序
 * 2.快速排序
 * 3.二分搜索
 * 4.翻转二叉树
 * ...
 */

// 场景1: 归并排序
/**
 * 1. 分: 把数组从中间一分为二
 * 2. 解: 递归地对两个子数组进行归并排序
 * 3. 合: 合并有序子数组
 * 
 */

// 场景二: 快速排序

/***
 * 1.分: 选基准, 按基准把数组分成两个子数组
 * 2.解: 递归地对两个子数组进行快速排序
 * 3.合: 对两个子数组进行合并
 * 
 */

/** 

 * 226. 翻转二叉树
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 1.先反转左右子树, 再将子树换个位置
 * 2.符合 "分, 解, 合"  特性
 * 分: 获取左右子树
 * 解: 递归地反转左右子树
 * 合: 将翻转的左右子树换个位置放到根节点上
 *   
  时间复杂度: O(n)
  空间复杂度: O(n)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  }
};


/***
 * 100. 相同的树
 * 
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
*两个树: 根节点的值相同, 左子树相同, 右子树相同
* 
  时间复杂度: O(n)
  空间复杂度: O(n)
*
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true
  if (
    p && q && p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  ) {
    return true
  } else {
    return false
  }
};


/**
 * 101. 对称二叉树
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 转化为: 左右子树是否镜像
 * 分解为: 树1的左子树和树2的右子树是否镜像, 树1的右子树和树2的左子树是否镜像
 * 
 * 
 * 分: 获取两个树的左子树和右子树
 * 解: 递归地判断树1的左子树和右子树是否镜像, 树1的右子树和树2的左子树是否镜像
 * 合: 如果上述都成立, 且根节点值也相同, 两个树就镜像
 * 时间复杂度: O(n)
 * 空间复杂度: O(logN) - O(N)
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  const isMirror = (l, r) => {
    if (!l && !r) return true
    if (
      l && r && l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true
    } else {
      return false;
    }
  }
  return isMirror(root.left, root.right)
};

