import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroPlated from "@/assets/hero-plated.jpg";
import heroBuffet from "@/assets/hero-buffet.jpg";

const slides = [
  { src: heroWedding, alt: "Luxury wedding reception" },
  { src: heroPlated, alt: "Fine dining plated meal" },
  { src: heroBuffet, alt: "Premium buffet spread" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
        </div>
      ))}

      <div ref={overlayRef} className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(220,20%,10%,0.45), hsla(220,20%,10%,0.65))" }} />

     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
  <h1
    ref={headingRef}
    className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0"
    style={{ color: "hsl(40,33%,96%)" }}
  >
    Smart Billing
    <br />
    <span className="text-gold italic font-medium">
      Built for Modern Businesses
    </span>
  </h1>

  <p
    ref={subRef}
    className="mt-6 text-base md:text-lg max-w-xl font-light opacity-0"
    style={{ color: "hsl(40,33%,96%,0.85)" }}
  >
    Manage sales, inventory, and operations with speed and precision — designed
    for restaurants, retail, and growing businesses.
  </p>

  <div ref={ctaRef} className="mt-10 flex gap-4 opacity-0">
    <a href="#contact" className="btn-primary">
      Get Started
    </a>
    <a
      href="#features"
      className="btn-outline"
      style={{
        borderColor: "hsl(40,33%,96%,0.5)",
        color: "hsl(40,33%,96%)",
      }}
    >
      Explore Features
    </a>
  </div>
</div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-ivory/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
