import Link from "next/link";

interface LinkProps {
  href: string;
  label: string;
  key: string;
}

export const EachLink = (linkProps: LinkProps) => {
  const { href, label, key } = linkProps;
  return (
    <Link href={href} key={key}>
      <div className="text-black px-3 py-2 rounded-md text-sm font-medium md:hover-to-underline">
        {label}
      </div>
    </Link>
  );
};
