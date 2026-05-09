import { create } from 'zustand'
import { fetchCurrentUser, logout as logoutRequest } from '../services/api'

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  initialized: false,
  signingOut: false,

  checkAuth: async () => {
    set({ loading: true, error: null })

    try {
      const user = await fetchCurrentUser()
      set({ user, loading: false, initialized: true })
      return user
    } catch (error) {
      set({ user: null, loading: false, initialized: true, error: error.message })
      return null
    }
  },

  logout: async () => {
    set({ signingOut: true, error: null })

    try {
      await logoutRequest()
      set({ user: null, signingOut: false, initialized: true, loading: false })
    } catch (error) {
      set({ signingOut: false, error: error.message })
      throw error
    }
  },

}))
