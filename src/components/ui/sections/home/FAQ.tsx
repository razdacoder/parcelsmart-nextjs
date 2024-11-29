import Image from "next/image";
import faqImage from "@/app/assets/faq-image.png";
import { FaqMenu } from "@/components/faq-menu";

export default function FAQ() {
  return (
    <section className="py-[100px]">
      <div className="max-w-screen-2xl mx-auto p-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[40px] leading-normal font-bold text-secondary">
                Frequently Asked Questions
              </h3>
              <p className="text-sm font-medium text-secondary">
                Get answers to commonly asked questions about Parcels Mart. Feel
                free to get in touch with our friendly customer support team for
                any inquiries, concerns, or assistance you may require.
              </p>
            </div>
            <Image
              src={faqImage}
              alt="Frequently Asked Questions Image"
              width={600}
              height={600}
            />
          </div>
          <div>
            <FaqMenu />
          </div>
        </div>
      </div>
    </section>
  );
}
