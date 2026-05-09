import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { redirectToGoogleAuth } from '../../services/api'
import { useAuthStore } from '../../stores/authStore'

const NAV_LINKS = [
  { to: '/browse', label: 'Browse' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/sell', label: 'Sell' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const user = useAuthStore((state) => state.user)
  const loading = useAuthStore((state) => state.loading)
  const signingOut = useAuthStore((state) => state.signingOut)
  const logout = useAuthStore((state) => state.logout)

  const displayName = user
    ? [user.firstName, user.lastName].filter(Boolean).join(' ') || user.email
    : ''

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ px: { xs: 2, md: 6 }, minHeight: '68px !important' }}>
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', mr: 5 }}
        >
          <Box sx={{
            width: 32, height: 32,
            background: 'linear-gradient(135deg, #F59E0B, #B45309)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, flexShrink: 0,
          }}>
            🛡️
          </Box>
          <Box component="span" sx={{ fontSize: 20, fontWeight: 700, color: 'text.primary', letterSpacing: '-0.5px' }}>
            SafeCart
          </Box>
        </Box>

        <Box component="ul" sx={{ display: 'flex', gap: 0.5, listStyle: 'none', p: 0, m: 0, flex: 1 }}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Button
                component={NavLink}
                to={to}
                sx={{ color: 'text.secondary', fontWeight: 500, fontSize: 14, '&:hover': { color: 'text.primary', bgcolor: '#18181B' } }}
              >
                {label}
              </Button>
            </li>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {user ? (
            <>
              <Box
                component={Link}
                to="/account"
                sx={{
                  display: { xs: 'none', md: 'block' },
                  textAlign: 'right',
                  maxWidth: 220,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Typography sx={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2 }} noWrap>
                  {displayName}
                </Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary', lineHeight: 1.2 }} noWrap>
                  {user.email}
                </Typography>
              </Box>
              <Button
                component={Link}
                to="/account"
                sx={{ color: 'text.secondary', fontWeight: 500, fontSize: 14 }}
              >
                Account
              </Button>
              <Button
                onClick={logout}
                disabled={signingOut}
                sx={{ color: 'text.secondary', fontWeight: 500, fontSize: 14 }}
              >
                {signingOut ? 'Signing out...' : 'Sign Out'}
              </Button>
              <Button
                component={Link}
                to="/sell"
                variant="contained"
                color="primary"
                size="small"
                sx={{ px: 2.5 }}
              >
                Sell
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={redirectToGoogleAuth}
                disabled={loading}
                variant="contained"
                color="primary"
                size="small"
                sx={{ px: 2.5 }}
              >
                Continue with Google
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
