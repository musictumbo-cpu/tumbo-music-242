import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Videos", "/videos"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["EPK", "/epk"],
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090807]/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Link className="text-base font-black text-[#fff8ef] sm:text-lg" href="/">
          Tumbo Music 242
        </Link>
        <div className="flex max-w-[68vw] gap-1 overflow-x-auto py-3 sm:max-w-none sm:gap-2">
          {navItems.map(([label, href]) => (
            <Link
              className="rounded-full px-3 py-2 text-sm font-bold text-[#f2e4d0]/78 transition hover:bg-white/8 hover:text-[#fff8ef]"
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
