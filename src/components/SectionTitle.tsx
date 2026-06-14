type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mx-auto mb-5 h-px w-16 bg-gold" />
      <h2 className="font-serif text-4xl font-semibold text-slate-950 sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
