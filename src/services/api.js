import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
})

function getErrorMessage(error, fallback) {
  return error.response?.data?.message || error.message || fallback
}

export async function fetchListings(category = '') {
  try {
    const { data } = await api.get('/api/listings', {
      params: category ? { category } : undefined,
    })

    return data
  } catch (error) {
    throw new Error(getErrorMessage(error, 'Failed to fetch listings'), { cause: error })
  }
}

export async function fetchListingById(id) {
  try {
    const { data } = await api.get(`/api/listings/${id}`)
    return data
  } catch (error) {
    throw new Error(getErrorMessage(error, 'Listing not found'), { cause: error })
  }
}

export async function createListing(data) {
  try {
    const response = await api.post('/api/listings/create-listing', data)
    return response.data
  } catch (error) {
    throw new Error(getErrorMessage(error, 'Failed to create listing'), { cause: error })
  }
}
