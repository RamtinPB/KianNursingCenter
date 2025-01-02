import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

function ServiceCard({ img, title, description }: ServiceCardProps) {
  const navigate = useNavigate();
  return (
    //@ts-ignore
    <Card className="transform transition-transform duration-300 hover:scale-105 active:scale-105">
      {/* @ts-ignore */}
      <CardBody className="flex flex-col items-center justify-center gap-2 text-pretty p-4 md:p-5">
        <img src={img} alt={title} className="h-56 lg:h-72" />
        {/* @ts-ignore */}
        <Typography variant="h5" className="text-xl font-semibold">
          {title}
        </Typography>
        {/* @ts-ignore */}
        <Typography className="mx-2 mb-4 text-base font-normal text-gray-600 md:mb-6 md:mt-4">
          {description}
        </Typography>
        {/* @ts-ignore */}
        <Button
          ripple={true}
          color="black"
          className="px-5 py-2 font-semibold md:px-6 md:py-3 md:font-bold"
          onClick={() => {
            navigate("/Services");
            window.scrollTo(0, 0);
          }}
        >
          Learn More
        </Button>
      </CardBody>
    </Card>
  );
}

const content = [
  {
    img: "./assets/Lymph_NoBG.png",
    title: "Lymphedema Therapy",
    description:
      "We provide specialized massage and therapy services to relieve symptoms of lymphedema, including swelling, bloating, and pain. Our experts are trained to target key points for effective symptom management.",
  },
  {
    img: "./assets/cardiovascular_NoBG.png",
    title: "Wound Care Therapy",
    description:
      "We provide dedicated wound care and management services designed to accelerate healing and minimize discomfort. Our specialists focus on personalized treatments to address wounds effectively and ensure optimal recovery.",
  },
];

export default function ServicesOverview() {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* @ts-ignore */}
          <Typography
            variant="h3"
            className="mb-10 text-center font-bold text-white"
          >
            Our Services
          </Typography>

          <div className="mx-5 grid grid-cols-1 gap-16 md:mx-7 md:grid-cols-2">
            {content.map((prop, key) => (
              <ServiceCard key={key} {...prop} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
