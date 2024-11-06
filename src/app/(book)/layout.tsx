import SessionProvider from "@/components/providers/session-provider";

export default function BookShipmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SessionProvider>{children}</SessionProvider>;
}
