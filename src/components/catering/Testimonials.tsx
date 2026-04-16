import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGsapFadeUp } from "@/hooks/useGsap";

const testimonials = [
  {
    quote: "Élégance Catering made our wedding day absolutely magical. Every guest raved about the food and service for weeks afterward.",
    name: "Sarah & James Wellington",
    event: "Wedding Reception, 200 Guests",
  },
  {
    quote: "The attention to detail was extraordinary. Our corporate gala felt like a Michelin-star experience from start to finish.",
    name: "David Chen",
    event: "Annual Corporate Gala",
  },
  {
    quote: "From menu planning to the last plate, they handled everything with grace and professionalism. Truly stress-free.",
    name: "Maria Gonzalez",
    event: "Private Birthday Celebration",
  },
  {
    quote: "We've used many caterers over the years, but Élégance is in a class of its own. Our clients are always impressed.",
    name: "Robert Anderson",
    event: "Quarterly Executive Dinners",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useGsapFadeUp();

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.4,
          onComplete: () => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
            gsap.fromTo(cardRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
          },
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ background: "radial-gradient(circle at 30% 70%, hsl(38,60%,55%), transparent 60%)" }} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={titleRef}>
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory">What Our Clients Say</h2>
          <div className="gold-divider mb-14" />
        </div>

        <div ref={cardRef} className="min-h-[200px]">
          <svg className="w-10 h-10 mx-auto mb-6 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-xl md:text-2xl italic text-ivory/90 leading-relaxed font-light">
            "{t.quote}"
          </blockquote>
          <div className="mt-8">
            <p className="font-medium text-gold">{t.name}</p>
            <p className="text-sm text-ivory/50 mt-1">{t.event}</p>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-6" : "bg-ivory/30"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
