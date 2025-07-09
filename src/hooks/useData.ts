import { useState, useEffect } from 'react'

interface UseDataOptions {
  limit?: number
  offset?: number
  [key: string]: any
}

export function useStatistiques() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/statistiques')
        if (!response.ok) throw new Error('Erreur lors du chargement')
        const result = await response.json()
        setData(result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export function useActualites(options: UseDataOptions = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const params = new URLSearchParams()
        if (options.limit) params.append('limit', options.limit.toString())
        if (options.offset) params.append('offset', options.offset.toString())

        const response = await fetch(`/api/actualites?${params}`)
        if (!response.ok) throw new Error('Erreur lors du chargement')
        const result = await response.json()
        setData(result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [options.limit, options.offset])

  return { data, loading, error }
}

export function useActions(options: UseDataOptions = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const params = new URLSearchParams()
        if (options.limit) params.append('limit', options.limit.toString())
        if (options.offset) params.append('offset', options.offset.toString())
        if (options.statut) params.append('statut', options.statut)

        const response = await fetch(`/api/actions?${params}`)
        if (!response.ok) throw new Error('Erreur lors du chargement')
        const result = await response.json()
        setData(result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [options.limit, options.offset, options.statut])

  return { data, loading, error }
}

export function useEquipe() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/equipe')
        if (!response.ok) throw new Error('Erreur lors du chargement')
        const result = await response.json()
        setData(result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
} 