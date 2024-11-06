import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAlertModal } from "@/hooks/use-alert-modal";
import { formatNaira } from "@/lib/utils";
import { Loader, XCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useGetInsurance from "../api/useGetInsurance";
import { useShipmentApplication } from "../hooks/use-shipment-application-store";

export default function InsuranceForm({ next, prev }: StepsProps) {
  const router = useRouter();
  const { clearAll, setInsurance, shipmentID, setUseInsurance, useInsurance } =
    useShipmentApplication();
  const { data, isLoading } = useGetInsurance({ shipment_id: shipmentID });

  function continueToReview() {
    if (useInsurance) {
      setInsurance({
        id: "insurance_payment",
        name: "Parcel Mart Insurance",
        price: data ? data.data.converted_premium : 0,
      });
    } else {
      setInsurance();
    }

    next?.();
  }

  const { onOpen: alertOpen, onClose: alertClose } = useAlertModal();
  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-text">
            Purchase Insurance
          </h3>
          <p className="text-sm text-muted-foreground">
            Protect your shipment with an insurance cover.
          </p>
        </div>
        <button
          onClick={() => {
            alertOpen({
              type: "warning",
              title: "Warning",
              message: "Are you sure you want to discard all changes",
              primaryLabel: "Continue",
              secondaryLabel: "Cancel",
              primaryFn: () => {
                clearAll();
                router.back();
                alertClose();
              },
              secondaryFn: () => {
                alertClose();
              },
            });
          }}
          className="cursor-pointer"
        >
          <XCircle className="size-6" />
        </button>
      </div>

      <div>
        {isLoading && (
          <div className="py-12">
            <Loader className="size-6 animate-spin text-primary" />
          </div>
        )}
        {data && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 w-full border-2 px-2 py-4 rounded-lg has-[:checked]:border-primary">
              <div className="flex items-center justify-between w-full px-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/parcels-icon.png"
                    alt="Parcels Mart Insurance Logo"
                    width={48}
                    height={48}
                    className="md:size-8 size-12"
                  />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs md:text-sm font-medium">
                      Parcels Mart
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="insurance"
                    checked={useInsurance}
                    className="hidden peer"
                    onChange={(e) => setUseInsurance(e.target.checked)}
                    id="in1"
                  />
                  <h2 className="text-base md:text-xl font-bold justify-self-end">
                    {formatNaira(data.data.converted_premium)}
                  </h2>
                  <Label
                    htmlFor="in1"
                    className="px-6 py-3 rounded-xl border-2 cursor-pointer peer-checked:bg-primary peer-checked:text-white"
                  >
                    {useInsurance ? "Selceted" : "Select"}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
        <Button
          type="button"
          onClick={() => prev?.()}
          size="lg"
          className="bg-[#E2FAEC] text-primary shadow-none w-full md:w-fit hover:bg-[#E2FAEC]/80 hover:text-primary/80 px-12"
        >
          Previous
        </Button>

        <Button
          onClick={continueToReview}
          size="lg"
          className="px-12 w-full md:w-fit"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
