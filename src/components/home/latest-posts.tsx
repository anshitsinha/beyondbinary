import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
  let latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
        Recently Published
      </h1>
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
          <article key={post.slug} className="text-wrap max-w-md my-10">
            <div className="flex">
              {" "}
              <div className="my-auto px-4 w-[300px]">
                <img src={post.metadata.img} alt="" />
              </div>
              <div>
                <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
                  <h3 className="font-semibold py-2 text-xl leading-5 hover:text-blue-400">
                    {post.metadata.title}
                  </h3>
                </Link>

                <p className="leading-8 my-1">{post.metadata.summary}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </div>
          </article>
        ))}
    </>
  );
}
