import Image from "next/image"

export type ContactProps = {
    heading: string
    address: string
    image: string
    alt: string
}

export default function ContactCard({heading, address, image, alt}: ContactProps) {
  return (
    <div className="flex gap-4 p-[30px] bg-[#f4f4f4] rounded-md">
      <div className="size-[70px] bg-primary flex items-center justify-center rounded-md p-4">
        <Image src={image} alt={alt} width={45} height={45} />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-secondary font-semibold">{heading}</h5>
        <p className="text-sm font-medium text-secondary">
         {address}
        </p>
      </div>
    </div>
  );
}
