type MusicCardProps = {
  title: string;
  description: string;
  story: string;
  links: {
    spotify: string;
    appleMusic: string;
    youtube: string;
    hyperfollow: string;
  };
};

export function MusicCard({ title, description, story, links }: MusicCardProps) {
  return (
    <article className="panel overflow-hidden rounded-lg">
      {/* Replace this placeholder block with real cover art, preferably a square image in /public/images. */}
      <div className="cover-placeholder flex aspect-square min-h-64 items-end p-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/70">Single</p>
          <h3 className="mt-2 text-3xl font-black text-black">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[#f2e4d0]/80">{description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {/* Replace song links in data/site.ts with real Spotify, Apple Music, YouTube, and HyperFollow URLs. */}
          <a className="button-primary text-sm" href={links.spotify}>
            Spotify
          </a>
          <a className="button-secondary text-sm" href={links.appleMusic}>
            Apple Music
          </a>
          <a className="button-secondary text-sm" href={links.youtube}>
            YouTube
          </a>
          <a className="button-secondary text-sm" href={links.hyperfollow}>
            HyperFollow
          </a>
        </div>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#54c3b2]">Lyrics / Story</p>
          <p className="mt-3 text-sm leading-6 text-[#f2e4d0]/68">{story}</p>
        </div>
      </div>
    </article>
  );
}
