"use client";

import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./navigation";
import { Projects } from "./projects";

import { DottedSeparator } from "@/components/common/dotted-separator";
import { WorkspaceSwitcher } from "@/components/common/workspace-switcher";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-200 w-full p-4 space-y-3">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={50} />
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};
