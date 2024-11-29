import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/sections/Navbar";
import Footer from "@/components/ui/sections/Footer";
import ReactQueryProvider from "@/components/react-query-provider";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parcelsmart",
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
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
