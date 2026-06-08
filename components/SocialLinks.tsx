import { socialLinks } from "@/data/site";

const links = [
  ["Spotify", socialLinks.spotify],
  ["Apple Music", socialLinks.appleMusic],
  ["YouTube", socialLinks.youtube],
  ["Instagram", socialLinks.instagram],
  ["Facebook", socialLinks.facebook],
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Replace placeholder social/music URLs in data/site.ts when real profiles are ready. */}
      {links.map(([label, href]) => (
        <a className="button-secondary text-sm" href={href} key={label}>
          {label}
        </a>
      ))}
    </div>
  );
}
