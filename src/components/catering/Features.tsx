import { useGsapFadeUp, useGsapStagger } from "@/hooks/useGsap";

const features = [
  {
    icon: "⚡",
    title: "Fast Billing",
    desc: "Process orders in seconds with a smooth, responsive interface built for high-speed environments.",
  },
  {
    icon: "📦",
    title: "Inventory Control",
    desc: "Track stock in real time, reduce wastage, and stay updated with automatic inventory management.",
  },
  {
    icon: "📊",
    title: "Real-Time Insights",
    desc: "Access sales reports, performance metrics, and business data instantly to make smarter decisions.",
  },
  {
    icon: "🔗",
    title: "Seamless Operations",
    desc: "Connect billing, kitchen, and management into one unified workflow for complete control.",
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
