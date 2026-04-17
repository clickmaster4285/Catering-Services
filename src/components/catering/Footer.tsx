const Footer = () => {
  return (
    <footer className="bg-charcoal py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-gold mb-4">
              Élégance<span className="text-ivory font-light"> Catering</span>
            </h3>
           <p className="text-ivory/60 font-light text-sm leading-relaxed max-w-sm">
  A fast, reliable POS system built to simplify billing, streamline operations, and give you full control over your business in real time.
</p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "Pinterest"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs uppercase tracking-wider text-ivory/40 hover:text-gold transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4" style={{ letterSpacing: "0.2em" }}>Quick Links</h4>
            <div className="space-y-3">
              {["About", "Services", "Portfolio", "Testimonials", "Blog", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4" style={{ letterSpacing: "0.2em" }}>Contact</h4>
            <div className="space-y-3 text-sm text-ivory/50">
              <p>marketing@clickmasters.pk</p>
              <p>+92 333-1116842</p>
              <p>Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-12 pt-8 text-center">
          <p className="text-xs text-ivory/30">
            © {new Date().getFullYear()} Élégance Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
