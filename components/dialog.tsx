"use client"
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import Waitlist from './waitlist';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'; // Import DropdownTrigger
import DropdownMenuDemo from './dropdown';
import React, { useEffect, useState } from 'react';
import createUser, { User } from '@/actions/create-user';
import { useForm } from 'react-hook-form';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
}



const DialogDemo: React.FC<DialogProps> = ({ isOpen, onClose }) => {

    const [gamesChecked, setGamesChecked] = useState<string[]>([]);
    const [ok, setOk] = useState<boolean>(false);

    const { register, getValues, handleSubmit, watch, formState: { errors, isSubmitting }, control, setValue, } = useForm<User>();
    useEffect(() => {
        setValue('games', gamesChecked)
    }, [gamesChecked])

    const onSubmit = async (data: User) => {
        await createUser(data);
        setOk(true);
    };


    return (

        <>
            <Dialog.Root open={isOpen} >
                <Dialog.Trigger asChild>

                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className=" backdrop-blur bg-black/20 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] min-h-[git ] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#02101F]  focus:outline-none w-full max-w-4xl p-5">
                        {!ok && !isSubmitting && <>
                            <Dialog.Title className="text-white m-0 text-[17px] font-medium">
                                Join Us
                            </Dialog.Title>
                            <Dialog.Description className="text-[#9B9A9F] mt-[10px] mb-5 text-[15px] leading-normal">
                                It just takes a few seconds to join our waitlist!
                            </Dialog.Description>
                            <form className='w-full' onSubmit={handleSubmit(onSubmit)} >

                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <input
                                        type='email'
                                        className=" border-white/20 px-4 border-0 border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                                        id="email"
                                        placeholder="Email"
                                        {...register("email")} />
                                </fieldset>
                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <input
                                        type='text'
                                        className=" border-white/20 px-4 border-0  border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                                        id="name"
                                        placeholder="Name"
                                        {...register("name")}
                                    />
                                </fieldset>
                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <input
                                        type='tel'
                                        className=" border-white/20 px-4 border-0  border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                                        id="phone"
                                        placeholder="Mobile No."
                                        {...register("phone")}
                                    />
                                </fieldset>
                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <input
                                        type='number'
                                        className=" border-white/20 px-4 border-0  border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                                        id="age"
                                        placeholder='Age'
                                        {...register("age")}
                                    />
                                </fieldset>
                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <DropdownMenuDemo
                                        gamesChecked={gamesChecked}
                                        setGamesChecked={setGamesChecked}
                                    />

                                </fieldset>
                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <input
                                        type='text'
                                        className=" border-white/20 px-4 border-0  border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                                        id="idol"
                                        placeholder="Idol"
                                        {...register("idols")}
                                    />
                                </fieldset>
                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <input
                                        type='text'
                                        className=" border-white/20 px-4 border-0  border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                                        id="state"
                                        placeholder="State"
                                        {...register("state")}
                                    />
                                </fieldset>
                                <fieldset className="mb-[15px] flex items-center gap-5">
                                    <input
                                        type='text'
                                        className=" border-white/20 px-4 border-0  border-b-2 bg-[#02101F] text-[#9B9A9F] h-[35px] w-full focus:outline-none focus:border-b-[#9B9A9F]"
                                        id="country"
                                        placeholder="Country"
                                        {...register("country")}
                                    />
                                </fieldset>
                                <div className='my-3 mb-2' >

                                    <label className=" items-center text-white  "> Select Gender </label>
                                </div>
                                <fieldset className=" pl-4 mb-[15px] flex items-center gap-5">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            value="MALE"
                                            className="form-radio h-5 w-5 text-white focus:border-white focus:ring focus:ring-blue-300 focus:outline-none"
                                            {...register("gender")}
                                        />
                                        <span className="ml-2 text-white ">Male</span>
                                    </label>
                                    <label className="inline-flex items-center mt-2">
                                        <input
                                            type="radio"
                                            value="FEMALE"
                                            className="form-radio h-5 w-5 text-white focus:border-white focus:ring focus:ring-blue-300 focus:outline-none"
                                            {...register("gender")}
                                        />
                                        <span className="ml-2  text-white">Female</span>
                                    </label>
                                    <label className="inline-flex items-center mt-2">
                                        <input
                                            type="radio"
                                            value="OTHERS"
                                            className="form-radio h-5 w-5 text-white focus:border-white focus:ring focus:ring-blue-300 focus:outline-none"
                                            {...register("gender")}
                                        />
                                        <span className="ml-2  text-white">Others</span>
                                    </label>
                                </fieldset>
                                <div className='my-3 mb-2' >

                                    <label className=" items-center text-white  "> Interested in 1-on-1 / team coaching? </label>
                                </div>
                                <fieldset className=" pl-4 mb-[15px] flex items-center gap-5">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            value="Yes"
                                            className="form-radio h-5 w-5 text-white focus:border-white focus:ring focus:ring-blue-300 focus:outline-none"
                                            {...register("interested")}
                                        />
                                        <span className="ml-2 text-white ">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center mt-2">
                                        <input
                                            type="radio"
                                            value="No"
                                            className="form-radio h-5 w-5 text-white focus:border-white focus:ring focus:ring-blue-300 focus:outline-none"
                                            {...register("interested")}
                                        />
                                        <span className="ml-2  text-white">No</span>
                                    </label>
                                </fieldset>
                                <div className='mt-[25px] '>
                                    <Waitlist text='Submit' />
                                </div>

                            </form>
                            <Dialog.Close asChild onClick={onClose}>
                                <Button
                                    variant={"secondary"}
                                    className="ml-5 py-5 gap-3  bg-[#EC3BE1] absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
                                    onClick={onClose}
                                >
                                    x
                                </Button>

                            </Dialog.Close>
                        </>
                        }
                        {
                            ok && <> <Dialog.Title className="text-white m-0 text-[17px] font-medium">
                                Thank You
                            </Dialog.Title>
                                <Dialog.Description className="text-[#9B9A9F] mt-[10px] mb-5 text-[15px] leading-normal">
                                    We will get back to you soon!
                                </Dialog.Description>
                                <Dialog.Close asChild onClick={onClose}>
                                    <Button
                                        variant={"secondary"}
                                        className="ml-5 py-5 gap-3  bg-[#EC3BE1] absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
                                        onClick={onClose}
                                    >
                                        x
                                    </Button>

                                </Dialog.Close>
                            </>

                        }

                        {

                            isSubmitting && <> <Dialog.Title className="text-white m-0 text-[17px] font-medium">
                                Submitting
                            </Dialog.Title>
                                <Dialog.Description className="text-[#9B9A9F] mt-[10px] mb-5 text-[15px] leading-normal">
                                    Please wait...
                                </Dialog.Description>
                                <Dialog.Close asChild onClick={onClose}>
                                    <Button
                                        variant={"secondary"}
                                        className="ml-5 py-5 gap-3  bg-[#EC3BE1] absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
                                        onClick={onClose}
                                    >
                                        x
                                    </Button>

                                </Dialog.Close>
                            </>
                        }

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>




        </>
    )
};





export default DialogDemo;