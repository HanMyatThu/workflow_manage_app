import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { cn } from "@/lib/utils";
import { QueryProvider } from "@/providers/query-provider";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
        <QueryProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
