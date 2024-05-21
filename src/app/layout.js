"use client";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState, useEffect } from "react";
import "../components/i18nconfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ["latin"] });

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
