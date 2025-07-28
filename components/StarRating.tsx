'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

export default function StarRating({ rating, size = 'md', showNumber = false }: StarRatingProps) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className={`${sizeClasses[size]} star-filled fill-current`}
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className={`${sizeClasses[size]} relative`}>
            <Star className={`${sizeClasses[size]} star-empty fill-current absolute`} />
            <div className="overflow-hidden w-1/2">
              <Star className={`${sizeClasses[size]} star-filled fill-current`} />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star
            key={i}
            className={`${sizeClasses[size]} star-empty fill-current`}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {renderStars()}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}