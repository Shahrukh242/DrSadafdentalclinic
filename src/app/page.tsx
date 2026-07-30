import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
