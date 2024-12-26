import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="-mt-10 flex h-screen items-center justify-center bg-gray-100">
        <div className="container px-6 text-start">
          <div className="flex items-center justify-center bg-gray-100">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="w-full">
                {/* @ts-ignore */}
                <Typography className="font-bold text-gray-900" variant="h2">
                  Welcome to
                </Typography>
                {/* @ts-ignore */}
                <Typography className="font-bold text-green-500" variant="h1">
                  Kian Nursing Center
                </Typography>
              </div>
              {/* @ts-ignore */}
              <Typography
                variant="lead"
                className="mt-4 !text-pretty text-gray-700"
              >
                Helping patients with lymphedema, post-chemotherapy recovery,
                and wound care through specialized treatments to promote healing
                and well-being.
              </Typography>
              <div className="mt-6 flex w-full justify-center gap-4">
                {/* @ts-ignore */}
                <Button
                  color="green"
                  className="w-1/3"
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
                  className="w-1/3"
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
            <div className="flex flex-1 items-center justify-end">
              <img
                src="/assets/examine_NoBG.png"
                alt="Hero Illustration"
                className="hidden h-auto md:block lg:w-10/12"
              />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,240C840,277,960,267,1080,245.3C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
