import { MusicCard } from "@/components/MusicCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { VideoEmbed } from "@/components/VideoEmbed";
import { songs, videos } from "@/data/site";

export default function EpkPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="EPK / Press Kit"
        title="Tumbo Music 242 press kit"
        description="A simple electronic press kit for media, promoters, DJs, and collaborators."
      />

      <div className="grid gap-8">
        <div className="panel rounded-lg p-6">
          <h2 className="text-2xl font-black">Artist Bio</h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-[#f2e4d0]/75">
            Tumbo Music 242 is an independent music creator from Nassau, Bahamas,
            creating R&B and Bahamian-inspired music rooted in real life, local
            culture, love, struggle, pride, and island storytelling.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-black">Featured Songs</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {songs.map((song) => (
              <MusicCard key={song.title} {...song} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-black">Press Photos</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((photo) => (
              <div className="panel rounded-lg p-3" key={photo}>
                {/* Replace these placeholders with approved press photos in /public/images. */}
                <div className="cover-placeholder flex aspect-[4/5] items-end rounded-md p-4">
                  <p className="text-lg font-black text-black">Photo {photo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-black">Video Links</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {videos.slice(0, 2).map((video) => (
              <VideoEmbed embedUrl={video.embedUrl} key={video.title} title={video.title} />
            ))}
          </div>
        </div>

        <div className="panel rounded-lg p-6">
          <h2 className="text-2xl font-black">Music Links</h2>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <div className="panel rounded-lg p-6">
          <h2 className="text-2xl font-black">Contact Info</h2>
          <p className="mt-3 text-[#f2e4d0]/75">contact@tumbomusic.com</p>
        </div>

        <div className="panel rounded-lg p-6">
          <h2 className="text-2xl font-black">Download Assets</h2>
          {/* Add a real downloadable EPK PDF, logo pack, or press photo ZIP here when assets are ready. */}
          <a className="button-primary mt-5" href="DOWNLOAD_ASSETS_LINK_HERE">
            Download Assets
          </a>
        </div>
      </div>
    </section>
  );
}
