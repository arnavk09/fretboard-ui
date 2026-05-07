import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

const amber = '#F59E0B'

const TESTIMONIALS = [
  {
    quote: "Sold my old Fender in two days. Escrow gave the buyer confidence to pay upfront — no back-and-forth at all.",
    name: 'Rohan M.', role: 'Guitarist, Mumbai', initials: 'RM', bg: '#1C1C2E',
  },
  {
    quote: "Found a mint Roland at half retail price. Escrow meant I could buy without worrying about getting scammed.",
    name: 'Priya S.', role: 'Keyboardist, Bengaluru', initials: 'PS', bg: '#1C2420',
  },
  {
    quote: "As a music teacher I recommend Fretboard to every student. Affordable gear, safe payments, trustworthy sellers.",
    name: 'Arjun T.', role: 'Music Educator, Pune', initials: 'AT', bg: '#1E1C14',
  },
]

export default function Testimonials() {
  return (
    <Box component="section" sx={{ px: { xs: 3, md: 6 }, py: 12 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
          ❤️ From the Community
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 48 } }}
        >
          Loved by musicians<br />across India.
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 2, mt: 6,
        }}>
          {TESTIMONIALS.map((t) => (
            <Box
              key={t.name}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid', borderColor: 'divider',
                borderRadius: 5, p: 3.5,
                transition: 'border-color 0.2s',
                '&:hover': { borderColor: alpha(amber, 0.25) },
              }}
            >
              <Typography sx={{ color: amber, fontSize: 14, letterSpacing: 2, mb: 1.75 }}>★★★★★</Typography>
              <Typography sx={{ fontSize: 15, lineHeight: 1.65, mb: 2.5, fontStyle: 'italic', color: 'text.primary' }}>
                "{t.quote}"
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Box sx={{
                  width: 36, height: 36, borderRadius: '50%',
                  bgcolor: t.bg, color: amber,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, flexShrink: 0,
                }}>
                  {t.initials}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{t.name}</Typography>
                  <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{t.role}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
