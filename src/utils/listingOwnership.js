export function isListingCreator(listing, user) {
  if (!listing || !user) return false

  const sellerId = listing.seller?.id ?? listing.sellerId ?? listing.userId ?? listing.ownerId ?? listing.createdBy?.id
  const sellerEmail = listing.seller?.email ?? listing.sellerEmail ?? listing.userEmail ?? listing.ownerEmail

  return String(sellerId) === String(user.id) || sellerEmail === user.email
}
