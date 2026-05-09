import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { amber, CATEGORY_ICONS, formatCategory } from '../constants/listings'
import { useMarketplaceStore } from '../stores/marketplaceStore'
import { redirectToGoogleAuth } from '../services/api'
import { useAuthStore } from '../stores/authStore'
import { isListingCreator } from '../utils/listingOwnership'

export default function ListingDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const listing = useMarketplaceStore((state) => state.selectedListing)
  const loading = useMarketplaceStore((state) => state.selectedListingLoading)
  const error = useMarketplaceStore((state) => state.selectedListingError)
  const loadListing = useMarketplaceStore((state) => state.loadListing)
  const deleteListing = useMarketplaceStore((state) => state.deleteListing)
  const user = useAuthStore((state) => state.user)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  useEffect(() => {
    loadListing(id)
  }, [id, loadListing])

  const handleDelete = async () => {
    setDeleting(true)
    setDeleteError('')

    try {
      await deleteListing(id)
      setDeleteDialogOpen(false)
      navigate('/account', { replace: true })
    } catch (err) {
      setDeleteError(err.message)
      setDeleting(false)
    }
  }

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
  const isCreator = isListingCreator(listing, user)
  const protectedActionLabel = user ? 'Buy with Escrow →' : 'Sign in to Buy'
  const protectedMessageLabel = user ? 'Message Seller' : 'Sign in to Message'

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
            {formatCategory(listing.category)}
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
            onClick={user ? undefined : redirectToGoogleAuth}
            sx={{ fontSize: 16, py: 2, mb: 1.5 }}
          >
            {protectedActionLabel}
          </Button>
          <Button
            variant="outlined"
            fullWidth
            size="large"
            onClick={user ? undefined : redirectToGoogleAuth}
            sx={{
              borderColor: 'divider', color: 'text.primary', py: 1.75,
              '&:hover': { borderColor: 'text.secondary', bgcolor: '#18181B' },
            }}
          >
            {protectedMessageLabel}
          </Button>

          {isCreator && (
            <>
              <Divider sx={{ borderColor: 'divider', my: 3 }} />
              <Button
                variant="outlined"
                color="error"
                fullWidth
                size="large"
                onClick={() => {
                  setDeleteError('')
                  setDeleteDialogOpen(true)
                }}
                sx={{ py: 1.75 }}
              >
                Delete Listing
              </Button>
            </>
          )}
        </Box>
      </Box>

      <Dialog open={deleteDialogOpen} onClose={() => !deleting && setDeleteDialogOpen(false)}>
        <DialogTitle>Delete listing?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This permanently removes this listing from the marketplace.
          </DialogContentText>
          {deleteError && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {deleteError}
            </Alert>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setDeleteDialogOpen(false)} disabled={deleting}>
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained" disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
