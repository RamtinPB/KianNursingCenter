import HeroSection from "../components/HomePage_Components/HeroSection";
import ServicesOverview from "../components/HomePage_Components/ServicesOverview";
import Certificates from "../components/HomePage_Components/Certificates";
import Pillars from "../components/HomePage_Components/Pillars";
import FAQ from "../components/HomePage_Components/FAQ";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <Certificates />
      <Pillars />
      <FAQ />
    </>
  );
}
