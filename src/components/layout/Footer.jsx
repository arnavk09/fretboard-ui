import { Box, Typography, Link as MuiLink, Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const FOOTER_COLS = [
  { title: 'Marketplace', links: ['Browse All', 'Guitars', 'Studio Gear', 'DJ & Production'] },
  { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press'] },
  { title: 'Support', links: ['Help Center', 'Safety Tips', 'Contact Us', 'Community'] },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 8, pb: 5, px: { xs: 3, md: 6 } }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' },
          gap: 6, mb: 6,
        }}>
          <Box>
            <Box
              component={Link}
              to="/"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, textDecoration: 'none', mb: 1.75 }}
            >
              <Box sx={{
                width: 32, height: 32,
                background: 'linear-gradient(135deg, #F59E0B, #B45309)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16,
              }}>🎸</Box>
              <Box component="span" sx={{ fontSize: 20, fontWeight: 700, color: 'text.primary', letterSpacing: '-0.5px' }}>
                Fretboard
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, lineHeight: 1.7 }}>
              India's trusted escrow marketplace for musical instruments and gear. Secure payments, verified sellers.
            </Typography>
          </Box>

          {FOOTER_COLS.map((col) => (
            <Box key={col.title}>
              <Typography
                variant="overline"
                sx={{ fontSize: 12, color: 'text.primary', display: 'block', mb: 2 }}
              >
                {col.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <MuiLink
                      href="#"
                      underline="none"
                      sx={{ fontSize: 14, color: 'text.secondary', '&:hover': { color: 'text.primary' }, transition: 'color 0.2s' }}
                    >
                      {l}
                    </MuiLink>
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderColor: '#1F1F22', mb: 3 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.disabled">
            © 2026 Fretboard. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <MuiLink
                key={l}
                href="#"
                underline="none"
                sx={{ fontSize: 13, color: 'text.disabled', '&:hover': { color: 'text.secondary' }, transition: 'color 0.2s' }}
              >
                {l}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
