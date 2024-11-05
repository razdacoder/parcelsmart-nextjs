"use client";

import TableLoader from "@/components/table-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Paginator from "@/components/paginator";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useDebounce } from "react-use";
import useShipments from "../api/use-shipments";
import { shipmentColumns } from "../shipment-columns";
import { DataTable } from "./shipment-table";

export default function ShipmentList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    const from = searchParams.get("start_date");
    const to = searchParams.get("end_date");
    const fromDate = from ? new Date(from) : undefined;
    const toDate = to ? new Date(to) : undefined;

    if (fromDate) {
      return {
        from: fromDate,
        to: toDate ? toDate : undefined,
      };
    }

    return undefined;
  });
  const search = searchParams.get("search");

  const [searchInput, setSearchInput] = useState(search || "");
  const [debouncedValue, setDebouncedValue] = useState(search || "");

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentFilter = searchParams.get("status") as
    | "draft"
    | "confirmed"
    | "in_transit"
    | "delivered"
    | "cancelled"
    | null;
  useDebounce(
    () => {
      setDebouncedValue(searchInput);
      const newSearchParams = new URLSearchParams(searchParams.toString());
      if (searchInput) {
        newSearchParams.set("search", debouncedValue);
      } else {
        newSearchParams.delete("search");
      }
      router.push(`${pathname}?${newSearchParams.toString()}`);
    },
    1500,
    [searchInput]
  );

  const handleFilterClick = (
    filter:
      | "draft"
      | "confirmed"
      | "in_transit"
      | "delivered"
      | "cancelled"
      | null
  ) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (filter) {
      newSearchParams.set("status", filter);
    } else {
      newSearchParams.delete("status");
    }
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);

    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (range?.from) {
      newSearchParams.set("start_date", format(range.from, "yyyy-MM-dd"));
    } else {
      newSearchParams.delete("start_date");
    }

    if (range?.to) {
      newSearchParams.set("end_date", format(range.to, "yyyy-MM-dd"));
    } else {
      newSearchParams.delete("end_date");
    }

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };
  const {
    data: shipments,
    isLoading: shipmentLoading,
    isError: shipmentError,
  } = useShipments({
    page: currentPage,
    limit: 15,
    status: currentFilter,
    start_date: dateRange?.from
      ? format(dateRange.from, "yyyy-MM-dd")
      : undefined,
    end_date: dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : undefined,
    search: debouncedValue,
  });
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-text">All Shipments</h3>

      <div className="bg-white w-full p-8 space-y-2">
        <div className="flex flex-col lg:flex-row md:justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              onClick={() => handleFilterClick(null)}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                !currentFilter &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              All
            </Button>
            <Button
              onClick={() => handleFilterClick("confirmed")}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "confirmed" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Confirmed
            </Button>
            <Button
              onClick={() => handleFilterClick("draft")}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "draft" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Draft
            </Button>
            <Button
              onClick={() => handleFilterClick("in_transit")}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "in_transit" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              In Transit
            </Button>
            <Button
              onClick={() => handleFilterClick("cancelled")}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "cancelled" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Cancelled
            </Button>
            <Button
              onClick={() => handleFilterClick("delivered")}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "delivered" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Delivered
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Input
              value={searchInput || ""}
              onChange={({ currentTarget }) => {
                setSearchInput(currentTarget.value);
              }}
              placeholder="Search..."
              className=" h-11 w-full md:w-1/2 lg:w-56 text-sm"
            />
            <DatePickerWithRange
              value={dateRange}
              onChange={handleDateChange}
              disabled={shipmentLoading}
              className="h-11 w-full md:w-1/2 lg:w-fit"
            />
          </div>
        </div>
        {shipmentLoading && <TableLoader />}
        {shipments && (
          <>
            <div>
              <DataTable
                columns={shipmentColumns}
                data={shipments.data.shipments}
              />
            </div>

            <Paginator pagination={shipments.data.pagination} />
          </>
        )}

        {shipmentError && (
          <div className="flex justify-center items-center py-24">
            <p className="text-sm font-medium text-destructive">
              Failed to load shipments
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
