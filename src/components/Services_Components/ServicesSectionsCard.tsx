import { Typography, CardBody, Card } from "@material-tailwind/react";

interface ServicesSectionCardProps {
  selectedCard: string | null; // Allow string or null
  setSelectedCard: (card: string | null) => void; // Function accepts string or null
}

export default function ServicesSectionCard({
  selectedCard,
  setSelectedCard,
}: ServicesSectionCardProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Card
        className={`h-fit transform cursor-pointer text-start transition-all duration-300 hover:scale-105 hover:shadow-xl ${selectedCard === "LymphedemaContent" ? "scale-105 shadow-xl" : ""}`}
        onClick={() => setSelectedCard("LymphedemaContent")}
      >
        {/* @ts-ignore */}
        <CardBody className="p-6">
          <div className="flex flex-col items-start">
            {/* @ts-ignore */}
            <Typography variant="h6" className="text-gray-900">
              Lymphedema
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="paragraph"
              className="!text-prety text-gray-700"
            >
              for patients with lymphedema related illnesses
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* @ts-ignore */}
      <Card
        className={`h-fit transform cursor-pointer text-start transition-all duration-300 hover:scale-105 hover:shadow-xl ${selectedCard === "WoundContent" ? "scale-105 shadow-xl" : ""}`}
        onClick={() => setSelectedCard("WoundContent")}
      >
        {/* @ts-ignore */}
        <CardBody className="p-6">
          <div className="flex flex-col items-start">
            {/* @ts-ignore */}
            <Typography variant="h6" className="text-gray-900">
              Wound Care and Managment
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="paragraph"
              className="!text-prety text-gray-700"
            >
              for patients with Wounds and related illnesses
            </Typography>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
