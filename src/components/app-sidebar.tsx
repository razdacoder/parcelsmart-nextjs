"use client";

import { useQueryClient } from "@tanstack/react-query";
import {
  BookOpen,
  LayoutDashboard,
  LogOut,
  Settings,
  TruckIcon,
  WalletCards,
} from "lucide-react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { NavMain } from "./nav-main";
import { useAuth } from "./providers/auth-provider";
import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
} from "./ui/sidebar";

export const iframeHeight = "870px";

export const containerClassName = "w-full h-full";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Shipment",
      url: "/shipments",
      icon: TruckIcon,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: WalletCards,
    },

    {
      title: "Address Book",
      url: "/address-book",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar() {
  const { logout } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  return (
    <Sidebar className="bg-primary text-white space-y-8">
      <SidebarHeader className="relative flex justify-center py-5 pe-10">
        <Image
          src="/logo.svg"
          alt="Parcel Smart Logo"
          height={52}
          width={178.75}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <NavMain items={data.navMain} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <Button
          onClick={() => {
            logout();
            queryClient.clear();
            router.replace("/auth/login");
          }}
          variant="secondary"
          className="w-full gap-2 text-primary"
        >
          <LogOut className="size-4 text-primary" /> Log Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
