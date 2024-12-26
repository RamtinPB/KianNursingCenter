import { Typography } from "@material-tailwind/react";

interface ItemProps {
  title: string;
  desc: string;
}

function Item({ title, desc }: ItemProps) {
  return (
    <div className="mb-12 flex flex-col items-start">
      {/* @ts-ignore */}
      <Typography variant="lead" className="font-medium text-gray-900">
        {title}
      </Typography>
      {/* @ts-ignore */}
      <Typography variant="paragraph" className="text-justify text-gray-700">
        {desc}
      </Typography>
    </div>
  );
}

const LympItems = [
  {
    title: "Item #1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at minima ea officiis! Soluta dignissimos obcaecati aspernatur at doloremque, debitis suscipit perferendis, dolore consectetur recusandae dicta praesentium culpa labore? Atque.",
  },
  {
    title: "Item #2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at minima ea officiis! Soluta dignissimos obcaecati aspernatur at doloremque, debitis suscipit perferendis, dolore consectetur recusandae dicta praesentium culpa labore? Atque.",
  },
  {
    title: "Item #3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at minima ea officiis! Soluta dignissimos obcaecati aspernatur at doloremque, debitis suscipit perferendis, dolore consectetur recusandae dicta praesentium culpa labore? Atque.",
  },
];

const WoundItems = [
  {
    title: "Item #1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at minima ea officiis! Soluta dignissimos obcaecati aspernatur at doloremque, debitis suscipit perferendis, dolore consectetur recusandae dicta praesentium culpa labore? Atque.",
  },
  {
    title: "Item #2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at minima ea officiis! Soluta dignissimos obcaecati aspernatur at doloremque, debitis suscipit perferendis, dolore consectetur recusandae dicta praesentium culpa labore? Atque.",
  },
  {
    title: "Item #3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at minima ea officiis! Soluta dignissimos obcaecati aspernatur at doloremque, debitis suscipit perferendis, dolore consectetur recusandae dicta praesentium culpa labore? Atque.",
  },
];

export default function Services() {
  return (
    <>
      <div className="w-screen bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-20 py-20 lg:grid-cols-2">
            <div className="flex flex-col items-start pb-20 pt-6">
              {/* @ts-ignore */}
              <Typography variant="h4" className="font-bold text-green-700">
                Lymphedema Treatments
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="small"
                className="mb-12 font-medium text-gray-600"
              >
                for patients with lymphedema related illnesses
              </Typography>
              <hr className="mb-12 w-full border-gray-400" />
              {LympItems.map((item, key) => (
                <Item key={key} {...item} />
              ))}
            </div>
            <div className="mx-auto grid grid-cols-2 place-items-center gap-4 py-6">
              <div className="">
                <img
                  src="./assets/family.jpg"
                  alt="Image 3"
                  className="h-auto w-full translate-y-4 rounded-lg object-cover"
                />
                <img
                  src="./assets/massage-therapee-nobackground.png"
                  alt="Image 4"
                  className="h-auto w-full translate-y-8 object-cover"
                />
              </div>

              <div className="">
                <img
                  src="./assets/EKG_neon.jpg"
                  alt="Image 5"
                  className="h-auto w-full -translate-y-12 rounded-lg object-cover"
                />
                <img
                  src="./assets/doc_table_NoBG.png"
                  alt="Image 6"
                  className="h-auto w-full -translate-y-10 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div className="mx-auto grid grid-cols-2 gap-4 py-20">
              <div className="">
                <img
                  src="./assets/doc-standing.png"
                  alt="Image 5"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="">
                <img
                  src="./assets/family.jpg"
                  alt="Image 3"
                  className="h-auto w-full translate-y-28 rounded-lg object-cover"
                />
                <img
                  src="./assets/EKG_neon.jpg"
                  alt="Image 4"
                  className="h-auto w-full translate-y-32 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-start py-20">
              {/* @ts-ignore */}
              <Typography variant="h4" className="font-bold text-green-700">
                Wound Care Treatments
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="small"
                className="mb-12 font-medium text-gray-600"
              >
                for patients with Wounds and related illnesses
              </Typography>
              <hr className="mb-12 w-full border-gray-400" />
              {WoundItems.map((item, key) => (
                <Item key={key} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,96L30,96C60,96,120,96,180,117.3C240,139,300,181,360,213.3C420,245,480,267,540,250.7C600,235,660,181,720,181.3C780,181,840,235,900,234.7C960,235,1020,181,1080,144C1140,107,1200,85,1260,85.3C1320,85,1380,107,1410,117.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
