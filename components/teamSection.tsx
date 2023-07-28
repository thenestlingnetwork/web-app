import React from "react";
import SectionHolder from "./ui/sectionHolder";
import { teams } from "@/lib/constant";
import Image from "next/image";
import { cn } from "@/lib/utils";

function TeamSection() {
  return (
    <SectionHolder
      id="team"
      className="flex flex-col justify-center items-center gap-10 px-10 py-20 md:py-40 md:px-20 w-full"
      InsertToParent={<LowerWaveToAppend />}
    >
      {teams.map((team, index) => (
        <TeamCard key={team.name} team={team} index={index} />
      ))}
    </SectionHolder>
  );
}
export default TeamSection;

interface Team {
  name: string;
  role: string;
  description: string;
  image: string;
  email: string;
  linkedin: string;
}

function TeamCard({
  key,
  team,
  index,
}: {
  key: string;
  team: Team;
  index: number;
}) {
  const rotateClass =
    index % 2 !== 0 ? "hover:rotate-[-1deg]" : "hover:rotate-[1deg]";
  return (
    <TeamCardHolder
      key={key}
      // className="hover:scale-[1.1] hover:rotate-1 hover:translate-y-[-5px] cursor-pointer"
      className={cn(
        rotateClass,
        "group/teamcard relative",
        "bg-gradient-to-r to-[#001d4c] from-[#02122B] hover:from-[#C9DEFF] hover:to-[#fff] cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.01]  "
      )}
    >
      <Role role={team.role} />
      <TeamMemberDetails team={team} />
      <TeamMemberImage team={team} />
    </TeamCardHolder>
  );
}

function Role({ role }: { role: string }) {
  return (
    <div className="absolute top-0 left-10 bg-orange-500 rounded-full px-10 py-1 translate-y-[-50%] scale-95 group-hover/teamcard:scale-105 transition-all duration-500 ease-in-out ">
      {role}
    </div>
  );
}

function TeamCardHolder({
  children,
  key,
  className,
  ...props
}: {
  children?: React.ReactNode;
  props?: any;
  className?: string;
  key: string;
}) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse py-10 lg:py-0 lg:flex-row justify-center items-center gap-4 w-2/3 px-10 rounded-2xl shadow-md shadow-blue-200/50  transition-all duration-500 ease-in-out",
        className
      )}
      key={key}
    >
      {children}
    </div>
  );
}

function TeamMemberDetails({ team }: { team: Team }) {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-4 w-full lg:w-2/3 lg:py-10 ">
      <h1 className="text-white  text-2xl md:text-3xl font-bold group-hover/teamcard:text-black group-hover/teamcard:text-4xl transition-all duration-300 ease-in-out">
        {team.name}
      </h1>
      <p className="text-muted/70 group-hover/teamcard:text-black/70 text-center lg:text-left w-full ">
        {team.description}
      </p>
    </div>
  );
}

function TeamMemberImage({ team }: { team: Team }) {
  return (
    <div className="relative w-full lg:w-1/3 lg:py-10 h-[300px] min-w-[227px] overflow-hidden ">
      <Image
        src={team.image}
        fill
        alt={team.name}
        className="object-contain object-bottom group-hover/teamcard:scale-105 transition-all duration-500 ease-in-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-700 lg:hidden rounded "></div>
    </div>
  );
}

function LowerWaveToAppend() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full z-[-1]">
      <Image
        src="/lowerWave.png"
        fill
        alt="lower wave"
        className="object-contain object-bottom"
      />
    </div>
  );
}
