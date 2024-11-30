"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ServiceForm from "./service-form";
import ShipmentDetailForm from "./shipment-detail-form";
import ContactInfoForm from "./contact-info-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestQuoteSchema, RequestQuoteValues } from "@/lib/schemas";

export default function QuoteStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Service Type", "Shipment Details", "Contact Information"];

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const form = useForm<RequestQuoteValues>({
    resolver: zodResolver(requestQuoteSchema),
  });

  return (
    <div className={cn("w-full")}>
      {/* Stepper Navigation */}
      <div className="flex justify-between items-center w-3/4 md:gap-4 mx-auto">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isDone = currentStep > index;
          return (
            <div
              key={`stepper-${index}`}
              className="flex w-full items-center md:gap-4"
            >
              <span
                className={cn(
                  "text-sm md:text-base font-medium text-muted-foreground",
                  (isActive || isDone) && "text-primary"
                )}
              >
                {step}
              </span>

              <div
                className={cn(
                  "hidden md:block flex-1 w-full h-2 bg-[#EFF0F6] rounded-lg before:transition before:duration-300 relative before:absolute before:block  before:top-0 before:left-0 before:h-full before:bg-primary before:w-0 before:rounded-lg",
                  isActive && "before:w-1/2",
                  isDone && "before:w-full"
                )}
              />
            </div>
          );
        })}
      </div>

      <Form {...form}>
        <form className="m-6">
          {currentStep === 0 && <ServiceForm control={form.control} />}
          {currentStep === 1 && <ShipmentDetailForm control={form.control} />}
          {currentStep === 2 && <ContactInfoForm control={form.control} />}

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
            {currentStep > 0 && (
              <Button
                type="button"
                size="lg"
                className="bg-[#E2FAEC] h-12 text-primary shadow-none w-full md:w-fit hover:bg-[#E2FAEC]/80 hover:text-primary/80 px-12"
                onClick={() => {
                  prevStep();
                }}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
            )}

            {currentStep < steps.length - 1 && (
              <Button
                type="button"
                size="lg"
                onClick={nextStep}
                className="px-12 w-full md:w-fit h-12"
              >
                Continue
              </Button>
            )}

            {currentStep == steps.length - 1 && (
              <Button size="lg" className="px-12 w-full md:w-fit h-12">
                Submit
              </Button>
            )}
          </div>
        </form>
      </Form>
      {/* Stepper Content */}

      {/* Navigation Buttons */}
    </div>
  );
}
