import mailIcon from "@/app/assets/sales-mail.svg";
import locationIcon from "@/app/assets/location.svg";
import phone from "@/app/assets/phone.svg";
import ContactCard, { ContactProps } from "./contact-card";
import DownloadMobileApp from "@/components/ui/sections/DownloadMobileApp";

const contacts: ContactProps[] = [
  {
    heading: "Lagos Office",
    address:
      "House 4, Virginia Omofomah Street, Spring Valley Estate, Lekki Epe Expressway.",
    image: locationIcon,
    alt: "Location Icon",
  },
  {
    heading: "Phone",
    address: "08064355812",
    image: phone,
    alt: "Phone Icon",
  },
  {
    heading: "Port Harcourt Office",
    address: "27, Sani Abacha road, GRA, Port Harcourt",
    image: locationIcon,
    alt: "Location Icon",
  },
  {
    heading: "Phone",
    address: "08140883056",
    image: phone,
    alt: "Phone Icon",
  },
  {
    heading: "UK Office",
    address: "16 John Roberts Garden, Carlisle, Cumbria.",
    image: locationIcon,
    alt: "Location Icon",
  },
  {
    heading: "Phone",
    address: "+447769489281",
    image: phone,
    alt: "Phone Icon",
  },
  {
    heading: "Support",
    address: "support@parcelsmartsolutions.com",
    image: mailIcon,
    alt: "Mail Icon",
  },

  {
    heading: "Sales",
    address: "sales@parcelsmartsolutions.com",
    image: mailIcon,
    alt: "Mail Icon",
  },
];

export default function ContactPage() {
  return (
    <>
    
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto p-4">
        <h2 className="text-[40px] leading-[40px] font-bold text-secondary text-center">
          Love to hear from you. Get in touch
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-y-6 gap-x-12">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.address}
              heading={contact.heading}
              address={contact.address}
              image={contact.image}
              alt={contact.alt}
            />
          ))}
        </div>
      </div>
    </section>
    <DownloadMobileApp/>
    </>
  );
}
