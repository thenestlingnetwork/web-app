import React from "react";
import SectionHolder from "./ui/sectionHolder";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    image: "/services_edu/icon1.png",
    name: "Influencer Marketing",
    description: [
      "Creating an organized and inclusive Esports ecosystem",
    ],
  },
  {
    image: "/services_edu/icon2.png",
    name: "Talent Management",
    description: [
      "Cross Polination of Players of different game titles and geres",
    ],
  },
  {
    image: "/services_edu/icon3.png",
    name: "Consulting",
    description: [
      "Building micro-communities",

    ],
  },
  {
    image: "/services_edu/icon4.png",
    name: "Event Management",
    description: ["Broadcast Production", "League Operations", "Sponsorship"],
  },
];

interface service {
  image: string;
  name: string;
  description: string[];
}

function Services() {
  return (
    <SectionHolder
      // bgImage="/services.png"
      imageOpacity={0.2}
      parentClassName="bg-[#f0f0f0]"
      id="services"
      className=" flex flex-col md:flex-row flex-wrap justify-evenly items-stretch px-10 py-20 md:py-40 md:px-20 gap-10 w-full "
    >
      {services.map((service: service, index: number) => (
        <Card key={index} service={service} />
      ))}
    </SectionHolder>
  );
}

export default Services;

function Card({ service, ...props }: { service: service; props?: any }) {
  return (
    <CardChildHolder
      {...props}
      className="hover-body-to-underline-h1 hover:shadow-xl hover:shadow-muted/10 transition-all duration-500 ease-in-out
      hover:scale-[1.1] flex flex-col bg-black/10 hover:rotate-1 hover:translate-y-[-5px] cursor-pointer"
    >
      <div className="flex p-5 rounded-lg bg-black hover:rotate-3 duration-500 ease-in-out  flex-col items-center justify-center">
        <Image
          src={service.image}
          width={100}
          height={100}
          alt={service.name}
          className=""
        />
      </div>
      <Heading>{service.description[0]}</Heading>

    </CardChildHolder>
  );
}

function CardChildHolder({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  props?: any;
  className?: string;
}) {
  return (
    <div
      {...props}
      className={cn(
        "flex  gap-10 items-center rounded-lg px-10 md:px-32 py-20 w-full max-w-[600px]",
        className
      )}
    >
      {children}
    </div>
  );
}

function Heading({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: any;
}) {
  return (
    <p
      {...props}
      className="text-lg text-center md:text-xl font-bold text-black "
    >
      {children}
    </p>
  );
}
