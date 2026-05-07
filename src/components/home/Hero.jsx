import { Box, Typography, Button } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const amber = '#F59E0B'

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '120px',
        pb: '80px',
        px: { xs: 3, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Grid bg */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(#1F1F22 1px, transparent 1px), linear-gradient(90deg, #1F1F22 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* Amber glow */}
      <Box sx={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: 700, height: 500,
        background: `radial-gradient(ellipse at center, ${alpha(amber, 0.08)} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <Box sx={{
        display: 'inline-flex', alignItems: 'center', gap: 1,
        bgcolor: alpha(amber, 0.12),
        border: `1px solid ${alpha(amber, 0.25)}`,
        borderRadius: 9999, px: 2, py: 0.75,
        fontSize: 13, fontWeight: 500, color: amber,
        mb: 3.5, position: 'relative',
      }}>
        <Box sx={{
          width: 6, height: 6, bgcolor: amber, borderRadius: '50%',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1, transform: 'scale(1)' },
            '50%': { opacity: 0.5, transform: 'scale(0.8)' },
          },
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        India's trusted escrow marketplace
      </Box>

      {/* Headline */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: { xs: '44px', sm: '60px', md: '76px', lg: '88px' },
          maxWidth: 900, mb: 3, position: 'relative',
        }}
      >
        Buy and sell with{' '}
        <Box component="span" sx={{
          background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          escrow protection.
        </Box>
      </Typography>

      <Typography sx={{ fontSize: 18, color: 'text.secondary', maxWidth: 560, lineHeight: 1.7, mb: 5, position: 'relative' }}>
        Electronics, vehicles, home goods, collectibles, services and more — as long as it is legal to sell.
        Funds stay in escrow until the buyer confirms delivery.
      </Typography>

      {/* CTAs */}
      <Box sx={{ display: 'flex', gap: 1.75, flexWrap: 'wrap', justifyContent: 'center', mb: 9, position: 'relative' }}>
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
          Start Selling
        </Button>
      </Box>
    </Box>
  )
}
