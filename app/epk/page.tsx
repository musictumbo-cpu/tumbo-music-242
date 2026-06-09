import SectionHeader from '@/components/SectionHeader'
import { songs, siteConfig } from '@/data/site'
export default function EPKPage() {
  return (
    <div className='pt-24 pb-16 max-w-5xl mx-auto px-4'>
      <SectionHeader eyebrow='Press Kit' title='Tumbo Music 242' subtitle='Nassau, Bahamas' centered />
      <p className='text-center text-gray-400 mb-10'>{siteConfig.email}</p>
      <div className='space-y-4'>
        {songs.map(song => (
          <div key={song.id} className='bg-dark-card border border-dark-border rounded-sm p-5'>
            <h3 className='font-display text-white font-bold'>{song.title}</h3>
            <p className='text-gray-400 text-sm mt-1'>{song.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
