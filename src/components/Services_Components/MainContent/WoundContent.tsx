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
    <div className="mb-3 flex flex-col items-start text-pretty">
      {/* @ts-ignore */}
      <Typography variant="lead" className="font-medium text-gray-900">
        {title}
      </Typography>
      {/* @ts-ignore */}
      <Typography variant="paragraph" className="text-gray-700">
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
      <ul className="mx-5 list-disc text-gray-700">
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

interface WoundContentProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export default function WoundContent({ sectionRefs }: WoundContentProps) {
  return (
    <>
      <div className="flex flex-col gap-10 text-start">
        <img
          src="./assets/doc_table_NoBG.png"
          alt="Image 4"
          className="h-auto w-full object-cover"
        />
        <div
          className="flex flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section1"
          ref={sectionRefs.section1}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            What is Wound Care?
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-12 font-medium text-gray-600"
          >
            Wound care is essential to preventing complications and promoting
            faster recovery
          </Typography>
          <hr className="mb-12 w-full border-gray-400" />
          {WhatIsWoundCare.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>

        <div
          className="flex flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section2"
          ref={sectionRefs.section2}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            Causes of Chronic Wounds
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-12 font-medium text-gray-600"
          >
            Understanding the underlying cause ensures a tailored approach to
            wound healing
          </Typography>
          <hr className="mb-12 w-full border-gray-400" />
          {CausesOfChronicWounds.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>

        <div
          className="flex flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section3"
          ref={sectionRefs.section3}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            Symptoms of Wounds
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-12 font-medium text-gray-600"
          >
            Identifying symptoms early can prevent complications and accelerate
            healing
          </Typography>
          <hr className="mb-12 w-full border-gray-400" />
          {SymptomsOfWounds.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>

        <div
          className="flex flex-col items-start pb-10 pt-6 lg:pb-20"
          id="section4"
          ref={sectionRefs.section4}
        >
          {/* @ts-ignore */}
          <Typography variant="h4" className="font-bold text-green-700">
            Treatment Options for Wound Care
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="small"
            className="mb-12 font-medium text-gray-600"
          >
            Comprehensive treatment promotes faster healing, reduces
            complications, and ensures comfort
          </Typography>
          <hr className="mb-12 w-full border-gray-400" />
          {TreatmentOptionsForWoundCare.map((item, key) => (
            <RenderSubSectionContent key={key} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

const WhatIsWoundCare = [
  {
    title: "",
    description:
      "Wound care refers to the process of assessing, cleaning, and dressing wounds to promote healing and prevent complications like infections. Effective wound care is crucial to reduce the risk of further damage, accelerate healing, and improve the overall well-being of the patient.",
  },
  {
    title: "",
    description:
      "Wounds may result from a variety of causes such as injury, surgery, or medical conditions like diabetes. Proper wound care focuses on treating the wound, preventing infection, and managing pain to ensure the healing process is as smooth as possible.",
  },
];

const CausesOfChronicWounds = [
  {
    title: "",
    description: "",
    bullet: {
      title:
        "Chronic wounds are those that do not heal properly over time, often becoming resistant to standard treatments. Some of the primary causes of chronic wounds include:",
      points: [
        {
          title: "Diabetes:",
          text: "High blood sugar levels can damage blood vessels, impairing circulation and leading to poor wound healing.",
        },
        {
          title: "Poor circulation:",
          text: "Conditions like peripheral artery disease (PAD) or venous insufficiency result in inadequate blood flow to affected areas, hindering healing.",
        },
        {
          title: "Infections:",
          text: "Untreated infections can prevent wounds from healing and lead to further complications.",
        },
        {
          title: "Pressure ulcers (bedsores):",
          text: "Prolonged pressure on the skin from staying in one position for too long can cause skin and tissue damage.",
        },
        {
          title: "Trauma or surgery:",
          text: "Surgical wounds or traumatic injuries can sometimes fail to heal properly, especially when proper care is not administered.",
        },
      ],
    },
  },
  {
    description:
      "Recognizing the cause of chronic wounds is critical to determining the best course of treatment.",
  },
];

const SymptomsOfWounds = [
  {
    title: "",
    description: "",
    bullet: {
      title:
        "The symptoms of wounds can vary based on their severity, location, and type, but common signs include:",
      points: [
        {
          title: "Pain:",
          text: "Acute or chronic pain at the site of the wound can indicate an infection or that healing is not progressing.",
        },
        {
          title: "Redness and warmth:",
          text: "These signs are often associated with infection, indicating inflammation at the wound site.",
        },
        {
          title: "Discharge:",
          text: "Pus or foul-smelling drainage can suggest that the wound is infected or not healing properly.",
        },
        {
          title: "Swelling:",
          text: "Persistent swelling around the wound can indicate infection or poor circulation, both of which may hinder healing.",
        },
        {
          title: "Delayed healing:",
          text: "Wounds that do not close within a reasonable time frame may indicate underlying medical conditions that are impeding the healing process.",
        },
      ],
    },
  },
  {
    description:
      "Monitoring these symptoms can help identify issues early and prompt necessary interventions.",
  },
];

const TreatmentOptionsForWoundCare = [
  {
    title: "",
    description: "",
    bullet: {
      title:
        "Effective wound care treatment focuses on promoting healing, preventing infection, and managing any pain associated with the wound. Key treatment options include:",
      points: [
        {
          title: "Cleaning and Debridement:",
          text: "The wound is cleaned to remove debris and dead tissue, which can hinder the healing process.",
        },
        {
          title: "Dressing and Bandaging:",
          text: "Using appropriate dressings helps to protect the wound from external contamination while maintaining an optimal environment for healing.",
        },
        {
          title: "Antibiotics and Antiseptics:",
          text: "These are used to treat or prevent infections, ensuring the wound remains free of harmful bacteria.",
        },
        {
          title: "Advanced Therapies:",
          text: "In some cases, advanced treatments like hyperbaric oxygen therapy, vacuum-assisted closure (VAC), or growth factor treatments may be recommended for stubborn wounds.",
        },
        {
          title: "Pain Management:",
          text: "Managing pain effectively is a crucial part of wound care, as it allows for better mobility and overall comfort during the healing process.",
        },
      ],
    },
  },
  {
    description:
      "A combination of these treatments ensures the wound heals properly and quickly.",
  },
];
