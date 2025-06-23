"use client";
import { useState } from "react";
import ArtistCard from "../../components/ArtistCard";
import data from "../../data/artists.json";

export default function ArtistsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [price, setPrice] = useState("All");

  const categories = ["All", "Singer", "Dancer", "Comedian", "Anchor"];
  const locations = ["All", "Hyderabad", "Chennai", "Vizag"];
  const prices = ["All", "5000", "10000", "20000"];

  const filteredArtists = data.filter((artist) => {
    const matchesCategory = category === "All" || artist.category === category;
    const matchesLocation = location === "All" || artist.location === location;
    const matchesPrice =
      price === "All" || parseInt(artist.fee.replace(/\D/g, "")) <= parseInt(price);
    const matchesSearch = artist.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesLocation && matchesPrice && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-28 pb-10 bg-dark-bg text-dark-text px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-dark-accent">
        Explore Artists
      </h2>

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-dark-card text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-dark-accent"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-lg bg-dark-card text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-dark-accent"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded-lg bg-dark-card text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-dark-accent"
        >
          {locations.map((loc) => (
            <option key={loc}>{loc}</option>
          ))}
        </select>

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="px-4 py-2 rounded-lg bg-dark-card text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-dark-accent"
        >
          {prices.map((amt) => (
            <option key={amt} value={amt}>
              {amt === "All" ? "Any Price" : `Up to ₹${amt}`}
            </option>
          ))}
        </select>
      </div>

      {/* Artist Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No matching artists found.
          </p>
        )}
      </div>
    </main>
  );
}
