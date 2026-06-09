import { songs } from '@/data/site'
import MusicCard from '@/components/MusicCard'
import SectionHeader from '@/components/SectionHeader'

export const metadata = {
  title: 'Music | Tumbo Music 242',
  description: 'Stream and download music by Tumbo Music 242 — Nassau, Bahamas.',
}

export default function MusicPage() {
  const released = songs.filter(s => s.status === 'released')
  const comingSoon = songs.filter(s => s.status === 'coming-soon')

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-4">
      <SectionHeader eyebrow="Discography" title="All Music" subtitle="Independent releases from Nassau, Bahamas. Stream everywhere." centered />
      <div className="mb-16">
        <h3 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6 border-b border-dark-border pb-3">Out Now</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {released.map(song => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>
      </div>
      {comingSoon.length > 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold mb-6 border-b border-dark-border pb-3">Coming Soon</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoon.map(song => (
              <MusicCard key={song.id} song={song} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
