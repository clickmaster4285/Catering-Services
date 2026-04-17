import { useGsapFadeUp, useGsapStagger } from "@/hooks/useGsap";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import servicePrivate from "@/assets/service-private.jpg";

const services = [
  {
    img: serviceWedding,
    title: "Restaurant Management",
    desc: "Handle orders, billing, and kitchen operations seamlessly — built for fast-paced dining environments.",
  },
  {
    img: serviceCorporate,
    title: "Retail Operations",
    desc: "Manage sales, inventory, and customers with a smooth checkout experience across your store.",
  },
  {
    img: servicePrivate,
    title: "Multi-Outlet Control",
    desc: "Monitor and manage multiple locations from one system with real-time data and centralized control.",
  },
];

const Services = () => {
  const titleRef = useGsapFadeUp();
  const gridRef = useGsapStagger();

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto text-center">
        <div ref={titleRef}>
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>What We Offer</p>
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">Tailored culinary experiences for life's most important occasions.</p>
          <div className="gold-divider" />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8 mt-14">
          {services.map((s) => (
            <div key={s.title} className="card-elegant group">
              <div className="overflow-hidden h-64">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
