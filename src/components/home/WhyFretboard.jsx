import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

const amber = '#F59E0B'

const FEATURES = [
  { icon: '🔒', title: 'Escrow on Every Deal', body: "Funds are held by Fretboard until the buyer confirms receipt. No payment disputes, no scams." },
  { icon: '✓', title: 'Verified Seller Profiles', body: "Every seller goes through identity verification. You know exactly who you're buying from." },
  { icon: '📍', title: 'Hyper-local Discovery', body: 'Search by city or pincode. Meet local sellers, inspect before buying.' },
  { icon: '💬', title: 'Musician-first Community', body: 'Ratings and reviews built for people who care about gear quality and honest descriptions.' },
  { icon: '💰', title: 'No Hidden Fees', body: 'Transparent, low commission. Sellers keep what they earn. Fair prices for buyers.' },
  { icon: '🚀', title: 'List in 3 Minutes', body: 'Guided listing flow with instant publishing. Your item is searchable the moment you submit.' },
]

export default function WhyFretboard() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider',
        px: { xs: 3, md: 6 }, py: 12,
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
            🛡️ Why Fretboard
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 48 }, mb: 2 }}
          >
            Built on trust,<br />tuned for India.
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto', lineHeight: 1.7 }}>
            We built the marketplace we wished existed when we were buying our first guitar.
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: '1px', bgcolor: 'divider',
          border: '1px solid', borderColor: 'divider',
          borderRadius: 5, overflow: 'hidden',
        }}>
          {FEATURES.map((f) => (
            <Box
              key={f.title}
              sx={{
                bgcolor: 'background.paper', p: '40px 36px',
                transition: 'background 0.2s',
                '&:hover': { bgcolor: 'background.default' },
              }}
            >
              <Box sx={{
                width: 48, height: 48, borderRadius: '12px',
                bgcolor: alpha(amber, 0.12),
                border: `1px solid ${alpha(amber, 0.2)}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, mb: 2.5,
              }}>
                {f.icon}
              </Box>
              <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1.25, letterSpacing: '-0.3px' }}>
                {f.title}
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.65 }}>
                {f.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
