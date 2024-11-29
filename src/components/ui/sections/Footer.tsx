import { Mail } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import Image from "next/image";
import paystackImage from "@/app/assets/secured-paystack.png";
import facebookLogo from "@/app/assets/facebook.svg";
import twitterLogo from "@/app/assets/twitter.svg";
import instagram from "@/app/assets/instagram.svg";
import whatsapp from "@/app/assets/whatsapp.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary py-[80px] text-white">
      <div className="max-w-screen-2xl mx-auto p-4">
        <div className="flex flex-col gap-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <h3 className="text-[40px] leading-[48px] text-white text-center">
              Simplify Your Delivery Experience with Us
            </h3>
            <p className="text-sm font-medium text-center max-w-md mx-auto">
              With effective communication and on-time deliveries, we makeyour
              shipping experience effortless.
            </p>
            <div className="flex items-center gap-6 mx-auto max-w-xl">
              <div className="relative flex-1">
                <Mail className="size-4 absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  className="ps-10 bg-white flex-1 w-full"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>

              <Button variant="secondary">Get Started</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/logo-white.png"
                alt="Parcels Mart White Logo"
                width={175}
                height={50.86}
              />
              <p className="text-white text-sm font-medium">
                Logistics Solutions Anywhere, Anytime
              </p>
              <Image
                src={paystackImage}
                alt="Secured by Paystack"
                width={228}
                height={95.86}
              />
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="font-medium text-white">Quick Links</h5>
              <div className="flex flex-col gap-3 text-white text-sm">
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/faqa">FAQs</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/carrers">Carrers</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="font-medium text-white">Contact</h5>
              <div className="flex flex-col gap-6 text-white text-sm">
                <p>+2348140883056</p>
                <p>support@parcelsmartsolutions.com</p>
                <p>
                  House 4, Virginia Omofomah Street, Spring Valley Estate, Lekki
                  Epe Expressway.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="font-medium text-white">Social Media Links</h5>
              <div className="flex items-center gap-6 text-white text-sm">
                <Link
                  href="#"
                  className="size-[50px] rounded-full flex items-center justify-center bg-white"
                >
                  <Image
                    src={facebookLogo}
                    alt="Facebook Logo"
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </Link>
                <Link
                  href="#"
                  className="size-[50px] rounded-full flex items-center justify-center bg-white"
                >
                  <Image
                    src={twitterLogo}
                    alt="Twitter Logo"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href="#"
                  className="size-[50px] rounded-full flex items-center justify-center bg-white"
                >
                  <Image
                    src={whatsapp}
                    alt="Whatsapp Logo"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href="#"
                  className="size-[50px] rounded-full flex items-center justify-center bg-white"
                >
                  <Image
                    src={instagram}
                    alt="Instagram Logo"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full border-t pt-8 border-gray-600">
            <p className="text-sm font-medium text-center text-white">
              All rights reserved Parcels Mart © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
