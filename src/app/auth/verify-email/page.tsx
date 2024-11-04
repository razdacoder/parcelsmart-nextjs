"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const router = useRouter();

  return (
    <main className="bg-[#F8FAFC] min-h-screen flex flex-col py-10 md:px-24">
      <div className="hidden lg:flex justify-center lg:justify-start items-center">
        <Image
          src="/logo-primary.svg"
          alt="ParcelSmart Logo"
          height={64}
          width={220}
        />
      </div>
      <div className="flex-1 flex flex-col gap-8 justify-center items-center w-full p-4">
        <div className="flex lg:hidden justify-center items-center">
          <Image
            src="/logo-primary.svg"
            alt="ParcelSmart Logo"
            height={64}
            width={220}
          />
        </div>
        <div className="w-full lg:w-[512px] bg-white p-10 rounded-md space-y-6">
          <div className="flex justify-center">
            <Image
              src="/verify-email.svg"
              alt="Verify Email SVG"
              width={151.57}
              height={132}
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-center text-text">
              Verify your Email
            </h3>
            <p className="text-muted-foreground text-sm text-center">
              Thank you signing up with us, check your email for instructions to
              verify your email
            </p>
          </div>
          <Button
            onClick={() => {
              router.push("/auth/verify-email/verification");
            }}
            size="lg"
            className="w-full"
          >
            Proceed
          </Button>
          <div className="flex justify-center mt-6">
            <p className="text-text text-sm text-center font-medium">
              Don&apos;t receive an email?&nbsp;
              <Button
                variant="link"
                className="text-primary hover:no-underline p-0"
              >
                Resend
              </Button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}