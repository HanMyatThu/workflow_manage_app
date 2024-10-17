import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DuDu | Manage your work flow easily",
  description: "Manage your work flow easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
