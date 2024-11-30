import DownloadMobileApp from "@/components/ui/sections/DownloadMobileApp";
import React from "react";
import QuoteStepper from "./_components/stepper";

export default function RequestQuotePage() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto p-4">
          <h2 className="text-[40px] leading-[40px] font-bold text-secondary text-center">
            Request a Quote
          </h2>
          <div className="mt-12 border rounded-lg py-16 px-12 max-w-screen-lg mx-auto w-full">
            <QuoteStepper />
          </div>
        </div>
      </section>
      <DownloadMobileApp />
    </>
  );
}
