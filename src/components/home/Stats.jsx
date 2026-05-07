import { Box, Typography } from '@mui/material'

const STATS = [
  { number: '12K', suffix: '+', label: 'Active Listings' },
  { number: '8K', suffix: '+', label: 'Verified Sellers' },
  { number: '50', suffix: '+', label: 'Cities Covered' },
  { number: '4.9', suffix: '★', label: 'Avg. Seller Rating' },
]

export default function Stats() {
  return (
    <Box sx={{ px: { xs: 3, md: 6 }, pb: 10 }}>
      <Box sx={{
        maxWidth: 1100, mx: 'auto',
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: '1px', bgcolor: 'divider',
        border: '1px solid', borderColor: 'divider',
        borderRadius: 5, overflow: 'hidden',
      }}>
        {STATS.map(({ number, suffix, label }) => (
          <Box
            key={label}
            sx={{
              bgcolor: 'background.paper',
              px: 4, py: 5,
              textAlign: 'center',
              transition: 'background 0.2s',
              '&:hover': { bgcolor: '#18181B' },
            }}
          >
            <Typography sx={{
              fontSize: 42, fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1, mb: 1,
            }}>
              {number}
              <Box component="span" sx={{ color: 'primary.main' }}>{suffix}</Box>
            </Typography>
            <Typography variant="overline" sx={{ fontSize: 12, color: 'text.secondary', letterSpacing: '0.08em' }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
