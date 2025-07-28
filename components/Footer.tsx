'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">About Yelp</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white">Press</Link></li>
              <li><Link href="/investor-relations" className="hover:text-white">Investor Relations</Link></li>
              <li><Link href="/trust-safety" className="hover:text-white">Trust & Safety</Link></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Discover</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/yelp-project-cost-guides" className="hover:text-white">Project Cost Guides</Link></li>
              <li><Link href="/collections" className="hover:text-white">Collections</Link></li>
              <li><Link href="/talk" className="hover:text-white">Talk</Link></li>
              <li><Link href="/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/yelp-blog" className="hover:text-white">The Local Yelp</Link></li>
            </ul>
          </div>

          {/* Yelp for Business */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Yelp for Business</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/business" className="hover:text-white">Claim your Business Page</Link></li>
              <li><Link href="/advertise" className="hover:text-white">Advertise on Yelp</Link></li>
              <li><Link href="/business/support" className="hover:text-white">Yelp for Restaurant Owners</Link></li>
              <li><Link href="/business/success-stories" className="hover:text-white">Business Success Stories</Link></li>
              <li><Link href="/business/support" className="hover:text-white">Business Support</Link></li>
            </ul>
          </div>

          {/* Languages & Countries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-white">English</Link></li>
              <li><Link href="/es" className="hover:text-white">Español</Link></li>
              <li><Link href="/fr" className="hover:text-white">Français</Link></li>
              <li><Link href="/de" className="hover:text-white">Deutsch</Link></li>
            </ul>

            <h3 className="font-semibold text-lg mb-4 mt-6">Countries</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/us" className="hover:text-white">United States</Link></li>
              <li><Link href="/ca" className="hover:text-white">Canada</Link></li>
              <li><Link href="/uk" className="hover:text-white">United Kingdom</Link></li>
              <li><Link href="/au" className="hover:text-white">Australia</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-2xl font-bold yelp-red">yelp</span>
              <span className="text-gray-400">Copyright © 2004–2024 Yelp Inc.</span>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link>
              <div className="flex space-x-3 ml-6">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}