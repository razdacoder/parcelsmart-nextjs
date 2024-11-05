"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import useTrackShipment, {
  TrackShipmentResponseType,
} from "../api/useTrackShipment";
import TrackResult from "./track-modal";

export default function TrackShipmentPage() {
  const [shipmentId, setShipmentId] = useState<string>("");
  const { mutate: trackShipment, isPending, error } = useTrackShipment();
  const [data, setData] = useState<TrackShipmentResponseType>();
  const isValid = shipmentId === "";
  return (
    <div className="py-12 px-4 md:px-8 bg-white">
      <div className="flex flex-col md:flex-row md:items-end gap-8">
        <div className="flex-1 flex flex-col gap-1.5">
          <Label>Enter a Shipping ID to see updates</Label>
          <div className="relative">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              value={shipmentId}
              onChange={(e) => setShipmentId(e.target.value)}
              className="ps-10 h-10"
              type="text"
              placeholder="SDY668b76228"
            />
          </div>
        </div>
        <Button
          disabled={isValid || isPending}
          onClick={() => {
            trackShipment(
              { shipment_id: shipmentId },
              {
                onSuccess: (data) => {
                  setData(data);
                },
                onError: async (error) => {
                  toast.error(error.response?.data.message);
                },
              }
            );
          }}
          className="gap-2"
          size="lg"
        >
          Track Shipment <ArrowRight className="size-4 " />{" "}
        </Button>
      </div>
      {isPending && !data && (
        <div className="flex justify-center items-center py-24">
          <Loader className="text-primary size-6 animate-spin" />
        </div>
      )}
      {data && <TrackResult data={data} />}

      {error && (
        <div className="flex justify-center items-center py-6">
          <p className="text-destructive text-sm font-medium">
            {error?.response?.data.message}
          </p>
        </div>
      )}
    </div>
  );
}
