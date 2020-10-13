import {fetchData, promiseData} from './fetchData'
test('测试异步数据,done', (done) => {
  fetchData((data) => {
    try {
      expect(data).toEqual({
        success: true
      })
      done()
    } catch (error) {
      done(error)
    }
  })
})

test('测试promise数据', () => {
  return promiseData().then(res => {
    expect(res.data).toEqual({
      success: true
    })
  })
})
test('测试async await', async() => {
  const res = await promiseData()
  expect(res.data).toEqual({
    success: true
  })
})
