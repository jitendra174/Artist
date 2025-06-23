export default function ArtistTable({ artists }) {
  return (
    <div className="overflow-x-auto bg-dark-card rounded-xl shadow-lg">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-dark-accent text-white">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Fee</th>
          </tr>
        </thead>
        <tbody className="text-dark-text">
          {artists.map((artist) => (
            <tr
              key={artist.id}
              className="border-b border-dark-bg hover:bg-dark-bg/60 transition duration-200"
            >
              <td className="px-6 py-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 font-medium">{artist.name}</td>
              <td className="px-6 py-4">{artist.category}</td>
              <td className="px-6 py-4">{artist.location}</td>
              <td className="px-6 py-4">{artist.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
