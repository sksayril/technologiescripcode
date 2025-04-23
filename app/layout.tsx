import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Cripcocode Technologies - IT Solutions & Services',
  description: 'Leading IT solutions and services provider specializing in web development, mobile apps, AI solutions, and digital transformation.',
  keywords: [
    'Cripcocode Tech', 'IT Services Memari', 'Web Development', 'Mobile App Development',
    'AI Solutions', 'Digital Transformation', 'Website Design Burdwan', 'Software Company Kolkata',
    'React Development', 'Node.js Experts', 'Next.js SEO Company', 'Tech Agency India'
  ],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Cripcocode Technologies - IT Solutions & Services',
    description: 'Leading provider in web, mobile, and AI solutions. Trusted by businesses in Memari, Burdwan, and Kolkata.',
    url: 'https://technologies.cripcocode.org',
    siteName: 'Cripcocode Technologies',
    type: 'website',
    images: [
      {
        url: '/seo-banner.png',
        width: 1200,
        height: 630,
        alt: 'Cripcocode Technologies Banner',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}