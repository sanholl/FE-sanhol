import { User } from './types'
import axios from 'axios'

export const routes = {
  users: '/users',
}

export const fetchUsers = () => {
  return axios.get<User[]>(routes.users);
}