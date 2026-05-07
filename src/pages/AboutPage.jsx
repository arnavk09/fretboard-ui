import { Box, Typography, Button, Divider } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const amber = '#F59E0B'

const SECTIONS = [
  {
    icon: '😔',
    title: 'The problem with selling a guitar in India',
    body: [
      "Two years ago, I tried selling my first guitar — a beat-up Yamaha that taught me how to play. I posted it on OLX. 47 spam messages. Three no-shows. One guy offered me half my price because \"bhai used hai.\" After two weeks, I gave up.",
      "That guitar is still in my closet. Somewhere out there, a kid is learning his first chord on a broken ukulele because he couldn't afford a real one. That's not right.",
    ],
  },
  {
    icon: '💡',
    title: "What if selling gear didn't suck?",
    body: [
      "I'm not a marketplace expert. I'm a musician who got tired of watching great instruments collect dust while beginners struggled to afford their first setup.",
      "So I built Fretboard — a place where real musicians connect, protected by escrow. No bots. No lowballers. Just people who understand that every instrument has a story worth passing on.",
    ],
  },
  {
    icon: '🎯',
    title: 'Our mission',
    body: [
      "Make quality instruments accessible to every musician in India — regardless of budget.",
      "We believe music education shouldn't be a luxury. Every kid with a dream deserves a working instrument. Every sold guitar should fund a musician's next chapter. And every deal should feel like buying from a friend, not a corporate machine.",
    ],
  },
  {
    icon: '👥',
    title: 'Built by musicians, for musicians',
    body: [
      "We're a small team of developers, designers, and — most importantly — musicians. We've gigged, recorded, and spent way too much money on gear we didn't need.",
      "Fretboard isn't VC-funded or corporate-backed. It's a passion project that grew into something real.",
    ],
  },
]

const MOCK_STATS = [
  { value: '₹∞', label: 'Wasted on spam' },
  { value: '0', label: 'Lowball offers tolerated' },
  { value: '100%', label: 'Musicians only' },
]

export default function AboutPage() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ pt: '120px', pb: 10, px: { xs: 3, md: 6 }, textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
          🎸 The Story
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 44, md: 72 }, maxWidth: 800, mx: 'auto', mb: 3 }}
        >
          Every instrument has{' '}
          <Box component="span" sx={{
            background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            a second song.
          </Box>
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 18, maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
          This isn't just a marketplace. It's a mission to keep India's music alive, one instrument at a time.
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ maxWidth: 860, mx: 'auto', px: 3, pb: 12 }}>
        {SECTIONS.map((s, i) => (
          <Box key={s.title} sx={{ mb: 7.5 }}>
            <Typography sx={{ fontSize: 48, mb: 3 }}>{s.icon}</Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, mb: 2 }}>{s.title}</Typography>
            {s.body.map((p, j) => (
              <Typography key={j} sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: 17, mt: j > 0 ? 2.5 : 0 }}>
                {p}
              </Typography>
            ))}
          </Box>
        ))}

        {/* Stats block */}
        <Box sx={{
          bgcolor: 'background.paper',
          border: '1px solid', borderColor: 'divider',
          borderRadius: 5, p: 6, mb: 7.5,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4,
          textAlign: 'center',
        }}>
          {MOCK_STATS.map(({ value, label }) => (
            <Box key={label}>
              <Typography sx={{ fontSize: 36, fontWeight: 800, color: amber }}>{value}</Typography>
              <Typography sx={{ fontSize: 14, color: 'text.secondary', mt: 1 }}>{label}</Typography>
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Box sx={{
          background: `linear-gradient(135deg, ${alpha(amber, 0.08)} 0%, transparent 100%)`,
          border: `1px solid ${alpha(amber, 0.2)}`,
          borderRadius: 5,
          p: { xs: 5, md: 7.5 },
          textAlign: 'center',
        }}>
          <Typography sx={{ fontSize: 48, mb: 2 }}>🤝</Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 28 }, mb: 2 }}>
            Want to be part of the story?
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', mb: 4, lineHeight: 1.7 }}>
            Whether you're selling your first guitar or your vintage Les Paul — you belong here.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/sell"
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontSize: 16, px: 4, py: 1.75 }}
            >
              Start Selling →
            </Button>
            <Button
              component={Link}
              to="/browse"
              variant="outlined"
              size="large"
              sx={{
                fontSize: 16, px: 4, py: 1.75,
                borderColor: 'divider', color: 'text.primary',
                '&:hover': { borderColor: 'text.secondary', bgcolor: '#18181B' },
              }}
            >
              Browse Instruments
            </Button>
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#1F1F22', mt: 7.5, mb: 5 }} />
        <Typography sx={{ textAlign: 'center', color: 'text.disabled', fontSize: 14 }}>
          Built with 🎸 and ☕ by musicians who couldn't find a better way.
        </Typography>
      </Box>
    </Box>
  )
}
