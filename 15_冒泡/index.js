function bubbleSort (arr) {
  const len = arr.length - 1
  for (let i = 0;  i < len; i++ ) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j+1]) {
        console.log(arr[j], arr[j+1], 'change', i, j)
        const temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

const array = [10, 5, 3, 1]

const listData = bubbleSort(array)

console.log(listData, 'listData')


function quickSort (arr) {
  if (arr.length < 2) {
    return arr
  }
  const pivot = arr[0]
  const leftArr = []
  const rightArr = []
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    console.log(num, pivot, '---change')
    if (num>pivot) {
      rightArr.push(num)
    } else {
      leftArr.push(num)
    }
    
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const listArray = quickSort(array)
console.log(listArray, 'quickSort')