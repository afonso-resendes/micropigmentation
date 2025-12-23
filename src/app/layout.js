import { Inter } from "next/font/google";
import "../style/globals.css";
import ClientLayout from "./client-layout";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JMicropigmentation - Micropigmentação Capilar Hiper-Realista",
  description:
    "JMicropigmentation oferece serviços de micropigmentação capilar hiper-realista, facial e paramédica. Transforme a sua confiança com a nossa técnica especializada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
