"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from ".";
import { history } from "data/history";
import SkillCard from "components/SkillCard";

export function MyBeam() {
  return (
    <TracingBeam>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {history.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <div className="relative flex items-center mb-4">
              <Image
                src={item.logo}
                alt="company logo"
                height="50"
                width="50"
                className="rounded-full object-cover mr-2 border-2 border-white/[0.5]"
              />

              <div className="flex flex-1 flex-col">
                <h2 className="text-white text-xl font-bold w-fit">
                  {item.title}
                </h2>

                <p className="text-sm">{item.position}</p>

                <p className="absolute right-0 bottom-0 text-xs text-white opacity-50 invisible md:visible">
                  {item.period}
                </p>
              </div>
            </div>

            <div className="text-sm mb-4 prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="300"
                  width="500"
                  className="rounded-lg max-h-72 mb-10 object-cover mx-auto"
                />
              )}
              {item.description}
            </div>

            <div className="flex flex-wrap">
              {item.skills.map((skill) => (
                <SkillCard key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
