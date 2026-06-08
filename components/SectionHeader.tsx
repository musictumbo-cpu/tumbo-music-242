type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#f4b95f]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black text-[#fff8ef] sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#f2e4d0]/78 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
