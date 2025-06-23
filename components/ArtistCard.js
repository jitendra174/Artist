import Link from "next/link";

export default function ArtistCard({ artist }) {
  return (
    <div className="bg-dark-card rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-dark-accent">{artist.name}</h3>
        <p className="text-sm text-gray-400">
          {artist.category} • {artist.location}
        </p>
        <p className="mt-2 font-medium">{artist.fee}</p>

        {/* Book Now Button */}
        <Link href="/book">
          <button className="mt-4 w-full bg-dark-accent text-white px-4 py-2 rounded hover:bg-dark-accent/80 transition">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
