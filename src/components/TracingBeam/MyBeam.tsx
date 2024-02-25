"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from ".";
import { history } from "data/history";

export function MyBeam() {
  return (
    <TracingBeam>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {history.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="text-white text-2xl font-bold w-fit py-1 mb-2">
              {item.title}
            </h2>

            <div className="text-sm mb-4 prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>

            <p className={twMerge("text-sm mb-4")}>{item.badge}</p>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
