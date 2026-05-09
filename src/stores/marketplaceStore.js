import { create } from 'zustand'
import {
  createListing as createListingRequest,
  deleteListing as deleteListingRequest,
  fetchListingById,
  fetchListings,
} from '../services/api'

const idleState = {
  listings: [],
  listingsLoading: false,
  listingsError: null,
  selectedListing: null,
  selectedListingLoading: false,
  selectedListingError: null,
}

let listingsRequestId = 0
let detailRequestId = 0

export const useMarketplaceStore = create((set) => ({
  ...idleState,

  loadListings: async (category = '') => {
    const requestId = ++listingsRequestId
    set({ listingsLoading: true, listingsError: null })

    try {
      const listings = await fetchListings(category)
      if (requestId === listingsRequestId) {
        set({ listings, listingsLoading: false })
      }
    } catch (error) {
      if (requestId === listingsRequestId) {
        set({ listingsLoading: false, listingsError: error.message })
      }
    }
  },

  loadListing: async (id) => {
    const requestId = ++detailRequestId
    set({ selectedListing: null, selectedListingLoading: true, selectedListingError: null })

    try {
      const selectedListing = await fetchListingById(id)
      if (requestId === detailRequestId) {
        set({ selectedListing, selectedListingLoading: false })
      }
    } catch (error) {
      if (requestId === detailRequestId) {
        set({ selectedListingLoading: false, selectedListingError: error.message })
      }
    }
  },

  createListing: (listing) => createListingRequest(listing),

  deleteListing: async (id) => {
    await deleteListingRequest(id)
    set((state) => ({
      listings: state.listings.filter((listing) => String(listing.id) !== String(id)),
      selectedListing: String(state.selectedListing?.id) === String(id) ? null : state.selectedListing,
    }))
  },
}))
