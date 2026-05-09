import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'

export default function AuthSessionBoundary() {
  const location = useLocation()
  const navigate = useNavigate()
  const initialized = useAuthStore((state) => state.initialized)
  const checkAuth = useAuthStore((state) => state.checkAuth)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const loginSucceeded = params.get('login') === 'success'

    if (!initialized || loginSucceeded) {
      checkAuth()
    }

    if (loginSucceeded) {
      params.delete('login')
      navigate(
        {
          pathname: location.pathname,
          search: params.toString() ? `?${params.toString()}` : '',
        },
        { replace: true },
      )
    }
  }, [checkAuth, initialized, location.pathname, location.search, navigate])

  return null
}
