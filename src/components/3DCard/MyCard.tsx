"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from ".";
import { getDayOfWeek } from "utils/time";
import { quotes } from "data/quotes";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "data/constants";

export function MyCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 dark:bg-black dark:bg-opacity-50 relative group/card dark:hover:shadow-2xl dark:border-white/[0] md:dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full">
          <Image
            src="/pp.png"
            height="240"
            width="240"
            draggable={false}
            className="h-32 w-32 object-cover rounded-full group-hover/card:shadow-xl"
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

          <div className="flex flex-row items-center">
            <CardItem
              translateZ={50}
              as="button"
              className="p-1 mr-2 rounded-full dark:bg-white dark:text-black text-xs font-bold"
            >
              <a href={RESUME_URL} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 -960 960 960"
                  width="16"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
              </a>
            </CardItem>
            <CardItem
              translateZ={50}
              as="button"
              className="p-2 rounded-xl text-white text-xs font-bold"
            >
              <a href={LINKEDIN_URL} target="_blank">
                <Image
                  priority={false}
                  width={24}
                  height={24}
                  src="/icons/linkedin.webp"
                  alt="linkedin"
                />
              </a>
            </CardItem>
            <CardItem
              translateZ={50}
              as="button"
              className="p-2 mx-1 rounded-xl text-white text-xs font-bold"
            >
              <a href={GITHUB_URL} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M12 0a12 12 0 00-3.809 23.383c.603.111.823-.261.823-.578 0-.285-.01-1.036-.015-2.031-3.341.723-4.042-1.613-4.042-1.613-.546-1.383-1.332-1.75-1.332-1.75-1.089-.742.083-.727.083-.727 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.777.418-1.305.76-1.605-2.665-.301-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.236-3.223-.124-.303-.536-1.524.117-3.176 0 0 1.007-.322 3.3 1.232.958-.267 1.982-.399 3-.405 1.018.006 2.042.138 3 .405 2.291-1.554 3.297-1.232 3.297-1.232.655 1.652.242 2.873.118 3.176.77.84 1.234 1.913 1.234 3.223 0 4.61-2.804 5.625-5.473 5.92.43.369.818 1.102.818 2.219 0 1.604-.015 2.896-.015 3.287 0 .32.216.694.831.575A12.004 12.004 0 0012 0z"
                  />
                </svg>
              </a>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
