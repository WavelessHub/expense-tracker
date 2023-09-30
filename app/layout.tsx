import { Inter } from "next/font/google";
import { Metadata } from "next";

import { ReactNode } from "react";

import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense Tracker",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
