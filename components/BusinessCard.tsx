'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import StarRating from './StarRating';
import { Business } from '@/lib/mockData';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="flex">
        {/* Image */}
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src={business.image}
            alt={business.name}
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <Link href={`/business/${business.id}`} className="hover:underline">
              <h3 className="text-xl font-semibold text-gray-900 hover:text-yelp-red">
                {business.name}
              </h3>
            </Link>
            <span className="text-gray-600 font-medium">{business.price}</span>
          </div>

          <div className="flex items-center space-x-2 mb-2">
            <StarRating rating={business.rating} size="sm" />
            <span className="text-sm text-gray-600">
              {business.reviewCount} reviews
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3">{business.category}</p>

          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">{business.address}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{business.phone}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-green-600">{business.hours}</span>
            </div>
          </div>

          <p className="text-gray-700 text-sm mt-3 line-clamp-2">
            {business.description}
          </p>

          <div className="flex flex-wrap gap-1 mt-3">
            {business.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}