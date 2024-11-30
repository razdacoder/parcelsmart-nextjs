import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ReactQueryProvider from "@/components/react-query-provider";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { template: "%s - Parcels Mart ", default: "Parcels Mart" },
  description:
    "Fast, reliable express logistics services for small packages up to 3,000kg. Compare rates from top couriers, international, regional and domestic couriers.",
  keywords: [
    "Express Logistics Services",
    "Last Mile Delivery Solutions",
    "Dangerous Goods Shipping",
    "Sea Freight Nigeria",
    "Aircarft Charters Africa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
