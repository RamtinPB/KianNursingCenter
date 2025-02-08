import { IconButton, Input, Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface SuppliesProps {
  name: string;
}

interface CounterRenderProps {
  value: number | null;
  setValue: (newValue: number) => void;
}

interface itemsListProps {
  name: string;
  count: number;
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
    <div className="rounded transition-shadow hover:shadow-md">
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
          value={examineValue(value)}
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
              setValue((value as number) >= 0 ? 0 : (value as number) - 1)
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

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-3">
            {/* @ts-ignore */}
            <Select
              label="Select Item"
              color="blue-gray"
              className="hover:shadow-md"
            >
              {supplies?.map((item, index) => (
                <Option key={index}>{item.name}</Option>
              ))}
            </Select>
            <CounterRender value={itemCount} setValue={setItemCount} />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
