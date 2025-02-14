import {
  Button,
  Card,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import "../../CustomCSS/SelectOverflow.css";

interface ServicesDataProps {
  code: number;
  description: string;
  price: number;
}

interface ServiceListProps {
  code: number;
  description: string;
  price: number;
  count: number;
}

interface CounterRenderProps {
  value: number | null;
  setValue: (newValue: number) => void;
}

interface RenderSelectTableProps {
  TableContent: ServicesDataProps[];
  selectService: (serviceDescription: string) => void;
  selectServiceCode: (serviceCode: number) => void;
}

interface RenderItemsTableProps {
  TableContent: ServiceListProps[];
  deleteItem: (serviceDescription: string) => void;
  CalculateItemPrice: (item: ServiceListProps) => number;
}

const TABLE_HEAD = [
  "Code",
  "Service",
  "Price Per Service",
  "Count",
  "Total Per Item",
  "",
];

const SELECT_HEAD = ["#", "Code", "Service", "Price"];

function formatNumberWithCommas(Num: number | null): string {
  if (Num !== null) {
    return Num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return "N/A";
}

function RenderSelectTable({
  TableContent,
  selectService,
  selectServiceCode,
}: RenderSelectTableProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Card className="h-full w-full px-4 py-1 md:px-9 md:py-4">
        <div className="max-h-60 overflow-y-auto overscroll-contain">
          <table
            className="w-full min-w-min table-auto text-right"
            style={{ direction: "rtl" }}
          >
            <thead>
              <tr>
                {SELECT_HEAD.map((head, index) => {
                  return (
                    <th
                      key={head}
                      className={`border-b border-gray-300 px-4 py-4 md:px-3 md:py-4 ${index == 0 ? "w-8 md:w-12" : ""} ${index == 2 ? "" : ""}`}
                    >
                      {/* @ts-ignore */}
                      <Typography variant="h6" color="blue-gray" className="">
                        {head}
                      </Typography>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TableContent.map((item, index) => {
                const isLast = index === TableContent.length - 1;
                const classes = isLast
                  ? "p-4 md:p-3"
                  : "p-4 md:p-3 border-b border-gray-300";

                return (
                  <tr
                    key={item.description}
                    className="hover:bg-gray-50"
                    onClick={() => {
                      selectService(item.description),
                        selectServiceCode(item.code);
                    }}
                  >
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography variant="h5" className="text-nowrap">
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography variant="h5" className="text-nowrap">
                        {item.code}
                      </Typography>
                    </td>
                    <td className={`${classes} `}>
                      {/* @ts-ignore */}
                      <Typography
                        variant="h5"
                        className="text-nowrap md:text-wrap"
                      >
                        {item.description}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography
                        variant="h5"
                        className="text-nowrap"
                        style={{ direction: "ltr" }}
                      >
                        {`${formatNumberWithCommas(item.price)} Rial`}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

function RenderItemsTable({
  TableContent,
  deleteItem,
  CalculateItemPrice,
}: RenderItemsTableProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Card className="h-full w-full px-4 py-1 md:px-9 md:py-4">
        <div className="max-h-60 overflow-y-auto">
          <table
            className="w-full min-w-min table-auto text-right"
            style={{ direction: "rtl" }}
          >
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => {
                  const isLast = index === TABLE_HEAD.length - 1;
                  return (
                    <th
                      key={head}
                      className={`border-b border-gray-300 px-3 py-3 md:px-3 md:py-4 ${isLast ? "w-8 md:w-12" : ""}`}
                    >
                      {/* @ts-ignore */}
                      <Typography variant="h6" color="blue-gray" className="">
                        {head}
                      </Typography>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TableContent.map((item, index) => {
                const isLast = index === TableContent.length - 1;
                const classes = isLast
                  ? "p-3 md:p-3"
                  : "p-3 md:p-3 border-b border-gray-300";

                return (
                  <tr key={item.description} className="hover:bg-gray-50">
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography variant="h5" className="text-nowrap">
                        {item.code}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography
                        variant="h5"
                        className="text-nowrap md:text-wrap"
                      >
                        {item.description}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography
                        variant="h5"
                        className="text-nowrap"
                        style={{ direction: "ltr" }}
                      >
                        {`${formatNumberWithCommas(item.price)} Rial`}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography variant="h5" className="text-nowrap">
                        {item.count}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography
                        variant="h5"
                        className="text-nowrap"
                        style={{ direction: "ltr" }}
                      >
                        {`${formatNumberWithCommas(CalculateItemPrice(item))} Rial`}
                      </Typography>
                    </td>
                    <td className={`${classes}`}>
                      {/* @ts-ignore */}
                      <IconButton
                        className="rounded-full"
                        size="sm"
                        color="red"
                        onClick={() => deleteItem(item.description)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="white"
                          className="size-6"
                        >
                          <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                        </svg>
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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
    <div className="h-full">
      <div className="relative">
        {/* @ts-ignore */}
        <Input
          id="count"
          type="number"
          value={examineValue(value) ?? ""}
          placeholder="set amount"
          onChange={(e) => setValue(Number(e.target.value))}
          className="appearance-none !border-t-blue-gray-200 text-xl font-normal leading-relaxed antialiased placeholder:text-blue-gray-300 placeholder:opacity-100 hover:shadow-md focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0 ",
          }}
        />
        <div className="absolute right-1 top-1 flex gap-0.5">
          {/* @ts-ignore */}
          <IconButton
            size="sm"
            variant="text"
            className="rounded bg-transparent"
            onClick={() =>
              setValue((value as number) <= 1 ? 1 : (value as number) - 1)
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

export default function ServicesCalculator() {
  const [servicesData, setServicesData] = useState<ServicesDataProps[]>([]);
  const [serviceList, setServiceList] = useState<ServiceListProps[]>([]);

  const [serviceCount, setServiceCount] = useState<number | null>(1);
  const [serviceCode, setServiceCode] = useState<number | null>(0);
  const [serviceDescription, setServiceDescription] = useState<string>("");

  // const [searchTerm, setSearchTerm] = useState<string>("");
  // const [isOpen, setIsOpen] = useState<boolean>(false); // Controls dropdown visibility
  // const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown container

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchservicesData = async () => {
      try {
        const response = await fetch("/Data/Services.json");
        if (!response.ok) {
          throw new Error("Failed to fetch Users data from Services.json");
        }

        const data = await response.json();
        setServicesData(data);
      } catch (jsonError) {
        console.error(jsonError);
      }
    };
    fetchservicesData();
  }, []);

  useEffect(() => {
    const total = serviceList.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [serviceList]); // Recalculates whenever serviceList changes

  useEffect(() => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollLeft =
        tableContainerRef.current.scrollWidth;
    }
  }, []);

  // // Detect clicks outside to close dropdown
  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false); // Close dropdown
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // // Filter items based on search term
  // const filteredItems = services.filter((item) =>
  //   item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  function addItem(serviceDescription: string, serviceCount: number) {
    if (serviceCount < 1) {
      console.warn(`Count: "${serviceCount}" is not valid.`);
      return;
    }

    const selectedItem = servicesData.find(
      (item) => item.description === serviceDescription,
    );
    if (!selectedItem) {
      console.error(`Item "${serviceDescription}" not found in services.`);
      return;
    }

    // Check if the item is already in the serviceList
    const isItemAlreadyAdded = serviceList.some(
      (item) => item.description === serviceDescription,
    );
    if (isItemAlreadyAdded) {
      console.warn(`Item "${serviceDescription}" is already in the list.`);
      return;
    }

    setServiceList((prevItem) => [
      ...prevItem,
      {
        code: serviceCode as number,
        description: serviceDescription,
        price: selectedItem.price,
        count: serviceCount as number,
      },
    ]);
  }

  function deleteItem(serviceDescription: string) {
    setServiceList((prevItems) =>
      prevItems.filter((item) => item.description !== serviceDescription),
    );
  }

  function CalculateItemPrice(item: ServiceListProps): number {
    return item.price * item.count;
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col gap-9 px-5 md:px-0">
          <div
            ref={tableContainerRef}
            className="table-container w-full overflow-auto"
            style={{ direction: "rtl" }}
          >
            <RenderSelectTable
              TableContent={servicesData}
              selectService={setServiceDescription}
              selectServiceCode={setServiceCode}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row-reverse">
            <div className="w-full">
              {/* @ts-ignore */}
              {/* <Select
                label="Select Item"
                color="blue-gray"
                className="overflow-hidden whitespace-nowrap hover:shadow-md"
                menuProps={{ className: "" }}
                containerProps={{ className: "text-left" }}
                value={serviceDescription ?? ""}
                onChange={(name) => {
                  setServiceDescription(name ?? "");
                }}
                key={services.length}
              >
                {services?.map((item) => (
                  <Option key={item.description} value={item.description}>
                    {item.description}
                  </Option>
                ))}
              </Select> */}
              {/* @ts-ignore */}
              <Input
                id="serviceDescription"
                type="text"
                readOnly={true}
                value={serviceDescription ?? ""}
                placeholder="selected Item"
                className="appearance-none !border-t-blue-gray-200 text-right text-xl font-normal leading-relaxed antialiased placeholder:text-blue-gray-300 placeholder:opacity-100 hover:shadow-md focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
                style={{ direction: "rtl" }}
              />
              {/* <div ref={dropdownRef}>
                <Menu open={searchTerm.length >= 0} placement="bottom">
                  <MenuHandler>
                    <Input
                      id="searchInput"
                      type="text"
                      value={searchTerm}
                      onFocus={() => setIsOpen(true)}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsOpen(true); // Open dropdown when typing
                      }}
                      placeholder="Search and Select"
                      className="appearance-none !border-t-blue-gray-200 text-xl font-normal leading-relaxed antialiased placeholder:text-blue-gray-300 placeholder:opacity-100 hover:shadow-md focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      containerProps={{ className: "min-w-0" }}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      style={{ direction: "rtl" }}
                    />
                  </MenuHandler>

                  {isOpen && searchTerm && (
                    // @ts-ignore
                    <MenuList className="absolute z-50 w-max overflow-auto rounded-md border border-gray-200 bg-white shadow-lg">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                          // @ts-ignore
                          <MenuItem
                            key={index}
                            onClick={() => {
                              setServiceDescription(item.description); // Set selected item
                              setSearchTerm(item.description); // Update input
                              setIsOpen(false); // Close dropdown
                            }}
                            className="flex cursor-pointer flex-row-reverse justify-between gap-7 bg-white px-3 py-2 text-right hover:bg-gray-100"
                          >
                            <Typography variant="lead">{item.description}</Typography>
                            <Typography variant="lead">
                              {formatNumberWithCommas(item.price)}
                            </Typography>
                          </MenuItem>
                        ))
                      ) : (
                        // @ts-ignore
                        <MenuItem className="bg-white px-3 py-2">
                          No items found
                        </MenuItem>
                      )}
                    </MenuList>
                  )}
                </Menu>
              </div> */}
            </div>
            <div className="">
              <CounterRender value={serviceCount} setValue={setServiceCount} />
            </div>
            <div className="">
              {/* @ts-ignore */}
              <Button
                variant="gradient"
                color="green"
                size="md"
                className="h-full !text-nowrap text-white"
                onClick={() =>
                  addItem(serviceDescription as string, serviceCount as number)
                }
              >
                Add Item
              </Button>
            </div>
          </div>
          <div
            ref={tableContainerRef}
            className="table-container w-full overflow-auto"
            style={{ direction: "rtl" }}
          >
            <RenderItemsTable
              TableContent={serviceList}
              deleteItem={deleteItem}
              CalculateItemPrice={CalculateItemPrice}
            />
          </div>
          {/* @ts-ignore */}
          <Card className="mb-3 flex h-full w-full flex-row items-center justify-between gap-5 px-4 py-2 md:px-9 md:py-4">
            <div className="">
              {/* @ts-ignore */}
              <Typography variant="h5" className="text-balance text-left">
                {`Total Price: ${formatNumberWithCommas(totalPrice)} Rial`}
              </Typography>
            </div>
            {/* @ts-ignore */}
            <Button
              variant="gradient"
              color="gray"
              size="md"
              className="!text-nowrap text-white"
              onClick={() => setServiceList([])}
            >
              Clear Items
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
