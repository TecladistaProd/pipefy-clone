export default (fn, wait) => {
  let time = null
  return (...args) => {
    if(!time || Date.now() > time) {
      time = Date.now() + wait
      fn.apply(null, args)
    }
  }
}
