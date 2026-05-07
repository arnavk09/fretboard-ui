import { useState } from 'react'
import { Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material'
import { createListing } from '../services/api'

const amber = '#F59E0B'

const CATEGORIES = ['ELECTRONICS', 'VEHICLES', 'FURNITURE', 'FASHION', 'TOOLS', 'BOOKS', 'COLLECTIBLES', 'APPLIANCES', 'SERVICES', 'TICKETS', 'OTHER']
const CONDITIONS = ['new', 'like-new', 'good', 'fair', 'for-parts']

const EMPTY_FORM = {
  title: '', description: '', price: '',
  category: 'ELECTRONICS', condition: 'good',
  location: '', sellerId: '',
  brand: '', model: '', year: '', pincode: '',
}

export default function SellPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createListing({
        ...form,
        price: parseFloat(form.price),
        year: form.year ? parseInt(form.year) : null,
        pincode: form.pincode ? parseInt(form.pincode) : null,
        currency: 'INR',
      })
      setSuccess(true)
      setForm(EMPTY_FORM)
    } finally {
      setSubmitting(false)
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
        <Button variant="contained" color="primary" onClick={() => setSuccess(false)}>
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
                <MenuItem key={c} value={c}>{c.charAt(0) + c.slice(1).toLowerCase()}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          <FormControl required>
            <InputLabel>Condition</InputLabel>
            <Select value={form.condition} onChange={set('condition')} label="Condition">
              {CONDITIONS.map(c => (
                <MenuItem key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')}</MenuItem>
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

        <TextField
          label="Contact Email / Username"
          required
          value={form.sellerId}
          onChange={set('sellerId')}
          fullWidth
          helperText="Temporary field — will be replaced by auth"
        />

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
