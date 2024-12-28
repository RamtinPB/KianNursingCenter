import { Typography } from "@material-tailwind/react";

const content = [
  {
    title: "Trust and Expertise",
    description:
      "Decades of experience and licensed professionals dedicated to your care.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "We prioritize your comfort and health through personalized care plans.",
  },
  {
    title: "Advanced Techniques",
    description:
      "Cutting-edge methods for effective treatment and faster recovery.",
  },
];

export default function Pillars() {
  return (
    <>
      <section className="pb-36 pt-20 lg:pb-48 lg:pt-16">
        <div className="container mx-auto px-10 text-center md:px-0">
          {/* @ts-ignore */}
          <Typography variant="h3" className="font-bold text-gray-100">
            Why Choose
            <br />
            <span className="text-green-500"> Kian Nursing Center</span>
          </Typography>
          {/* @ts-ignore */}
          <Typography variant="paragraph" className="mt-3 text-gray-300">
            Our commitment to quality care sets us apart.
          </Typography>
          <div className="mt-12 grid grid-cols-1 gap-14 md:mt-10 md:grid-cols-3">
            {content.map((pillar, idx) => (
              <div
                key={idx}
                className="flex transform flex-col items-center justify-between rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:scale-105"
              >
                {idx === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    className="mb-3 h-10 w-10"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
                {idx === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    className="mb-3 h-10 w-10"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    className="mb-3 h-10 w-10"
                  >
                    <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                    <path
                      fill-rule="evenodd"
                      d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
                {/* @ts-ignore */}
                <Typography
                  variant="h5"
                  className="font-semibold text-gray-800"
                >
                  {pillar.title}
                </Typography>
                {/* @ts-ignore */}
                <Typography
                  variant="paragraph"
                  className="mt-2 !text-pretty text-gray-700"
                >
                  {pillar.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
