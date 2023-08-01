"use client";
import Image from "next/image";
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from "@radix-ui/react-icons";
import React, { useEffect, useRef } from "react";
import { Button } from "./button";
export const Brands = ({ imageFilenames }: { imageFilenames: string[] }) => {
  const scrollDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scrollAmount = 0;
    let step = 0.2; // Change this to modify the speed of the scroll
    let direction = 1; // 1 for right, -1 for left

    const scroll = () => {
      const container = scrollDiv.current;
      if (!container) {
        return;
      }

      if (
        (direction === 1 &&
          scrollAmount < container.scrollWidth - container.offsetWidth) ||
        (direction === -1 && scrollAmount > 0)
      ) {
        container.scrollTo({
          left: (scrollAmount += step * direction),
          behavior: "auto",
        });
      } else {
        direction *= -1; // switch direction
      }

      frameId = requestAnimationFrame(scroll);
    };

    let frameId = requestAnimationFrame(scroll);

    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={scrollDiv} className="overflow-auto hidden-scroll">
      <Gallery images={imageFilenames} />
    </div>
  );
};
const Gallery = ({ images }: { images: Array<string> }) => {
  const totalImages = images.length;
  const width = 100;
  const height = 80;
  return (
    <div className="flex flex-col gap-20 ">
      <ImageRowHolder>
        {images.map((el: string, index: number) => {
          if (index % 2 == 0) return;
          return (
            <ImageHolder key={el}>
              <Image
                //   width={width}
                //   height={height}
                priority
                alt={"alt"}
                src={`/midj/${el}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ImageHolder>
          );
        })}
      </ImageRowHolder>
      <ImageRowHolder>
        {images.map((el: string, index: number) => {
          if (index % 2 != 0) return null;
          return (
            <ImageHolder key={el}>
              <Image
                alt={"alt"}
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
    </div>
  );
};

const ImageRowHolder = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row gap-5">{children}</div>;
};

const ImageHolder = ({
  children,
  key,
}: {
  children: React.ReactNode;
  key: string;
}) => {
  return (
    <div
      className="md:w-[100px] md:h-[100px] md:min-w-[100px] md:min-h-[100px] md:max-w-[100px] md:max-h-[100px] relative
    w-[70px] h-[70px] min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] 
    "
      key={key}
    >
      {children}
    </div>
  );
};
