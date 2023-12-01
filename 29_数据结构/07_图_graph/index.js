/**
图是网络结构的抽象模型, 是一组由边连接的节点
图可以表示任何二元关系, 比如道路, 航班等...
1. JS中没有图, 但是可以用Object和Array构件图
2. 图的表示法: 
邻接矩阵,  邻接表,  关联矩阵...

深度优先遍历: 1.访问根节点,  2.对根节点的没访问过的相邻节点挨个进行深度优先遍历,  
广度优先遍历: 1. 新建一个队列, 把根节点入队  2. 把对头出队并访问  3.把对头的没访问过的相邻节点入队 4.重复第二, 第三步骤, 直到队列为空
* /


// 邻接矩阵
/** 时间: O(N)
 *  空间: O(1)
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const graph = {
    0: { 'blank': 0, 'sign': 1, '.': 2, 'digit': 6 },
    1: { 'digit': 6, '.': 2 },
    2: { 'digit': 3 },
    3: { 'digit': 3, 'e': 4 },
    4: { 'digit': 5, 'sign': 7 },
    5: { 'digit': 5 },
    6: { 'digit': 6, '.': 3, 'e': 4 },
    7: { 'digit': 5 }
  }
  let state = 0
  for (const c of s.trim()) {
    if (c >= '0' && c <= '9') {
      c = 'digit'
    } else if (c === ' ') {
      c = 'blank'
    } else if (c === '+' || c === '-') {
      c = 'sign'
    }
    state = graph[state][c]
    if (state === undefined) {
      return false
    }
  }
  if (state == 3 || state == 5 || state == 6) return true
  return false
};


// 邻接表

/***
 417. 太平洋大西洋水流问题
 
有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。
 */
// 时间复杂度: O(m * n)
// 空间复杂度: O(m * n)
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  if (!heights || !heights[0]) {
      return []
  }
  const m = heights.length
  const n = heights[0].length
  const flow1 = Array.from({length: m}, () => new Array(n).fill(false))
  const flow2 = Array.from({length: m}, () => new Array(n).fill(false))
  console.log(flow1);
  console.log(flow2);
  const dfs = (r, c, flow) => {
      flow[r][c] = true;
      [[r-1, c], [r+1, c], [r, c-1], [r, c+1]].forEach(([nr, nc] )=> {
          if (
              // 保证在矩阵内
              nr >= 0 && nr < m &&
              nc >= 0 && nc < n && 
              // 防止死循环
              !flow[nr][nc] && 
              // 保证逆流而上
              heights[nr][nc] >= heights[r][c]
          ) {
              dfs(nr, nc, flow)
          }
      })
  }
  // 沿着海岸线逆流而上
  for (let r = 0; r<m; r+=1 ) {
      dfs(r, 0, flow1)
      dfs(r, n - 1, flow2)
  }

  for (let c = 0; c<n; c+=1) {
      dfs(0, c, flow1)
      dfs(m-1, c, flow2)
  }

  // 收集能流到两个大洋的坐标
  const res = []
  for (let r = 0; r<m; r+=1) {
      for (let c = 0; c< n; c+=1) {
          if (flow1[r][c] && flow2[r][c]) {
              res.push([r][c])
          }
      }
  }
  return res
};


/**
 133. 克隆图
 * 
给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
// 时间复杂度: O(n)
// 空间复杂度: O(n)
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return;
  const visited = new Map()
  const dfs = n => {
      console.log(n)
      const cNode = new Node(n.val);
      visited.set(n, cNode);
      (n.neighbors || []).forEach(ne => {
          if (!visited.has(ne)) {
              dfs(ne)
          }
          cNode.neighbors.push(visited.get(ne))
      })
  }
  dfs(node)
  return visited.get(node)
};