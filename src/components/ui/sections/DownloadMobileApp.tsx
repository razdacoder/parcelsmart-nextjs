import patternImage from "@/app/assets/pattern-bg.png";
import appleStoreImage from "@/app/assets/apple-store.png";
import googlePlayStoreImage from "@/app/assets/google-store.png";
import parcelAppImage from "@/app/assets/parcel-app.png";
import Image from "next/image";
export default function DownloadMobileApp() {
  return (
    <div
      className="w-full px-8 py-[50px] rounded-[8px] relative "
      style={{
        background: "linear-gradient(0deg, #F4FDF8 0%, #F4FDF8 100%)",
        backgroundImage: `url(${patternImage})`,
      }}
    >
      <div className="max-w-screen-2xl mx-auto p-4 relative">
        <div className="flex flex-col gap-6">
          <h3 className="text-[40px] leading-[48px] font-bold text-secondary">
            Download Parcels Mart Mobile App
          </h3>
          <p className="text-sm text-secondary">
            Exaperience the power of convenience at your fingertips
          </p>
          <div className="inline-flex items-center gap-4">
            <Image
              src={appleStoreImage}
              alt="Apple Store Logo"
              width={132}
              height={44}
            />
            <Image
              src={googlePlayStoreImage}
              alt="Google Play Store Logo"
              width={132}
              height={44}
            />
          </div>
        </div>
        <div className="absolute right-0 -top-full">
          <Image
            src={parcelAppImage}
            alt="Parcels Mart Mobile App Mock Up"
            width={374}
            height={586}
          />
        </div>
      </div>
    </div>
  );
}
