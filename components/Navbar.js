"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-card shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold text-gray-200 hover:text-gray-100">
          Artistly
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/artists" className="text-gray-300 hover:text-white transition">Artists</Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white transition">Dashboard</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-card px-6 py-4 space-y-4 border-t border-gray-700">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/artists"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            Artists
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300 hover:text-white transition"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
