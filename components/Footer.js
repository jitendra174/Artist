import Link from "next/link";
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-card text-gray-400 text-sm pt-10 pb-6 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand Description */}
        <div>
          <h2 className="text-white font-bold text-xl mb-3">🎤 Artistly</h2>
          <p>Discover & book South India's top performers for your next event.</p>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-200 transition">Home</Link></li>
            <li><Link href="/artists" className="hover:text-gray-200 transition">Artists</Link></li>
            <li><Link href="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:contact@artistly.in" className="hover:text-gray-200 transition">
                contact@artistly.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Hyderabad & Chennai</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <Youtube size={20} />
            </a>
            <a href="mailto:contact@artistly.in" className="hover:text-gray-200 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Artistly. All rights reserved.
      </div>
    </footer>
  );
}
