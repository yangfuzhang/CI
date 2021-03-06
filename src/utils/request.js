import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '/api/',
  timeout: 5000 // request timeout
})

export default service
