import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parcelsmart",
  description: "Fast, reliable express logistics services for small packages up to 3,000kg. Compare rates from top couriers, international, regional and domestic couriers.",
  keywords: ["Express Logistics Services", "Last Mile Delivery Solutions", "Dangerous Goods Shipping", "Sea Freight Nigeria", "Aircarft Charters Africa",]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
