import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Header from "@/components/Header";
import Container from "@/components/container";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import { CustomMDX } from "@/components/mdx";
import ScrollBehavior from "@/components/ScrollBehavior"; // Import the client-side subcomponent

export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <ScrollBehavior /> {/* Add the client-side logic here */}
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="big-title text-9xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container className="grid grid-flow-col grid-cols-[2fr_5fr_2fr] gap-4">
        <div className="sticky mt-8 top-16 self-start">
          <h2 className="sticky-title font-semibold text-lg hidden">
            {post.metadata.title}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Metadata Date: {formatDate(post.metadata.publishedAt)}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Author: David Edoh-Bedi
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Reading time: 7 minutes
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Categories: Sandboxes
          </p>
          <div className="flex gap-2 mt-2">
            <a href="#" className="text-blue-600 hover:underline">
              Share: Twitter/X
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>

        <article className="prose text-xl">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </div>
  );
}
