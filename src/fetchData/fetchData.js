import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('http://127.0.0.1:5500/fetchData.json').then((res) => {
    fn(res.data)
  })
}
export const promiseData = () => {
  return axios.get('http://127.0.0.1:5500/fetchData.json')
}
