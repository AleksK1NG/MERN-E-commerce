import axios from 'axios'
import { auth } from '../firebase/firebase.utils'
/*
 * Api Service
 * */

const USER_REGISTER_URL = '/api/v1/auth/register'
const USER_LOGIN_URL = '/api/v1/auth/login'
const LOAD_USER_URL = '/api/v1/auth/me'

// Axios Instance
const axiosInstance = axios.create({
  timeout: 3000
})

// Runs before every request
axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('mern-dev') || ''

    if (token && token !== '') {
      config.headers['x-auth-token'] = token
    }
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

class ApiService {
  registerUser(userData) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(USER_REGISTER_URL, userData, config)
  }

  loginUser(userData) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(USER_LOGIN_URL, userData, config)
  }

  loadUser() {
    return axiosInstance.get(LOAD_USER_URL)
  }
}

export default new ApiService()
