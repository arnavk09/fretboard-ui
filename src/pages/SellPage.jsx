import { Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material'
import { amber, CATEGORIES, CONDITIONS, formatCategory, formatCondition } from '../constants/listings'
import { useListingFormStore } from '../stores/listingFormStore'
import { useMarketplaceStore } from '../stores/marketplaceStore'
import { useAuthStore } from '../stores/authStore'

export default function SellPage() {
  const form = useListingFormStore((state) => state.form)
  const submitting = useListingFormStore((state) => state.submitting)
  const success = useListingFormStore((state) => state.success)
  const error = useListingFormStore((state) => state.error)
  const setField = useListingFormStore((state) => state.setField)
  const startSubmit = useListingFormStore((state) => state.startSubmit)
  const finishSubmit = useListingFormStore((state) => state.finishSubmit)
  const failSubmit = useListingFormStore((state) => state.failSubmit)
  const resetSuccess = useListingFormStore((state) => state.resetSuccess)
  const getPayload = useListingFormStore((state) => state.getPayload)
  const createListing = useMarketplaceStore((state) => state.createListing)
  const user = useAuthStore((state) => state.user)

  const set = (field) => (e) => setField(field, e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    startSubmit()

    try {
      await createListing(getPayload())
      finishSubmit()
    } catch (err) {
      failSubmit(err.message)
    }
  }

  if (success) {
    return (
      <Box sx={{ pt: '120px', textAlign: 'center', px: 3 }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 48 }, mb: 2 }}
        >
          Listing Created!
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 4 }}>
          Your item has been listed. Buyers can now find it and purchase via escrow.
        </Typography>
        <Button variant="contained" color="primary" onClick={resetSuccess}>
          List Another
        </Button>
      </Box>
    )
  }

  return (
    <Box sx={{ pt: '100px', pb: 10, maxWidth: 720, mx: 'auto', px: 3 }}>
      <Typography variant="overline" sx={{ color: amber, fontSize: 12, display: 'block', mb: 2 }}>
        💰 Sell Anything Legal
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: { xs: 32, md: 48 }, mb: 1 }}
      >
        List Your Item
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.7 }}>
        Escrow protects you — buyers pay before you ship, funds release when they confirm receipt.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField label="Title" required value={form.title} onChange={set('title')} fullWidth />

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <TextField label="Price (₹)" type="number" required value={form.price} onChange={set('price')} />
          <FormControl required>
            <InputLabel>Category</InputLabel>
            <Select value={form.category} onChange={set('category')} label="Category">
              {CATEGORIES.map(c => (
                <MenuItem key={c} value={c}>{formatCategory(c)}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <FormControl required>
            <InputLabel>Condition</InputLabel>
            <Select value={form.condition} onChange={set('condition')} label="Condition">
              {CONDITIONS.map(c => (
                <MenuItem key={c} value={c}>{formatCondition(c)}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Location" required value={form.location} onChange={set('location')} />
        </Box>

        <TextField
          label="Description"
          multiline
          rows={4}
          value={form.description}
          onChange={set('description')}
          fullWidth
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <TextField label="Brand" value={form.brand} onChange={set('brand')} />
          <TextField label="Model" value={form.model} onChange={set('model')} />
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <TextField label="Year" type="number" value={form.year} onChange={set('year')} />
          <TextField label="Pincode" type="number" value={form.pincode} onChange={set('pincode')} />
        </Box>

        <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 2 }}>
          <Typography sx={{ fontSize: 13, color: 'text.secondary', mb: 0.5 }}>
            Seller account
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            {[user.firstName, user.lastName].filter(Boolean).join(' ') || user.email}
          </Typography>
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            {user.email}
          </Typography>
        </Box>

        {error && (
          <Typography color="error" sx={{ fontSize: 14 }}>
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={submitting}
          sx={{ py: 2, fontSize: 16 }}
        >
          {submitting ? 'Listing...' : 'List Your Item →'}
        </Button>
      </Box>
    </Box>
  )
}
