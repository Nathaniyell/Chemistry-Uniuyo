"use client"; 

import { Button, Main } from "@/components";
import { useEffect } from "react";
import { GiBrokenWall } from "react-icons/gi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Main>
      <div className="max-w-[500px] my-auto w-[97%] text-blue-950 flex flex-col items-center justify-center gap-5 p-4 rounded-md">
        <GiBrokenWall className="size-20 text-slate-500" />
        <h1 className="font-bold text-3xl md:text-4xl">An Error Occurred</h1>

        <p className="md:text-lg text-center">Something went wrong</p>

        <Button
          className="bg-blue-900 text-slate-200 hover:bg-opacity-20 hover:text-blue-900"
          onClick={() => reset()}
        >
          try again
        </Button>
      </div>
    </Main>
  );
}
