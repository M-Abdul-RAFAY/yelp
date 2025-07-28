import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import BusinessCard from '@/components/BusinessCard';
import Footer from '@/components/Footer';
import { mockBusinesses } from '@/lib/mockData';

export default function Home() {
  const featuredBusinesses = mockBusinesses.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoryGrid />
      
      {/* Featured Businesses */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Businesses
            </h2>
            <p className="text-gray-600">
              Discover the best places recommended by our community
            </p>
          </div>

          <div className="space-y-4">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}