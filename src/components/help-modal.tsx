import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { XCircle } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export function HelpSupportModal() {
  return (
    <Dialog>
      <DialogOverlay className="bg-black/80" />
      <DialogTrigger asChild>
        <Button className="gap-2 hidden md:inline-flex h-8" size="sm">
          <QuestionMarkIcon />
          Help
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 md:max-w-xl rounded-lg">
        <DialogHeader className="flex-row justify-between items-center">
          <DialogTitle className="text-xl">
            Contact Customer Support
          </DialogTitle>
          <DialogClose>
            <XCircle className="size-6 fill-black stroke-white" />
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-6">
          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-2 rounded-xl border"
          >
            <Image
              src="/whatsapp.svg"
              alt="Whatsapp Logo"
              width={32}
              height={32}
            />
            <div className="flex flex-col gap-0.5">
              <h5 className="text-lg text-text font-semibold">Whatsapp</h5>
              <p className="text-gray-500 text-sm">
                We respond as fast as possible.
              </p>
            </div>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-2 rounded-xl border"
          >
            <Image src="/phone.svg" alt="Phone" width={32} height={32} />
            <div className="flex flex-col gap-0.5">
              <h5 className="text-lg text-text font-semibold">Phone Call</h5>
              <p className="text-gray-500 text-sm">
                Our friendly customer support will pick.
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-2 rounded-xl border"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={32}
              height={32}
            />
            <div className="flex flex-col gap-0.5">
              <h5 className="text-lg text-text font-semibold">Instagram</h5>
              <p className="text-gray-500 text-sm">
                We respond as fast as possible.
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-2 rounded-xl border"
          >
            <Image src="/x.svg" alt="X Logo" width={32} height={32} />
            <div className="flex flex-col gap-0.5">
              <h5 className="text-lg text-text font-semibold">Twitter</h5>
              <p className="text-gray-500 text-sm">
                We respond as fast as possible.
              </p>
            </div>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
