import { SectionHeader } from "@/components/SectionHeader";
import { SocialLinks } from "@/components/SocialLinks";

const inquiryTypes = [
  {
    title: "Booking Inquiries",
    body: "For performances, events, showcases, and live appearances.",
  },
  {
    title: "Collaboration Inquiries",
    body: "For producers, artists, writers, visual creators, and brand partnerships.",
  },
  {
    title: "Radio / DJ Contact",
    body: "For clean edits, drops, interviews, spins, and playlist consideration.",
  },
];

export default function ContactPage() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeader
        eyebrow="Contact / Booking"
        title="Reach Tumbo Music 242"
        description="Use the email placeholder below for booking, collaborations, radio, DJ support, and media requests."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {inquiryTypes.map((item) => (
          <article className="panel rounded-lg p-6" key={item.title}>
            <h2 className="text-xl font-black">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#f2e4d0]/70">{item.body}</p>
          </article>
        ))}
      </div>
      <div className="panel mt-8 rounded-lg p-6">
        {/* Replace contact@tumbomusic.com if you use a different booking email. */}
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#54c3b2]">Email</p>
        <a className="mt-2 block text-2xl font-black text-[#f4b95f]" href="mailto:contact@tumbomusic.com">
          contact@tumbomusic.com
        </a>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
