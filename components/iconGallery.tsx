import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import SectionHolder from "./ui/sectionHolder";
import { Brands } from "./ui/brands";

async function IconGallery() {
  const imageDirectory = path.join(process.cwd(), "/public/midj");

  const imageFilenames = await fs.readdir(imageDirectory);
  return (
    <SectionHolder
      parentClassName="max-w-[100vw] bg-white "
      className="overflow-auto p-20"
      id="brands"
    >
      <Brands imageFilenames={imageFilenames} />
    </SectionHolder>
  );
}

export default IconGallery;
