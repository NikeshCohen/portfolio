import type { Metadata } from "next";

import "@/app/styles/mdx.css";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

import Mdx from "../_components/mdx-components";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="layout flex min-h-[90vh] max-w-5xl flex-col pt-40">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-muted-foreground">
          Published on {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}
