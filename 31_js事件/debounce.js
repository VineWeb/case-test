function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const loanAmount = 100000; // 贷款本金
const monthlyPayment = 2000; // 每月还款额
const loanTermMonths = 60; // 还款期数

// 计算月利率
const monthlyInterestRate = Math.pow((monthlyPayment * loanTermMonths) / loanAmount, 1 / loanTermMonths) - 1;

// 计算年利率
const annualInterestRate = monthlyInterestRate * 12 * 100;

console.log('月利率:', (monthlyInterestRate * 100).toFixed(2) + '%');
console.log('年利率:', annualInterestRate.toFixed(2) + '%');


function sum(x, y) {
  console.log(JSON.stringify(arguments), ': arguments')
  return x + y
}
const total = sum(1, 2)
console.log(total)

