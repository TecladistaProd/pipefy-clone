export default (fn, time) => {
  let timeout = null
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(null, args)
      timeout = null
    }, time)
  }
}
