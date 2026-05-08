export const amber = '#F59E0B'

export const CATEGORIES = [
  'ELECTRONICS',
  'FURNITURE',
  'HOME_APPLIANCE',
  'FASHION',
  'BEAUTY',
  'SPORTS',
  'BOOKS',
  'COLLECTIBLES',
  'ACCESSORY',
  'MUSIC_INSTRUMENT',
  'GAMING',
  'TOOLS',
  'VEHICLE',
  'LUXURY',
  'OTHER',
]

export const CONDITIONS = ['new', 'like-new', 'good', 'fair', 'for-parts']

export const CATEGORY_ICONS = {
  ELECTRONICS: '💻',
  FURNITURE: '🛋️',
  HOME_APPLIANCE: '🔌',
  APPLIANCES: '🔌',
  FASHION: '👕',
  BEAUTY: '💄',
  SPORTS: '⚽',
  BOOKS: '📚',
  COLLECTIBLES: '📦',
  ACCESSORY: '👜',
  MUSIC_INSTRUMENT: '🎸',
  GAMING: '🎮',
  TOOLS: '🧰',
  VEHICLE: '🏍️',
  VEHICLES: '🏍️',
  LUXURY: '💎',
  SERVICES: '🤝',
  TICKETS: '🎟️',
  OTHER: '🧾',
}

export const CATEGORY_LABELS = {
  ELECTRONICS: 'Electronics',
  FURNITURE: 'Furniture',
  HOME_APPLIANCE: 'Home Appliances',
  APPLIANCES: 'Home Appliances',
  FASHION: 'Fashion',
  BEAUTY: 'Beauty',
  SPORTS: 'Sports',
  BOOKS: 'Books',
  COLLECTIBLES: 'Collectibles',
  ACCESSORY: 'Accessories',
  MUSIC_INSTRUMENT: 'Music Instruments',
  GAMING: 'Gaming',
  TOOLS: 'Tools',
  VEHICLE: 'Vehicles',
  VEHICLES: 'Vehicles',
  LUXURY: 'Luxury',
  SERVICES: 'Services',
  TICKETS: 'Tickets',
  OTHER: 'Other',
}

export function formatCategory(category) {
  return CATEGORY_LABELS[category] || category
}

export function formatCondition(condition) {
  return condition.charAt(0).toUpperCase() + condition.slice(1).replace('-', ' ')
}
