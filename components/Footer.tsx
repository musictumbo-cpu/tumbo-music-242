import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Link className="text-xl font-black" href="/">
            Tumbo Music 242
          </Link>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#f2e4d0]/65">
            Music from Nassau. Stories from real life.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
