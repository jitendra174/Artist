import ArtistTable from "../../components/ArtistTable";
import data from "../../data/artists.json";

export default function DashboardPage() {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-dark-bg text-dark-text px-4">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center text-dark-accent">
        Artist Dashboard
      </h2>

      {/* Artist Table Component */}
      <ArtistTable artists={data} />
    </main>
  );
}


export const metadata = {
  title: "Artist Dashboard | Artistly",
  description: "Manage and review top performers from Telugu states and Chennai.",
  keywords: [
    "artist dashboard",
    "manage artists",
    "event performers admin",
    "Artistly management",
    "south india artists",
  ],
  openGraph: {
    title: "Artist Dashboard | Artistly",
    description: "View and manage performing artists listed on Artistly.",
    url: "https://artistly.com/dashboard",
    siteName: "Artistly",
    images: [
      {
        url: "/images/seo-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Artist Dashboard Overview",
      },
    ],
    type: "website",
  },
};
