import axios from "axios"
import { getItem } from "../helpers/persistance-storage"

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
// axios.defaults.baseURL = 'http://10.0.1.75:8000/api/v1'
axios.defaults.baseURL = 'http://10.0.1.36:8002/api/v1'

axios.interceptors.request.use(config=>{
  const token = getItem('token')

  const authorization = token ? `Bearer ${token}` : ''
  config.headers.Authorization = authorization
  return config
})

export default axios