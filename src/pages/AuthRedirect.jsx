import { useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { redirectToGoogleAuth } from '../services/api'

export default function AuthRedirect() {
  useEffect(() => {
    redirectToGoogleAuth()
  }, [])

  return (
    <Box sx={{ pt: '120px', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" />
    </Box>
  )
}
