import type { Metadata } from "next";

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
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="text-sm text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
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
