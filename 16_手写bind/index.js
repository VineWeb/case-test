function customCall (fn, obj) {
  return function(...args) {
    return fn.apply(obj, ...args)
  }
}