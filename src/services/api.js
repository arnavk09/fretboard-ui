const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export async function fetchListings(category = '') {
  const url = category ? `${API_URL}/api/listings?category=${category}` : `${API_URL}/api/listings`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch listings')
  return res.json()
}

export async function fetchListingById(id) {
  const res = await fetch(`${API_URL}/api/listings/${id}`)
  if (!res.ok) throw new Error('Listing not found')
  return res.json()
}

export async function createListing(data) {
  const res = await fetch(`${API_URL}/api/listings/create-listing`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Failed to create listing')
  return res.json()
}