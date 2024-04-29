"use client";

import clsx from "clsx";
import React from "react";

import { RiArrowRightSLine } from "react-icons/ri";
import { motion as m } from "framer-motion";

export const Main = ({ children }: { children?: React.ReactNode }) => (
  <main className="flex min-h-[80vh] flex-col items-center gap-5">
    {children}
  </main>
);

export const Section = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <section
    className={clsx(
      "container w-full flex flex-col items-center gap-5 p-4 overflow-hidden",
      className
    )}
  >
    {children}
  </section>
);

export const Div = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <section className={clsx("w-full flex gap-5 p-4 rounded-2xl", className)}>
    {children}
  </section>
);

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  className?: string;
  arrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({
  children,
  variant,
  className,
  arrow,
  onClick,
}: ButtonProps) => {
  return (
    <m.button
      whileTap={{ scale: 0.6 }}
      onClick={onClick}
      className={`flex justify-center items-center min-w-10 min-h-8 transition-all ease-in-out duration-200 text-center text-base xs:text-sm ${className} bg-${variant} border rounded-3xl hover:shadow px-6 py-2`}
    >
      {children}{" "}
      {arrow && <RiArrowRightSLine className="text-4xl xs:text-2xl" />}
    </m.button>
  );
};
