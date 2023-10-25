import React from "react";
import SectionHolder from "./ui/sectionHolder";
import { socials } from "@/lib/constant";
import { Button } from "./ui/button";
import Link from "next/link";

interface Social {
  url: string;
  icon: React.FC;
}
export type Socials = {
  instagram: Social;
  facebook: Social;
  linkedin: Social;
};

function Footer() {
  return (
    <SectionHolder className="flex flex-col">
      <SocialsIcons />
      <CopyRight />
    </SectionHolder>
  );
}

function SocialsIcons() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-5">
      {Object.values(socials).map((Social, index) => (
        <Link href={Social.url} target="_blank">
          {<Social.icon className="w-7 hover:scale-105" />}
        </Link>
      ))}
    </div>
  );
}

function CopyRight() {
  return (
    <div className="flex flex-row justify-center items-center p-2 pb-4">
      <p className="text-black/60 text-xs">
        © 2023 All Rights Reserved.
        <a href="/"> Nestling Network</a>
      </p>
    </div>
  );
}
export default Footer;
