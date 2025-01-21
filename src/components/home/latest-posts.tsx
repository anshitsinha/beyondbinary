import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export default function LatestPosts() {
  let latestPosts = getBlogPosts();
  return (
    <div className="w-full">
      {/* <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
        Recently Published
      </h1> */}

      <div className="grid grid-flow-col grid-cols-[1fr_7fr_2fr] border-b border-black">
        <div>/ Date</div>
        <div>/ Name</div>
        <div>/ Type</div>
      </div>

      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug} className="border-b border-black">
            <div className="grid grid-flow-col grid-cols-[1fr_7fr_2fr]  ">
              <div>{post.metadata.publishedAt}</div>

              <div> {post.metadata.title} </div>

              <div> {post.metadata.category} </div>
            </div>

            <div className="flex gap-8">
              <div>Summary:</div>

              <div>{post.metadata.summary}</div>
            </div>

            <div className="flex gap-8">
              <div>Topic:</div>

              <div className="border">{post.metadata.category}</div>
            </div>

            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>

            <div className="border rounded-full flex items-center justify-center border-primary hover:bg-primary hover:text-primary-foreground  text w-full mb-4">
              Read
            </div>

            </Link>
          </article>
        ))}
    </div>
  );
}
