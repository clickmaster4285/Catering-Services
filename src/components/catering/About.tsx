import { useGsapFadeUp } from "@/hooks/useGsap";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const titleRef = useGsapFadeUp();
  const textRef = useGsapFadeUp(0.2);
  const imgRef = useGsapFadeUp(0.1);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={imgRef} className="overflow-hidden rounded-lg">
            <img
              src={aboutTeam}
              alt="Our culinary team preparing gourmet dishes"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
 <div>
  <div ref={titleRef}>
    <p
      className="text-sm uppercase tracking-widest text-gold font-medium mb-3"
      style={{ letterSpacing: "0.2em" }}
    >
      Our Story
    </p>

    <h2 className="section-heading">
      Built for Speed, Designed for Control
    </h2>

    <div className="gold-divider !mx-0 mt-4 mb-6" />
  </div>

  <div
    ref={textRef}
    className="space-y-4 text-muted-foreground font-light leading-relaxed"
  >
    <p>
      Designed for modern businesses, our system simplifies the way you manage
      sales, inventory, and daily operations. What started as a solution to
      streamline complex workflows has evolved into a powerful platform trusted
      by growing businesses.
    </p>

    <p>
      We focus on what matters most — speed, reliability, and ease of use.
      Whether you're handling high-volume orders or managing multiple outlets,
      the system keeps everything running smoothly.
    </p>

    <p>
      More than just software, it's a tool to help you scale with confidence.
      From real-time insights to seamless billing, every feature is built to give
      you complete control over your business.
    </p>

    <div className="flex gap-12 pt-4">
      <div>
        <span className="text-3xl font-serif font-bold text-gold">1000+</span>
        <p className="text-sm text-muted-foreground mt-1">
          Businesses Served
        </p>
      </div>

      <div>
        <span className="text-3xl font-serif font-bold text-gold">99.9%</span>
        <p className="text-sm text-muted-foreground mt-1">
          System Uptime
        </p>
      </div>

      <div>
        <span className="text-3xl font-serif font-bold text-gold">24/7</span>
        <p className="text-sm text-muted-foreground mt-1">
          Support Availability
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;
