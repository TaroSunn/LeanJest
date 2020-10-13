import axios from 'axios'

export const forEach = (item, callBack) => {
  for(let i = 0; i<item.length; i++) {
    callBack(item[i])
  }
}

export const factoryFn = (item) => {
  new item()
}

export const getData = () => {
  return axios.get('/api')
}
