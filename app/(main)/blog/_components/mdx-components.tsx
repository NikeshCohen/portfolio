import { HTMLAttributes } from "react";

import Image from "next/image";

import { useMDXComponent } from "next-contentlayer2/hooks";

import { cn } from "@/lib/utils";

type ComponentsProps = HTMLAttributes<HTMLElement>;

const components = {
  h1: ({ className, ...props }: ComponentsProps) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-primary",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentsProps) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight text-primary first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentsProps) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-primary",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentsProps) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-primary",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentsProps) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-primary",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentsProps) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight text-primary",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentsProps) => (
    <a
      className={cn(
        "font-medium text-primary underline underline-offset-4",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentsProps) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentsProps) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentsProps) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentsProps) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentsProps) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-secondary", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: ComponentsProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentsProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentsProps) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border !bg-secondary py-4 text-sm",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentsProps) => (
    <code
      className={cn(
        "font-code relative rounded border bg-secondary px-[0.3rem] py-[0.2rem] !text-sm font-light",
        className,
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component components={components} />
    </div>
  );
}
