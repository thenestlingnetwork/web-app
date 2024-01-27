import React from 'react';
import { games } from '@/lib/constant';

function Game() {
  return (
    <div className="flex flex-wrap p-10 gap-10 w-full justify-between my-20">
      {games.map((game: any, index: number) => (
        <div key={index} className="relative w-24 h-24">
          <img
            src={game}
            alt='game icon'
            className=" hover:scale-105  w-full h-full opacity-30 hover:opacity-100 object-contain transition duration-300 grayscale hover:grayscale-0"
          />

        </div>
      ))}
    </div>
  );
};

export default Game;
