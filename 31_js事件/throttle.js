function throttle (fn, delay=2000) {
  let timer = null
  return function () {
      if (timer) {
        return
    }
    console.log('后', new Date().getSeconds())
    fn.apply(this, arguments)
    timer = setTimeout(() => {
        console.log('走完进', new Date().getSeconds())
        timer = null
    }, delay)
  }
}

const setIntervalFn = (callback, interval) => {
  console.log('前')
  let timerId = null
  function execute() {
    callback()
    timerId = setTimeout(execute, interval)
  }
  timerId = setTimeout(execute, interval)
  return function clearInterval() {
    clearTimeout(timerId);
  };
}
const input10 = () => {
  console.log(10, '10', new Date().getSeconds())
}
setIntervalFn(throttle(input10), 10)

