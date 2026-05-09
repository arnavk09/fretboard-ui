import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { redirectToGoogleAuth } from '../../services/api'
import { useAuthStore } from '../../stores/authStore'

export default function ProtectedRoute({ children, title = 'Sign in to continue', body }) {
  const user = useAuthStore((state) => state.user)
  const loading = useAuthStore((state) => state.loading)
  const initialized = useAuthStore((state) => state.initialized)

  if (loading || !initialized) {
    return (
      <Box sx={{ pt: '120px', display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="primary" />
      </Box>
    )
  }

  if (!user) {
    return (
      <Box sx={{ pt: '120px', pb: 10, maxWidth: 560, mx: 'auto', px: 3, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 44 }, mb: 2 }}
        >
          {title}
        </Typography>
        {body && (
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 4 }}>
            {body}
          </Typography>
        )}
        <Button variant="contained" color="primary" size="large" onClick={redirectToGoogleAuth}>
          Continue with Google
        </Button>
      </Box>
    )
  }

  return children
}
