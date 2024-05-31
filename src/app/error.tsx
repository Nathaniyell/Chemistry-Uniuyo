"use client"; // Error components must be Client Components

import { Button, Main } from "@/components";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Main>
      <div className="max-w-[500px] my-auto w-[97%] text-blue-950 flex flex-col items-center justify-center gap-5 p-4 rounded-md">
        <h1 className="font-bold text-3xl md:text-4xl">Unknown Error</h1>

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
