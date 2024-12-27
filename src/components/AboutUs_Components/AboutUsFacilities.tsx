import { Carousel, IconButton, Typography } from "@material-tailwind/react";

export default function AboutUsFacilities() {
  const facilities = [
    {
      title: "Advanced Treatment Rooms",
      description:
        "Equipped with the latest medical technology to provide the best care.",
      image: "./facilities/facility-blue.jpg",
    },
    {
      title: "Comfortable Waiting Rooms",
      description:
        "Relax in our welcoming waiting areas designed for your comfort.",
      image: "./facilities/waiting_room.jpg",
    },
    {
      title: "Private Consultation Rooms",
      description:
        "Receive personalized care in our private consultation rooms.",
      image: "./facilities/doctors_office.jpg",
    },
    // {
    //   title: "Wound Care Stations",
    //   description: "Dedicated spaces for effective wound management.",
    //   image: "./assets/EKG_neon.jpg",
    // },
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
                  className="!absolute left-4 top-2/4 -translate-y-2/4 rounded-full"
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
                  className="!absolute !right-4 top-2/4 -translate-y-2/4 rounded-full"
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
                  className="flex h-[480px] flex-row items-center justify-center"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle, rgba(36, 36, 36, 0) 50%, rgba(36, 36, 36, 1) 95%), 
                      radial-gradient(ellipse at center, rgba(36, 36, 36, 0) 20%, rgba(36, 36, 36, 1) 100%, rgba(36, 36, 36, 0.9) 100%),
                      url('${facility.image}')
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={`translate-y-36 p-4`}>
                    {/* @ts-ignore */}
                    <Typography
                      variant="h3"
                      className="!text-shadow-xl text-white"
                    >
                      {facility.title}
                    </Typography>
                    {/* @ts-ignore */}
                    <Typography
                      variant="paragraph"
                      className="!text-shadow-xl text-gray-100"
                    >
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

// linear-gradient(to top, rgba(36, 36, 36, 1) 1%, rgba(36, 36, 36, 0) 3%),
//                       linear-gradient(to bottom, rgba(36, 36, 36, 1) 1%, rgba(36, 36, 36, 0) 3%),
//                       linear-gradient(to right, rgba(36, 36, 36, 1) 1%, rgba(36, 36, 36, 0) 3%),
//                       linear-gradient(to left, rgba(36, 36, 36, 1) 1%, rgba(36, 36, 36, 0) 3%),
