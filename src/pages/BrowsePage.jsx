import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Chip, Card, CardContent } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { fetchListings } from '../services/api'

const amber = '#F59E0B'

const CATEGORIES = ['GUITAR', 'BASS', 'KEYBOARD', 'DRUM', 'AMP', 'PEDAL', 'MIC', 'STUDIO', 'DJ', 'VINTAGE', 'ACCESSORY']

const CATEGORY_ICONS = {
  GUITAR: '🎸', BASS: '🎸', KEYBOARD: '🎹', DRUM: '🥁',
  AMP: '🔊', PEDAL: '🎛️', MIC: '🎙️', STUDIO: '🎚️',
  DJ: '🎧', VINTAGE: '📦', ACCESSORY: '🎵',
}

export default function BrowsePage() {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchListings(category)
      .then(data => { setListings(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [category])

  return (
    <Box sx={{ pt: '100px', pb: 10 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
            🎸 Marketplace
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 28, md: 48 }, mb: 3 }}
          >
            Browse Listings
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
            <Chip label="All" onClick={() => setCategory('')} sx={chipSx(!category)} />
            {CATEGORIES.map(cat => (
              <Chip
                key={cat}
                label={cat.charAt(0) + cat.slice(1).toLowerCase()}
                onClick={() => setCategory(cat)}
                sx={chipSx(category === cat)}
              />
            ))}
          </Box>
        </Box>

        {loading ? (
          <Typography sx={{ color: 'text.secondary', textAlign: 'center', py: 10 }}>Loading...</Typography>
        ) : (
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 3,
          }}>
            {listings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

function chipSx(active) {
  return {
    borderRadius: 9999,
    border: '1px solid',
    borderColor: active ? amber : 'divider',
    bgcolor: active ? amber : 'background.paper',
    color: active ? '#000' : 'text.secondary',
    fontWeight: 500,
    '&:hover': {
      bgcolor: active ? '#FCD34D' : '#18181B',
      borderColor: active ? '#FCD34D' : amber,
      color: active ? '#000' : amber,
    },
  }
}

function ListingCard({ listing }) {
  const icon = CATEGORY_ICONS[listing.category] || '🎵'
  const isGood = listing.condition === 'new' || listing.condition === 'like-new'

  return (
    <Card
      component={Link}
      to={`/listing/${listing.id}`}
      sx={{
        textDecoration: 'none', height: '100%',
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.25s',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: amber,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        },
      }}
    >
      <Box sx={{
        background: 'linear-gradient(135deg, #18181B 0%, #09090B 100%)',
        p: 4, textAlign: 'center', fontSize: 64,
        borderBottom: '1px solid', borderColor: 'divider',
      }}>
        {icon}
      </Box>

      <CardContent sx={{ flex: 1, p: 2.5 }}>
        <Typography sx={{ fontSize: 12, color: amber, textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px', mb: 1 }}>
          {listing.category}
        </Typography>
        <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1.5, lineHeight: 1.4 }}>
          {listing.title}
        </Typography>
        <Typography sx={{ fontSize: 24, color: amber, fontWeight: 800, mb: 1.5 }}>
          ₹{listing.price.toLocaleString('en-IN')}
        </Typography>
        <Typography sx={{ fontSize: 14, color: 'text.secondary', mb: 1.5 }}>
          📍 {listing.location}
        </Typography>
        <Box sx={{
          display: 'inline-block',
          bgcolor: isGood ? 'rgba(34,197,94,0.1)' : alpha(amber, 0.1),
          color: isGood ? '#4ADE80' : amber,
          px: 1.5, py: 0.25, borderRadius: 9999,
          fontSize: 12, fontWeight: 600,
        }}>
          {listing.condition}
        </Box>
      </CardContent>

      <Box sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
        <Box sx={{
          width: '100%', py: 1.25, borderRadius: 9999,
          bgcolor: amber, color: '#000', fontWeight: 600, fontSize: 14,
          textAlign: 'center', cursor: 'pointer',
          transition: 'background 0.2s',
          '&:hover': { bgcolor: '#FCD34D' },
        }}>
          View Details →
        </Box>
      </Box>
    </Card>
  )
}
