import {
  Button,
  Card,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface SuppliesProps {
  name: string;
}

interface itemsListProps {
  name: string;
  count: number;
}

interface CounterRenderProps {
  value: number | null;
  setValue: (newValue: number) => void;
}

interface RenderCardsProps {
  TableContent: itemsListProps[];
}

const TABLE_HEAD = ["Item", "Count"];

function RenderCards({ TableContent }: RenderCardsProps) {
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
                  className="border-b border-gray-300 pb-4 pt-6 md:pt-10"
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
            {TableContent.map((item, index) => {
              const isLast = index === TableContent.length - 1;
              const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

              return (
                <tr key={item.name} className="hover:bg-gray-50">
                  <td className={classes}>
                    {/* @ts-ignore */}
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="pe-5 font-bold"
                    >
                      {item.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {/* @ts-ignore */}
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {item.count}
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

function CounterRender({ value, setValue }: CounterRenderProps) {
  function examineValue(value: number | null): number | undefined {
    if (value != null) {
      if (value >= 0) {
        return value;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  return (
    <div className="h-full rounded transition-shadow hover:shadow-md">
      {/* @ts-ignore */}
      {/* <Typography
        variant="small"
        color="blue-gray"
        className="mb-1 font-medium"
      >
        Select Amount
      </Typography> */}
      <div className="relative w-full">
        {/* @ts-ignore */}
        <Input
          type="number"
          value={examineValue(value) ?? ""}
          placeholder="set amount"
          onChange={(e) => setValue(Number(e.target.value))}
          className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
        />
        <div className="absolute right-1 top-1 flex gap-0.5">
          {/* @ts-ignore */}
          <IconButton
            size="sm"
            variant="text"
            className="rounded bg-transparent"
            onClick={() =>
              setValue((value as number) <= 0 ? 0 : (value as number) - 1)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="green"
              className="size-5"
            >
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          </IconButton>
          {/* @ts-ignore */}
          <IconButton
            size="sm"
            variant="text"
            className="rounded bg-transparent"
            onClick={() => setValue((value as number) + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="green"
              className="size-5"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default function SuppliesCalculator() {
  const [supplies, setSupplies] = useState<SuppliesProps[]>([]);
  const [itemsList, setItemsList] = useState<itemsListProps[]>([]);

  const [itemCount, setItemCount] = useState<number | null>(null);
  const [itemName, setItemName] = useState<string | null>("");

  useEffect(() => {
    const fetchSuppliesData = async () => {
      try {
        const response = await fetch("/Data/Supplies.json");
        if (!response.ok) {
          throw new Error("Failed to fetch Users data from Supplies.json");
        }

        const data = await response.json();
        setSupplies(data);
      } catch (jsonError) {
        console.error(jsonError);
      }
    };
    fetchSuppliesData();
  }, []);

  function addItem(itemName: string, itemCount: number) {
    setItemsList((prevItem) => [
      ...prevItem,
      { name: itemName, count: itemCount },
    ]);
  }

  useEffect(() => {
    console.log(itemsList);
  }, [itemsList]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col gap-9">
          <div className="flex flex-row gap-5">
            {/* @ts-ignore */}
            <Select
              label="Select Item"
              color="blue-gray"
              className="hover:shadow-md"
              value={itemName ?? ""}
              onChange={(name) => setItemName(name as string)}
            >
              {supplies?.map((item, index) => (
                <Option key={index}>{item.name}</Option>
              ))}
            </Select>
            <CounterRender value={itemCount} setValue={setItemCount} />
            {/* @ts-ignore */}
            <Button
              variant="gradient"
              color="green"
              className="h-full w-32 text-nowrap"
              onClick={() => addItem(itemName as string, itemCount as number)}
            >
              Add Item
            </Button>
          </div>
          <div>
            <RenderCards TableContent={itemsList} />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
