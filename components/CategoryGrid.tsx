'use client';

import Link from 'next/link';
import { categories } from '@/lib/mockData';

export default function CategoryGrid() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Browse by Category
          </h2>
          <p className="text-gray-600">
            Discover great places near you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/search?category=${encodeURIComponent(category.name)}`}
              className="group bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md hover:border-yelp-red transition-all duration-200"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-yelp-red mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">
                {category.count.toLocaleString()} places
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}