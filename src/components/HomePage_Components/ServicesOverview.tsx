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
    <Card className="transform transition-transform duration-300 hover:scale-105">
      {/* @ts-ignore */}
      <CardBody className="flex flex-col items-center justify-center gap-2 text-pretty p-5">
        <img src={img} alt={title} className="h-72" />
        {/* @ts-ignore */}
        <Typography variant="h5" className="font-semibold">
          {title}
        </Typography>
        {/* @ts-ignore */}
        <Typography className="mb-6 mt-4 font-normal text-gray-600">
          {description}
        </Typography>
        {/* @ts-ignore */}
        <Button
          ripple={true}
          color="black"
          className=""
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
      "We provide specialized massage and therapy services to relieve symptoms of lymphedema, including swelling, bloating, and pain. Our experts are trained to target key points for effective symptom management.",
  },
];

export default function ServicesOverview() {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* @ts-ignore */}
          <Typography
            variant="h2"
            className="mb-11 text-center text-3xl font-bold text-white"
          >
            Our Services
          </Typography>

          <div className="mx-7 grid grid-cols-1 gap-16 md:grid-cols-2">
            {content.map((prop, key) => (
              <ServiceCard key={key} {...prop} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
