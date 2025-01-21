"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "./icons";
import { ModeToggle } from "./ui/mode-toggle";

export function MainNav({ className }: { className?: string }) {
  return (
    <div className={cn("flex m-3 justify-between z-50", className)}>
      <div className="flex gap-1">
        <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground  justify-between p-2 h-6 text-md glass">
            Home
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground  justify-between p-2 h-6 text-md glass">
            Blog
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground  justify-between p-2 h-6 text-md glass">
            About
          </div>

        
        </Link> <Link href={"/"}>
          <div className="flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground  justify-between p-2 h-6 text-md glass">
            Github
          </div>

        
        </Link>
      </div>

      <div className="flex items-center justify-between w-20">
        <ModeToggle />
        <Link href="/rss">
          <Icons.rss className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
