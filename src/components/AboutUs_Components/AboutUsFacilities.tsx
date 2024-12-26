import {
  Card,
  CardBody,
  Carousel,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export default function AboutUsFacilities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

  return (
    <>
      <section className="">
        <div className="container mx-auto">
          <div className="relative h-full w-full">
            {/* Carousel */}
            {expandedIndex === null && (
              // @ts-ignore
              <Carousel
                loop
                className="bg-transparent"
                prevArrow={({ handlePrev }) => (
                  // @ts-ignore
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute left-4 top-2/4 -translate-y-2/4"
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
                )}
                nextArrow={({ handleNext }) => (
                  // @ts-ignore
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute !right-4 top-2/4 -translate-y-2/4"
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
                )}
              >
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex h-screen flex-row items-center justify-center rounded-md shadow-md"
                  >
                    {/* @ts-ignore */}
                    <Card
                      className={`flex h-4/5 flex-row items-center justify-center rounded-xl bg-[url('${facility.image.toString()}')] bg-cover bg-center bg-no-repeat shadow-md`}
                      onClick={() => setExpandedIndex(index)}
                    >
                      {/* @ts-ignore */}
                      <CardBody
                        className={`grid h-full w-full place-items-center rounded-lg shadow-lg`}
                      >
                        <div className={`p-4`}>
                          {/* @ts-ignore */}
                          <Typography variant="h3" className="text-gray-100">
                            {facility.title}
                          </Typography>
                          {/* @ts-ignore */}
                          <Typography
                            variant="paragraph"
                            className="text-gray-400"
                          >
                            {facility.description}
                          </Typography>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </Carousel>
            )}

            {/* Expanded Card */}
            {expandedIndex !== null && (
              <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-white p-8">
                <button
                  className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 shadow hover:bg-gray-300"
                  onClick={() => setExpandedIndex(null)}
                >
                  ⬆ Back
                </button>
                <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg md:w-3/4 lg:w-1/2">
                  <img
                    src={facilities[expandedIndex].image}
                    alt={facilities[expandedIndex].title}
                    className="h-2/3 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {facilities[expandedIndex].title}
                    </h3>
                    <p className="text-md mt-4 text-gray-700">
                      {facilities[expandedIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
