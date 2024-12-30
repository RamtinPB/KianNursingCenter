import {} from "@heroicons/react/16/solid";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  Typography,
  TimelineBody,
} from "@material-tailwind/react";

interface ServicesNavigationCardProps {
  selectedCard: string | null;
  scrollToSection: (section: string) => void;
}

const LymphedemaContent = [
  {
    id: "section1",
    title: "What is Lymphedema?",
    description:
      "Understanding the nature of lymphedema is the first step in addressing its challenges.",
  },
  {
    id: "section2",
    title: "Causes of Lymphedema",
    description:
      "Identifying the cause helps in crafting a personalized management plan.",
  },
  {
    id: "section3",
    title: "Symptoms of Lymphedema",
    description:
      "Monitoring symptoms closely can lead to timely intervention and relief.",
  },
  {
    id: "section4",
    title: "Treatment Options for Lymphedema",
    description:
      "A comprehensive treatment plan paves the way to a better quality of life.",
  },
];

const WoundContent = [
  {
    id: "section1",
    title: "What is Wound Care?",
    description:
      "Wound care is essential to preventing complications and promoting faster recovery.",
  },
  {
    id: "section2",
    title: "Causes of Chronic Wounds",
    description:
      "Understanding the underlying cause ensures a tailored approach to wound healing.",
  },
  {
    id: "section3",
    title: "Symptoms of Wounds",
    description:
      "Identifying symptoms early can prevent complications and accelerate healing.",
  },
  {
    id: "section4",
    title: "Treatment Options for Wound Care",
    description:
      "Comprehensive treatment promotes faster healing, reduces complications, and ensures comfort.",
  },
];

export default function ServicesNavigationCard({
  selectedCard,
  scrollToSection,
}: ServicesNavigationCardProps) {
  // Select content dynamically based on selectedCard
  const content =
    selectedCard === "LymphedemaContent" ? LymphedemaContent : WoundContent;

  return (
    <>
      <Timeline className="flex text-start">
        {content.map((prop, key) => (
          <TimelineItem
            key={key}
            onClick={() => scrollToSection(prop.id)}
            className={`cursor-pointer rounded-xl p-3 hover:bg-white`}
          >
            {key < content.length - 1 && (
              <TimelineConnector
                className={`z-[1] ${selectedCard === "LymphedemaContent" ? "!h-[163px]" : "!h-[180px]"} translate-x-3 translate-y-3`}
              />
            )}
            <TimelineHeader className="">
              <TimelineIcon className="p-2"></TimelineIcon>
              {/* @ts-ignore */}
              <Typography variant="h5" color="blue-gray">
                {prop.title}
              </Typography>
            </TimelineHeader>
            {/* @ts-ignore */}
            <TimelineBody className="pb-8">
              {/* @ts-ignore */}
              <Typography color="gray" className="font-normal text-gray-600">
                {prop.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
