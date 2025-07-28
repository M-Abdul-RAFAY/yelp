export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: string;
  image: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
  photos: string[];
  features: string[];
}

export interface Review {
  id: string;
  businessId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  text: string;
  photos?: string[];
  helpful: number;
}

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Mama\'s Fish House',
    category: 'Seafood Restaurant',
    rating: 4.5,
    reviewCount: 2847,
    price: '$$$',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    address: '799 Poho Pl, Paia, HI 96779',
    phone: '(808) 579-8488',
    hours: 'Open until 9:00 PM',
    description: 'Fresh seafood restaurant with ocean views and Hawaiian-style preparations.',
    photos: [
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
      'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg',
      'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
    ],
    features: ['Outdoor Seating', 'Ocean View', 'Reservations', 'Full Bar']
  },
  {
    id: '2',
    name: 'Blue Bottle Coffee',
    category: 'Coffee Shop',
    rating: 4.2,
    reviewCount: 1432,
    price: '$$',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    address: '66 Mint St, San Francisco, CA 94103',
    phone: '(510) 653-3394',
    hours: 'Open until 7:00 PM',
    description: 'Artisanal coffee roaster with carefully crafted single-origin beans.',
    photos: [
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
      'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg'
    ],
    features: ['WiFi', 'Outdoor Seating', 'Takeout', 'Specialty Coffee']
  },
  {
    id: '3',
    name: 'The French Laundry',
    category: 'Fine Dining',
    rating: 4.8,
    reviewCount: 856,
    price: '$$$$',
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    address: '6640 Washington St, Yountville, CA 94599',
    phone: '(707) 944-2380',
    hours: 'Closed - Opens at 5:30 PM',
    description: 'World-renowned restaurant offering French cuisine with California influences.',
    photos: [
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
    ],
    features: ['Reservations Required', 'Fine Dining', 'Wine Pairing', 'Tasting Menu']
  },
  {
    id: '4',
    name: 'Joe\'s Pizza',
    category: 'Pizza',
    rating: 4.3,
    reviewCount: 3241,
    price: '$',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    address: '7 Carmine St, New York, NY 10014',
    phone: '(212) 366-1182',
    hours: 'Open until 2:00 AM',
    description: 'Classic New York-style pizza by the slice and whole pies.',
    photos: [
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
      'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg'
    ],
    features: ['Late Night', 'Delivery', 'Takeout', 'Cash Only']
  },
  {
    id: '5',
    name: 'Spa Sanctuary',
    category: 'Day Spa',
    rating: 4.6,
    reviewCount: 627,
    price: '$$$',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    address: '123 Wellness Blvd, Beverly Hills, CA 90210',
    phone: '(310) 555-0123',
    hours: 'Open until 8:00 PM',
    description: 'Luxury spa offering massages, facials, and wellness treatments.',
    photos: [
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
      'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg',
      'https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg'
    ],
    features: ['Appointment Only', 'Luxury Spa', 'Couples Treatments', 'Relaxation Room']
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    businessId: '1',
    userName: 'Sarah M.',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    rating: 5,
    date: '3/15/2024',
    text: 'Absolutely incredible experience! The fresh fish was perfectly prepared and the ocean view made it even more special. The service was attentive without being intrusive.',
    helpful: 23
  },
  {
    id: '2',
    businessId: '1',
    userName: 'Mike R.',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    rating: 4,
    date: '3/10/2024',
    text: 'Great food and atmosphere. The prices are a bit high but the quality justifies it. Make sure to make a reservation!',
    helpful: 15
  },
  {
    id: '3',
    businessId: '2',
    userName: 'Jennifer L.',
    userAvatar: 'https://images.pexels.com/photos/594421/pexels-photo-594421.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    rating: 4,
    date: '3/12/2024',
    text: 'Love the single-origin coffee here. The baristas really know their craft and the atmosphere is perfect for working.',
    helpful: 8
  }
];

export const categories = [
  { name: 'Restaurants', icon: '🍽️', count: 12500 },
  { name: 'Coffee & Tea', icon: '☕', count: 3200 },
  { name: 'Bars & Nightlife', icon: '🍺', count: 2800 },
  { name: 'Shopping', icon: '🛍️', count: 5600 },
  { name: 'Beauty & Spas', icon: '💅', count: 1900 },
  { name: 'Auto Services', icon: '🚗', count: 1400 },
  { name: 'Health & Medical', icon: '🏥', count: 2100 },
  { name: 'Home Services', icon: '🏠', count: 1800 }
];