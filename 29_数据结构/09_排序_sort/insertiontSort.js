/**
 * 插入排序 
 * 1. 从第二个数开始往前比
 * 2. 比它大的就往后排
 * 3. 以此类推, 进行到最后一个数
 * 两个嵌套循环
 * 时间复杂度: O(n^2)
 */

Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i]
    let j = i
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        break;
      }
      j-=1
    }
    this[j] = temp
  }
}

const arr = [5, 4, 3, 2, 1]
arr.insertionSort()
console.log(arr, '54')