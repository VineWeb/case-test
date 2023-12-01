const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [
            {
              val: 'h',
              children: []
            }
          ]
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
 * 广度优先遍历: 先访问离根节点最近的节点.
 * 算法步骤: 
 * 1. 新建一个队列, 把根节点入队
 * 2. 把对头出队并访问
 * 3. 把对头的children挨个入队
 * 4. 重复第二、三步骤，直到队列为空
 */
const bfs = (root) => {
  const q = [root]
  while (q.length) {
    const n = q.shift()
    console.log(n.val);
    n.children.forEach(child => {
      q.push(child)
    })
  }
}
bfs(tree)