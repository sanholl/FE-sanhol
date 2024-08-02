import { useState } from 'react'


export const useAdmin = () => {

  const [error, setError] = useState('')


  return { error }
}