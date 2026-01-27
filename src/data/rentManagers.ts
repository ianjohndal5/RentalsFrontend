export interface RentManagerListing {
  id: number
  propertyType: string
  date: string
  price: string
  title: string
  image: string
  bedrooms: number
  bathrooms: number
  parking: number
}

export interface RentManagerProfile {
  id: number
  name: string
  role: string
  location: string
  listingsCount: number
  email: string
  phone: string
  aboutTitle: string
  aboutParagraphs: string[]
  bullets: string[]
  isPro?: boolean
  listings: RentManagerListing[]
}

export const rentManagers: RentManagerProfile[] = [
  {
    id: 1,
    name: 'Glaiza & Jerome Lantaca',
    role: 'Rent Manager Pro',
    location: 'Cebu City',
    listingsCount: 59,
    email: 'glaiza.jerome@rentals.ph',
    phone: '+63 917 123 4567',
    aboutTitle: 'ABOUT US',
    aboutParagraphs: [
      'We are Mr. and Mrs. Lantaca, your dedicated Rent Managers with experience in the dynamic real estate industry. We take pride in delivering exceptional service to our clients.',
      'With a hands-on approach, we manage diverse properties, ensuring optimal performance and satisfaction for property owners.'
    ],
    bullets: [
      'Proven Expertise: Skilled in overseeing rental properties, maintaining smooth operations, and maximizing property value.',
      'Strong Credentials: Knowledgeable in landlord-tenant laws, financial management, and effective communication strategies.',
      'Client-Centered Approach: Committed to fostering positive tenant relationships and ensuring seamless property management.'
    ],
    isPro: true,
    listings: [
      {
        id: 101,
        propertyType: 'Commercial Spaces',
        date: 'Sat 05, 2024',
        price: '$1200/Month',
        title: 'Azure Residences - 2BR Corner Suite',
        image: '/assets/property-main.png',
        bedrooms: 4,
        bathrooms: 2,
        parking: 2,
      },
      {
        id: 102,
        propertyType: 'Commercial Spaces',
        date: 'Sat 05, 2024',
        price: '$1200/Month',
        title: 'Azure Residences - 2BR Corner Suite',
        image: '/assets/property-main.png',
        bedrooms: 4,
        bathrooms: 2,
        parking: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Miguel Abella',
    role: 'Rent Manager Pro',
    location: 'Makati City',
    listingsCount: 22,
    email: 'miguel.abella@rentals.ph',
    phone: '+63 917 222 3333',
    aboutTitle: 'ABOUT US',
    aboutParagraphs: [
      'Hi! I’m Miguel — a Rent Manager focused on fast turnarounds and stress-free leasing for owners and tenants.',
    ],
    bullets: [
      'Responsive communication and transparent updates.',
      'Tenant screening and lease management.',
      'Market-based pricing recommendations.',
    ],
    isPro: true,
    listings: [
      {
        id: 201,
        propertyType: 'Condominium',
        date: 'Jan 15, 2026',
        price: '₱35,000/Month',
        title: 'Azure Urban Residences - 2BR Fully Furnished',
        image: '/assets/property-1.jpg',
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
      },
    ],
  },
  {
    id: 3,
    name: 'Maria Santos',
    role: 'Senior Rent Manager',
    location: 'Taguig City',
    listingsCount: 18,
    email: 'maria.santos@rentals.ph',
    phone: '+63 917 333 4444',
    aboutTitle: 'ABOUT US',
    aboutParagraphs: ['Professional rent management with a tenant-first mindset.'],
    bullets: ['End-to-end leasing support.', 'Careful tenant selection.', 'Efficient property coordination.'],
    listings: [],
  },
  {
    id: 4,
    name: 'John Reyes',
    role: 'Property Specialist',
    location: 'Quezon City',
    listingsCount: 10,
    email: 'john.reyes@rentals.ph',
    phone: '+63 917 444 5555',
    aboutTitle: 'ABOUT US',
    aboutParagraphs: ['Helping clients find the right fit, quickly and safely.'],
    bullets: ['Neighborhood expertise.', 'Straightforward paperwork.', 'Reliable scheduling and viewing support.'],
    listings: [],
  },
]

export function getRentManagerById(id: number) {
  return rentManagers.find(m => m.id === id)
}


