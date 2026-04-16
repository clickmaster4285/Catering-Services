import { useState, useRef, useEffect } from "react";
import { Send, Mail, Phone, MapPin, Clock, Navigation, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Location data
const LOCATION = {
  fullAddress:
    "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
};

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION.fullAddress
)}&output=embed`;

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-el", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Valid email is required";
    }
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);

    // Button animation
    if (btnRef.current) {
      gsap.fromTo(btnRef.current, { scale: 1 }, { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1 });
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email marketing@clickmasters.pk");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-background border rounded-xl text-sm font-body transition-all duration-200 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="contact-el text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="contact-el text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground">
            Let's Create Something <span className="text-gradient-primary">Beautiful</span>
          </h2>
          <p className="contact-el text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tell us about your ice cream shop and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="contact-el bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{LOCATION.fullAddress}</p>
                </div>
              </div>
            </div>

            {/* Call Us and Email Us in same row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Phone */}
              <div className="contact-el bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Call Us</h3>
                    <p className="text-muted-foreground text-xs">+92 333-1116842</p>
                    <p className="text-muted-foreground text-xs">+92 332-5394285</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-el bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">Email Us</h3>
                    <p className="text-muted-foreground text-xs">marketing@clickmasters.pk</p>
                    <p className="text-muted-foreground text-xs">info@clickmasters.pk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-el bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">Monday - Saturday: 9AM - 6PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-el rounded-2xl overflow-hidden border border-border">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
                className="w-full h-full"
              />
            </div>

            {/* Directions Link */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                LOCATION.fullAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-el inline-flex items-center gap-2 text-primary text-sm hover:underline"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Right side - Form */}
          <div className="contact-el">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-5">
              <div className="flex gap-2 items-center mb-4 pb-3 border-b border-border">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-[var(--font-heading)] font-semibold text-foreground text-lg">Send us a message</h3>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className={inputClass("name")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  className={inputClass("email")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  className={inputClass("phone")}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Your Message <span className="text-primary">*</span>
                </label>
                <textarea
                  className={`${inputClass("message")} min-h-[120px] resize-none`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your ice cream shop and requirements..."
                  rows={4}
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <button
                ref={btnRef}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {isSubmitting ? "Sending Message..." : "Send Inquiry"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;