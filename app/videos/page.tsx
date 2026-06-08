import { SectionHeader } from "@/components/SectionHeader";
import { VideoEmbed } from "@/components/VideoEmbed";
import { videos } from "@/data/site";

export default function VideosPage() {
  const groups = ["Official Music Videos", "AI Music Video Concepts", "Behind-the-Scenes Clips"];

  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Videos"
        title="Official visuals, concepts, and behind the scenes."
        description="Use these sections to organize YouTube embeds without cluttering the page."
      />
      <div className="grid gap-10">
        {groups.map((group) => (
          <div key={group}>
            <h2 className="mb-4 text-2xl font-black">{group}</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {videos
                .filter((video) => video.label === group)
                .map((video) => (
                  <VideoEmbed embedUrl={video.embedUrl} key={video.title} title={video.title} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
