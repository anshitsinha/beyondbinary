import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { EB_Garamond, Instrument_Serif } from "next/font/google";
import { Xanh_Mono } from "next/font/google";

const summary = EB_Garamond({ subsets: ["latin"] });
const topic = Xanh_Mono({ subsets: ["latin"], weight: "400" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function LatestPosts() {
  let latestPosts = getBlogPosts();

  return (
    <div className="w-full">
      <div
        className={`${topic.className} grid grid-flow-col grid-cols-[1fr_7fr_2fr] border-b border-border`}
      >
        <div>
          <span className="-mr-1">/</span> Date
        </div>
        <div>
          <span className="-mr-1">/</span> Name
        </div>
        <div className="mb-1">
          <span className="-mr-1">/</span> Type
        </div>
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
          <article key={post.slug} className="border-b text-lg border-border">
            <div className="grid grid-flow-col grid-cols-[1fr_7fr_2fr] mt-4">
              <div>{post.metadata.publishedAt}</div>

              <div className={`${instrumentSerif.className} text-3xl italic`}>
                {post.metadata.title}
              </div>

              <div>{post.metadata.category}</div>
            </div>

            <div className="grid my-3 grid-flow-col grid-cols-[1fr_7fr_2fr]">
              <div className="tracking-wide">Summary:</div>
              <div className={summary.className}>{post.metadata.summary}</div>
            </div>

            <div className="grid my-3 grid-flow-col grid-cols-[1fr_7fr_2fr]">
              <div>Topic:</div>
              <div className={`${topic.className} text-sm`}>
                <div className="inline-block border px-2  ">
                  {post.metadata.category}
                </div>
              </div>
            </div>

            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <div className="border rounded-full flex items-center justify-center border-border hover:bg-primary hover:text-primary-foreground text w-full mb-4">
                Read
              </div>
            </Link>
          </article>
        ))}
    </div>
  );
}
