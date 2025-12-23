"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../components/i18nconfig";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}


