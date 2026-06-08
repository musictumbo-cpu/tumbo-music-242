import Link from "next/link";
import { EmailSignupPlaceholder } from "@/components/EmailSignupPlaceholder";
import { MusicCard } from "@/components/MusicCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { VideoEmbed } from "@/components/VideoEmbed";
import { songs, videos } from "@/data/site";

export default function Home() {
  const featuredSong = songs[0];
  const latestVideo = videos[0];

  return (
    <>
      <section className="grain min-h-[calc(100vh-4rem)] border-b border-white/10 py-16 sm:py-24">
        <div className="section-shell grid min-h-[72vh] items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#54c3b2]">
              Nassau, Bahamas
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.96] text-[#fff8ef] sm:text-7xl lg:text-8xl">
              Tumbo Music 242
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[#f2e4d0]/86 sm:text-2xl">
              Music from Nassau. Stories from real life.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#f2e4d0]/68">
              R&B, island storytelling, and Bahamian-inspired songs shaped by love,
              struggle, pride, and everyday truth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/music">
                Listen Now
              </Link>
              <Link className="button-secondary" href="/epk">
                View EPK
              </Link>
            </div>
          </div>
          <div className="panel rounded-lg p-5">
            {/* Replace this hero placeholder with a real artist photo in /public/images when available. */}
            <div className="cover-placeholder flex aspect-[4/5] items-end rounded-md p-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/70">
                  Artist Photo
                </p>
                <p className="mt-2 text-3xl font-black text-black">Replace with real photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Featured Release"
            title="Songs with roots, pride, and real-life feeling."
            description="Start with the latest featured single, then explore the full music page for streaming placeholders and song story sections."
          />
          <div className="max-w-2xl">
            <MusicCard {...featuredSong} />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 py-16 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Latest Video"
            title="Visuals for the music."
            description="A clean embed area ready for official videos, concepts, and behind-the-scenes clips."
          />
          <VideoEmbed embedUrl={latestVideo.embedUrl} title={latestVideo.title} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="About"
            title="Independent music from Nassau."
            description="Tumbo Music 242 creates R&B and Bahamian-inspired music rooted in local culture, love, struggle, pride, and island storytelling."
          />
          <div className="grid gap-5">
            <EmailSignupPlaceholder />
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
