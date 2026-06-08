import { SectionHeader } from "@/components/SectionHeader";
import { VideoEmbed } from "@/components/VideoEmbed";
import { videos } from "@/data/site";

export default function VideosPage() {
  const groups = ["Official Music Videos", "Coming Soon", "Behind-the-Scenes Clips"];

  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Videos"
        title="Featured videos and upcoming visuals."
        description="Nassau Girls the Sweetest is featured as the current YouTube video placeholder. Poor and Proud is marked as a music video coming soon."
      />
      <div className="grid gap-10">
        {groups.map((group) => (
          <div key={group}>
            <h2 className="mb-4 text-2xl font-black">{group}</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {videos
                .filter((video) => video.label === group)
                .map((video) => (
                  <VideoEmbed
                    embedUrl={video.embedUrl}
                    key={video.title}
                    note={video.note}
                    title={video.title}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
