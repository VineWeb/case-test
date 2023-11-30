const bt = require('./bt')
/**
 * 树: 一种分层数据的抽象模型
 * 前端工作中常见的树包括: DOM树, 级联组件, 树形控件
 * 
 * JS中没有树, 但是可以用Object 和 Array 构建树
 * 
 * 树的常用操作: 深度/广度优先遍历,  先中后序遍历
 */


/**
 * 深度优先遍历: 尽可能深的搜索树的分支.
 * 算法步骤: 1.访问根节点,  2.对根节点的children挨个进行深度优先遍历
 * 
 * 
 * 广度优先遍历: 先访问离根节点最近的节点.
 * 算法步骤: 
 * 1. 新建一个队列, 把根节点入队
 * 2. 把对头出队并访问
 * 3. 把对头的children挨个入队
 * 4. 重复第二、三步骤，直到队列为空
 * 
 */

/**
 * 二叉树: 
 * 树中的每个节点最多只能有两个子节点
 * 在JS中通常用Object来模拟二叉树
 * 先序遍历: 
 * 1.访问根节点
 * 2.对根节点的左子树进行先序遍历
 * 3.对根节点的右子树进行先序遍历
 * 
 * 
 *中序遍历
 * 1. 对根节点的左子树进行中序遍历
 * 2.访问根节点
 * 3.对跟节点的右子树进行中序遍历
 * 
 * 后序遍历
 * 1.对根节点的左子树进行后序遍历
 * 2.对跟节点的右子树进行后序遍历
 * 3. 访问根节点
 */


// 104. 二叉树的最大深度

/**
给定一个二叉树 root ，返回其最大深度。
二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 * 解题步骤: 
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0
  const dfs = (n, l) => {
    if (!n) return
    if (!n.left && !n.right) {
      res = Math.max(res, l)
    }
    console.log(n.val)
    dfs(n.left, l + 1)
    dfs(n.right, l + 1)
  }
  dfs(root, 1)
  return res
};

// const depth = maxDepth(bt)


/**
 * 

111. 二叉树的最小深度
 * 
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。
时间复杂度: O(n)
空间复杂度: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  const q = [[root, 1]]
  while (q.length) {
    const [n, l] = q.shift()
    if (!n.left && !n.right) {
      return l
    }
    if (n.left) q.push([n.left, l + 1])
    if (n.right) q.push([n.right, l + 1])
  }
};
// const depth = minDepth(bt)

/**
 *102. 二叉树的层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 */

/**
* @param {TreeNode} root
* @return {number[][]}
*/
var levelOrder = function (root) {
  if (!root) return []
  const q = [[root, 0]]
  let res = []
  while (q.length) {
    const [n, level] = q.shift()
    if (!res[level]) {
      res.push([n.val])
    } else {
      res[level].push(n.val)
    }
    console.log(n.val, level)
    if (n.left) q.push([n.left, level + 1])
    if (n.right) q.push([n.right, level + 1])
  }
  return res
};
const level = levelOrder(bt)
console.log(bt, '12')