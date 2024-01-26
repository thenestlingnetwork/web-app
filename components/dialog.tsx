import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import Waitlist from './waitlist';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'; // Import DropdownTrigger
import DropdownMenuDemo from './dropdown';
import React from 'react';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
}






const DialogDemo: React.FC<DialogProps> = ({ isOpen, onClose }) => (

    <>
        <Dialog.Root open={isOpen} >
            <Dialog.Trigger asChild>

            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#02101F] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-white m-0 text-[17px] font-medium">
                        Join Us
                    </Dialog.Title>
                    <Dialog.Description className="text-[#9B9A9F] mt-[10px] mb-5 text-[15px] leading-normal">
                        It just takes a few seconds to join our waitlist!
                    </Dialog.Description>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            type='email'
                            className="border border-transparent border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                            id="email"
                            placeholder="Email"
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            type='text'
                            className="border border-transparent border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                            id="name"
                            placeholder="Name"
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            type='tel'
                            className="border border-transparent border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                            id="phone"
                            placeholder="Mobile No."
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            type='number'
                            className="border border-transparent border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                            id="age"
                            placeholder='Age'
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                    <DropdownMenuDemo />
                    
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            className="border border-transparent border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                            id="interested"
                            placeholder="Interested in 1-on-1 / Team Coaching"
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            type='text'
                            className="border border-transparent border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                            id="idol"
                            placeholder="Idol"
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            type='text'
                            className="border border-transparent border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                            id="state"
                            placeholder="State"
                        />
                    </fieldset>
                    <div className='mt-[25px] '>
                        <Dialog.Close asChild>
                            <Waitlist text='Submit' />
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild onClick={onClose}>
                        <Button
                            variant={"secondary"}
                            className="ml-5 py-5 gap-3  bg-[#EC3BE1] absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
                            onClick={onClose}
                        >
                            <Cross2Icon />
                        </Button>

                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </>
);





export default DialogDemo;