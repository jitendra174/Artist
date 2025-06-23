import ArtistForm from "../../components/ArtistForm";

export const metadata = {
  title: "Upload Artist | Artistly",
  description: "Add new artists to the Artistly platform from Telugu states and Chennai.",
  keywords: [
    "upload artist",
    "add performer",
    "artist dashboard",
    "artist onboarding",
    "Artistly admin"
  ],
  openGraph: {
    title: "Upload New Artist | Artistly",
    description: "Admin page to upload and manage artists on Artistly.",
    url: "https://artistly.com/onboard",
    siteName: "Artistly",
    images: [
      {
        url: "/images/seo-upload-artist.jpg", 
        width: 1200,
        height: 630,
        alt: "Artist Upload Banner",
      },
    ],
    type: "website",
  },
};

export default function OnboardPage() {
  return (
    <main className="min-h-screen pt-28 pb-10 px-4 bg-dark-bg text-dark-text">
      <h2 className="text-3xl font-bold mb-8 text-center text-dark-accent">Upload a New Artist</h2>

      {/* ArtistForm component handles the form logic */}
      <section className="max-w-3xl mx-auto bg-dark-card p-6 rounded-xl shadow-md">
        <ArtistForm />
      </section>
    </main>
  );
}
