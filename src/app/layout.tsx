import './globals.css';

// Section
import { Footer, Header } from '@/ui/sections';

// Provider
import { QueryProvider } from '@/Provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'T-Shirt shop'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
