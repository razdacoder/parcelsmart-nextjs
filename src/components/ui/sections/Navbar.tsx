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

export default function Navbar() {
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
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>Love</NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shipping</NavigationMenuTrigger>
                <NavigationMenuContent>Love</NavigationMenuContent>
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
                  href="/"
                  className="hover:text-primary text-sm font-medium transition-colors"
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
