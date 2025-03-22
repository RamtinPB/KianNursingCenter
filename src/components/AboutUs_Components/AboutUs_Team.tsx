import { Card, CardBody, Typography } from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  description: string;
}

function TeamCard({ img, name, title, description }: TeamCardPropsType) {
  return (
    // @ts-ignore
    <Card className="rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {/* @ts-ignore */}
      <CardBody className="text-center">
        {/* @ts-ignore */}
        {img ? (
          <img
            src={img}
            alt={name}
            className="mx-auto mb-6 rounded-xl object-top"
          />
        ) : (
          <div className="mx-auto mb-6 grid h-80 w-full place-items-center rounded-xl bg-gray-300 object-top">
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
        )}
        {/* @ts-ignore */}
        <Typography
          variant="h5"
          color="blue-gray"
          className="text-lg !font-medium"
        >
          {name}
        </Typography>
        {/* @ts-ignore */}
        <Typography
          color="blue-gray"
          className="mb-2 mt-1 !text-base !font-semibold text-gray-600"
        >
          {title}
        </Typography>
        {/* @ts-ignore */}
        <Typography
          variant="small"
          color="blue-gray"
          className="text-pretty text-start font-normal text-gray-500"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: `https://www.material-tailwind.com/img/avatar1.jpg`,
    name: "Ryan Samuel",
    title: "Medical Director",
    description:
      "The Medical Director serves as the cornerstone of clinical excellence at Kian Nursing Center. They oversee all medical operations, ensuring that care meets the highest standards of quality and compliance. By guiding the team of specialists, the Medical Director develops treatment protocols and ensures patients receive the most effective and personalized care. Their extensive medical expertise and leadership ensure the center remains a trusted name in specialized healthcare.",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar2.jpg`,
    name: "Ryan Samuel",
    title: "Lymphedema Specialist",
    description:
      "The Lymphedema Specialist is dedicated to providing targeted therapy to patients suffering from swelling and discomfort caused by lymphatic issues. They perform thorough evaluations and develop customized treatment plans that include massage therapy, compression therapy, and patient education. With their hands-on approach, they help reduce symptoms and improve the overall quality of life for individuals struggling with lymphedema.",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar5.jpg`,
    name: "Nora Hazel",
    title: "Wound Care Specialist",
    description:
      "The Wound Care Specialist brings expert knowledge in managing complex wounds, including those resulting from surgeries, injuries, or chronic conditions. They focus on advanced wound care techniques such as debridement, infection prevention, and specialized dressings. This team member works closely with patients to monitor progress, reduce healing times, and minimize complications, ensuring the best possible outcomes.",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar4.jpg`,
    name: "Otto Gonzalez",
    title: "Patient Care Coordinator",
    description:
      "The Patient Care Coordinator acts as the bridge between patients and the medical team, ensuring a seamless and supportive experience. They manage appointment scheduling, patient records, and communication, providing compassionate guidance from the first point of contact to follow-up care. Their role ensures that every patient feels valued and that their journey with Kian Nursing Center is stress-free and well-organized.",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar6.jpg`,
    name: "Emma Roberts",
    title: "Rehabilitation Therapist",
    description:
      "The Rehabilitation Therapist specializes in designing and delivering physical therapy programs tailored to patients recovering from surgery, cancer treatment, or chronic conditions. Through personalized exercises and therapeutic interventions, they help patients regain strength, mobility, and independence. Their dedication to restoring physical health plays a vital role in the center's comprehensive care approach.",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar3.jpg`,
    name: "William Pearce",
    title: "Administrative Manager",
    description:
      "The Administrative Manager ensures the smooth running of Kian Nursing Center by overseeing its day-to-day operations. They are responsible for coordinating schedules, managing staff, and maintaining the facility’s administrative efficiency. Their behind-the-scenes work guarantees that the center’s medical professionals can focus on delivering exceptional care while patients experience a well-organized environment.",
  },
];

export default function AboutUsTeam() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,202.7C480,203,549,117,617,96C685.7,75,754,117,823,138.7C891.4,160,960,160,1029,133.3C1097.1,107,1166,53,1234,37.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-gray-100 px-8 py-8 lg:pb-20 lg:pt-10">
        <div className="container mx-auto">
          <div className="mb-16 text-center lg:mb-24">
            {/* @ts-ignore */}
            <Typography variant="h4" color="blue-gray" className="">
              Meet the Team
            </Typography>
            {/* @ts-ignore */}
            <Typography variant="h3" color="blue-gray" className="my-2">
              Behind the Success: Our Dedicated Team
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              className="mx-auto w-full max-w-4xl text-pretty text-gray-500"
            >
              From compassionate caregivers to skilled therapists and dedicated
              support staff, each team member plays a vital role in providing
              exceptional care and innovative health solutions.
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {members.map((props, key) => (
              <TeamCard key={key} {...props} />
            ))}
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,96L34.3,85.3C68.6,75,137,53,206,53.3C274.3,53,343,75,411,122.7C480,171,549,245,617,245.3C685.7,245,754,171,823,149.3C891.4,128,960,160,1029,186.7C1097.1,213,1166,235,1234,229.3C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
