import { Typography } from "@material-tailwind/react";

interface RenderSubSectionContentProps {
  title?: string;
  description?: string;
  bullet?: {
    title: string;
    points: BulletPoint[];
  };
}

function RenderSubSectionContent({
  title,
  description,
  bullet,
}: RenderSubSectionContentProps) {
  return (
    <div className="mb-3 flex flex-col items-start">
      {/* @ts-ignore */}
      <Typography variant="lead" className="font-medium text-gray-900">
        {title}
      </Typography>
      {/* @ts-ignore */}
      <Typography variant="paragraph" className="!text-pretty text-gray-700">
        {description}
      </Typography>
      {/* @ts-ignore */}
      <Typography variant="paragraph" className="text-gray-700">
        {bullet?.title}
      </Typography>
      {bullet && bullet.points && <NestedBulletPoints points={bullet.points} />}
    </div>
  );
}

interface BulletPoint {
  title?: string;
  text?: string;
  subPoints?: BulletPoint[];
}

interface NestedBulletPointsProps {
  points: BulletPoint[];
}

function NestedBulletPoints({ points }: NestedBulletPointsProps) {
  return (
    <div>
      <ul className="mx-5 list-disc text-justify text-gray-700">
        {points.map((point, index) => (
          <li key={index}>
            {/* @ts-ignore */}
            <Typography variant="paragraph" className="">
              <span className="font-semibold">{point.title?.concat(" ")}</span>
              {point.text}
            </Typography>
            {point.subPoints && <NestedBulletPoints points={point.subPoints} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface LymphedemaContentProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export default function LymphedemaContent({
  sectionRefs,
}: LymphedemaContentProps) {
  return (
    <>
      <div className="flex flex-col gap-10 text-start">
        <img
          src="./assets/massage-therapee-nobackground.png"
          alt="Image 4"
          className="h-auto w-full object-cover"
        />
        <div
          className="flex flex-1 flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section1"
          ref={sectionRefs.section1}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            What is Lymphedema?
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-10 font-medium text-gray-600"
          >
            Understanding the nature of lymphedema is the first step in
            addressing its challenges
          </Typography>
          <hr className="mb-10 w-full border-gray-400" />
          {WhatIsLymphedema.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>

        <div
          className="flex flex-1 flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section2"
          ref={sectionRefs.section2}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            Causes of Lymphedema
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-10 font-medium text-gray-600"
          >
            Identifying the cause helps in crafting a personalized management
            plan
          </Typography>
          <hr className="mb-10 w-full border-gray-400" />
          {CausesOfLymphedema.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>

        <div
          className="flex flex-1 flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section3"
          ref={sectionRefs.section3}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            Symptoms of Lymphedema
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-10 font-medium text-gray-600"
          >
            Monitoring symptoms closely can lead to timely intervention and
            relief
          </Typography>
          <hr className="mb-10 w-full border-gray-400" />
          {SymptomsOfLymphedema.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>

        <div
          className="flex flex-1 flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section4"
          ref={sectionRefs.section4}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            Treatment Options for Lymphedema
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-10 font-medium text-gray-600"
          >
            A comprehensive treatment plan paves the way to a better quality of
            life
          </Typography>
          <hr className="mb-10 w-full border-gray-400" />
          {TreatmentOptionsForLymphedema.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

const WhatIsLymphedema = [
  {
    title: "",
    description:
      "Lymphedema is a chronic condition characterized by swelling in the arms, legs, or other parts of the body due to a blockage in the lymphatic system. This system, which is a critical part of the immune system, helps remove waste and toxins from the body. When the flow of lymph fluid is disrupted, it accumulates in tissues, leading to swelling.",
  },
  {
    title: "",
    description:
      "Lymphedema can occur as a result of surgery, radiation therapy, infections, or congenital abnormalities in the lymphatic system. While it is not always curable, effective management can significantly improve quality of life.",
  },
];

const CausesOfLymphedema = [
  {
    title: "",
    description: "",
    bullet: {
      title:
        "The causes of lymphedema can be classified into two main categories:",
      points: [
        {
          title: "Primary Lymphedema:",
          text: "A rare inherited condition caused by abnormalities in the lymphatic system. It can develop at birth, during puberty, or later in life.",
        },
        {
          title: "Secondary Lymphedema:",
          text: "This form is more common and results from damage or obstruction to the lymphatic system due to:",
          subPoints: [
            {
              text: "Cancer treatments, such as lymph node removal or radiation.",
            },
            {
              text: "Infections, particularly in tropical regions, where parasitic infections like filariasis are prevalent.",
            },
            {
              text: "Traumatic injuries or surgeries that impair lymphatic drainage.",
            },
          ],
        },
      ],
    },
  },
  {
    title: "",
    description:
      "Recognizing the root cause is essential for tailored treatment.",
  },
];

const SymptomsOfLymphedema = [
  {
    title: "",
    description: "",
    bullet: {
      title:
        "The symptoms of lymphedema vary depending on the severity of the condition, but common signs include:",
      points: [
        {
          title: "",
          text: "Persistent swelling in one or more areas of the body, particularly in the arms or legs.",
        },
        {
          title: "",
          text: "A feeling of heaviness or tightness in the affected area.",
        },
        {
          title: "",
          text: "Reduced mobility or range of motion in the swollen region.",
        },
        {
          title: "",
          text: "Skin changes, such as thickening, hardening, or a leathery texture.",
        },
        {
          title: "",
          text: "Recurrent infections, as stagnant lymph fluid can become a breeding ground for bacteria.",
        },
      ],
    },
  },
  {
    description:
      "Early detection and treatment of symptoms can prevent complications and improve outcomes.",
  },
];

const TreatmentOptionsForLymphedema = [
  {
    title: "",
    description: "",
    bullet: {
      title:
        "While there is no definitive cure for lymphedema, a range of treatments can help manage symptoms and improve quality of life:",
      points: [
        {
          title: "Compression Therapy:",
          text: "Specialized garments or bandages help reduce swelling and encourage lymphatic drainage.",
        },
        {
          title: "Manual Lymphatic Drainage (MLD):",
          text: "A gentle massage technique that stimulates the lymphatic system to move fluid.",
        },
        {
          title: "Exercise:",
          text: "Regular, light exercises tailored by a therapist can promote fluid movement and maintain mobility.",
        },
        {
          title: "Skincare:",
          text: "Proper care of the skin reduces the risk of infections and complications.",
        },
        {
          title: "Surgical Options:",
          text: "In severe cases, procedures like lymph node transfer or liposuction may be considered.",
        },
      ],
    },
  },
  {
    description:
      "Combining these therapies under professional guidance ensures effective management.",
  },
];

{
  /* <div className="grid grid-cols-1 gap-20">
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
          </div> */
}
