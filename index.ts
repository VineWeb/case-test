
type ThrottleOptions = {
  leading?: boolean,
  trailing?: boolean
}

/**
 * 实现函数节流
 * @param callback 需要节流的函数
 * @param delay 节流的时间间隔
 * @param options 节流的选项
 * @returns 返回一个新的函数，内部调用了需要节流的函数
 */
function throttle<T extends any[]>(
  callback: (...args: T) => void,
  delay: number = 1000,
  options: ThrottleOptions = {}
): (...args: T) => void {
  let timer: number | undefined
  let previous: number = 0

  const { leading = true, trailing = true } = options

  return function (this: any, ...args: T): void {
    const now = +new Date()
    if (!previous && !leading) {
      previous = now
    }

    const remaining = delay - (now - previous)

    if (remaining <= 0 || remaining > delay) {
      if (timer) {
        clearTimeout(timer)
        timer = undefined
      }
      previous = now
      callback.apply(this, args)
    } else if (trailing && !timer) {
      timer = setTimeout(() => {
        previous = +new Date()
        timer = undefined
        callback.apply(this, args)
      }, remaining)
    }
  }
}

// 使用节流技术包装一个函数
const throttledLogger = throttle((message: string) => console.log(message), 1000)

// 调用需要节流的函数
throttledLogger('Hello, Throttle')