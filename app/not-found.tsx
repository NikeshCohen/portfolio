import React from "react";

import Image from "next/image";

function page() {
  return (
    <section className="layout flex min-h-[90vh] flex-col items-center justify-center">
      <h2 className="mb-2 scroll-m-20 text-3xl font-semibold tracking-tight">
        404
      </h2>
      <p className="mb-8 text-center text-sm font-light text-muted-foreground">
        Mmmm, I could not find what you are looking for
      </p>

      <Image
        src="/404.gif"
        alt="404"
        width={404}
        height={404}
        className="rounded-md"
      />
    </section>
  );
}

export default page;
