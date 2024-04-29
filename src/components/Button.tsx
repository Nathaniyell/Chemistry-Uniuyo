"use client";

import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion as m } from "framer-motion";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  className?: string;
  arrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
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
      className={`flex justify-center items-center min-w-10 min-h-8 transition-all ease-in-out duration-200 text-center text-sm ${className} bg-${variant} border rounded-3xl hover:shadow px-6 py-2`}
    >
      {children} {arrow && <RiArrowRightSLine className="text-2xl" />}
    </m.button>
  );
};

export default Button;
