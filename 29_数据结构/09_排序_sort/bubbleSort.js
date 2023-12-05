/**
 * 冒泡排序
 * 1. 比较所有相邻元素, 如果第一个比第二个大, 则交换它们顺序
 * 2. 一轮下来, 可以保障最后一个数是最大的
 * 3. 执行 n - 1 轮, 就可以完成排序
 * 两个嵌套循环
 * 时间复杂度: O(n^2)
 */

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      const temp = this[j]
      this[j] = this[j + 1]
      this[j+1] = temp
    }
    
  }
}

const arr = [5, 4, 3, 2, 1]

arr.bubbleSort()

console.log(arr, 'arr')