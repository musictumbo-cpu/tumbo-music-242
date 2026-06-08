type VideoEmbedProps = {
  title: string;
  embedUrl: string;
};

export function VideoEmbed({ title, embedUrl }: VideoEmbedProps) {
  const isPlaceholder = embedUrl.includes("YOUTUBE_EMBED_LINK_HERE");

  return (
    <div className="panel overflow-hidden rounded-lg">
      {/* Replace YOUTUBE_EMBED_LINK_HERE with a YouTube embed URL like https://www.youtube.com/embed/VIDEO_ID. */}
      <div className="aspect-video bg-black">
        {isPlaceholder ? (
          <div className="grain flex h-full items-center justify-center border-b border-white/10 bg-[#16110d] p-6 text-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f4b95f]">YouTube Embed</p>
              <p className="mt-3 text-xl font-black">{title}</p>
              <p className="mt-2 text-sm text-[#f2e4d0]/65">YOUTUBE_EMBED_LINK_HERE</p>
            </div>
          </div>
        ) : (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            src={embedUrl}
            title={title}
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black">{title}</h3>
      </div>
    </div>
  );
}
