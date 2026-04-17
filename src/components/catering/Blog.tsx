import { useGsapFadeUp, useGsapStagger } from "@/hooks/useGsap";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img: blog1,
    date: "March 15, 2026",
    title: "The Future of Business Operations Starts Here",
    excerpt:
      "Explore how next-generation systems are redefining speed, accuracy, and control for modern businesses.",
  },
  {
    img: blog2,
    date: "February 28, 2026",
    title: "Operational Excellence: A Guide for Growing Businesses",
    excerpt:
      "Build smoother workflows, reduce friction, and scale confidently with the right operational foundation.",
  },
  {
    img: blog3,
    date: "February 10, 2026",
    title: "Turning Data into Decisions",
    excerpt:
      "Leverage real-time insights to unlock smarter strategies and drive long-term growth.",
  },
];

const Blog = () => {
  const titleRef = useGsapFadeUp();
  const gridRef = useGsapStagger();

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto text-center">
        <div ref={titleRef}>
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>Insights</p>
          <h2 className="section-heading">From Our Kitchen</h2>
          <p className="section-subheading">Tips, trends, and inspiration for your next event.</p>
          <div className="gold-divider" />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8 mt-14">
          {posts.map((p) => (
            <article key={p.title} className="card-elegant group text-left cursor-pointer">
              <div className="overflow-hidden h-52">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-gold mb-2">{p.date}</p>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
