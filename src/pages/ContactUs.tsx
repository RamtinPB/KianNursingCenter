import ContactUsHero from "../components/ContactUs_Components/ContactUsHero";
import ContactUsLocation from "../components/ContactUs_Components/ContactUsLocation";
import ContactUsOperationHours from "../components/ContactUs_Components/ContactUsOperatingHours";
import ContactUsSocials from "../components/ContactUs_Components/ContactUsSocials";

export default function ContactUs() {
  return (
    <>
      <ContactUsHero />
      <ContactUsOperationHours />
      <ContactUsLocation />
      <ContactUsSocials />
    </>
  );
}
