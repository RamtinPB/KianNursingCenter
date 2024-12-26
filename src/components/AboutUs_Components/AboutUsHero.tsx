import { Typography } from "@material-tailwind/react";

export default function AboutUsHero() {
  return (
    <>
      <div className="relative flex h-screen items-center justify-center px-6 dark:bg-gray-900">
        <div className="absolute inset-0 bg-[url('/assets/EKG_Green_NoBG.png')] bg-cover bg-center bg-no-repeat blur-md" />
        <div className="relative">
          <div className="flex items-center px-10">
            <div className="container flex flex-col items-center justify-center">
              {/* @ts-ignore */}
              <Typography
                className="text-4xl font-bold text-white md:text-6xl"
                variant="h1"
              >
                About
                <span className="text-green-500"> Kian Nursing Center</span>
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="paragraph"
                className="mt-4 text-pretty text-xl text-gray-300"
              >
                Discover our dedication to exceptional care and personalized
                healing
                {/* Kian Nursing Center is dedicated to providing exceptional care
                for patients dealing with lymphedema, post-chemotherapy
                recovery, and wound management. Through innovative treatments
                and personalized attention, our mission is to enhance the
                quality of life for those facing complex health challenges. With
                a team of highly skilled professionals and a commitment to
                excellence, we strive to deliver compassionate, patient-centered
                care in a nurturing environment. */}
              </Typography>
              <div className="mt-6 flex justify-center gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
