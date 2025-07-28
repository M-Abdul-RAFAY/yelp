import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yelp Clone',
  description: 'Find great local businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}