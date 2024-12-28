import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

interface FaqAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface IconProps {
  isOpen: boolean;
}

function FaqAccordion({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionProps) {
  return (
    //@ts-ignore
    <Accordion
      open={isOpen}
      className="transform rounded-xl bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
      icon={<Icon isOpen={isOpen} />}
    >
      {/* @ts-ignore */}
      <AccordionHeader onClick={onToggle} className="rounded-xl">
        {/* @ts-ignore */}
        <Typography variant="h6" className="!text-justify text-gray-100">
          {question}
        </Typography>
      </AccordionHeader>
      <AccordionBody>
        {/* @ts-ignore */}
        <Typography
          variant="paragraph"
          className="px-6 !text-justify text-gray-600 md:px-5"
        >
          {answer}
        </Typography>
      </AccordionBody>
    </Accordion>
  );
}

function Icon({ isOpen }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      color="white"
      className={`${isOpen ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const faqs = [
  {
    question: "What is lymphedema, and how can Kian Nursing Center help?",
    answer:
      "Lymphedema is a condition causing swelling due to fluid buildup. Our center specializes in therapies to reduce swelling and improve mobility.",
  },
  {
    question: "Do I need a referral for wound care services?",
    answer:
      "No referral is necessary. Simply contact us, and we’ll guide you through the next steps.",
  },
  {
    question: "What types of wounds do you treat?",
    answer:
      "We handle a variety of wounds, including chronic, surgical, and urgent cases, using advanced wound care techniques.",
  },
];

export default function FAQ() {
  // State to track open status of each accordion
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

  // Toggle function for accordion
  const handleToggle = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific accordion's state
    }));
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,165.3C384,149,480,75,576,64C672,53,768,107,864,138.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-gray-100 px-3 py-16 md:px-0">
        <div className="container mx-auto">
          {/* @ts-ignore */}
          <Typography variant="h3" className="text-center text-gray-800">
            Frequently Asked Questions
          </Typography>
          <div className="mx-10 mt-8 flex flex-col items-center gap-10">
            {faqs.map((faq, index) => (
              <FaqAccordion
                key={index}
                {...faq}
                isOpen={!!openStates[index]}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
          <div className="my-10 flex flex-col items-center">
            {/* @ts-ignore */}
            <Typography variant="h4" className="text-black">
              Need More Help?
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="paragraph"
              className="font-medium text-gray-500"
            >
              Contact us about your specific needs.
            </Typography>
            {/* @ts-ignore */}
            <Button className="mt-7">submit a request</Button>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,106.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
