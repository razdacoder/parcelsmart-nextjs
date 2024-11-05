import AppNavBar from "@/components/app-navbar";
import TrackShipmentPage from "@/features/track/components/track-page";

export default function TrackPage() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Track Shipment" />

      <div className="px-4 md:px-8 space-y-6">
        <TrackShipmentPage />
      </div>
    </div>
  );
}
