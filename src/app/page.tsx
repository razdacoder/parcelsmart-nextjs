import DownloadMobileApp from "@/components/ui/sections/DownloadMobileApp";
import CompareRate from "@/components/ui/sections/home/CompareRate";
import FAQ from "@/components/ui/sections/home/FAQ";
import Hero from "@/components/ui/sections/home/Hero";
import Partners from "@/components/ui/sections/home/Partners";
import Services from "@/components/ui/sections/home/Services";
import Testimonial from "@/components/ui/sections/home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services />
      <CompareRate />
      <FAQ />
      <DownloadMobileApp />
      <Testimonial/>
    </>
  );
}
