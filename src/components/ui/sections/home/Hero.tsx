import Link from "next/link";
import { Button } from "../../button";
import Image from "next/image";

import heroImage from "@/app/assets/hero-image.png";

export default function Hero() {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto p-4">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-[43px]">
            <div className="bg-primary-light w-fit py-4 px-8 inline-flex items-center gap-4 text-sm font-medium rounded-[100px]">
              Imports . Exports . Nationwide Delivery.{" "}
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4354 2.68196C20.9352 2.16858 20.1949 1.97732 19.5046 2.17864L3.408 6.8595C2.6797 7.06184 2.16349 7.64267 2.02443 8.38053C1.88237 9.13148 2.37858 10.0848 3.02684 10.4834L8.0599 13.5768C8.57611 13.8939 9.24238 13.8144 9.66956 13.3835L15.4329 7.58428C15.723 7.28229 16.2032 7.28229 16.4934 7.58428C16.7835 7.87621 16.7835 8.34933 16.4934 8.65132L10.72 14.4516C10.2918 14.8814 10.2118 15.5508 10.5269 16.0702L13.6022 21.1538C13.9623 21.7577 14.5826 22.1 15.2628 22.1C15.3429 22.1 15.4329 22.1 15.513 22.0899C16.2933 21.9893 16.9135 21.4558 17.1436 20.7008L21.9156 4.62477C22.1257 3.94026 21.9356 3.19535 21.4354 2.68196Z"
                  fill="#157C7B"
                />
              </svg>
            </div>
            <h1 className="text-black text-[55px] leading-[66px] font-bold pr-12">
              Global <span className="text-primary">Logistics Solutions</span> -
              Express, Secure, and On-Time Deliveries
            </h1>
            <div className="flex items-center gap-4">
              <Button asChild size="lg">
                <Link href="#">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#">Track Your Shipment</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={heroImage}
              alt="Parcelsmart Hero Image"
              width={772}
              height={711.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
