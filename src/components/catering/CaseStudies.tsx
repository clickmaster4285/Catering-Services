import { useGsapFadeUp } from "@/hooks/useGsap";
import caseStudy1 from "@/assets/case-study-1.jpg";

const caseStudies = [
  {
    img: caseStudy1,
    title: "Optimizing High-Volume Business Operations",
    subtitle: "Growing Brand — Multi-Outlet Setup",
    desc:
      "By implementing a unified system across locations, the business gained real-time visibility, faster transactions, and seamless control over daily operations.",
    stats: ["Multi-Outlet", "Real-Time Insights", "Seamless Operations"],
  },
];

const CaseStudies = () => {
  const ref = useGsapFadeUp();

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <div ref={ref}>
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>Our Work</p>
          <h2 className="section-heading">Event Transformations</h2>
          <p className="section-subheading">See how we turn empty spaces into extraordinary experiences.</p>
          <div className="gold-divider mb-14" />
        </div>

        {caseStudies.map((c) => (
          <div key={c.title} className="card-elegant overflow-hidden">
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
              width={1200}
              height={600}
            />
            <div className="p-8 md:p-12 text-left">
              <p className="text-sm uppercase tracking-widest text-gold font-medium mb-2">{c.subtitle}</p>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4">{c.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">{c.desc}</p>
              <div className="flex gap-8 mt-6">
                {c.stats.map((s) => (
                  <span key={s} className="text-sm font-medium text-charcoal bg-blush-light px-4 py-2 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
