import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "./button";
export const Brands = ({ imageFilenames }: { imageFilenames: string[] }) => {
  return (
    <div className="overflow-hidden hidden-scroll">
      <Gallery images={imageFilenames} />
    </div>
  );
};
const Gallery = ({ images }: { images: Array<string> }) => {
  const totalImages = images.length;
  const width = 100;
  const height = 80;
  return (
    <div className="flex flex-col gap-20 w-fit md:animate-scrollPc animate-scrollMobile">
      <ImageRow images={images} />
    </div>
  );
};

const ImageRow = ({ images }: { images: Array<string> }) => {
  return (
    <>
      <ImageRowHolder row="1">
        {images.map((el: string, index: number) => {
          if (index % 2 == 0) return;

          return (
            <ImageHolder key={el}>
              <Image
                //   width={width}
                //   height={height}
                draggable={false}
                priority
                alt={el}
                src={`/midj/${el}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ImageHolder>
          );
        })}
      </ImageRowHolder>
      <ImageRowHolder row="2">
        {images.map((el: string, index: number) => {
          if (index % 2 != 0) return null;
          return (
            <ImageHolder key={el}>
              <Image
                draggable={false}
                alt={el.replace(".png", "")}
                src={`/midj/${el}`}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ImageHolder>
          );
        })}
      </ImageRowHolder>
    </>
  );
};

const ImageRowHolder = ({
  children,
  row,
}: {
  children: React.ReactNode;
  row: string;
}) => {
  return (
    <div className="flex flex-row gap-5" key={row}>
      {children}
    </div>
  );
};

const ImageHolder = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props?: any;
}) => {
  return (
    <div
      className="md:w-[100px] md:h-[100px] md:min-w-[100px] md:min-h-[100px] md:max-w-[100px] md:max-h-[100px] relative
    w-[70px] h-[70px] min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] 
    "
      {...props}
    >
      {children}
    </div>
  );
};
