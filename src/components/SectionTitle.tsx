type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mx-auto mb-5 h-px w-16 bg-gold" />
      <h2 className="font-serif text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="cgx-section-subtitle mt-4 text-xl leading-relaxed text-slate-600 sm:text-2xl">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
