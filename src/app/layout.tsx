import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
import CookieConsent from "@/components/CookieConsent";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL('https://artofdent.se'),
  title: "Artofdent - Professionell Tandvård i Malmö | Tandläkare & Tandimplantat",
  description: "Professionell tandvård i Malmö. Erfarna tandläkare, moderna behandlingar, tandimplantat och akut tandvård. Boka tid online hos Artofdent och ABC Tandklinikgruppen.",
  keywords: "tandläkare malmö, tandvård malmö, tandimplantat malmö, akut tandvård, tandblekning, artofdent, abc tandklinikgruppen",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Artofdent - Professionell Tandvård i Malmö",
    description: "Erfarna tandläkare och moderna behandlingar i Malmö. Boka tid online.",
    url: "https://artofdent.se",
    siteName: "Artofdent",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: '/images/Untitled design (6).png',
        width: 1200,
        height: 630,
        alt: 'Artofdent - Professionell Tandvård',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Artofdent - Professionell Tandvård i Malmö",
    description: "Erfarna tandläkare och moderna behandlingar i Malmö. Boka tid online.",
    images: ['/images/Untitled design (6).png'],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Chatbot />
      </body>
    </html>
  );
}
