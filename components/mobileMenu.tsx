"use client";
import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { EachLink } from "./ui/eachLink";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

interface section {
  href: string;
  label: string;
}
interface mobileMenuProps {
  sections: section[];
}

function MobileMenu({ sections }: mobileMenuProps) {
  return (
    <div className="md:hidden" id="mobilemenu">
      <Menu
        as="div"
        className="relative inline-block text-left"
        id="hamburger-menu"
      >
        <Menu.Button>
          <HamburgerMenuIcon className="h-[24px] w-[24px]" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {sections.map((section) => (
              <EachLink
                href={section.href}
                label={section.label}
                key={`mobile@${section.label}`}
              />
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default MobileMenu;
