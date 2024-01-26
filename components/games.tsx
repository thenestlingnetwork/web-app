import React from 'react';
import { games } from '@/lib/constant';

function Game(){
  return (
    <div className="grid grid-cols-4 p-10 gap-4 w-full justify-center">
      {games.map((game: any, index: number) => (
        <div key={index} className="relative w-24 h-24">
          <img
            src={game}
            alt='game icon'
            className="absolute inset-0 w-full h-full object-contain transition duration-300 grayscale brightness-50"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <img src={game} alt="game icon" className="w-full h-full object-contain brightness-100" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Game;
