import { Card, Typography } from "@material-tailwind/react";

interface ScheduleItem {
  Day: string;
  WorkingHours: string;
}

interface RenderCardsProps {
  schedule: ScheduleItem[];
}

function RenderCards({ schedule }: RenderCardsProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Card className="h-full w-full px-4 pb-1 md:px-10 md:pb-4">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-gray-300 px-2 pb-4 pt-6 md:pt-10"
                >
                  {/* @ts-ignore */}
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => {
              const isLast = index === schedule.length - 1;
              const classes = isLast
                ? "px-2 py-4"
                : "px-2 py-4 border-b border-gray-300";

              return (
                <tr key={item.Day} className="hover:bg-gray-50">
                  <td className={classes}>
                    {/* @ts-ignore */}
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="pe-5 font-bold"
                    >
                      {item.Day}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {/* @ts-ignore */}
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {item.WorkingHours}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
}

const TABLE_HEAD = ["Day", "Working Hours"];

const LymphedemaSchedule = [
  {
    Day: "Saturday-Wednesday",
    WorkingHours: "9:00 AM - 5:00 PM",
  },
  {
    Day: "Thursday",
    WorkingHours: "9:00 AM - 2:00 PM",
  },
  {
    Day: "Friday",
    WorkingHours: "On Call",
  },
];

const WoundSchedule = [
  {
    Day: "Saturday-Wednesday",
    WorkingHours: "9:00 AM - 5:00 PM",
  },
  {
    Day: "Thursday",
    WorkingHours: "9:00 AM - 2:00 PM",
  },
  {
    Day: "Friday",
    WorkingHours: "4:00 PM - 10:00 PM",
  },
];

export default function ContactUsOperationHours() {
  return (
    <>
      <section className="bg-gray-100 pb-28 pt-[450px] md:pb-0 lg:pt-52">
        <div className="container mx-auto px-7">
          <div className="mb-10 flex flex-col items-center justify-center text-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="mb-2 inline-block h-12 w-12"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg> */}
            {/* @ts-ignore */}
            <Typography variant="h3" color="black">
              Our Operating Hours
            </Typography>

            {/* @ts-ignore */}
            <Typography
              variant="paragraph"
              className="!text-pretty text-gray-700"
            >
              Find the detailed working hours of our specialized staff below to
              plan your visit accordingly
            </Typography>
          </div>
          <div className="mb-6 flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="flex h-[440px] w-[370px] flex-1 flex-col rounded-xl bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl md:w-auto md:p-10 md:hover:scale-105">
              {/* @ts-ignore */}
              <Typography variant="h4" className="mb-2 text-gray-200">
                Lymphedema Care Hours
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="paragraph"
                className="mb-4 !text-pretty text-gray-400"
              >
                Our specialists are available to assist you with targeted
                therapies and care during the following hours
              </Typography>
              <RenderCards schedule={LymphedemaSchedule} />
            </div>
            <div className="flex h-[440px] w-[370px] flex-1 flex-col rounded-xl bg-gray-900 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl md:p-10 md:hover:scale-105">
              {/* @ts-ignore */}
              <Typography variant="h4" className="mb-2 text-gray-200">
                Wound Care Hours
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="paragraph"
                className="mb-4 !text-pretty text-gray-400"
              >
                Our team ensures expert care and attention for wound management
                during the hours below
              </Typography>
              <RenderCards schedule={WoundSchedule} />
            </div>
          </div>
          {/* @ts-ignore */}
          <Typography
            variant="paragraph"
            className="!text-balance text-gray-800"
          >
            *We remain open on public holidays, except for major national
            holidays
          </Typography>
        </div>
      </section>
    </>
  );
}
