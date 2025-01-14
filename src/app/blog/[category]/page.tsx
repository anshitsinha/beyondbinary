import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "@/components/Container";

import CategoryCard from "@/components/categoryCard";
// import Header from "@/components/Header";

export default function Page({ params }: { params: { category: string } }) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  if (!posts) {
    notFound();
  }
  
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                
                <CategoryCard
                title={post.metadata.title}
                summary={post.metadata.summary}
                date={post.metadata.publishedAt}
                key = {post.slug}
              />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
