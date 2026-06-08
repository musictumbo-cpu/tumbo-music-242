import { SectionHeader } from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="About"
        title="Tumbo Music 242"
        description="An independent music creator from Nassau, Bahamas."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel rounded-lg p-5">
          {/* Replace this placeholder with a real artist portrait or live performance photo. */}
          <div className="cover-placeholder flex aspect-[4/5] items-end rounded-md p-6">
            <p className="text-3xl font-black text-black">Artist photo placeholder</p>
          </div>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#f2e4d0]/78">
          <p>
            Tumbo Music 242 is an independent music creator from Nassau, Bahamas,
            making songs rooted in real life, local culture, love, struggle, pride,
            and island storytelling.
          </p>
          <p>
            The sound blends R&B feeling with a Bahamian pulse, carrying stories that
            feel close to home while still reaching listeners anywhere. Every release
            is built around honesty: the weight people carry, the joy they protect,
            the relationships that shape them, and the pride that keeps them moving.
          </p>
          <p>
            With songs like “Poor and Proud” and “She Bumped Into Me,” Tumbo Music 242
            creates music for listeners who value melody, emotion, and stories that
            come from real places.
          </p>
        </div>
      </div>
    </section>
  );
}
