import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://artistly.com"), 
  title: "Artistly",
  description: "Discover and manage artists from Telugu states and Chennai",
  keywords: [
    "artist booking",
    "telugu performers",
    "chennai artists",
    "event entertainers",
    "Artistly",
  ],
  openGraph: {
    title: "Artistly – South India's Top Talent Booking",
    description: "Easily find and book performers from Telugu states and Chennai.",
    url: "https://artistly.com",
    siteName: "Artistly",
    images: [
      {
        url: "/images/seo-main-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Artistly Splash Banner",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-bg text-dark-text`}>
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
