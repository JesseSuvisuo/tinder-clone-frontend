import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinder-clone-backend-testing.herokuapp.com/',
})

export default instance
