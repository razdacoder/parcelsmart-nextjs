import Image from "next/image";
import React from "react";

export default function RegisterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden bg-[#BCE3CD] text-white px-12 py-10 lg:flex flex-col gap-12">
        <div className="">
          <Image
            src="/logo-primary.svg"
            alt="ParcelSmart Logo"
            height={64}
            width={220}
          />
        </div>

        <div className="w-full relative flex justify-center flex-1 items-center">
          <div className="size-[520px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 flex justify-center items-center">
            <Image
              src="/onboarding.svg"
              alt="Onboarding"
              width={562}
              height={619}
            />
          </div>
          <div className="size-[720px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-primary">
          <h3 className="text-2xl font-bold">Making Shipping a Breeze</h3>
          <p className="text-sm text-center w-6/12">
            From booking to tracking and receiving items, Parcels Mart is here
            to make shipping a fun and hassle-free experience for you!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </main>
  );
}
