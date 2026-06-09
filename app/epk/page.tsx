import SectionHeader from '@/components/SectionHeader'
import SocialLinks from '@/components/SocialLinks'
import { songs, siteConfig } from '@/data/site'

export default function EPKPage() {
  return (
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-4">
      <SectionHeader eyebrow="Electronic Press Kit" title="Tumbo Music 242" subtitle="Independent Artist - Nassau, Bahamas" centered />
      <div className="bg-dark-card border border-gold/30 rounded-sm p-8 mb-10 text-center">
        <p className="text-gray-400 text-sm">{siteConfig.location} - {siteConfig.email}</p>
      </div>
      <section className="mb-12">
        <h2 className="font-display text-xl text-gold font-bold mb-4 border-b border-dark-border pb-2">Discography</h2>
        <div className="space-y-4">
          {songs.map(song => (
            <div key={song.id} className="bg-dark-card border border-dark-border rounded-sm p-5">
              <h3 className="font-display text-white font-bold">{song.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{song.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="font-display text-xl text-gold font-bold mb-4 border-b border-dark-border pb-2">Contact</h2>
        <p className="text-gray-300 text-sm">{siteConfig.email}</p>
        <SocialLinks className="mt-4" />
      </section>
    </div>
  )
}