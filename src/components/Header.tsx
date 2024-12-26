import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      {/* @ts-ignore */}
      <Navbar className="sticky top-0 z-50 mx-auto h-max max-w-full rounded-none border-none bg-gradient-to-b from-gray-100 to-transparent px-4 py-2 shadow-lg lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between gap-5">
          <div className="flex items-center justify-center gap-1">
            <div className="flex gap-2">
              {/* <img src="" alt="KNC Logo" className="h-11 w-11" /> */}
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              {/* @ts-ignore */}
              <Typography
                variant="h4"
                className="mx-4 py-1.5 font-body text-green-600"
              >
                Kian Nursing Center
              </Typography>
            </div>

            <div className="h-8 border-l border-gray-500 px-1.5" />

            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                <li>
                  {/* @ts-ignore */}
                  <Typography
                    as={"a"}
                    href="/"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium hover:text-green-600"
                  >
                    Home
                  </Typography>
                </li>
                <li>
                  {/* @ts-ignore */}
                  <Typography
                    as={"a"}
                    href="/AboutUs"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium hover:text-green-600"
                  >
                    About Us
                  </Typography>
                </li>
                <li>
                  {/* @ts-ignore */}
                  <Typography
                    as={"a"}
                    href="/Services"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium hover:text-green-600"
                  >
                    Services
                  </Typography>
                </li>
                <li>
                  {/* @ts-ignore */}
                  <Typography
                    as={"a"}
                    href="/ContactUs"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium hover:text-green-600"
                  >
                    Contact Us
                  </Typography>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {/* @ts-ignore */}
            <Button
              className="bg-black transition-colors duration-300 hover:bg-green-600"
              onClick={() => {
                navigate("/ContactUs");
                window.scrollTo(0, 0);
              }}
            >
              Book an Appointment
            </Button>
          </div>

          {/* @ts-ignore */}
          <MobileNav className="lg:hidden">
            {/* @ts-ignore */}
            <IconButton variant="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </IconButton>
          </MobileNav>
        </div>
      </Navbar>
    </>
  );
}
