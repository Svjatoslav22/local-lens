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

export const metadata = {
  title: "Local Lens Sambir",
  description: "Відкрийте найкращі місця Самбора: ресторани, кафе, спортивні центри, парки та розваги.",
  keywords: ["Самбір", "місця Самбора", "ресторани", "кафе", "парки", "розваги"],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Local Lens Sambir",
    description: "Відкрийте найкращі місця Самбора: ресторани, кафе, спортивні центри, парки та розваги.",
    url: "https://local-lens-sambir-ss.vercel.app",
    siteName: "Local Lens Sambir",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Local Lens Sambir - Карта локацій",
      },
    ],
    locale: "uk_UA",
    type: "website",
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
