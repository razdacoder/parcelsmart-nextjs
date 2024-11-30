"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

const servicesLinks = [
  {
    name: "Express Logistics",
    href: "/express-logistics",
  },
];

const shippingLinks = [
  {
    name: "Request a Quote",
    href: "/request-quote",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="drop-shadow-md bg-white sticky top-0 left-0 z-50">
      <div className="max-w-screen-2xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Image
              src="/logo-primary.svg"
              alt="Parcelsmart Logo"
              width={120}
              height={38}
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    pathname.startsWith("/services") &&
                      "text-primary hover:text-primary"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 md:w-[500px] lg:w-[600px] space-y-2">
                  <h5 className="font-medium text-secondary">
                    Services we offer
                  </h5>
                  <div className="grid grid-cols-3">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={`/services${link.href}`}
                        className={cn(
                          "text-secondary flex items-center gap-4 hover:text-primary",
                          pathname === `/services${link.href}` &&
                            "text-primary hover:text-primary"
                        )}
                      >
                        <MoveRight className="size-4" /> {link.name}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    pathname.startsWith("/shipping") &&
                      "text-primary hover:text-primary"
                  )}
                >
                  Shipping
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 md:w-[500px] lg:w-[600px] space-y-2">
                  <h5 className="font-medium text-secondary">
                    Manage your shipment
                  </h5>
                  <div className="grid grid-cols-3">
                    {shippingLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={`/services${link.href}`}
                        className={cn(
                          "text-secondary flex items-center gap-4 hover:text-primary",
                          pathname === `/shipping${link.href}` &&
                            "text-primary hover:text-primary"
                        )}
                      >
                        <MoveRight className="size-4" /> {link.name}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Carriers</NavigationMenuTrigger>
                <NavigationMenuContent>Love</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>Love</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className={cn(
                    "hover:text-primary text-sm font-medium transition-colors",
                    pathname === "/contact" && "text-primary hover:text-primary"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild size="lg">
            <Link href="#">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
