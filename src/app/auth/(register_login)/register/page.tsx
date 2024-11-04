import RegisterForm from "@/features/auth/forms/register-form";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="md:max-w-md flex flex-col gap-8 p-8 md:p-0">
      <div className="flex lg:hidden justify-center mb-6">
        <Image
          src="/logo-primary.svg"
          alt="Parcel Smart Logo"
          height={64}
          width={220}
        />
      </div>
      <h3 className="text-2xl font-bold text-text">Sign Up for an Account</h3>
      <RegisterForm />
      <div className="flex justify-center mt-6">
        <p className="text-text text-sm text-center font-medium">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
