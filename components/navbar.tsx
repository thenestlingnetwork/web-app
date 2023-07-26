import Link from "next/link";
import { HypeSquadIcon } from "./ui/icons";

interface LinkProps {
  href: string;
  label: string;
}

const EachLink = (linkProps: LinkProps) => {
  const { href, label } = linkProps;
  return (
    <Link href={href}>
      <div className="text-black px-3 py-2 rounded-md text-sm font-medium hover-to-underline">
        {label}
      </div>
    </Link>
  );
};

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center w-full px-4 py-2">
      <HypeSquadIcon />
      <div className="flex flex-row justify-between items-center ">
        <EachLink href="/" label="Home" />
        <EachLink href="/about" label="About" />
        <EachLink href="/contact" label="Contact" />
      </div>
    </div>
  );
}
