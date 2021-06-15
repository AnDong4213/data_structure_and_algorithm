var letterCombinations1 = function (digits) {
  if (!digits) {
    return []
  }
  var letter = []

  var num = digits.length

  var obj = {}

  var number = '23456789'

  var arr = []
  for (var i = 97; i < 123; i++) {
    letter.push(String.fromCharCode(i))
  }
  for (var i = 0; i < number.length; i++) {
    if (number[i] === '7' || number[i] === '9') {
      obj[number[i]] = letter.splice(0, 4)
    } else {
      obj[number[i]] = letter.splice(0, 3)
    }
  }
  if (num === 1) {
    return obj[digits]
  }
  if (num > 1 <= 4) {
    for (var i = 0; i < num; i++) {
      arr.push(obj[digits[i]])
    }
  }

  var comb = (ar) => {
    var result = []

    for (var m = 0; m < ar[0].length; m++) {
      for (var n = 0; n < ar[1].length; n++) {
        result.push(`${ar[0][m]}${ar[1][n]}`)
      }
    }

    ar.splice(0, 2, result)
    if (ar.length > 1) {
      comb(ar)
    } else {
      return result
    }
    return ar[0]
  }
  return comb(arr)
}

export { letterCombinations1 }
