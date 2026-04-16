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
              <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>Our Story</p>
              <h2 className="section-heading">A Legacy of Exquisite Dining</h2>
              <div className="gold-divider !mx-0 mt-4 mb-6" />
            </div>
            <div ref={textRef} className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>
                For over a decade, Élégance Catering has been the trusted partner behind the region's most celebrated events. Born from a passion for culinary excellence, we transform every gathering into a sensory masterpiece.
              </p>
              <p>
                Our philosophy is simple: every plate tells a story, every event deserves perfection. From intimate private dinners to grand wedding receptions, our award-winning team combines locally sourced ingredients with world-class technique.
              </p>
              <p>
                We don't just serve food — we curate experiences. Each menu is a collaboration between our chefs and you, ensuring your vision comes to life with flavors that linger long after the last course.
              </p>
              <div className="flex gap-12 pt-4">
                <div>
                  <span className="text-3xl font-serif font-bold text-gold">500+</span>
                  <p className="text-sm text-muted-foreground mt-1">Events Catered</p>
                </div>
                <div>
                  <span className="text-3xl font-serif font-bold text-gold">12+</span>
                  <p className="text-sm text-muted-foreground mt-1">Years of Excellence</p>
                </div>
                <div>
                  <span className="text-3xl font-serif font-bold text-gold">98%</span>
                  <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
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
