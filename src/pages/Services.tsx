import ServicesSectionCard from "../components/Services_Components/Services_SectionsCard";
import ServicesNavigationCard from "../components/Services_Components/Services_NavigationCard";
import LymphedemaContent from "../components/Services_Components/MainContent/LymphedemaContent";
import WoundContent from "../components/Services_Components/MainContent/WoundContent";
import { useRef, useState } from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

export default function Services() {
  const [selectedCard, setSelectedCard] = useState<string | null>(
    "LymphedemaContent",
  );
  const [isFadingOut, setIsFadingOut] = useState(false);

  // References for LymphedemaContent sections
  const sectionRefs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
    section4: useRef<HTMLDivElement>(null),
  };

  // Scroll to a specific section
  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardChange = (card: string) => {
    if (card === selectedCard) return; // Avoid redundant clicks

    // Trigger fade-out animation
    setIsFadingOut(true);

    // After animation duration, update content
    setTimeout(() => {
      setSelectedCard(card);
      setIsFadingOut(false); // Trigger fade-in
    }, 500); // Match this duration with your CSS transition
  };

  return (
    <>
      <div className="bg-gray-100 px-0">
        <div className="grid grid-cols-12">
          <div className="bg-gray col-span-3 hidden items-start justify-center px-5 py-8 lg:flex">
            <ServicesNavigationCard
              scrollToSection={scrollToSection}
              selectedCard={selectedCard}
            />
          </div>
          <div className="col-span-12 my-8 flex flex-col lg:col-span-6 lg:border-l-2 lg:border-r-2">
            <div className="mx-5 mb-10 lg:hidden">
              <Tabs id="custom-animation" value={selectedCard}>
                {/* @ts-ignore */}
                <TabsHeader>
                  {/* @ts-ignore */}
                  <Tab
                    value={"LymphedemaContent"}
                    onClick={() => handleCardChange("LymphedemaContent")}
                  >
                    Lymphedema
                  </Tab>
                  {/* @ts-ignore */}
                  <Tab
                    value={"WoundContent"}
                    onClick={() => handleCardChange("WoundContent")}
                  >
                    Wound Care
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
            <div className="px-8">
              <div
                className={`container mx-auto transition-opacity duration-500 ease-in-out ${
                  isFadingOut ? "opacity-0" : "opacity-100"
                }`}
              >
                {selectedCard === "LymphedemaContent" && (
                  <LymphedemaContent sectionRefs={sectionRefs} />
                )}
                {selectedCard === "WoundContent" && (
                  <WoundContent sectionRefs={sectionRefs} />
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray col-span-3 hidden flex-col items-center justify-start gap-6 px-6 py-8 lg:flex">
            <ServicesSectionCard
              selectedCard={selectedCard}
              setSelectedCard={handleCardChange}
            />
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,96L30,96C60,96,120,96,180,117.3C240,139,300,181,360,213.3C420,245,480,267,540,250.7C600,235,660,181,720,181.3C780,181,840,235,900,234.7C960,235,1020,181,1080,144C1140,107,1200,85,1260,85.3C1320,85,1380,107,1410,117.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
