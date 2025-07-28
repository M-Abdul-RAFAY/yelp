'use client';

import Image from 'next/image';
import { ThumbsUp, Flag } from 'lucide-react';
import StarRating from './StarRating';
import { Review } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
      <div className="flex items-start space-x-4">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          <Image
            src={review.userAvatar}
            alt={review.userName}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>

        {/* Review Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <h4 className="font-semibold text-gray-900">{review.userName}</h4>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
              <Flag className="h-4 w-4" />
            </Button>
          </div>

          <div className="mb-3">
            <StarRating rating={review.rating} size="sm" />
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {review.text}
          </p>

          {review.photos && review.photos.length > 0 && (
            <div className="flex space-x-2 mb-4">
              {review.photos.map((photo, index) => (
                <div key={index} className="relative w-20 h-20">
                  <Image
                    src={photo}
                    alt={`Review photo ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-4 text-sm">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-yelp-red p-0">
              <ThumbsUp className="h-4 w-4 mr-1" />
              Helpful ({review.helpful})
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}