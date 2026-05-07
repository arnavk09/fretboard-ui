import { Box, Typography, Button } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const amber = '#F59E0B'

export default function CTA() {
  return (
    <Box sx={{ px: { xs: 3, md: 6 }, pb: 12 }}>
      <Box sx={{
        maxWidth: 1100, mx: 'auto',
        background: `linear-gradient(135deg, #111113 0%, ${alpha(amber, 0.06)} 100%)`,
        border: `1px solid ${alpha(amber, 0.2)}`,
        borderRadius: 5, p: { xs: 6, md: 10 },
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        '&::before': {
          content: '""', position: 'absolute',
          top: '-60%', left: '50%', transform: 'translateX(-50%)',
          width: 400, height: 400,
          background: `radial-gradient(circle, ${alpha(amber, 0.08)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        },
      }}>
        <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2, position: 'relative' }}>
          🛡️ Ready?
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: { xs: 32, md: 48 },
            maxWidth: 560, mx: 'auto', mb: 2, position: 'relative',
          }}
        >
          Your next great deal<br />is already listed.
        </Typography>
        <Typography sx={{
          color: 'text.secondary', maxWidth: 440, mx: 'auto', mb: 5,
          lineHeight: 1.7, position: 'relative',
        }}>
          Join thousands of people buying and selling legal goods across India. Free to list, safe to buy.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.75, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <Button
            component={Link}
            to="/browse"
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontSize: 16, px: 4, py: 1.75 }}
          >
            Browse Listings →
          </Button>
          <Button
            component={Link}
            to="/sell"
            variant="outlined"
            size="large"
            sx={{
              fontSize: 16, px: 4, py: 1.75,
              borderColor: 'divider', color: 'text.primary',
              '&:hover': { borderColor: 'text.secondary', bgcolor: '#18181B' },
            }}
          >
            List for free
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
