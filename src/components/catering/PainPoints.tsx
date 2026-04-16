import { useGsapFadeUp, useGsapStagger } from "@/hooks/useGsap";

const painPoints = [
  {
    icon: "😰",
    title: "Event Planning Stress",
    desc: "Coordinating food, timing, and quality across vendors leaves you overwhelmed and anxious.",
  },
  {
    icon: "😞",
    title: "Inconsistent Quality",
    desc: "You've experienced disappointing food that didn't match promises — leaving guests underwhelmed.",
  },
  {
    icon: "⏰",
    title: "Late Deliveries",
    desc: "Delayed service disrupts your schedule and creates awkward gaps during your most important moments.",
  },
  {
    icon: "🍽️",
    title: "Poor Presentation",
    desc: "Food that tastes fine but looks uninspired fails to create the visual impact your event deserves.",
  },
];

const PainPoints = () => {
  const titleRef = useGsapFadeUp();
  const gridRef = useGsapStagger();

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto text-center">
        <div ref={titleRef}>
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>The Challenge</p>
          <h2 className="section-heading">Why Most Events Fall Short</h2>
          <p className="section-subheading">Your event should be a masterpiece — not a source of worry.</p>
          <div className="gold-divider" />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="card-elegant p-8 text-center group"
            >
              <span className="text-4xl block mb-4">{p.icon}</span>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
