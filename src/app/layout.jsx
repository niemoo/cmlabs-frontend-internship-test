import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Meals App',
  description: 'Meals App from themealdb',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
