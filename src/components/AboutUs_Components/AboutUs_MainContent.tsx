import { Typography } from "@material-tailwind/react";
import { useState } from "react";

interface IconProps {
  index: number;
}

function Icon({ index }: IconProps) {
  return (
    <div>
      {index === 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          className="h-10 w-10"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {index === 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          className="h-10 w-10"
        >
          <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
        </svg>
      )}
      {index === 2 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          className="h-10 w-10"
        >
          <path
            fillRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {index === 3 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          className="h-10 w-10"
        >
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
        </svg>
      )}
    </div>
  );
}

const content = [
  {
    index: 0,
    title: "Our Mission",
    description: [
      "At Kian Nursing Center, our mission is to empower individuals in their recovery journey, ensuring they receive the best care and support at every step. We are committed to offering patient-focused treatments that address physical, emotional, and social well-being.",
      "We aim to bridge the gap between traditional care and holistic approaches, leveraging the latest medical advancements while nurturing a compassionate environment. Our ultimate goal is to restore hope and enhance the quality of life for those we serve, helping them reclaim their independence and confidence.",
      "We also strive to be a pillar in the community by raising awareness about conditions like lymphedema, the importance of proper wound management, and the transformative impact of post-chemotherapy care.",
    ],
  },
  {
    index: 1,
    title: "Our Philosophy",
    description: [
      "At the heart of Kian Nursing Center lies a steadfast belief: every patient deserves care that uplifts and heals not only their body but also their spirit. We view health as a holistic journey, one that intertwines advanced medical care with personalized attention and empathy.",
      "Our philosophy emphasizes treating each patient as an individual with unique needs, tailoring therapies to ensure maximum effectiveness and comfort. We prioritize transparency, collaboration, and mutual respect in all patient relationships, empowering individuals to take an active role in their healing.",
      "By fostering a nurturing environment, we aim to create a sanctuary where recovery is met with encouragement, innovation, and hope.",
    ],
  },
  {
    index: 2,
    title: "Why Choose Us",
    description: [
      "Choosing Kian Nursing Center means choosing a partner dedicated to your well-being. With a foundation built on trust, expertise, and compassion, we offer a unique combination of specialized care and personalized service.",
      "Our center stands out for its cutting-edge facilities, state-of-the-art equipment, and a team of professionals passionate about making a difference. From advanced lymphedema therapy to meticulous wound care, our services are designed to meet the highest standards of safety and efficacy.",
      "We understand that healing extends beyond medical procedures. That’s why we create a welcoming environment that encourages recovery, comfort, and confidence, ensuring that every patient feels supported throughout their journey.",
    ],
  },
  {
    index: 3,
    title: "Our Commitment to Excellence",
    description: [
      "Excellence is more than a goal at Kian Nursing Center; it’s a promise. Every aspect of our work, from patient care to operational efficiency, is guided by a commitment to exceed expectations and deliver outstanding results.",
      "We continually invest in advanced training for our staff, cutting-edge technologies, and innovative treatment protocols to ensure our patients receive world-class care. Our dedication to improvement means regularly reviewing and refining our practices to adapt to the evolving needs of our community.",
      "Whether it’s ensuring a welcoming atmosphere, maintaining rigorous hygiene standards, or tailoring our treatments, every detail is carefully considered to uphold the highest level of excellence in everything we do.",
    ],
  },
];

export default function AboutUsMainContent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexForFade, setSelectedIndexForFade] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleCardChange = (index: number) => {
    if (index === selectedIndex) return; // Avoid redundant clicks

    // Trigger fade-out animation
    setIsFadingOut(true);
    setSelectedIndex(index);

    // After animation duration, update content
    setTimeout(() => {
      setSelectedIndexForFade(index);
      setIsFadingOut(false); // Trigger fade-in
    }, 500); // Match this duration with your CSS transition
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#f5f5f5"
          d="M0,96L34.3,117.3C68.6,139,137,181,206,186.7C274.3,192,343,160,411,133.3C480,107,549,85,617,64C685.7,43,754,21,823,64C891.4,107,960,213,1029,218.7C1097.1,224,1166,128,1234,106.7C1302.9,85,1371,139,1406,165.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-gray-100 px-8 py-16 lg:pb-20 lg:pt-8">
        <div className="container mx-auto">
          <div className="mb-10 text-center lg:mb-16">
            {/* @ts-ignore */}
            <Typography variant="h3" className="text-black">
              Who We Are
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              className="mx-auto w-full max-w-2xl !text-pretty text-gray-500"
            >
              Dedicated to compassionate care, innovative treatments, and
              improving patient well-being every step of the way.
            </Typography>
          </div>
          <div className="flex flex-col-reverse items-center gap-16 md:flex-row">
            <div className="flex h-full w-full flex-1">
              <div className="grid grid-cols-1 place-items-center gap-10">
                {content.map((card, index) => (
                  <div
                    key={index}
                    className={`flex max-w-full transform items-start justify-start rounded-xl bg-black p-4 text-start shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${selectedIndex === index ? "scale-105" : ""}`}
                    onClick={() => handleCardChange(index)}
                  >
                    <Icon index={card.index} />
                    {/* @ts-ignore */}
                    <Typography
                      variant="paragraph"
                      className="relative mx-3 w-full max-w-lg overflow-hidden text-ellipsis whitespace-nowrap text-pretty text-gray-400"
                    >
                      {/* @ts-ignore */}
                      <Typography
                        variant="h6"
                        className={`!text-nowrap text-gray-100 ${card.title ? "" : "hidden"}`}
                      >
                        {card.title}:
                      </Typography>
                      <span className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-black"></span>
                      {card.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            {/* Main Content */}
            <div className="h-[470px] w-full flex-1 rounded-lg bg-black p-8 shadow-lg">
              <div
                key={selectedIndexForFade}
                className={`flex flex-col items-center transition-opacity duration-500 ease-in-out ${
                  isFadingOut ? "opacity-0" : "opacity-100"
                }`}
              >
                <Icon index={selectedIndexForFade} />
                {/* @ts-ignore */}
                <Typography variant="h4" className="text-white">
                  {content[selectedIndexForFade].title}
                </Typography>
                {content[selectedIndexForFade].description.map((desc, key) => (
                  <div key={key} className="text-start">
                    {/* @ts-ignore */}
                    <Typography
                      variant="paragraph"
                      className="mt-4 text-pretty text-gray-100"
                    >
                      {desc}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,224L34.3,202.7C68.6,181,137,139,206,149.3C274.3,160,343,224,411,229.3C480,235,549,181,617,149.3C685.7,117,754,107,823,133.3C891.4,160,960,224,1029,234.7C1097.1,245,1166,203,1234,192C1302.9,181,1371,203,1406,213.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
