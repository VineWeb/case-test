const multiply = function(x, y) {
  return x * y;
};

const double = (a = null, b = 2, c = 4) => {
  return multiply.apply(null, [b, c])
};
console.log(double(5, 6)); // 输出: 10


function add(x, y) {
  return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op){
  return op;
}
const b = a(add)(1, 1)
console.log(operator)
console.log(b)