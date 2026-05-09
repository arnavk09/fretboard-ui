import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from '@mui/material'
import { amber, CATEGORY_ICONS, formatCategory } from '../constants/listings'
import { useAuthStore } from '../stores/authStore'
import { useMarketplaceStore } from '../stores/marketplaceStore'
import { isListingCreator } from '../utils/listingOwnership'

function getDisplayName(user) {
  return [user.firstName, user.lastName].filter(Boolean).join(' ') || user.email
}

export default function AccountPage() {
  const user = useAuthStore((state) => state.user)
  const listings = useMarketplaceStore((state) => state.listings)
  const listingsLoading = useMarketplaceStore((state) => state.listingsLoading)
  const listingsError = useMarketplaceStore((state) => state.listingsError)
  const loadListings = useMarketplaceStore((state) => state.loadListings)

  useEffect(() => {
    loadListings()
  }, [loadListings])

  const myListings = useMemo(
    () => listings.filter((listing) => isListingCreator(listing, user)),
    [listings, user],
  )

  return (
    <Box sx={{ pt: '100px', pb: 10, maxWidth: 1100, mx: 'auto', px: 3 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
          Account
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 48 }, mb: 1 }}
        >
          {getDisplayName(user)}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Manage your profile and listings.
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '380px 1fr' }, gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>Profile</Typography>
          <TextField label="First name" value={user.firstName || ''} fullWidth disabled helperText="Managed by Google" />
          <TextField label="Last name" value={user.lastName || ''} fullWidth disabled helperText="Managed by Google" />
          <TextField label="Email" value={user.email || ''} fullWidth disabled helperText="Managed by Google" />
          <TextField label="User ID" value={user.id || ''} fullWidth disabled />
          <TextField label="Role" value={user.role || ''} fullWidth disabled />
        </Box>

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 2 }}>
            <Typography sx={{ fontSize: 18, fontWeight: 700 }}>Your listings</Typography>
            <Button component={Link} to="/sell" variant="outlined" size="small">
              New Listing
            </Button>
          </Box>
          <Divider sx={{ borderColor: 'divider', mb: 3 }} />

          {listingsLoading ? (
            <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color="primary" />
            </Box>
          ) : listingsError ? (
            <Alert severity="error">{listingsError}</Alert>
          ) : myListings.length === 0 ? (
            <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 4, textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 700, mb: 1 }}>No listings yet</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                Listings created from this signed-in account will appear here.
              </Typography>
              <Button component={Link} to="/sell" variant="contained" color="primary">
                Create Listing
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: 'grid', gap: 2 }}>
              {myListings.map((listing) => (
                <Card key={listing.id} component={Link} to={`/listing/${listing.id}`} sx={{ textDecoration: 'none' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <Box sx={{ fontSize: 32, width: 48, textAlign: 'center' }}>
                      {CATEGORY_ICONS[listing.category] || '🧾'}
                    </Box>
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography sx={{ fontWeight: 700 }} noWrap>{listing.title}</Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>
                        {formatCategory(listing.category)} · {listing.condition} · {listing.location}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: amber, fontWeight: 800 }}>
                      ₹{listing.price.toLocaleString('en-IN')}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
