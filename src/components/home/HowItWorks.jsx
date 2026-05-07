import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

const amber = '#F59E0B'

const STEPS = [
  { n: '1', title: 'List your item', desc: 'Post with photos and a price in under 3 minutes. Goes live immediately.' },
  { n: '2', title: 'Buyer pays into escrow', desc: 'Funds are held securely by SafeCart — neither party can touch them during transit.' },
  { n: '3', title: 'Ship to the buyer', desc: 'Package and send with a tracked courier. Share the tracking number through the platform.' },
  { n: '4', title: 'Buyer inspects & confirms', desc: 'The buyer has 48 hours to inspect and approve. Issues are resolved before funds move.' },
  { n: '5', title: 'You get paid', desc: 'Once confirmed, funds release to your account instantly. No waiting, no disputes.' },
]

const MOCK_CARDS = [
  { icon: '💻', name: 'MacBook Pro M2', meta: 'Electronics · Mumbai', price: '₹92,000', verified: true },
  { icon: '🏍️', name: 'Royal Enfield Classic', meta: 'Vehicle · Bengaluru', price: '₹1,45,000', verified: true },
  { icon: '🛋️', name: 'Solid Wood Dining Set', meta: 'Furniture · Delhi', price: '₹18,000', verified: false },
]

export default function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider',
        px: { xs: 3, md: 6 }, py: 12,
      }}
    >
      <Box sx={{
        maxWidth: 1100, mx: 'auto',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 10, alignItems: 'center',
      }}>
        {/* Steps */}
        <Box>
          <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
            ⚡ Escrow Process
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 48 }, mb: 2 }}
          >
            Safe for buyers.<br />Safe for sellers.
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.7 }}>
            Our escrow flow protects every transaction. Funds don't move until both sides are happy.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {STEPS.map((step, i) => (
              <Box
                key={step.n}
                sx={{
                  display: 'flex', gap: 2.5, py: 3.5,
                  borderBottom: i < STEPS.length - 1 ? '1px solid #1F1F22' : 'none',
                  '&:hover .step-num': {
                    bgcolor: alpha(amber, 0.25),
                    borderColor: amber,
                  },
                }}
              >
                <Box
                  className="step-num"
                  sx={{
                    width: 36, height: 36, flexShrink: 0,
                    borderRadius: '50%',
                    bgcolor: alpha(amber, 0.12),
                    border: `1px solid ${alpha(amber, 0.3)}`,
                    color: amber, fontSize: 13, fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mt: '2px', transition: 'all 0.2s',
                  }}
                >
                  {step.n}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 17, fontWeight: 600, mb: 0.75 }}>{step.title}</Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary', lineHeight: 1.6 }}>{step.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mock listing cards */}
        <Box sx={{
          bgcolor: 'background.default',
          border: '1px solid', borderColor: 'divider',
          borderRadius: 5, p: 4,
          display: 'flex', flexDirection: 'column', gap: 1.5,
        }}>
          {MOCK_CARDS.map((card) => (
            <Box
              key={card.name}
              sx={{
                display: 'flex', gap: 1.75, alignItems: 'center',
                bgcolor: 'background.paper',
                border: '1px solid', borderColor: 'divider',
                borderRadius: 3, p: 2,
                transition: 'border-color 0.2s',
                '&:hover': { borderColor: alpha(amber, 0.3) },
              }}
            >
              <Box sx={{
                width: 48, height: 48, borderRadius: '8px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, bgcolor: alpha(amber, 0.08),
              }}>
                {card.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.375 }}>{card.name}</Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{card.meta}</Typography>
                {card.verified && (
                  <Box sx={{
                    display: 'inline-flex', alignItems: 'center', gap: 0.5,
                    bgcolor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    color: '#4ADE80', fontSize: 11, fontWeight: 600,
                    px: 1, py: '2px', borderRadius: 9999, mt: 0.5,
                  }}>
                    ✓ Escrow Protected
                  </Box>
                )}
              </Box>
              <Typography sx={{ fontSize: 15, fontWeight: 700, color: amber }}>{card.price}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
