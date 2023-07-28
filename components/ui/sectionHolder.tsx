import { cn } from "@/lib/utils";
import React from "react";

interface SectionHolderProps {
  as?: React.ElementType;
  children: React.ReactNode;
  parentClassName?: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
  bgImage?: string;
  imageOpacity?: number;
  id?: string;
  InsertToParent?: React.JSX.Element;
}

function SectionHolder({
  as: Component = "div",
  children,
  parentClassName,
  className,
  bgImage,
  imageOpacity = 1,
  id,
  InsertToParent,

  ...props
}: SectionHolderProps) {
  const bgImageStyle = bgImage && {
    backgroundImage: `url(${bgImage})`,
    // opacity: imageOpacity,
  };
  return (
    <Component
      id={id}
      {...props}
      className={cn(
        "section-holder-container relative bg-cover bg-no-repeat bg-center",
        parentClassName
      )}
      style={bgImageStyle ? bgImageStyle : {}}
    >
      <div className={cn("section-holder", className)}>{children}</div>
      {InsertToParent}
    </Component>
  );
}

export default SectionHolder;
