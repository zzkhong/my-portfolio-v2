"use client";
import { TypewriterEffect } from ".";

export function MyTypewriter() {
  const words = [
    {
      text: "My",
    },
    {
      text: "Career",
      className: "text-blue-500",
    },
    {
      text: "Journey",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffect words={words} />
    </div>
  );
}
