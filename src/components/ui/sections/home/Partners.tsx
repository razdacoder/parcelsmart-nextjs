import Image from "next/image";
import dhlImage from "@/app/assets/dhl.png";
import upsImage from "@/app/assets/ups.png";
import dpdImage from "@/app/assets/dpd.png";
import aramexImage from "@/app/assets/aramex.png";
import fedexImage from "@/app/assets/fedex.png";

const logos = [
  { name: "DHL Logo", image: dhlImage },
  { name: "UPS Logo", image: upsImage },
  { name: "DPD Logo", image: dpdImage },
  { name: "Aramex Logo", image: aramexImage },
  { name: "FedEx Logo", image: fedexImage },
  { name: "Aramex Logo", image: aramexImage },
];

export default function Partners() {
  return (
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto p-4">
        <h2 className="text-[40px] leading-[48px] text-secondary font-bold">
          Our Partners
        </h2>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-24 pr-24 items-center">
            {logos.map((logo, index) => (
              <div className="p-1" key={`${logo.name}-${index}`}>
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={166.67}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
