import React from "react";
import SectionHolder from "./ui/sectionHolder";
import Image from "next/image";

function WhyChooseUs() {
  return (
    <SectionHolder
      id="services"
      className="flex flex-col-reverse md:flex-row justify-evenly items-stretch px-10 py-20 md:py-40 md:px-20 gap-10 w-full "
    >
      <TextSection />

      <ImageSection />
    </SectionHolder>
  );
}

export default WhyChooseUs;

const TextSection = () => {
  return (
    <div className="flex flex-col justify-center items-left gap-5 p-5 px-10">
      <h1 className="text-4xl md:text-6xl font-bold text-black hover-to-underline w-fit">
        Why Choose Us
      </h1>
      <p className="text-black/70 hover:text-black text-xl mt-4 ">
        Navigating the gaming ecosystem can be challenging. But with HypeSquad,
        setting up the right framework for success becomes easier.
      </p>
      <p className="text-black/70 hover:text-black text-xl mt-4">
        We provide solutions to help you drive significantly more sales, acquire
        engaging customers and build a stronger community. We are not your
        neighborhood influencer marketing agency!
      </p>
      <p className="text-black/70 hover:text-black text-xl mt-4">
        We understand how brands are built in the gaming industry and we help
        you replicate the same.
      </p>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className="flex relative justify-center items-center w-full md:w-[50%]">
      <Image
        src="/dummy.png"
        width={436}
        height={392}
        alt="the networking network"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
