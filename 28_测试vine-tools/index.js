// import vineTools from 'vine-tools';
const vineTools = require('vine-tools')
const result = vineTools.addCommas(100001)
console.log(result)


const result1 = vineTools.addCommas(200001.23)
console.log(result1)

const result2 = vineTools.decimalToPercentage(0.89)
const result3 = vineTools.decimalToPercentage(0.23123)
console.log(result2)
console.log(result3)


const result4 = vineTools.random()
const result5 = vineTools.random(10)

console.log(result4)
console.log(result5)