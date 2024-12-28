import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen items-start justify-center bg-gray-100 md:items-center lg:-mt-10">
        <div className="container px-6 pt-5 text-center md:text-start">
          <div className="flex flex-col-reverse items-center justify-center bg-gray-100 md:flex-row">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="mt-5 w-full md:mt-0">
                {/* @ts-ignore */}
                <Typography
                  className="text-xl font-bold text-gray-900 lg:text-4xl"
                  variant="h2"
                >
                  Welcome to
                </Typography>
                {/* @ts-ignore */}
                <Typography
                  className="text-2xl font-bold text-green-500 lg:text-5xl"
                  variant="h1"
                >
                  Kian Nursing Center
                </Typography>
              </div>
              {/* @ts-ignore */}
              <Typography
                variant="lead"
                className="mt-4 !text-pretty text-sm text-gray-700 lg:text-xl"
              >
                Helping patients with lymphedema, post-chemotherapy recovery,
                and wound care through specialized treatments to promote healing
                and well-being.
              </Typography>
              <div className="mt-8 flex w-full justify-center gap-4 lg:mt-6">
                {/* @ts-ignore */}
                <Button
                  color="green"
                  className="w-full px-3 py-1 md:px-6 md:py-3 lg:w-4/12"
                  ripple={true}
                  onClick={() => {
                    navigate("/ContactUs");
                    window.scrollTo(0, 0);
                  }}
                >
                  Book an Appointment
                </Button>
                {/* @ts-ignore */}
                <Button
                  color="gray"
                  className="w-full lg:w-1/3"
                  ripple={true}
                  onClick={() => {
                    navigate("/AboutUs");
                    window.scrollTo(0, 0);
                  }}
                >
                  About Us
                </Button>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center md:justify-end">
              <img
                src="/assets/examine_NoBG.png"
                alt="Hero Illustration"
                className="w-10/12 lg:w-10/12"
              />
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=""
      >
        <path
          fill="#f5f5f5"
          d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,240C840,277,960,267,1080,245.3C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
