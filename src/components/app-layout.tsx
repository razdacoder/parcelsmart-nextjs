"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { AppSidebar } from "./app-sidebar";
import { SidebarLayout } from "./ui/sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useIsMobile();
  return (
    <SidebarLayout defaultOpen={isMobile ? false : true} className="relative">
      <AppSidebar />
      <main className="flex flex-1 bg-[#F8FAFC] w-full p-2 transition-all duration-300 ease-in-out">
        {children}
      </main>
    </SidebarLayout>
  );
}
