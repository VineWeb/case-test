/***
 * 贪心算法: 
 * 是算法设计中的一种方法
 * 期盼通过每个阶段的局部最优选择, 从而达到全局的最优
 * 结果并不一定是最优
 */

/***
 * 455. 分发饼干
 * 
假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 
局部最优: 既能满足孩子, 还消耗最少
先将 "较小的饼干" 分给 "胃口最小"的孩子 


解题步骤: 
1.对饼干数组和胃口数组升序排序
2.遍历饼干数组, 找到能满足第一个孩子的饼干
时间复杂度: O(N * logN)
空间复杂度: O(1)
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  const sortFun = (a, b) => a - b;
  g.sort(sortFun)
  s.sort(sortFun)
  let i = 0
  s.forEach(n => {
      if (n>= g[i]) {
          i ++
      }
  })
  return i
};


/***
 * 122. 买卖股票的最佳时机 II
 * 
给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
返回 你能获得的 最大 利润 。

解题步骤: 
1. 前提: 上帝视角, 知道未来的价格
2. 局部最优: 见好就收, 见差就不动, 不做任何长远打算

新建一个变量, 用来统计总利润
遍历价格数组, 如果当前价格比昨天高, 就在昨天买, 今天卖, 否则就不交易.
遍历结束后, 返回所有利润之和
时间复杂度: O(n)
空间复杂度: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i-1]
    }
  }
  return profit
};
