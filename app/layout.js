import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Artistly",
  description: "Discover and manage artists from Telugu states and Chennai",
  keywords: [
    "artist booking",
    "telugu performers",
    "chennai artists",
    "event entertainers",
    "Artistly"
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

        {/* Page content */}
        <main className="pt-20 min-h-screen">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />

        <Footer />
      </body>
    </html>
  );
}
