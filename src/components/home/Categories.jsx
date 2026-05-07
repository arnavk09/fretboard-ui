import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { alpha } from '@mui/material/styles'

const amber = '#F59E0B'

const CATEGORIES = [
  { icon: '🎹', name: 'Keyboards & Synths', count: '1,240 listings' },
  { icon: '🥁', name: 'Drums & Percussion', count: '820 listings' },
  { icon: '🔊', name: 'Amps & Effects', count: '950 listings' },
  { icon: '🎙️', name: 'Studio & Recording', count: '630 listings' },
  { icon: '🎛️', name: 'DJ & Production', count: '480 listings' },
  { icon: '🎷', name: 'Wind & Brass', count: '540 listings' },
  { icon: '🎻', name: 'Strings & Folk', count: '680 listings' },
  { icon: '📦', name: 'Vintage & Collectibles', count: '390 listings' },
]

export default function Categories() {
  return (
    <Box component="section" sx={{ px: { xs: 3, md: 6 }, py: 12 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: 6 }}>
          <Box>
            <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
              🎵 Shop by Category
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 48 } }}
            >
              Every instrument,<br />every budget.
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/browse"
            variant="outlined"
            sx={{
              borderColor: alpha(amber, 0.25), color: amber,
              '&:hover': { borderColor: amber, bgcolor: alpha(amber, 0.08) },
            }}
          >
            View all →
          </Button>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 2,
        }}>
          {/* Featured card */}
          <Box
            component={Link}
            to="/browse?category=GUITAR"
            sx={{
              gridColumn: { md: 'span 2' },
              border: `1px solid ${alpha(amber, 0.2)}`,
              borderRadius: 5, p: 5,
              display: 'flex', alignItems: 'center', gap: 3,
              textDecoration: 'none',
              position: 'relative', overflow: 'hidden',
              background: `linear-gradient(135deg, #111113 0%, ${alpha(amber, 0.05)} 100%)`,
              transition: 'all 0.2s',
              '&:hover': {
                borderColor: alpha(amber, 0.5),
                transform: 'translateY(-3px)',
                boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${alpha(amber, 0.1)}`,
              },
            }}
          >
            <Typography sx={{ fontSize: 52, lineHeight: 1, flexShrink: 0 }}>🎸</Typography>
            <Box>
              <Typography sx={{ fontSize: 24, fontWeight: 800, mb: 1, letterSpacing: '-0.5px' }}>
                Guitars &amp; Bass
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                From entry-level acoustics to pro-grade electrics — India's biggest second-hand guitar selection.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {['Acoustic', 'Electric', 'Classical', 'Bass'].map((p) => (
                  <Box key={p} sx={{
                    bgcolor: '#18181B', border: '1px solid', borderColor: 'divider',
                    borderRadius: 9999, px: 1.5, py: 0.5,
                    fontSize: 12, color: 'text.secondary', fontWeight: 500,
                  }}>
                    {p}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Regular category cards */}
          {CATEGORIES.map((cat) => (
            <Box
              key={cat.name}
              component={Link}
              to={`/browse`}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid', borderColor: 'divider',
                borderRadius: 5, p: 3.5,
                textDecoration: 'none',
                position: 'relative', overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&::before': {
                  content: '""', position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${alpha(amber, 0.12)} 0%, transparent 60%)`,
                  opacity: 0, transition: 'opacity 0.3s',
                },
                '&:hover': {
                  borderColor: alpha(amber, 0.35),
                  transform: 'translateY(-3px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                },
                '&:hover::before': { opacity: 1 },
              }}
            >
              <Typography sx={{ fontSize: 36, mb: 2, display: 'block', position: 'relative' }}>{cat.icon}</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 0.75, position: 'relative', color: 'text.primary' }}>{cat.name}</Typography>
              <Typography sx={{ fontSize: 13, color: 'text.secondary', position: 'relative' }}>{cat.count}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
