import { useGsapFadeUp, useGsapStagger } from "@/hooks/useGsap";

const features = [
  {
    icon: "📋",
    title: "Custom Menus",
    desc: "Tailored menus designed around your theme, dietary needs, and culinary dreams — never a one-size-fits-all approach.",
  },
  {
    icon: "⏱️",
    title: "Punctual Service",
    desc: "Military precision meets hospitality warmth. Every course served at the perfect moment, every time.",
  },
  {
    icon: "🎨",
    title: "Artful Presentation",
    desc: "Each dish is a visual masterpiece — plated with the same care an artist brings to canvas.",
  },
  {
    icon: "👔",
    title: "Professional Staff",
    desc: "Impeccably trained service staff who anticipate needs and elevate the guest experience with discreet excellence.",
  },
];

const Features = () => {
  const titleRef = useGsapFadeUp();
  const gridRef = useGsapStagger();

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <div ref={titleRef}>
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>Why Choose Us</p>
          <h2 className="section-heading">The Élégance Difference</h2>
          <p className="section-subheading">Four pillars that define every event we touch.</p>
          <div className="gold-divider" />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((f) => (
            <div key={f.title} className="group text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-5 bg-blush-light group-hover:bg-gold/20 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
