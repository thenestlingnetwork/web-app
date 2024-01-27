import React from "react";
import SectionHolder from "./ui/sectionHolder";
import { address, contacts } from "@/lib/constant";
import Link from "next/link";
import { BookMeetingIcon, CallIcon, LocationIcon, MailIcon } from "./ui/icons";
import { cn } from "@/lib/utils";
function Contact() {
  return (
    <SectionHolder
      id="contact"
      className="bg-[#001029] py-20 px-20 flex flex-col justify-evenly items-stretch md:flex-row w-full md:gap-1 gap-10"
    >
      <Contacts />
      <Address />
    </SectionHolder>
  );
}

export default Contact;

function Contacts({ className }: { className?: string }) {
  return (
    <Wrraper className={className}>
      <h1 className="text-2xl font-bold text-white mb-5 max-w-[300px]">
        Contact Us
      </h1>
      {/* <ContactsWrraper>
        <BookMeetingIcon />
        <Link
          href={contacts.meetignUrl}
          target="_blank"
          className="text-white ml-2 font-light hover:underline underline-offset-4"
        >
          Book a meeting
        </Link>
      </ContactsWrraper> */}
      {contacts.email.map((email, index) => (
        <ContactsWrraper key={index + email}>
          <MailIcon />
          <Link
            href={`mailto:${email}`}
            target="_blank"
            className="text-white ml-2 font-light hover:underline underline-offset-4"
          >
            {email}
          </Link>
        </ContactsWrraper>
      ))}

      {contacts.phone.map((phone, index) => (
        <ContactsWrraper key={index + phone}>
          <CallIcon />
          <Link
            href={`tel:${phone}`}
            target="_blank"
            className="text-white ml-2 font-light hover:underline underline-offset-4"
          >
            {phone}
          </Link>
        </ContactsWrraper>
      ))}
    </Wrraper>
  );
}

function Address({ className }: { className?: string }) {
  return (
    <Wrraper className={className}>
      <h1 className="text-2xl font-bold text-white mb-5 max-w-[300px]">
        Address
      </h1>
      <AddressWrraper>
        <LocationIcon className="w-10" />
        <p className="text-white font-light hover:underline underline-offset-2">
          {address}
        </p>
      </AddressWrraper>

      <h1 className="text-2xl mt-6 font-bold text-white mb-5 max-w-[300px]">
        Marketing
      </h1>

      <Link className="text-white font-light hover:underline underline-offset-2" href="/marketing">

        Click Here

      </Link>
    </Wrraper>
  );
}

function Wrraper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-start items-left w-full md:w-1/3 ",
        className
      )}
    >
      {children}
    </div>
  );
}

function ContactsWrraper({
  children,
}: {
  children: React.ReactNode;
  key?: string;
}) {
  return (
    <div
      className="flex flex-row items-center mb-1 gap-1 max-w-[300px]"
    >
      {children}
    </div>
  );
}

function AddressWrraper({
  children,
  key,
}: {
  children: React.ReactNode;
  key?: string;
}) {
  return (
    <div
      className="flex flex-row items-start mb-1 gap-1 max-w-[300px]"
      key={key}
    >
      {children}
    </div>
  );
}
