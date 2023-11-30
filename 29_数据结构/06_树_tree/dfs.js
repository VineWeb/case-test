const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}
/**
 * 深度优先遍历: 尽可能深的搜索树的分支.
 * 算法步骤: 1.访问根节点,  2.对根节点的children挨个进行深度优先遍历
 */
const dfs = (root) => {
  console.log(root.val)
  root.children.forEach(dfs)
}
dfs(tree)