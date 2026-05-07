import { AppBar, Toolbar, Button, Box } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/browse', label: 'Browse' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/sell', label: 'Sell' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
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
            🎸
          </Box>
          <Box component="span" sx={{ fontSize: 20, fontWeight: 700, color: 'text.primary', letterSpacing: '-0.5px' }}>
            Fretboard
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

        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button
            component={Link}
            to="/signin"
            sx={{ color: 'text.secondary', fontWeight: 500, fontSize: 14 }}
          >
            Sign In
          </Button>
          <Button
            component={Link}
            to="/sell"
            variant="contained"
            color="primary"
            size="small"
            sx={{ px: 2.5 }}
          >
            Get Started →
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
