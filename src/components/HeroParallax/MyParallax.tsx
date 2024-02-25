"use client";
import React from "react";
import { HeroParallax } from ".";
import { portfolios } from "data/portfolios";

export function MyParallax() {
  return <HeroParallax portfolios={portfolios} />;
}
