'use client';

import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-yelp-red to-red-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find the best local businesses
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Discover great places to eat, shop, and explore near you
          </p>

          {/* Search Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row">
              <div className="flex-1 relative mb-2 md:mb-0">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="burgers, barber, spas, handyman..."
                  className="pl-12 pr-4 py-4 text-lg border-0 focus:ring-0 text-gray-900 placeholder-gray-500"
                />
              </div>
              <div className="flex-1 relative mb-2 md:mb-0 md:border-l border-gray-200">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="San Francisco, CA"
                  className="pl-12 pr-4 py-4 text-lg border-0 focus:ring-0 text-gray-900 placeholder-gray-500"
                />
              </div>
              <Button className="bg-yelp-red hover:bg-yelp-red-hover text-white px-8 py-4 text-lg font-semibold">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}