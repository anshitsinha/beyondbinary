"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Xanh_Mono } from "next/font/google";

const navBtn = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
});

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <div className="className={navBtn.className} flex items-center bg-secondary hover:bg-primary hover:text-primary-foreground justify-between p-2 h-6 text-md glass">
          Theme
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
