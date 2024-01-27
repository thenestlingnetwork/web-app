"use client"
import React from 'react';
import Waitlist from './waitlist';

const JoinUs = () => {
  return (
    <div className="relative py-[200px] w-full flex items-center justify-center bg-gray-200">
      <div className="absolute hidden xl:flex top-0 right-0 h-full w-1/2 overflow-hidden">
        <img
          src="./pubg.png"
          alt="Overlay Image"
          className="absolute bottom-0 right-0 w-auto md:max-h-[70vh] max-h-[50vh] h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-4xl text-2xl font-bold mb-8 px-3 text-center ">Enrol to our course, to step to you long waited esports journey !!</h1>
        <Waitlist className="bg-[#001029] hover:bg-[#EC3BE1] text-white font-bold py-2 px-4 rounded w-[80%]" text="Join the wait list" />

      </div>
    </div>
  );
};

export default JoinUs;
