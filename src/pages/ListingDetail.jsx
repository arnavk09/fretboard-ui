import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box, Typography, Button, Divider, CircularProgress } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { fetchListingById } from '../services/api'

const amber = '#F59E0B'

const CATEGORY_ICONS = {
  ELECTRONICS: '💻', VEHICLES: '🏍️', FURNITURE: '🛋️', FASHION: '👕',
  TOOLS: '🧰', BOOKS: '📚', COLLECTIBLES: '📦', APPLIANCES: '🔌',
  SERVICES: '🤝', TICKETS: '🎟️', OTHER: '🧾',
}

export default function ListingDetail() {
  const { id } = useParams()
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchListingById(id)
      .then(data => { setListing(data); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [id])

  if (loading) return (
    <Box sx={{ pt: '120px', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" />
    </Box>
  )
  if (error) return (
    <Box sx={{ pt: '120px', textAlign: 'center', px: 3 }}>
      <Typography color="error" sx={{ fontSize: 18 }}>{error}</Typography>
    </Box>
  )
  if (!listing) return null

  const icon = CATEGORY_ICONS[listing.category] || '🧾'
  const isGood = listing.condition === 'new' || listing.condition === 'like-new'

  const details = [
    ['Condition', listing.condition],
    ['Location', listing.location],
    ...(listing.brand ? [['Brand', listing.brand]] : []),
    ...(listing.model ? [['Model', listing.model]] : []),
    ...(listing.year ? [['Year', listing.year]] : []),
    ...(listing.pincode ? [['Pincode', listing.pincode]] : []),
  ]

  return (
    <Box sx={{ pt: '100px', pb: 10, maxWidth: 1200, mx: 'auto', px: 3 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
        {/* Image placeholder */}
        <Box sx={{
          bgcolor: 'background.paper',
          border: '1px solid', borderColor: 'divider',
          borderRadius: 5, aspectRatio: '1/1',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 96,
        }}>
          {icon}
        </Box>

        {/* Info */}
        <Box>
          <Typography sx={{ fontSize: 12, color: amber, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', mb: 1.5 }}>
            {listing.category}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 36 }, mb: 2 }}>
            {listing.title}
          </Typography>
          <Typography sx={{ fontSize: 36, color: amber, fontWeight: 800, mb: 3 }}>
            ₹{listing.price.toLocaleString('en-IN')}
          </Typography>

          {/* Escrow badge */}
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            bgcolor: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            borderRadius: 2, px: 2, py: 1, mb: 3,
          }}>
            <Typography sx={{ color: '#4ADE80', fontSize: 13, fontWeight: 600 }}>
              🔒 Escrow Protected — funds held until you confirm receipt
            </Typography>
          </Box>

          <Box sx={{
            display: 'inline-block',
            bgcolor: isGood ? 'rgba(34,197,94,0.1)' : alpha(amber, 0.1),
            color: isGood ? '#4ADE80' : amber,
            px: 1.5, py: 0.25, borderRadius: 9999,
            fontSize: 12, fontWeight: 600, mb: 3,
          }}>
            {listing.condition}
          </Box>

          <Divider sx={{ borderColor: 'divider', mb: 3 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
            {details.map(([label, value]) => (
              <Box key={label} sx={{ display: 'flex', gap: 1 }}>
                <Typography sx={{ fontSize: 14, color: 'text.secondary', width: 80, flexShrink: 0 }}>{label}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{value}</Typography>
              </Box>
            ))}
          </Box>

          {listing.description && (
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Description</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{listing.description}</Typography>
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ fontSize: 16, py: 2, mb: 1.5 }}
          >
            Buy with Escrow →
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            sx={{
              borderColor: 'divider', color: 'text.primary', py: 1.75,
              '&:hover': { borderColor: 'text.secondary', bgcolor: '#18181B' },
            }}
          >
            Message Seller
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
