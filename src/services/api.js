import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

function getErrorMessage(error, fallback) {
  return error.response?.data?.message || error.message || fallback
}

export const GOOGLE_AUTH_URL = `${API_URL}/oauth2/authorization/google`

export function redirectToGoogleAuth() {
  window.location.assign(GOOGLE_AUTH_URL)
}

export async function fetchCurrentUser() {
  try {
    const { data } = await api.get('/api/auth/me')
    return data
  } catch (error) {
    if (error.response?.status === 401) {
      return null
    }

    throw new Error(getErrorMessage(error, 'Failed to check authentication'), { cause: error })
  }
}

export async function logout() {
  try {
    await api.post('/api/auth/logout')
  } catch (error) {
    throw new Error(getErrorMessage(error, 'Failed to sign out'), { cause: error })
  }
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

export async function deleteListing(id) {
  try {
    await api.delete(`/api/listings/${id}`)
  } catch (error) {
    throw new Error(getErrorMessage(error, 'Failed to delete listing'), { cause: error })
  }
}
