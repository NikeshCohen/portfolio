"use client";

import React, { useState } from "react";

import Image from "next/image";

/* eslint-disable @next/next/no-img-element */

function HeroImg() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div>
      <div className="relative mx-auto aspect-[3/4] w-full max-w-2xl">
        <div
          className={`relative h-full w-full rounded-md ${
            isImageLoading ? "bg-foreground/10" : ""
          }`}
        >
          <Image
            src="/hero-img.webp"
            alt="nikesh cohen"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className={`rounded-md ring-1 ring-border duration-700 ease-in-out ${
              isImageLoading ? "blur-xl" : "blur-0"
            }`}
            onLoad={() => setIsImageLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
