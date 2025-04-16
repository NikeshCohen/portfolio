"use client";

import Link from "next/link";

import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { FileQuestion } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const emptyStateVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const emptyStateItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <AnimatePresence>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="layout flex min-h-[90vh] flex-col pt-40"
      >
        <motion.div variants={titleVariants} className="mb-8 space-y-2">
          <h1 className="text-4xl font-bold lg:text-5xl">Blog</h1>
          <p className="text-muted-foreground">
            A Collection of my development thoughts and perspectives
          </p>
        </motion.div>

        {posts.length > 0 ? (
          <motion.div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <motion.article
                key={post.url}
                variants={itemVariants}
                className="group relative flex flex-col space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                >
                  <h2 className="mb-2 text-2xl font-extrabold text-primary">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mb-2 text-muted-foreground">
                      {post.description}
                    </p>
                  )}
                  <time
                    dateTime={post.date}
                    className="text-sm text-muted-foreground"
                  >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </time>
                </motion.div>

                <Link href={post.url} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={emptyStateVariants}
            className="flex min-h-[50vh] flex-col items-center justify-center text-center"
          >
            <motion.div variants={emptyStateItemVariants}>
              <FileQuestion className="h-20 w-20 text-muted-foreground" />
            </motion.div>
            <motion.h2
              variants={emptyStateItemVariants}
              className="text-2xl font-bold"
            >
              No blog posts yet
            </motion.h2>
            <motion.p
              variants={emptyStateItemVariants}
              className="text-muted-foreground"
            >
              Check back soon for new and exciting content!
            </motion.p>
          </motion.div>
        )}
      </motion.section>
    </AnimatePresence>
  );
}
