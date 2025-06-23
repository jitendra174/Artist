"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("../components/SplashScreen"), {
  ssr: false,
});

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "Singers", image: "/images/artists/singers.jpg" },
    { name: "Dancers", image: "/images/artists/dancers.jpg" },
    { name: "Comedians", image: "/images/artists/comedians.jpg" },
    { name: "Anchors", image: "/images/artists/anchors.jpg" },
  ];

  if (showSplash) return <SplashScreen />;

  return (
    <section className="pt-32 px-6 pb-20 text-center bg-dark-bg text-dark-text min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-dark-accent mb-6">
        Discover Top Performing Artists
      </h1>
      <p className="text-lg max-w-2xl mx-auto text-gray-400 mb-8">
        Book talented singers, dancers, comedians, and more from Telugu states & Chennai for your events.
      </p>
      <Link
        href="/artists"
        className="inline-block bg-dark-accent hover:bg-dark-accent/80 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
      >
        Explore Artists
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-dark-card rounded-xl shadow hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-dark-text">{cat.name}</h3>
              <p className="text-sm text-gray-400 mt-1">Top-rated performers</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
