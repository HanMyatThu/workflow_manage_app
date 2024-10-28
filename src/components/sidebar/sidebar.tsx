"use client";

import Image from "next/image";
import Link from "next/link";

import { DottedSeparator } from "@/components/common/dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-200 w-full p-4">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={50} />
      </Link>
      <DottedSeparator />
      <Navigation />
    </aside>
  );
};
