"use client";
import TableLoader from "@/components/table-loader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useShipments from "../api/use-shipments";
import { shipmentColumns } from "../shipment-columns";
import { DataTable } from "./shipment-table";

export default function RecentShipment() {
  const {
    data: shipments,
    isLoading: shipmentLoading,
    isError: shipmentError,
  } = useShipments({
    page: 1,
    limit: 5,
    status: null,
    start_date: undefined,
    end_date: undefined,
    search: "",
  });
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-text">Recent Shipments</h3>
        <Button variant="link" size="sm" asChild>
          <Link href="/shipment">View All</Link>
        </Button>
      </div>
      <div className="bg-white w-full p-8 space-y-2">
        <div>
          {shipmentLoading && <TableLoader />}
          {shipments && (
            <>
              <div>
                <DataTable
                  columns={shipmentColumns}
                  data={shipments.data.shipments}
                />
              </div>
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
    </div>
  );
}
