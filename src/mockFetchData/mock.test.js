jest.mock('./mock.js')

import {getData2} from './mock.js'

const {getNumber} = jest.requireActual('./mock.js')

test('测试异步数据方法', async() => {
  const data = await getData2()
  expect(data.data).toBe('Hellos')
})

test('测试代码', () => {
  expect(getNumber()).toBe(123)
})