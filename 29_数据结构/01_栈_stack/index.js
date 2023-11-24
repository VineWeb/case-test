// 栈是一种后进先出的结构
const stack = []
stack.push(1)
stack.push(2)
const pop1 = stack.pop()
const pop2 = stack.pop()
// 场景  执行栈 后进先出
// 有效括号
// leetcode 20.

// 时间复杂度 O(n)
// 空间复杂度 O(n)
const isVaild = function (s) {

  if (s.length % 2 === 1) return false
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    const c = s[index];
    if (c === '(' || c === '[' || c==='{') {
      stack.push(c)
    } else {
      const l = stack[stack.length - 1]
      if (
        (l === '(' && c === ')') || 
        (l === '{' && c === '}') || 
        (l === '[' && c === ']') 
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  
  return stack.length === 0
}

const a = '(((())))'
const a1 = '([])'
const a2 = '({(())})'

const b = '{{{}'
const b1 = '{{}'
const b2 = '{{)}'

console.log(isVaild(a))
console.log(isVaild(a1))
console.log(isVaild(a2))
console.log(isVaild(b))
console.log(isVaild(b1))
console.log(isVaild(b2))