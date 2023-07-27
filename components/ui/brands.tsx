"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
export const Brands = ({ imageFilenames }: { imageFilenames: string[] }) => {
  const scrollDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scrollAmount = 0;
    let step = 1; // Change this to modify the speed of the scroll
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
            <ImageHolder>
              <Image
                //   width={width}
                //   height={height}
                alt={"alt"}
                src={`/midj/${el}`}
                key={el}
                fill
                objectFit="contain"
              />
            </ImageHolder>
          );
        })}
      </ImageRowHolder>
      <ImageRowHolder>
        {images.map((el: string, index: number) => {
          if (index % 2 != 0) return;
          return (
            <ImageHolder>
              <Image
                alt={"alt"}
                src={`/midj/${el}`}
                key={el}
                fill
                className="object-contain"
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

const ImageHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100px] h-[100px] min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] relative">
      {children}
    </div>
  );
};
