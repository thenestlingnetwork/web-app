"use client";
import React from "react";
import SectionHolder from "./ui/sectionHolder";
import Image from "next/image";
import Waitlist from "./waitlist";

function Moto() {
  return (
    <div className="flex flex-col items-center md:items-start justify-center md:max-w-[50%] md:px-0 px-[10px] text-center md:text-left  ">
      <h1 className="text-4xl md:text-6xl font-bold text-white"> Path to Pro </h1>
      <p className="text-white text-xl mt-4">
      Our course teaches you the importance of being solo and as a team.
Learn stategies and improve skills
      </p>
      <Waitlist text="Waitlist" ClassName="mt-5" />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="min-w-[40%] flex flex-col gap-10  hover:scale-105 transition-all duration-500 ease-in-out">
      <Image
        src="/logo.png"
        width={1000}
        height={1000}
        alt="the networking network"
        className="max-w-[500px]"
      />
    </div>
  );
}

function HeroSection() {
  return (
    <SectionHolder
      bgImage="/main.png"
      imageOpacity={0.2}
      parentClassName="bg-black"
      id="home"
    >
      <div className="flex flex-col-reverse justify-between items-center md:flex-row px-10 py-20 md:py-40 md:px-20 gap-10 w-full">
        <Moto />
        <MainLogo />
      </div>
    </SectionHolder>
  );
}

export default HeroSection;
