import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Local Lens Sambir - Путівник по найкращих місцях Самбора",
  description: "Відкрийте найкращі місця Самбора з Local Lens: ресторани, кафе, спортивні центри, парки, розважальні заклади. Ваш персональний гід по місту.",
  keywords: ["Самбір", "ресторани Самбір", "кафе Самбір", "спорт Самбір", "розваги Самбір", "парки Самбір", "місця Самбір", "путівник Самбір"],
  authors: [{ name: "Local Lens Team" }],
  creator: "Local Lens",
  publisher: "Local Lens",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://local-lens-sambir.vercel.app',
    title: 'Local Lens Sambir - Путівник по найкращих місцях Самбора',
    description: 'Відкрийте найкращі місця Самбора: ресторани, кафе, спортивні центри, парки та розваги.',
    siteName: 'Local Lens Sambir',
    images: [
      {
        url: "https://local-lens-sambir.vercel.app/images/og-card.svg",
        width: 1200,
        height: 630,
        alt: "Local Lens Sambir - Путівник по найкращих місцях Самбора з детальною інформацією про заклади",
      },
      {
        url: "https://local-lens-sambir.vercel.app/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Local Lens Sambir - Путівник по найкращих місцях Самбора",
      },
      {
        url: "https://www.davlermedia.com/wp-content/uploads/city-guide-square.png",
        width: 800,
        height: 600,
        alt: "Local Lens Sambir - Путівник по Самбору (резервне зображення)",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Lens Sambir - Путівник по Самбору',
    description: 'Найкращі місця Самбора в одному додатку',
    images: ['https://local-lens-sambir.vercel.app/images/og-card.svg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
