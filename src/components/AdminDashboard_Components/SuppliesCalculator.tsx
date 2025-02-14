import {
  Button,
  Card,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import "../../CustomCSS/SelectOverflow.css";

interface SuppliesProps {
  name: string;
  price: number;
}

interface itemsListProps {
  name: string;
  price: number;
  count: number;
}

interface CounterRenderProps {
  value: number | null;
  setValue: (newValue: number) => void;
}

interface RenderSelectTableProps {
  TableContent: SuppliesProps[];
  selectItem: (itemName: string) => void;
}

interface RenderItemsTableProps {
  TableContent: itemsListProps[];
  deleteItem: (itemName: string) => void;
  CalculateItemPrice: (item: itemsListProps) => number;
}

const TABLE_HEAD = ["Item", "Price Per Item", "Count", "Total Per Item", ""];

const SELECT_HEAD = ["#", "Item", "Price"];

function formatNumberWithCommas(Num: number | null): string {
  if (Num !== null) {
    return Num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return "N/A";
}

function RenderSelectTable({
  TableContent,
  selectItem,
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
                      className={`border-b border-gray-300 px-4 py-4 md:px-3 md:py-4 ${index == 0 ? "w-8 md:w-12" : ""}`}
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
                    key={item.name}
                    className="hover:bg-gray-50"
                    onClick={() => selectItem(item.name)}
                  >
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography variant="h5" className="text-nowrap">
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography
                        variant="h5"
                        className="text-nowrap md:text-wrap"
                      >
                        {item.name}
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
                  <tr key={item.name} className="hover:bg-gray-50">
                    <td className={classes}>
                      {/* @ts-ignore */}
                      <Typography
                        variant="h5"
                        className="text-nowrap md:text-wrap"
                      >
                        {item.name}
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
                        onClick={() => deleteItem(item.name)}
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

export default function SuppliesCalculator() {
  const [supplies, setSupplies] = useState<SuppliesProps[]>([]);
  const [itemsList, setItemsList] = useState<itemsListProps[]>([]);

  const [itemCount, setItemCount] = useState<number | null>(1);
  const [itemName, setItemName] = useState<string>("");

  // const [searchTerm, setSearchTerm] = useState<string>("");
  // const [isOpen, setIsOpen] = useState<boolean>(false); // Controls dropdown visibility
  // const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown container

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const tableContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const total = itemsList.reduce(
      (sum, item) => sum + item.price * item.count,
      0,
    );
    setTotalPrice(total);
  }, [itemsList]); // Recalculates whenever itemsList changes

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
  // const filteredItems = supplies.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  function addItem(itemName: string, itemCount: number) {
    if (itemCount < 1) {
      console.warn(`Count: "${itemCount}" is not valid.`);
      return;
    }

    const selectedItem = supplies.find((item) => item.name === itemName);
    if (!selectedItem) {
      console.error(`Item "${itemName}" not found in supplies.`);
      return;
    }

    // Check if the item is already in the itemsList
    const isItemAlreadyAdded = itemsList.some((item) => item.name === itemName);
    if (isItemAlreadyAdded) {
      console.warn(`Item "${itemName}" is already in the list.`);
      return;
    }

    setItemsList((prevItem) => [
      ...prevItem,
      { name: itemName, price: selectedItem.price, count: itemCount },
    ]);
  }

  function deleteItem(itemName: string) {
    setItemsList((prevItems) =>
      prevItems.filter((item) => item.name !== itemName),
    );
  }

  function CalculateItemPrice(item: itemsListProps): number {
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
              TableContent={supplies}
              selectItem={setItemName}
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
                value={itemName ?? ""}
                onChange={(name) => {
                  setItemName(name ?? "");
                }}
                key={supplies.length}
              >
                {supplies?.map((item) => (
                  <Option key={item.name} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select> */}
              {/* @ts-ignore */}
              <Input
                id="itemName"
                type="text"
                readOnly={true}
                value={itemName ?? ""}
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
                              setItemName(item.name); // Set selected item
                              setSearchTerm(item.name); // Update input
                              setIsOpen(false); // Close dropdown
                            }}
                            className="flex cursor-pointer flex-row-reverse justify-between gap-7 bg-white px-3 py-2 text-right hover:bg-gray-100"
                          >
                            <Typography variant="lead">{item.name}</Typography>
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
              <CounterRender value={itemCount} setValue={setItemCount} />
            </div>
            <div className="">
              {/* @ts-ignore */}
              <Button
                variant="gradient"
                color="green"
                size="md"
                className="h-full !text-nowrap text-white"
                onClick={() => addItem(itemName as string, itemCount as number)}
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
              TableContent={itemsList}
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
              onClick={() => setItemsList([])}
            >
              Clear Items
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
