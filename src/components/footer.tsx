"use client";

import { POSTS } from "@/lib/constants";
import { Icons } from "./icons";
import Link from "next/link";
import { Input } from "./ui/input";
import { createSubscriber } from "@/lib/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import { DotGothic16, Instrument_Serif } from "next/font/google";

// Initialize fonts at the module scope
const title = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const binary = DotGothic16({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    <footer className="bg-muted py-8 mt-10">
      <div className="  mx-auto w-full xl:w-[90%] px-3">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[7fr_1fr_1fr]
">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-6xl text-primary md:text-9xl ">
                {" "}
                <span className="">BEYOND </span>{" "}
                <span
                  className={`${binary.className} text-[3.3rem] md:text-[7.5rem] tracking-wide md:tracki `}
                >
                  B<span className="md:-mx-4 -mx-2">I</span>NARY
                </span>{" "}
                {/* <span className=" ">Binary</span> */}
              </h1>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/w3tsadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter className="h-6 w-6 text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/w3tsadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Icons.gitHub className="h-6 w-6 text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md text-primary font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              {POSTS.map((post) => (
                <li key={post.title}>
                  <Link
                    href={post.href}
                    className="text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md text-primary font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:w3tsadev@gmail.com"
                  className="text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/terms-of-services"
                  className="text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
       
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-muted-foreground dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 Coding Jitsu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
