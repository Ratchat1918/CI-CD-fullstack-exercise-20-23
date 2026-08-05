import { useState, useEffect } from 'react'
import axios from 'axios'

export const useApi = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8043/api/nasa')
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return { data, loading, error }
}