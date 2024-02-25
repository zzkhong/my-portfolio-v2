"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from ".";
import { getDayOfWeek } from "utils/time";
import { quotes } from "data/quotes";
import { LINKEDIN_URL, RESUME_URL } from "data/constants";

export function MyCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 dark:bg-black relative group/card dark:hover:shadow-2xl dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full">
          <Image
            src="/pp.png"
            height="1000"
            width="1000"
            draggable={false}
            className="h-60 w-60 object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold mt-6 text-neutral-600 dark:text-white"
        >
          <h1 className="text-2xl md:text-5xl font-bold dark:text-white">
            Hi, I&apos;m <span className="text-blue-700">CK Chin</span>
          </h1>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <p className="max-w-2xl text-base md:text-sm dark:text-neutral-200">
            Software Engineer | Fullstack | Fintech
          </p>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <p className="max-w-2xl italic text-base md:text-xl mt-8 dark:text-neutral-200">
            `{quotes[getDayOfWeek()].content}`
          </p>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Code, Build, & Repeat
          </CardItem>

          <div>
            <CardItem
              translateZ={50}
              as="button"
              className="px-4 py-2 mx-2 rounded-xl dark:bg-white dark:text-black text-xs font-bold"
            >
              <a href={RESUME_URL} target="_blank">
                Resume
              </a>
            </CardItem>
            <CardItem
              translateZ={50}
              as="button"
              className="px-4 py-2 mx-2 rounded-xl bg-blue-700 text-white text-xs font-bold"
            >
              <a href={LINKEDIN_URL} target="_blank">
                LinkedIn
              </a>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
