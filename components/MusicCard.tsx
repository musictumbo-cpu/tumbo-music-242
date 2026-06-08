import { Song } from '@/data/site'
import Image from 'next/image'

interface Props { song: Song }

export default function MusicCard({ song }: Props) {
  const isReleased = song.status === 'released'

  return (
    <div className="bg-dark-card border border-dark-border rounded-sm overflow-hidden flex flex-col">
      {/* Cover art */}
      <div className="relative aspect-square bg-gradient-to-br from-ocean/60 via-dark to-gold/20">
        <Image
          src={song.coverArt}
          alt={song.title}
          fill
          className="object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        {/* Status badge */}
        <div className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider z-10 ${
          isReleased ? 'bg-gold text-black' : 'bg-gray-700 text-gray-300'
        }`}>
          {isReleased ? 'Out Now' : 'Coming Soon'}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-white text-lg font-bold mb-2">{song.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{song.description}</p>

        {isReleased ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {song.spotify && (
              <a href={song.spotify} target="_blank" rel="noopener noreferrer"
                 className="btn-gold text-xs px-4 py-2">Spotify</a>
            )}
            {song.appleMusic && (
              <a href={song.appleMusic} target="_blank" rel="noopener noreferrer"
                 className="btn-outline text-xs px-4 py-2">Apple Music</a>
            )}
            {song.youtube && (
              <a href={song.youtube} target="_blank" rel="noopener noreferrer"
                 className="btn-outline text-xs px-4 py-2">YouTube</a>
            )}
          </div>
        ) : (
          <div className="mt-5">
            <p className="text-gold/70 text-sm italic">Dropping soon — stay tuned.</p>
          </div>
        )}
      </div>
    </div>
  )
}
