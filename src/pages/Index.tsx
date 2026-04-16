import Navbar from "@/components/catering/Navbar";
import Hero from "@/components/catering/Hero";
import About from "@/components/catering/About";
import PainPoints from "@/components/catering/PainPoints";
import Solution from "@/components/catering/Solution";
import Features from "@/components/catering/Features";
import Services from "@/components/catering/Services";
import CaseStudies from "@/components/catering/CaseStudies";
import Testimonials from "@/components/catering/Testimonials";
import Blog from "@/components/catering/Blog";
import Contact from "@/components/catering/Contact";
import Footer from "@/components/catering/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PainPoints />
      <Solution />
      <Features />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
