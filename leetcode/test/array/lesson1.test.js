import { letterCombinations1 } from '../../code/array/lesson1'

test('letterCombinations1:23', () => {
  expect(letterCombinations1('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
test('letterCombinations1:234', () => {
  expect(letterCombinations1('234')).toEqual([
    'adg', 'adh', 'adi',
    'aeg', 'aeh', 'aei',
    'afg', 'afh', 'afi',
    'bdg', 'bdh', 'bdi',
    'beg', 'beh', 'bei',
    'bfg', 'bfh', 'bfi',
    'cdg', 'cdh', 'cdi',
    'ceg', 'ceh', 'cei',
    'cfg', 'cfh', 'cfi'
  ])
})
