// import { categories } from "@/lib/placeholder-data";
import { Button } from "../ui/button";
import Link from "next/link";
import { POSTS } from "@/lib/constants";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-3 border ">
      {POSTS.map((post) => (
        <div
          key={post.title}
         
          className="hover:bg-gray-100 p-2 border transition-all"
         
        >
          <Link href={post.href}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
