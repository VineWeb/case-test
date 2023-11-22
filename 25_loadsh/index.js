const num = _.random(5)
console.log(num)

const list = [1, 3, 4, 5, 5]
const test = (arr, n=5) => {
  const shuffled = _.cloneDeep(arr)
  return shuffled.map(item => item * 2).filter((item, index) => index<=n)
}

const array = (n) => {
  return test([1, 2, 3, 4, 5, 6, 7, 8, 9], n)
}

const abc = array(3)
console.log(abc, 'abc')