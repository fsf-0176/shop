import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_SERVER_API_PATH + process.env.VUE_APP_API_PATH

axios.interceptors.request.use(configs => {
  try {
    const authorization = localStorage.getItem('auth')
    if (authorization) {
      configs.headers.common.authorization = authorization
    }
  } catch (error) {

  }
  return configs
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
  }
)

export const category = () => {
  return axios({
    url: '/index/category'
  })
}

export const goods = (data) => {
  const cid = data.join()
  return axios({
    url: '/index/goods',
    params: { cid }
  })
}
