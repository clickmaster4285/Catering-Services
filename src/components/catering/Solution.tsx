import { useGsapFadeUp } from "@/hooks/useGsap";

const Solution = () => {
  const ref = useGsapFadeUp();

  return (
    <section className="section-padding bg-charcoal text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 50% 50%, hsl(38,60%,55%), transparent 70%)" }} />
      <div ref={ref} className="max-w-3xl mx-auto relative z-10">
        <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>The Solution</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-ivory">
          Your Vision, Flawlessly Delivered
        </h2>
        <div className="gold-divider mt-6 mb-8" />
        <p className="text-ivory/75 text-lg font-light leading-relaxed">
          Imagine an event where every detail is handled — from the first appetizer to the final dessert. No stress, no surprises, just seamless elegance. We become your invisible partner, transforming your vision into a stress-free, premium experience that your guests will talk about for years.
        </p>
        <a href="#contact" className="btn-primary mt-10 inline-block">
          Start Planning Today
        </a>
      </div>
    </section>
  );
};

export default Solution;
