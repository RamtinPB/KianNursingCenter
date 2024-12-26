import { Card, CardBody, Typography } from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
}

function TeamCard({ img, name, title }: TeamCardPropsType) {
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
          className="mb-2 !text-base !font-semibold text-gray-600"
        >
          {title}
        </Typography>
        {/* @ts-ignore */}
        <Typography
          variant="small"
          color="blue-gray"
          className="text-justify font-normal text-gray-500"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          dolorem doloribus error quos! Eius consectetur quis nemo perferendis
          eveniet doloremque pariatur vitae illo, reprehenderit autem repellat
          velit soluta beatae dicta.
        </Typography>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: `https://www.material-tailwind.com/img/avatar1.jpg`,
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar2.jpg`,
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar5.jpg`,
    name: "Nora Hazel",
    title: "UI/UX Designer",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar4.jpg`,
    name: "Otto Gonzalez",
    title: "Marketing Specialist",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar6.jpg`,
    name: "Emma Roberts",
    title: "UI Designer",
  },
  {
    img: `https://www.material-tailwind.com/img/avatar3.jpg`,
    name: "William Pearce",
    title: "Web Developer",
  },
];

export default function AboutUsTeam() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
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
            <Typography variant="h2" color="blue-gray" className="my-2">
              Behind the Success: Our Dedicated Team
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="lead"
              className="mx-auto w-full max-w-4xl text-gray-500"
            >
              From visionary leadership to creative talent, and technical
              wizards, each team member plays a pivotal role in delivering the
              exceptional service and innovative solutions.
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
          fill-opacity="1"
          d="M0,96L34.3,85.3C68.6,75,137,53,206,53.3C274.3,53,343,75,411,122.7C480,171,549,245,617,245.3C685.7,245,754,171,823,149.3C891.4,128,960,160,1029,186.7C1097.1,213,1166,235,1234,229.3C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
