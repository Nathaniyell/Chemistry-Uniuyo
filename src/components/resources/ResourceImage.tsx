import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ResourceImageProps = {
  src: string;
  className?: string;
};

export default function ResourceImage({ src, className }: ResourceImageProps) {
  return (
    <a
      href={src}
      target="__blank"
      className="border border-blue-50 p-1 rounded-md hover:border-primary"
      title="click to view larger image"
    >
      <Image
        src={src}
        alt=""
        width={300}
        height={400}
        className={clsx(className, "size-full rounded-md")}
      />
    </a>
  );
}
