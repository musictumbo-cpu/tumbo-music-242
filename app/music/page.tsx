import { songs } from '@/data/site'
import MusicCard from '@/components/MusicCard'
import SectionHeader from '@/components/SectionHeader'

export default function MusicPage() {
  const released = songs.filter(s => s.status === 'released')
  const comingSoon = songs.filter(s => s.status === 'coming-soon')
  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-4">
      <SectionHeader eyebrow="Discography" title="All Music" subtitle="Independent releases from Nassau, Bahamas." centered />
      <div className="mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {released.map(song => (<MusicCard key={song.id} song={song} />))}
        </div>
      </div>
      {comingSoon.length > 0 && (<div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{comingSoon.map(song => (<MusicCard key={song.id} song={song} />))}</div></div>)}
    </div>
  )
}