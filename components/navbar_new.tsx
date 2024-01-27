"use client"
import Link from "next/link";
import { HypeSquadIcon } from "./ui/icons";
import SectionHolder from "./ui/sectionHolder";
import MobileMenu from "./mobileMenu";
import { EachLink } from "./ui/eachLink";
import dynamic from 'next/dynamic';
import Waitlist from "./waitlist";
const DynamicDialogDemo = dynamic(() => import('./dialog'), { ssr: false });

export default function Navbar() {
  const sections = [
    { href: "#home", label: "Home" },
    { href: "#brands", label: "Brands" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];


  return (
    <>
      
      <SectionHolder
        as="nav"
        className="flex flex-row justify-between items-center w-full px-8 py-2 min-h-[100px]"
        parentClassName="fixed top-0 bg-white z-10 "
      >
        <Link href="/">
          <HypeSquadIcon className="h-auto w-[66px]" />
        </Link>
        <div className=" flex-row justify-between items-center md:flex hidden">
          {sections.map((section) => (
            <EachLink
              href={section.href}
              label={section.label}
              key={`pc@${section.label}`}
            />
          ))}
          <Waitlist text="Waitlist" ClassName="ml-5" />
        </div>
        <MobileMenu sections={sections} />
      </SectionHolder>
    </>
  );
}
