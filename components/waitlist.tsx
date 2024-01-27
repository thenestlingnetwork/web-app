import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import DialogDemo from './dialog';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

interface WaitlistProps {
    text: string;
    className?: ClassValue;
}

function Waitlist({ text, className = false }: WaitlistProps) {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };


    const buttonVariant = "secondary";

    return (
        <>
            <DialogDemo isOpen={isDialogOpen} onClose={closeDialog} />
            <Button
                variant={buttonVariant}
                className={cn("gap-3 w-[120px] bg-[#EC3BE1] rounded-half", className)}
                onClick={openDialog}
            >
                <span>{text}</span>
            </Button>
        </>
    );
}

export default Waitlist
