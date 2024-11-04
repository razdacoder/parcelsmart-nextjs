import NewPasswordForm from "@/features/auth/forms/new-password-form";
import Image from "next/image";
import Link from "next/link";

export default function NewPassword() {
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
      <div className="flex-1 flex flex-col gap-8 justify-center items-center px-4 w-full">
        <div className="flex lg:hidden justify-center items-center">
          <Image
            src="/logo-primary.svg"
            alt="ParcelSmart Logo"
            height={64}
            width={220}
          />
        </div>
        <div className="w-full lg:w-[512px] bg-white p-10 rounded-md space-y-6  ">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-center text-text">
              New password
            </h3>
            <p className="text-muted-foreground text-sm text-center">
              Enter OTP and your new password
            </p>
          </div>
          <NewPasswordForm />
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/auth/login" className="text-primary text-sm font-medium">
            Back to Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
