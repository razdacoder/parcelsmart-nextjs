import AppNavBar from "@/components/app-navbar";
import { Button } from "@/components/ui/button";
import ShipmentList from "@/features/shipments/components/shipment-list";
import ShipmentMetrics from "@/features/shipments/components/shipment-metrics";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ShipmentsPage() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Shipment" />

      <div className="px-4 md:px-8 space-y-6">
        <div className="w-full p-8 bg-[#0B2230] rounded-xl text-white flex flex-col md:flex-row md:items-center justify-start md:justify-between gap-8">
          <div className="space-y-1.5">
            <h1 className="text-xl lg:text-[28px] leading-9 font-bold">
              Sit Back and Relax
            </h1>
            <p className="text-sm">
              Leave the worries of pick-ups, drop-offs, packaging, and
              deliveries to us. Start your shipping journey with Parcels Mart!
            </p>
          </div>
          <Button asChild className="items-center gap-2 rounded-lg" size="lg">
            <Link href="/shipments/book">
              Book Shipment Now <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ShipmentMetrics />

        <ShipmentList />
      </div>
    </div>
  );
}
