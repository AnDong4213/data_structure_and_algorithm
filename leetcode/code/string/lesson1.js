// 计数二进制子串

var countBinarySubstrings1 = function (s) {
  let r = []

  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    let sub = match(s.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r.length
}

var countBinarySubstrings2 = (str) => {
  var count = 0
  var matchArr = str.match(/(1+|0+)/g)
  for (var i = 0; i < matchArr.length - 1; i++) {
    count += Math.min(matchArr[i].length, matchArr[i + 1].length)
  }
  return count
}

var countBinarySubstrings3 = (str) => {
  var count = 0
  var matchArr = str.replace(/10/g, '1 0').replace(/01/g, '0 1').split(/\s/)
  for (var i = 0; i < matchArr.length - 1; i++) {
    count += Math.min(matchArr[i].length, matchArr[i + 1].length)
  }
  return count
}

var countBinarySubstrings4 = function (s) {
  let pre = 0
  let cur = 1
  let result = 0

  for (var i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cur++
    } else {
      pre = cur
      cur = 1
    }
    if (pre >= cur) {
      result++
    }
  }
  return result
}

export { countBinarySubstrings1, countBinarySubstrings2, countBinarySubstrings3, countBinarySubstrings4 }
