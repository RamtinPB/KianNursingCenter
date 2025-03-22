import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

interface CertificatesCardPropsType {
  img: string;
  organization: string;
  title: string;
  description: string;
}

function CertificatesCard({
  //img,
  organization,
  title,
  description,
}: CertificatesCardPropsType) {
  return (
    <>
      {/* @ts-ignore */}
      <Card
        shadow={false}
        className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-2xl"
      >
        {/* @ts-ignore */}
        <CardHeader color="transparent" floated={false} shadow={false}>
          {/* @ts-ignore */}
          <Typography
            color="blue-gray"
            className="mb-8 text-xl font-bold md:text-2xl lg:mb-20"
            variant="h3"
          >
            {title}
          </Typography>
        </CardHeader>
        {/* @ts-ignore */}
        <CardBody className="flex h-full flex-wrap items-center justify-between px-4 py-0">
          {/* @ts-ignore */}
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-pretty"
          >
            {description}
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="h6"
            className="mt-2 w-full !text-pretty font-medium text-gray-500 md:mt-0"
          >
            {organization}
          </Typography>
          {/* {img ? (
            <img src={img} className="max-w-[8rem]" alt={client} />
          ) : (
            <div className="grid h-36 w-36 place-items-center rounded-lg bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-12 w-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
          )} */}
        </CardBody>
      </Card>
    </>
  );
}

const certificates = [
  {
    img: "",
    title: "Certified Lymphedema Therapist (CLT)",
    organization: "Lymphology Association of North America (LANA)",
    description:
      "Certification confirming that our therapists are trained and qualified to provide advanced lymphedema care, ensuring effective and safe treatment for all patients.",
  },
  {
    img: "",
    title: "Advanced Wound Care Certification",
    organization: "American Board of Wound Management (ABWM)",
    description:
      "A recognition of our expertise in handling complex and urgent wound cases, certified by one of the leading wound care organizations in the world.",
  },
  {
    img: "",
    title: "Patient Safety and Quality Certification",
    organization: "The Joint Commission (JCI)",
    description:
      "Demonstrates our commitment to maintaining the highest standards of patient safety, cleanliness, and quality care.",
  },
  {
    img: "",
    title: "Healthcare Provider CPR Certification",
    organization: "American Heart Association (AHA)",
    description:
      "Certifies that our staff is equipped to handle medical emergencies with life-saving techniques such as CPR and first aid.",
  },
];

export default function Certificates() {
  return (
    <>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
      >
        <path
          fill="#f5f5f5"
          d="M0,96L34.3,90.7C68.6,85,137,75,206,74.7C274.3,75,343,85,411,106.7C480,128,549,160,617,186.7C685.7,213,754,235,823,229.3C891.4,224,960,192,1029,165.3C1097.1,139,1166,117,1234,117.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-gray-100 px-8 py-24 lg:py-28">
        <div className="container mx-auto">
          {/* @ts-ignore */}
          <Typography variant="h3" color="blue-gray" className="mb-10">
            Our Certifications
          </Typography>
          {/* @ts-ignore */}
          {/* <Typography
            variant="lead"
            className="mb-10 max-w-3xl !text-gray-500 lg:mb-20"
          >
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.
          </Typography> */}
          <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
            {certificates.map((props, key) => (
              <CertificatesCard key={key} {...props} />
            ))}
          </div>

          {/* @ts-ignore */}
          <Card
            shadow={false}
            className="mt-8 rounded-2xl bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-2xl"
          >
            {/* @ts-ignore */}
            <CardHeader color="transparent" floated={false} shadow={false}>
              {/* @ts-ignore */}
              <Typography
                color="blue-gray"
                className="mb-2 text-xl font-bold md:text-2xl lg:mb-10"
                variant="h3"
              >
                Oncology Massage Certification
              </Typography>
            </CardHeader>
            {/* @ts-ignore */}
            <CardBody className="mx-auto items-center py-2 lg:w-3/5">
              <div>
                {/* @ts-ignore */}
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="!text-pretty"
                >
                  A specialized certification that validates our expertise in
                  providing massages for post-chemotherapy patients, helping to
                  alleviate symptoms and improve overall well-being.
                </Typography>
                {/* @ts-ignore */}
                <Typography
                  variant="h6"
                  className="mt-4 !text-pretty font-medium text-gray-500"
                >
                  Society for Oncology Massage (S4OM)
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,170.7C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
