import { PSelect } from "@/components/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { RequestQuoteValues } from "@/lib/schemas";
import React from "react";
import { Control } from "react-hook-form";

const serviceTypeOptions = [
  {
    label: "Express Logistics",
    value: "express-logistics",
  },
  {
    label: "Last Mile Delivery",
    value: "last-mile-delivery",
  },
  {
    label: "Dangerous Goods Handling",
    value: "dangerous-goods-handling",
  },
  {
    label: "Sea Freight",
    value: "sea-freight",
  },
  {
    label: "Air Freight",
    value: "air-freight",
  },
  {
    label: "Large Cargo Solutions",
    value: "large-cargo-solutions",
  },
  {
    label: "Customs Clearing",
    value: "customs-clearing",
  },
  {
    label: "Aircraft Charters",
    value: "aircraft-charters",
  },
  {
    label: "Trans-Border Logistics",
    value: "trans-border-logistics",
  },
];

export default function ServiceForm({ control }: { control: Control<RequestQuoteValues> }) {
  return (
    <div className="mt-6">
      <FormField
        name="service_type"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Service Type</FormLabel>
            <FormControl>
              <PSelect
                placeholder="Service Type"
                value={field.value}
                onChange={field.onChange}
                options={serviceTypeOptions}
                disabled={field.disabled}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
