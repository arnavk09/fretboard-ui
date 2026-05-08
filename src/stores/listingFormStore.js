import { create } from 'zustand'

export const EMPTY_LISTING_FORM = {
  title: '',
  description: '',
  price: '',
  category: 'ELECTRONICS',
  condition: 'good',
  location: '',
  sellerId: '',
  brand: '',
  model: '',
  year: '',
  pincode: '',
}

export const useListingFormStore = create((set, get) => ({
  form: EMPTY_LISTING_FORM,
  submitting: false,
  success: false,
  error: null,

  setField: (field, value) => {
    set((state) => ({ form: { ...state.form, [field]: value } }))
  },

  startSubmit: () => set({ submitting: true, error: null }),
  finishSubmit: () => set({ submitting: false, success: true, form: EMPTY_LISTING_FORM }),
  failSubmit: (message) => set({ submitting: false, error: message }),
  resetSuccess: () => set({ success: false, error: null }),
  getPayload: () => {
    const form = get().form

    return {
      ...form,
      price: parseFloat(form.price),
      year: form.year ? parseInt(form.year, 10) : null,
      pincode: form.pincode ? parseInt(form.pincode, 10) : null,
      currency: 'INR',
    }
  },
}))
