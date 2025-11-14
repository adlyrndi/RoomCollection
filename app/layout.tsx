import type { Metadata } from "next";
import { Geist, Geist_Mono, Crushed } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script"; // <-- tambah ini

const neutralsans = localFont({
  src: [
    {
      path: "./fonts/neutralsans.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neutralsans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crushed = Crushed({
  variable: "--font-crushed",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Room Collection",
  description: "Finest Perfume Collections",
  icons: {
    icon: "/logo-abu.svg",
    shortcut: "/logo-abu.svg",
    apple: "/logo-abu.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0MJPY5C5P4"
        />
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0MJPY5C5P4');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crushed.variable} ${neutralsans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
