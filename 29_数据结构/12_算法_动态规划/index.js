/**
 * 动态规划时候 ** 算法设计中 **的一种方法
 * 
 * 它将一个问题分解为 *相互重叠* 的子问题, 通过反复求解子问题, 来解决原来的问题
 * 步骤
 * 一: 定义子问题
 * 二: 反复执行
 * 
 * 斐波那契数列
 * 0 1 1 2 3 5 8 13 21 34
 * 定义子问题: F(n) = F(n-1) + F(n-2)
 * 反复执行: 从2循环到n, 执行上述公式
 * 
 * 动态规划 VS 分而治之
 * 
 * 子问题是否独立  !   翻转左右子树
 *  重叠   VS  独立
 */

/***
 * 70. 爬楼梯
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

  1. 爬到第n阶可以在第n-1爬1个台阶, 或者在第n-2阶爬2个台阶
  2. F(n) = F(n - 1) + F(n - 2)
  3. 使用动态规划

  时间复杂度: O(n)
  空间复杂度: O(n)
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 2) return 1;
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};

/**
 * @param {number} n
 * @return {number}
 *   
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */
var climbStairs = function(n) {
  if (n < 2) return 1;
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};


/****
 * 198. 打家劫舍
 * 
 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
  给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

  示例 1：
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

  示例 2：
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

  思路: 
  f(k) = 从前k个房屋中能偷窃到的最大数额
  Ak = 第k个房屋的钱数
  f(k) = max(f(k-2) + Ak, f(k-1))

 */

  /**
 * @param {number[]} nums
 * @return {number}
 *  时间复杂度: O(n)
    空间复杂度: O(n)
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  const dp = [0, nums[0]]
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i-2] + nums[i-1], dp[i-1])
  }
  return dp[nums.length]
};

  /**
 * @param {number[]} nums
 * @return {number}
 *  时间复杂度: O(n)
    空间复杂度: O(1)
 */
var rob1 = function(nums) {
  if (nums.length === 0) return 0
let dp0 = 0
let dp1 = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    const dp2 = Map.max(dp0 + nums[i - 1], dp1)
    dp0 = dp1
    dp1 = dp2
  }
  return dp1
};