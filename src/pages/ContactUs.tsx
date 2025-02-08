import ContactUsHero from "../components/ContactUs_Components/ContactUs_Hero";
import ContactUsLocation from "../components/ContactUs_Components/ContactUs_Location";
import ContactUsOperationHours from "../components/ContactUs_Components/ContactUs_OperatingHours";
import ContactUsSocials from "../components/ContactUs_Components/ContactUs_Socials";

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
