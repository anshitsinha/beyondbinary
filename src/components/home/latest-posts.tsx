import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { EB_Garamond, Instrument_Serif } from "next/font/google";
import { Xanh_Mono } from "next/font/google";

const summary = EB_Garamond({ subsets: ["latin"] });
const topic = Xanh_Mono({ subsets: ["latin"], weight: "400" });
const title = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function LatestPosts() {
  let latestPosts = getBlogPosts();

  return (
    <div className="w-full">
      <div
        className={`${topic.className} grid grid-flow-col grid-cols-[2fr_7fr_1.5fr] md:grid-cols-[1.5fr_7fr_1.5fr] text-sm md:text-md border-b border-border`}
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
          <article key={post.slug} className="border-b text-sm md:text-lg border-border">
            <div className="grid grid-flow-col grid-cols-[2fr_7fr_1.5fr] md:grid-cols-[1.5fr_7fr_1.5fr] mt-4">
              <div className="mt-1 ">{post.metadata.publishedAt}</div>

              <div className={`${title.className} w-4/5 md:text-3xl text-2xl `}>
                {post.metadata.title}
              </div>

              <div className="mt-1">{post.metadata.category}</div>
            </div>

            <div className="grid my-3 grid-flow-col grid-cols-[2fr_7fr_1.5fr] md:grid-cols-[1.5fr_7fr_1.5fr]">
              <div className="tracking-wide">Summary:</div>
              <div className= {`${summary.className}  md:w-11/12 `}>{post.metadata.summary}</div>
            </div>

            <div className="grid my-3 grid-flow-col grid-cols-[2fr_7fr_1.5fr] md:grid-cols-[1.5fr_7fr_1.5fr]">
              <div>Topic:</div>
              <div className={`${topic.className} text-sm`}>
                <div className="inline-block border border-dotted rounded hover:bg-accent hover:text-accent-foreground  text-center px-2  ">
                   <Link href={`/blog/${post.metadata.category}`}>{post.metadata.category} </Link>
                </div>
              </div>
            </div>

            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <div className="border p-1 md:p-0 rounded-full flex items-center justify-center border-border hover:bg-primary hover:text-primary-foreground text w-full mb-4">
                Read
              </div>
            </Link>
          </article>
        ))}
    </div>
  );
}
