import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Header from "@/components/Header";
import Container from "@/components/container";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import { CustomMDX } from "@/components/mdx";
import ReportViews from "@/components/ReportViews";
import { baseUrl } from "@/app/sitemap";
import { MainNav } from "@/components/main-nav";

import { EB_Garamond, Instrument_Serif } from "next/font/google";
const content = EB_Garamond({ subsets: ["latin"] });

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Hydration-safe script */}
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function handleScroll() {
                const bigTitle = document.querySelector(".big-title");
                const stickyTitle = document.querySelector(".sticky-title");

                if (!bigTitle || !stickyTitle) return;

                const bigTitleRect = bigTitle.getBoundingClientRect();
                if (bigTitleRect.bottom < 0) {
                  stickyTitle.style.display = "block";
                } else {
                  stickyTitle.style.display = "none";
                }
              }

              // Add the scroll event listener after a short delay
              window.onload = function () {
                window.addEventListener("scroll", handleScroll);
              };
            })();
          `,
        }}
      />
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
          {/* Hidden title that becomes visible on scroll */}
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

        {/* Main content */}
        <article className={`${content.className} prose text-xl`}>
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </div>
  );
}
