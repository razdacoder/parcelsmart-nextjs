"use client";

import Paginator from "@/components/paginator";
import TableLoader from "@/components/table-loader";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useDebounce } from "react-use";
import useTransactions from "../api/useTransactions";
import { columns } from "../transaction-columns";
import { DataTable } from "./transaction-data-table";
export default function TransactionList() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
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
  const currentFilter = searchParams.get("type");
  const {
    data: transactions,
    isLoading,
    isError,
  } = useTransactions({
    page: currentPage,
    limit: 15,
    type: currentFilter,
    start_date: dateRange?.from
      ? format(dateRange.from, "yyyy-MM-dd")
      : undefined,
    end_date: dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : undefined,
    search: debouncedValue,
  });

  useDebounce(
    () => {
      setDebouncedValue(searchInput);
      const newSearchParams = new URLSearchParams(searchParams.toString());
      if (searchInput) {
        newSearchParams.set("search", debouncedValue); // Add/update 'search' param
      } else {
        newSearchParams.delete("search"); // Remove 'search' param if empty
      }
      router.push(`${pathname}?${newSearchParams.toString()}`);
    },
    1500,
    [searchInput]
  );

  const handleFilterClick = (filter: string | null) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Update the 'filter' parameter or remove it if filter is null
    if (filter) {
      newSearchParams.set("type", filter);
    } else {
      newSearchParams.delete("type");
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
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-text">All Transactions</h3>

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
              onClick={() => handleFilterClick("credit")}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "credit" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Inflow
            </Button>
            <Button
              onClick={() => handleFilterClick("debit")}
              size="sm"
              className={cn(
                "px-8 h-9 bg-transparent text-text shadow-none hover:bg-transparent hover:text-primary  font-semibold",
                currentFilter === "debit" &&
                  "bg-[#DCFFEB] text-primary hover:bg-[#DCFFEB] hover:text-primary"
              )}
            >
              Outflow
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Input
              value={searchInput || ""}
              onChange={({ currentTarget }) => {
                setSearchInput(currentTarget.value);
              }}
              placeholder="Search..."
              className="py-2 h-11 w-full md:w-1/2 lg:w-56"
            />
            <DatePickerWithRange
              value={dateRange}
              onChange={handleDateChange}
              disabled={isLoading}
              className="h-12 w-full md:w-1/2 lg:w-fit"
            />
          </div>
        </div>
        <div>
          {isLoading && <TableLoader />}
          {transactions && (
            <>
              <div>
                <DataTable
                  columns={columns}
                  data={transactions.data.transactions}
                />
              </div>

              <Paginator pagination={transactions.data.pagination} />
            </>
          )}

          {isError && (
            <div className="flex justify-center items-center py-24">
              <p className="text-sm font-medium text-destructive">
                Failed to load transactions
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
