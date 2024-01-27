import React from "react";
import SectionHolder from "./ui/sectionHolder";
import { services } from "@/lib/constant";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface service {
  image: string;
  name: string;
  description: string[];
}

function Services() {
  return (
    <SectionHolder
      bgImage="/services.png"
      imageOpacity={0.2}
      parentClassName="bg-black"
      id="services"
      className="flex flex-col md:flex-row flex-wrap justify-evenly items-stretch px-10 py-20 md:py-40 md:px-20 gap-10 w-full "
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
      hover:scale-[1.1] hover:rotate-1 hover:translate-y-[-5px] cursor-pointer"
    >
      <Image
        src={service.image}
        width={150}
        height={150}
        alt={service.name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="hover:rotate-3 duration-500 ease-in-out"
      />
      <Heading>{service.name}</Heading>
      
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
        "flex  gap-10 items-center service-card px-10 md:px-32 py-20 w-full max-w-[600px]",
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
    <h1
      {...props}
      className="text-xl text-center md:text-2xl font-bold text-white "
    >
      {children}
    </h1>
  );
}
