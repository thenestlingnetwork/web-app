import React from 'react';

const JoinUs = () => {
  return (
    <div className="relative h-[700px] w-full flex items-center justify-center bg-gray-200">
      <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
        <img
          src="./pubg.png"
          alt="Overlay Image"
          className="absolute top-0 right-0 w-auto h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Enrol to our course, to step to you long waited esports journey !!</h1>
        <button className="bg-[#001029] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[80%]">
        Join the wait list
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
