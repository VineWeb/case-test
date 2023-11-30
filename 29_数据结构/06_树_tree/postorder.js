const bt = require('./bt')
/**
后序遍历
 */
// 使用递归
const postorder = (root) => {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}

// 栈
const postorder1 = (root) => {
  if (!root) return
  const stack = [root]
  const outputStack = []
  while (stack.length) {
    const n = stack.pop()
    outputStack.push(n.val)
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n)
  }
}
postorder(bt)
console.log(bt)