import MusicCard from '@/components/MusicCard'
import { songs } from '@/data/site'

export default function MusicPage() {
  const released = songs.filter((s) => s.status === 'released')
  const comingSoon = songs.filter((s) => s.status === 'coming-soon')
  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-gold text-xs uppercase tracking-widest mb-2">Discography</p>
        <h1 className="font-display text-4xl font-bold text-white">All Music</h1>
        <p className="text-gray-400 mt-2">Independent releases from Nassau, Bahamas. Stream everywhere.</p>
      </div>
      <div className="mb-16">
        <h3 className="text-xs uppercase tracking-widest text-gold font-semibold mb-6 border-b border-gray-800 pb-3">Out Now</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {released.map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>
      </div>
      {comingSoon.length > 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6 border-b border-gray-800 pb-3">Coming Soon</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoon.map((song) => (
              <MusicCard key={song.id} song={song} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}