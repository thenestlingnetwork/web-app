import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';

const DropdownMenuDemo: React.FC = () => {
    const [gamesChecked, setGamesChecked] = useState<string[]>([]);

    const handleGameCheckedChange = (game: string) => {
        if (gamesChecked.includes(game)) {
            setGamesChecked(gamesChecked.filter((item) => item !== game));
        } else {
            setGamesChecked([...gamesChecked, game]);
        }
    };

    const games = [
        'Counter-Strike',
        'Dota 2',
        'FIFA',
        'PUBGM/BGMI',
        'Valorant',
        'RealCricket',
        'Mobile Legends',
        'Others',
    ];

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="bg-[#02101F] text-[#9B9A9F]"
                    aria-label="Customise options"
                >
                    Games
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    {games.map((game) => (
                        <DropdownMenu.CheckboxItem
                            key={game}
                            className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none"
                            checked={gamesChecked.includes(game)}
                            onCheckedChange={(checked) => {
                                handleGameCheckedChange(game);
                            }}
                        >
                            <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                <CheckIcon />
                            </DropdownMenu.ItemIndicator>
                            {game}
                        </DropdownMenu.CheckboxItem>
                    ))}
                    <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuDemo;
