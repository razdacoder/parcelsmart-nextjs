import Footer from '@/components/ui/sections/Footer';
import Navbar from '@/components/ui/sections/Navbar';
import React from 'react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
