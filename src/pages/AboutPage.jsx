import { Box, Typography, Button, Divider } from '@mui/material'

import { alpha } from '@mui/material/styles'

import { Link } from 'react-router-dom'

const amber = '#F59E0B'

const SECTIONS = [

  {

    icon: '⚠️',

    title: 'The problem with second-hand deals in India',

    body: [

      "People sell perfectly useful things every day, but the process is still full of spam, no-shows, payment anxiety, and lowball offers.",

      "Buyers worry about sending money first. Sellers worry about shipping before payment clears. Both sides need a marketplace where the rules are simple and the money is protected.",

    ],

  },

  {

    icon: '💡',

    title: 'What if every deal had a safety net?',

    body: [

      "SafeCart is built for everyday transactions that deserve more trust — phones, furniture, cameras, gaming consoles, tickets, tools, and local services.",

      "Escrow gives both sides confidence. Buyers know their payment is protected, and sellers know funds are secured before shipping.",

    ],

  },

  {

    icon: '🎯',

    title: 'Our mission',

    body: [

      "Make second-hand commerce safer and less stressful in India.",

      "We believe buying and selling online should feel clear, fair, and predictable — not like rolling dice with strangers on the internet.",

    ],

  },

  {

    icon: '🛡️',

    title: 'Built around trust',

    body: [

      "SafeCart focuses on verified sellers, protected payments, transparent communication, and proof-based delivery flows.",

      "Fraudulent, counterfeit, unsafe, or prohibited listings are reviewed and removed to keep the marketplace reliable for everyone.",

    ],

  },

]

const MOCK_STATS = [

  { value: '🛡️', label: 'Escrow-backed payments' },

  { value: '📦', label: 'Proof-based delivery flow' },

  { value: '🤝', label: 'Buyer & seller protection' },

]

export default function AboutPage() {

  return (

    <Box>

      {/* Hero */}

      <Box

        sx={{

          pt: '120px',

          pb: 10,

          px: { xs: 3, md: 6 },

          textAlign: 'center',

        }}

      >

        <Typography

          variant="overline"

          sx={{

            color: amber,

            fontSize: 12,

            display: 'block',

            mb: 2,

          }}

        >

          🛡️ The Story

        </Typography>

        <Typography

          variant="h1"

          sx={{

            fontFamily: '"Playfair Display", Georgia, serif',

            fontSize: { xs: 44, md: 72 },

            maxWidth: 850,

            mx: 'auto',

            mb: 3,

            lineHeight: 1.05,

          }}

        >

          Every second-hand deal deserves{' '}

          <Box

            component="span"

            sx={{

              background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',

              WebkitBackgroundClip: 'text',

              WebkitTextFillColor: 'transparent',

              backgroundClip: 'text',

            }}

          >

            a safer way.

          </Box>

        </Typography>

        <Typography

          sx={{

            color: 'text.secondary',

            fontSize: 18,

            maxWidth: 620,

            mx: 'auto',

            lineHeight: 1.8,

          }}

        >

          SafeCart is an escrow marketplace built for safer buying and selling

          in India — protected payments, verified sellers, and fewer awkward

          leap-of-faith deals.

        </Typography>

      </Box>

      {/* Content */}

      <Box sx={{ maxWidth: 860, mx: 'auto', px: 3, pb: 12 }}>

        {SECTIONS.map((s) => (

          <Box key={s.title} sx={{ mb: 8 }}>

            <Typography sx={{ fontSize: 48, mb: 3 }}>

              {s.icon}

            </Typography>

            <Typography

              variant="h3"

              sx={{

                fontSize: { xs: 24, md: 32 },

                mb: 2,

              }}

            >

              {s.title}

            </Typography>

            {s.body.map((p, j) => (

              <Typography

                key={j}

                sx={{

                  color: 'text.secondary',

                  lineHeight: 1.85,

                  fontSize: 17,

                  mt: j > 0 ? 2.5 : 0,

                }}

              >

                {p}

              </Typography>

            ))}

          </Box>

        ))}

        {/* Stats */}

        <Box

          sx={{

            bgcolor: 'background.paper',

            border: '1px solid',

            borderColor: 'divider',

            borderRadius: 5,

            p: 6,

            mb: 8,

            display: 'grid',

            gridTemplateColumns: {

              xs: '1fr',

              md: 'repeat(3, 1fr)',

            },

            gap: 4,

            textAlign: 'center',

          }}

        >

          {MOCK_STATS.map(({ value, label }) => (

            <Box key={label}>

              <Typography

                sx={{

                  fontSize: 42,

                  fontWeight: 800,

                }}

              >

                {value}

              </Typography>

              <Typography

                sx={{

                  fontSize: 14,

                  color: 'text.secondary',

                  mt: 1,

                }}

              >

                {label}

              </Typography>

            </Box>

          ))}

        </Box>

        {/* CTA */}

        <Box

          sx={{

            background: `linear-gradient(135deg, ${alpha(amber, 0.08)} 0%, transparent 100%)`,

            border: `1px solid ${alpha(amber, 0.2)}`,

            borderRadius: 5,

            p: { xs: 5, md: 7.5 },

            textAlign: 'center',

          }}

        >

          <Typography sx={{ fontSize: 48, mb: 2 }}>

            🤝

          </Typography>

          <Typography

            variant="h3"

            sx={{

              fontSize: { xs: 24, md: 28 },

              mb: 2,

            }}

          >

            Want to be part of the story?

          </Typography>

          <Typography

            sx={{

              color: 'text.secondary',

              maxWidth: 560,

              mx: 'auto',

              mb: 4,

              lineHeight: 1.8,

            }}

          >

            Whether you're selling a phone, a scooter, furniture, books,

            gaming gear, tickets, tools, or offering a local service — you

            belong here.

          </Typography>

          <Box

            sx={{

              display: 'flex',

              gap: 2,

              justifyContent: 'center',

              flexWrap: 'wrap',

            }}

          >

            <Button

              component={Link}

              to="/sell"

              variant="contained"

              color="primary"

              size="large"

              sx={{

                fontSize: 16,

                px: 4,

                py: 1.75,

              }}

            >

              Start Selling →

            </Button>

            <Button

              component={Link}

              to="/browse"

              variant="outlined"

              size="large"

              sx={{

                fontSize: 16,

                px: 4,

                py: 1.75,

                borderColor: 'divider',

                color: 'text.primary',

                '&:hover': {

                  borderColor: 'text.secondary',

                  bgcolor: '#18181B',

                },

              }}

            >

              Browse Listings

            </Button>

          </Box>

        </Box>

        <Divider

          sx={{

            borderColor: '#1F1F22',

            mt: 7.5,

            mb: 5,

          }}

        />

        <Typography

          sx={{

            textAlign: 'center',

            color: 'text.disabled',

            fontSize: 14,

          }}

        >

          Built for buyers and sellers who want the deal to feel clear before

          money moves.

        </Typography>

      </Box>

    </Box>

  )

}