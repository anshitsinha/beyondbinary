"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "./icons";
import { ModeToggle } from "./ui/mode-toggle";

import { Xanh_Mono } from "next/font/google";

const navBtn = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
});

export function MainNav({ className }: { className?: string }) {
  return (
    <div
      className={`${navBtn.className}  mx-auto w-full xl:w-[90%] px-3 sticky top-0 z-[520] flex p-3 justify-between `}
    >
      <div className="flex gap-1">
        <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground justify-between p-2 h-6 text-md glass">
            Home
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground justify-between p-2 h-6 text-md glass">
            Blog
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground justify-between p-2 h-6 text-md glass">
            About
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground justify-between p-2 h-6 text-md glass">
            Github
          </div>
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
