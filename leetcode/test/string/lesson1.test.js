import { countBinarySubstrings1, countBinarySubstrings2, countBinarySubstrings3 } from '../../code/string/lesson1'

test('countBinarySubstrings1(00110011)', () => {
  expect(countBinarySubstrings1('00110011')).toEqual(6)
})

test('countBinarySubstrings2(1011001101101)', () => {
  expect(countBinarySubstrings2('1011001101101')).toEqual(10)
})

test('countBinarySubstrings3(00110011)', () => {
  expect(countBinarySubstrings3('00110011')).toEqual(6)
})
