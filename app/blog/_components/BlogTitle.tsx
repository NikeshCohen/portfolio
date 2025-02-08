"use client";

import React from "react";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function BlogTitle() {
  return (
    <motion.div variants={itemVariants} className="mb-8 space-y-2">
      <h1 className="text-4xl font-bold lg:text-5xl">Blog</h1>
      <p className="text-muted-foreground">A Collection of my thoughts</p>
    </motion.div>
  );
}

export default BlogTitle;
