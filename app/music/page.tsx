import MusicCard from "@/components/MusicCard";
import { SectionHeader } from "@/components/SectionHeader";
import { songs } from "@/data/site";

export default function MusicPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Music"
        title="Featured songs"
        description="Stream links are placeholders until the real release links are ready. Replace them in data/site.ts."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {songs.map((song) => (
          <MusicCard key={song.title} {...song} />
        ))}
      </div>
    </section>
  );
}
