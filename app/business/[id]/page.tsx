import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, Globe, Share, Bookmark, Camera, Edit3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import ReviewCard from '@/components/ReviewCard';
import { mockBusinesses, mockReviews } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

interface BusinessPageProps {
  params: {
    id: string;
  };
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const business = mockBusinesses.find(b => b.id === params.id);
  const businessReviews = mockReviews.filter(r => r.businessId === params.id);

  if (!business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Image Gallery */}
      <div className="relative h-96 bg-gray-900">
        <div className="grid grid-cols-4 h-full">
          <div className="col-span-2 relative">
            <Image
              src={business.photos[0]}
              alt={business.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-rows-2 gap-1">
            <div className="relative">
              <Image
                src={business.photos[1] || business.photos[0]}
                alt={business.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src={business.photos[2] || business.photos[0]}
                alt={business.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-75 flex items-center justify-center">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <Camera className="h-5 w-5 mr-2" />
              See all {business.photos.length} photos
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Business Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
                  <div className="flex items-center space-x-2 mb-2">
                    <StarRating rating={business.rating} size="lg" showNumber />
                    <span className="text-gray-600">({business.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span>{business.category}</span>
                    <span>•</span>
                    <span className="font-semibold">{business.price}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {business.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6">{business.description}</p>

              <Button className="bg-yelp-red hover:bg-yelp-red-hover text-white mr-4">
                <Edit3 className="h-4 w-4 mr-2" />
                Write a Review
              </Button>
              <Button variant="outline">
                Add Photo
              </Button>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Reviews ({businessReviews.length})
                </h2>
                <Button variant="outline">
                  All Reviews
                </Button>
              </div>

              <div className="space-y-6">
                {businessReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Business Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">{business.address}</p>
                    <Link href="#" className="text-yelp-red hover:underline text-sm">
                      Get Directions
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-900">{business.phone}</p>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-green-600 font-semibold">{business.hours}</p>
                    <Link href="#" className="text-yelp-red hover:underline text-sm">
                      See all hours
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <Link href="#" className="text-yelp-red hover:underline">
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Hours</h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Click to view directions</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Get Directions
              </Button>
            </div>

            {/* Suggested Reviews */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">You Might Also Consider</h3>
              <div className="space-y-4">
                {mockBusinesses.filter(b => b.id !== business.id).slice(0, 2).map((suggestedBusiness) => (
                  <Link key={suggestedBusiness.id} href={`/business/${suggestedBusiness.id}`}>
                    <div className="flex space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={suggestedBusiness.image}
                          alt={suggestedBusiness.name}
                          fill
                          className="object-cover rounded-lg"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm truncate">
                          {suggestedBusiness.name}
                        </h4>
                        <StarRating rating={suggestedBusiness.rating} size="sm" />
                        <p className="text-gray-600 text-xs">{suggestedBusiness.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}