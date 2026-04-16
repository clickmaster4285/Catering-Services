import { useState } from "react";
import { useGsapFadeUp } from "@/hooks/useGsap";

const Contact = () => {
  const titleRef = useGsapFadeUp();
  const formRef = useGsapFadeUp(0.2);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.eventType) e.eventType = "Please select an event type";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-background border rounded-md text-sm font-light transition-colors duration-200 outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-5xl block mb-4">✨</span>
          <h2 className="section-heading">Thank You!</h2>
          <p className="section-subheading">We've received your inquiry and will be in touch within 24 hours to begin planning your perfect event.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="text-center">
          <p className="text-sm uppercase tracking-widest text-gold font-medium mb-3" style={{ letterSpacing: "0.2em" }}>Get In Touch</p>
          <h2 className="section-heading">Let's Create Something Beautiful</h2>
          <p className="section-subheading">Tell us about your event and we'll craft a bespoke proposal within 24 hours.</p>
          <div className="gold-divider" />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-14 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Full Name *</label>
            <input
              type="text"
              className={inputClass("name")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Email *</label>
            <input
              type="email"
              className={inputClass("email")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Phone</label>
            <input
              type="tel"
              className={inputClass("phone")}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Event Type *</label>
            <select
              className={inputClass("eventType")}
              value={form.eventType}
              onChange={(e) => setForm({ ...form, eventType: e.target.value })}
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="private">Private Dining</option>
              <option value="gala">Gala / Fundraiser</option>
              <option value="other">Other</option>
            </select>
            {errors.eventType && <p className="text-xs text-destructive mt-1">{errors.eventType}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Event Date</label>
            <input
              type="date"
              className={inputClass("date")}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Estimated Guests</label>
            <input
              type="number"
              className={inputClass("guests")}
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              placeholder="e.g., 150"
              min={1}
              max={10000}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Tell Us About Your Vision *</label>
            <textarea
              className={`${inputClass("message")} min-h-[120px] resize-none`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              placeholder="Describe your event, theme, dietary requirements, or any special requests..."
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>

          <div className="md:col-span-2 text-center">
            <button type="submit" className="btn-primary">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
