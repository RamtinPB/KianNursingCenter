import {
  Carousel,
  Typography,
  Rating,
  IconButton,
} from "@material-tailwind/react";

export default function formerTestimonials() {
  const testimonialsData = [
    {
      image: "",
      description:
        "Kian Nursing Center provided me with exceptional care after my chemotherapy. Their special massages greatly reduced my lymphedema symptoms. Highly recommend!",
      rating: 5,
    },
    {
      image: "",
      description:
        "The team at Kian really understands patient care. Their massage therapy helped me with bloating and overall recovery. Excellent service!",
      rating: 4,
    },
    {
      image: "",
      description:
        "Thanks to Kian Nursing Center, my post-cancer recovery has been smooth. Their expertise and personal care made all the difference.",
      rating: 5,
    },
  ];

  return (
    <>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
      >
        <path
          fill="#f5f5f5"
          d="M0,96L34.3,90.7C68.6,85,137,75,206,74.7C274.3,75,343,85,411,106.7C480,128,549,160,617,186.7C685.7,213,754,235,823,229.3C891.4,224,960,192,1029,165.3C1097.1,139,1166,117,1234,117.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="mx-auto bg-gray-100 pb-6">
        <div className="container mx-auto">
          {/* @ts-ignore */}
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-6 text-center font-bold"
          >
            What Our Patients Say
          </Typography>
          {/* @ts-ignore */}
          <Carousel
            className="rounded-2xl bg-gray-400"
            loop
            // autoplay
            autoplayDelay={5000}
            prevArrow={({ handlePrev }) => (
              // @ts-ignore
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute left-4 top-2/4 hidden -translate-y-2/4"
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
                className="!absolute !right-4 top-2/4 hidden -translate-y-2/4"
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
            {testimonialsData?.map((testimonial, index) => (
              <div
                key={index}
                className="flex h-screen flex-row items-center justify-between rounded-md shadow-md"
              >
                {/* Left Side: Testimonial Description */}
                <div className="m-8 flex-1 p-8">
                  {/* @ts-ignore */}
                  <Typography variant="h5" color="black" className="mb-4">
                    Testimonial #{index + 1}
                  </Typography>
                  {/* @ts-ignore */}
                  <Typography color="white" className="leading-relaxed">
                    {testimonial.description}
                  </Typography>
                  <div className="mt-4">
                    {/* @ts-ignore */}
                    <Rating
                      unratedColor="amber"
                      value={testimonial.rating}
                      readonly
                    />
                  </div>
                </div>

                {/* Right Side: Image */}
                <div className="m-8 flex-1 p-4">
                  <div className="grid place-items-center">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={`Patient testimonial ${index + 1}`}
                        className="rounded-lg object-cover"
                      />
                    ) : (
                      <div className="grid h-48 w-48 place-items-center rounded-lg bg-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-12 w-12 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,170.7C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
