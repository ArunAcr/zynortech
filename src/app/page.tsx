import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import Faq from "@/components/sections/Faq";
import CtaStrip from "@/components/sections/CtaStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Testimonials />
      <WhyUs />
      <Faq />
      <CtaStrip />
    </>
  );
}
