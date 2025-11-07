import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from "@/components/CookieConsent";
import Chatbot from "@/components/Chatbot";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://artofdent.dk'),
  title: "Artofdent - Professionel Tandpleje i Malmö | Tandlæge & Tandimplantater",
  description: "Professionel tandpleje i Malmö til danske patienter. Betydelige besparelser på tandbehandling! Vi betaler din rejse over Øresund. Erfarne tandlæger, moderne behandlinger, tandimplantater og akut tandpleje.",
  keywords: "tandlæge københavn, billig tandlæge, tandbehandling københavn, tandimplantat københavn, tandlæge malmö, tandpleje sverige, øresund tandlæge, billigere tandlæge sverige",
  icons: {
    icon: [
      { url: '/images/favi.png', sizes: 'any', type: 'image/png' },
      { url: '/images/favi.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favi.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/images/favi.png',
    apple: '/images/favi.png',
    other: [
      {
        rel: 'icon',
        url: '/images/favi.png',
      },
    ],
  },
  openGraph: {
    title: "Artofdent - Professionel Tandpleje i Malmö til Danske Patienter",
    description: "Betydelige besparelser på tandbehandling! Vi betaler din rejse over Øresund. Erfarne tandlæger og moderne behandlinger i Malmö.",
    url: "https://artofdent.dk",
    siteName: "Artofdent Danmark",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: '/images/Untitled design (6).png',
        width: 1200,
        height: 630,
        alt: 'Artofdent - Professionel Tandpleje til Danske Patienter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Artofdent - Professionel Tandpleje i Malmö til Danske Patienter",
    description: "Betydelige besparelser på tandbehandling! Vi betaler din rejse over Øresund. Erfarne tandlæger og moderne behandlinger i Malmö.",
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
    <html lang="da" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Chatbot />
      </body>
    </html>
  );
}
