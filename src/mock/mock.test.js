import axios from 'axios'
jest.mock('axios')

import { forEach, factoryFn, getData, getData2 } from './mock'
test('测试forEach', () => {
  const mockCallBack = jest.fn(x => x + 100)
  forEach([1, 2], mockCallBack)
  console.log(mockCallBack)
  expect(mockCallBack.mock.calls[0][0]).toBe(1)
  expect(mockCallBack.mock.calls[1][0]).toBe(2)
  expect(mockCallBack.mock.results[0].value).toBe(101)
})

test('测试工厂函数', () => {
  const fn = jest.fn()
  factoryFn(fn)
  console.log(fn.mock)
})

test('测试异步数据', async() => {
  axios.get.mockResolvedValue({data: 'Hello'})
  const data = await getData()
  expect(data.data).toBe('Hello')
})
