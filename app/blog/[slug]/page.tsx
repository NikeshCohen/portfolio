import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

import Mdx from "../_components/mdx-components";

interface PostPageProps {
  params: {
    slug: string;
  };
}
export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post?.body.code) {
    return <div>No post here!</div>;
  }

  return (
    <article className="mx-auto py-8 max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
}
