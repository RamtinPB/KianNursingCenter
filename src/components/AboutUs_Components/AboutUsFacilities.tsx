import { Carousel, IconButton, Typography } from "@material-tailwind/react";

export default function AboutUsFacilities() {
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
      image: "./assets/EKG_light_green.jpg",
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
      <section className="lg:pb-48 lg:pt-28">
        <div className="container mx-auto">
          <div className="flex flex-col">
            {/* @ts-ignore */}
            <Typography variant="h3" className="mb-5 text-gray-200">
              Our Facilities
            </Typography>
            {/* @ts-ignore */}
            <Carousel
              loop
              className="rounded-3xl bg-transparent"
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
                  className="flex h-[480px] flex-row items-center justify-center rounded-md shadow-md"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.9) 100%), url('${facility.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={`p-4`}>
                    {/* @ts-ignore */}
                    <Typography variant="h3" className="text-gray-100">
                      {facility.title}
                    </Typography>
                    {/* @ts-ignore */}
                    <Typography variant="paragraph" className="text-gray-400">
                      {facility.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
