const sum = require('./sum')

test('测试 1 + 1 = 2', () => {
  expect(sum(1, 2)).toBe(3)
})

test('测试两个对象值是否相等', () => {
  const data = {one: 1}
  data['two'] = '2'
  expect(data).not.toEqual({one: 1, two: 2})
})

test('测试null undefined defined truthy falsy', () => {
  const data = null
  let n
  let a = 1
  expect(data).toBeNull()
  expect(n).toBeUndefined()
  expect(a).toBeDefined()
  expect(n).toBeFalsy()
  expect(a).toBeTruthy()
})

test('测试数字', () => {
  const n = 1
  expect(n).toBeGreaterThan(0)
  expect(n).toBeGreaterThanOrEqual(1)
  expect(n).toBeLessThan(10)
  expect(n).toBeLessThanOrEqual(1)
})

test('测试浮点数', () => {
  const a = 0.1 + 0.2
  expect(a).toBeCloseTo(.3)
})

test('匹配字符串', () => {
  expect('I').toMatch(/I/)
  expect('test').toMatch(/es/)
})

test('检查可迭代对象是否包含某个特定项', () => {
  const arr = [1, 2, 3, 4]
  expect(arr).toContain(2)
  expect(new Set(arr)).toContain(3)
})

test('测试 new Error', () => {
  const error = () => {
    throw new Error('Error')
  }
  expect(error).toThrow(Error)
  expect(error).toThrow(/r/)
})
