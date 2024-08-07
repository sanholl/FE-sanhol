import { useEffect, useState } from 'react'
import { fetchUsers, User } from '../api'


export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
      .then(({ data }) => setUsers(data))
      .catch(() => setError('Error fetching users'))
  }, [])

  return { users, error }
}