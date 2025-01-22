"use client";

import { useEffect } from "react";

export default function ScrollBehavior() {
  useEffect(() => {
    const bigTitle = document.querySelector(".big-title") as HTMLElement | null;
    const stickyTitle = document.querySelector(".sticky-title") as HTMLElement | null;

    if (!bigTitle || !stickyTitle) return;

    const handleScroll = () => {
      const bigTitleRect = bigTitle.getBoundingClientRect();
      if (bigTitleRect.bottom < 0) {
        stickyTitle.style.display = "block";
      } else {
        stickyTitle.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything.
}
