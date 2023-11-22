// 实现一个需求 1s后输出111 然后再等2s输出222 最后再等3s输出333

// setTimeout(() => {
//   console.log(111);
//   setTimeout(() => {
//     console.log(222);
//     setTimeout(() => {
//       console.log(333);
//     }, 3000);
//   }, 2000);
// }, 1000);


function one() {
  setTimeout(() => {
    console.log(111)
    iterator.next()
  }, 1000)
}
function two() {
  setTimeout(() => {
    console.log(222)
    iterator.next()
  }, 2000)
}
function three() {
  setTimeout(() => {
    console.log(333)
    iterator.next()
  }, 3000)
}

function * gen() {
  yield one()
  yield two()
  yield three()
}

const iterator = gen()
iterator.next()