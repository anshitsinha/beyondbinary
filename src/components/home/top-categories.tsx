// import { categories } from "@/lib/placeholder-data";
import { Button } from "../ui/button";
import Link from "next/link";
import { POSTS } from "@/lib/constants";

export default function TopCategories() {
  return (
    <div className="grid  grid-cols-3 my-4  ">
      {POSTS.map((post) => (
        <div
          key={post.title}
          className="hover:bg-secondary hover:text-secondary-foreground p-2 border flex justify-center items-center rounded-full  transition-all"
        >
          <Link href={post.href}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
