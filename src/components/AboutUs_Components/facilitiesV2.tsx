import {
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export default function AboutUsFacilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");

  const facilities = [
    {
      title: "Advanced Treatment Rooms",
      description:
        "Equipped with the latest medical technology to provide the best care.",
      image: "./assets/EKG_neon.jpg",
    },
    {
      title: "Comfortable Patient Suites",
      description: "Designed for a relaxing recovery experience.",
      image: "./assets/EKG_neon.jpg",
    },
    {
      title: "Therapeutic Massage Rooms",
      description: "Specialized massage rooms to aid in lymphedema treatment.",
      image: "./assets/EKG_neon.jpg",
    },
    {
      title: "Wound Care Stations",
      description: "Dedicated spaces for effective wound management.",
      image: "./assets/EKG_neon.jpg",
    },
  ];

  const handlePrev = () => {
    if (isSliding) return; // Prevent clicks during transition
    setIsSliding(true);
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex === 0 ? facilities.length - 1 : prevIndex - 1) %
          facilities.length,
      );
      setIsSliding(false);
    }, 500); // Match with CSS animation duration
  };

  const handleNext = () => {
    if (isSliding) return; // Prevent clicks during transition
    setIsSliding(true);
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
      setIsSliding(false);
    }, 500); // Match with CSS animation duration
  };

  return (
    <>
      <section className="relative">
        <div className="container mx-auto">
          <div className="relative flex items-center">
            {/* Previous Button */}
            {/* @ts-ignore */}
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="absolute left-4 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>

            {/* Carousel */}
            <div className="relative flex w-full overflow-hidden">
              <div className="relative flex w-full items-center justify-center gap-4">
                {facilities.map((facility, index) => {
                  const isActive = index === currentIndex;

                  // Set sliding classes dynamically
                  const slideClass = isActive
                    ? "translate-x-0 opacity-100"
                    : slideDirection === "right"
                      ? "translate-x-full opacity-0"
                      : "translate-x-[-100%] opacity-0";

                  return (
                    //@ts-ignore
                    <Card
                      key={index}
                      className={`transition-transform duration-500 ease-in-out ${slideClass}`}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <div
                        className={`h-64 w-48 rounded-lg bg-[url('${facility.image}')] bg-cover bg-center shadow-md`}
                      >
                        {/* @ts-ignore */}
                        <CardBody className="flex flex-col items-center justify-center p-4 text-center">
                          {/* @ts-ignore */}
                          <Typography variant="h5" className="text-gray-100">
                            {facility.title}
                          </Typography>
                          {/* @ts-ignore */}
                          <Typography variant="small" className="text-gray-400">
                            {facility.description}
                          </Typography>
                        </CardBody>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            {/* @ts-ignore */}
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="absolute right-4 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          </div>
        </div>
      </section>
    </>
  );
}
