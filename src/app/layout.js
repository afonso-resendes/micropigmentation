"use client";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../components/i18nconfig";
const inter = Inter({ subsets: ["latin"] });
//ss

const metadata = {
  title: "JMicropigmentation",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
