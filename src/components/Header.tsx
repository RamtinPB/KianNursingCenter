import {
  Navbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  function clickMenuBar() {
    setShowMenu((prev) => !prev);
  }

  const navigate = useNavigate();

  return (
    <>
      {/* @ts-ignore */}
      <Navbar className="sticky top-0 z-50 mx-auto h-max max-w-full rounded-none border-none bg-gradient-to-b from-gray-100 to-transparent px-4 py-2 shadow-lg lg:px-8 lg:py-4">
        <div className="container mx-auto flex flex-col items-center justify-between">
          <div className="container flex items-center justify-between gap-5">
            <div className="flex items-center justify-center gap-1">
              <div className="flex gap-2">
                {/* <img src="" alt="KNC Logo" className="h-11 w-11" /> */}
                {/* <div className="grid h-11 w-11 place-items-center rounded-full bg-gray-300">
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
              </div> */}
                {/* @ts-ignore */}
                <Typography
                  variant="h4"
                  className="text-md mx-4 !text-nowrap py-1.5 font-body text-green-600 md:text-2xl"
                >
                  Kian Nursing Center
                </Typography>
              </div>

              <div className="hidden h-8 border-l border-gray-500 px-1.5 md:block" />

              <div className="hidden md:block">
                {/* @ts-ignore */}
                <ul className="flex flex-row items-center gap-6">
                  {/* @ts-ignore */}
                  <li>
                    {/* @ts-ignore */}
                    <Typography
                      onClick={() => {
                        navigate("/");
                        window.scrollTo(0, 0);
                      }}
                      variant="small"
                      color="blue-gray"
                      className="cursor-pointer p-1 font-medium hover:text-green-600"
                    >
                      Home
                    </Typography>
                  </li>
                  {/* @ts-ignore */}
                  <li>
                    {/* @ts-ignore */}
                    <Typography
                      onClick={() => {
                        navigate("/AboutUs");
                        window.scrollTo(0, 0);
                      }}
                      variant="small"
                      color="blue-gray"
                      className="cursor-pointer p-1 font-medium hover:text-green-600"
                    >
                      About Us
                    </Typography>
                  </li>
                  {/* @ts-ignore */}
                  <li>
                    {/* @ts-ignore */}
                    <Typography
                      onClick={() => {
                        navigate("/Services");
                        window.scrollTo(0, 0);
                      }}
                      variant="small"
                      color="blue-gray"
                      className="cursor-pointer p-1 font-medium hover:text-green-600"
                    >
                      Services
                    </Typography>
                  </li>
                  {/* @ts-ignore */}
                  <li>
                    {/* @ts-ignore */}
                    <Typography
                      onClick={() => {
                        navigate("/ContactUs");
                        window.scrollTo(0, 0);
                      }}
                      variant="small"
                      color="blue-gray"
                      className="cursor-pointer p-1 font-medium hover:text-green-600"
                    >
                      Contact Us
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>

            {/* @ts-ignore */}
            <Button
              ripple={true}
              color="black"
              className="hidden transition-colors duration-300 hover:bg-green-600 md:block"
              onClick={() => {
                navigate("/ContactUs");
                window.scrollTo(0, 0);
              }}
            >
              Book an Appointment
            </Button>

            {/* @ts-ignore */}
            <IconButton
              className="rounded-full bg-inherit shadow-none md:hidden"
              onClick={() => clickMenuBar()}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                {showMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="black"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="black"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                )}
              </span>
            </IconButton>
          </div>

          <div
            className={`w-full overflow-hidden transition-[max-height] duration-500 ease-in-out md:hidden ${showMenu ? "max-h-[1000px]" : "max-h-0"}`}
          >
            {/* @ts-ignore */}
            <List className="flex flex-col items-start">
              {/* @ts-ignore */}
              <ListItem
                className="py-2"
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                {/* @ts-ignore */}
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-medium"
                >
                  Home
                </Typography>
              </ListItem>
              {/* @ts-ignore */}
              <ListItem
                className="py-2"
                onClick={() => {
                  navigate("/AboutUs");
                  window.scrollTo(0, 0);
                }}
              >
                {/* @ts-ignore */}
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-medium"
                >
                  About Us
                </Typography>
              </ListItem>
              {/* @ts-ignore */}
              <ListItem
                className="py-2"
                onClick={() => {
                  navigate("/Services");
                  window.scrollTo(0, 0);
                }}
              >
                {/* @ts-ignore */}
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-medium"
                >
                  Services
                </Typography>
              </ListItem>
              {/* @ts-ignore */}
              <ListItem
                className="py-2"
                onClick={() => {
                  navigate("/ContactUs");
                  window.scrollTo(0, 0);
                }}
              >
                {/* @ts-ignore */}
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-medium"
                >
                  Contact Us
                </Typography>
              </ListItem>
              {/* @ts-ignore */}
              <ListItem ripple={false} className="my-2 p-0">
                {/* @ts-ignore */}
                <Button
                  ripple={true}
                  className="w-full transition-colors duration-300 focus:bg-green-600"
                  onClick={() => {
                    navigate("/ContactUs");
                    window.scrollTo(0, 0);
                  }}
                >
                  Book an Appointment
                </Button>
              </ListItem>
            </List>
          </div>
        </div>
      </Navbar>
    </>
  );
}
