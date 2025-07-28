'use client';

import { useState } from 'react';
import { Search, MapPin, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold yelp-red">yelp</h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="flex w-full">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="burgers, barber, spas, handyman..."
                  className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 rounded-l-lg focus:border-yelp-red focus:ring-0"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="San Francisco, CA"
                  className="pl-10 pr-4 py-2 w-64 border-2 border-l-0 border-gray-300 focus:border-yelp-red focus:ring-0"
                />
              </div>
              <Button className="bg-yelp-red hover:bg-yelp-red-hover text-white px-6 rounded-l-none rounded-r-lg">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-yelp-red">
              Write a Review
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-yelp-red">
              For Businesses
            </Button>
            <Button variant="outline" className="border-yelp-red text-yelp-red hover:bg-yelp-red hover:text-white">
              Log In
            </Button>
            <Button className="bg-yelp-red hover:bg-yelp-red-hover text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="burgers, barber, spas..."
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 focus:border-yelp-red focus:ring-0"
              />
            </div>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 focus:border-yelp-red focus:ring-0"
                />
              </div>
              <Button className="bg-yelp-red hover:bg-yelp-red-hover text-white px-6">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t pt-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start text-gray-700 hover:text-yelp-red">
                Write a Review
              </Button>
              <Button variant="ghost" className="justify-start text-gray-700 hover:text-yelp-red">
                For Businesses
              </Button>
              <Button variant="outline" className="justify-start border-yelp-red text-yelp-red hover:bg-yelp-red hover:text-white">
                Log In
              </Button>
              <Button className="justify-start bg-yelp-red hover:bg-yelp-red-hover text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}