const bt = require('./bt')
// 先序遍历
// 递归版本
// const preoder = (root) => {
//   if (!root) return
//   console.log(root.val)
//   preoder(root.left)
//   preoder(root.right)
// }

// 栈 
const preoder = (root) => {
  if (!root) return
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}
preoder(bt)

console.log(bt)