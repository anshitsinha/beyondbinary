import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Header from "@/components/Header";
import Container from "@/components/container";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import { CustomMDX } from "@/components/mdx";
import ReportViews from "@/components/ReportViews";
import { baseUrl } from "@/app/sitemap";
import { MainNav } from "@/components/main-nav";

import { EB_Garamond, Xanh_Mono } from "next/font/google";
const content = EB_Garamond({ subsets: ["latin"] });

const metadata = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
});

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; category: string };
}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
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
            <p className="text-xs mt-2">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container className="grid grid-flow-col grid-cols-[2fr_5fr_2fr] gap-4">
        <div className={`sticky ${metadata.className} mt-8 top-16 self-start`}>
          <span>/ Metadata</span>
          <hr />
          {/* Hidden title that becomes visible on scroll */}
          <h2 className="py-2  border-b border-dotted text-lg ">{post.metadata.title}</h2>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 border-b border-dotted py-2">
              <span className="text-xs">Date:</span>
              <span className="text-xs">{post.metadata.publishedAt}</span>
            </div>
            <div className="grid grid-cols-2 border-b border-dotted py-2">
              
              <span className="text-xs">Author:</span>
              <span className="text-xs">David Edoh-Bedi</span>
            </div>
            <div className="grid grid-cols-2 border-b border-dotted py-2">
              <span className="text-xs">Reading time: </span>
              <span className="text-xs">7 minutes</span>
            </div>
            <div className="grid grid-cols-2 border-b border-dotted py-2">
              <span className="text-xs"> Categories: </span>
              <span className="text-xs">Sandboxes</span>
            </div>
            <div className="grid grid-cols-2 py-2">
              <span className="text-xs"> Share: </span>
            </div>
            <div className="grid grid-cols-2 py-2 gap-1">
              <a
                href="#"
                className="border rounded-full flex justify-center items-center text-xs font-semibold hover:bg-primary hover:text-primary-foreground py-2"
              >
                Twitter/X
              </a>
              <a
                href="#"
                className="border rounded-full flex justify-center items-center text-xs font-semibold hover:bg-primary hover:text-primary-foreground py-2"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Main content */}
        <article className={`${content.className} prose text-xl ml-8`}>
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </div>
  );
}
