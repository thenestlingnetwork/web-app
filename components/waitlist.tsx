import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import DialogDemo from './dialog';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

interface WaitlistProps {
    text: string;
    ClassName?: ClassValue;
}

function Waitlist({ text, ClassName = false }: WaitlistProps) {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    useEffect(() => {
        setIsDialogOpen(false);
    }, []);

    const buttonVariant = "secondary";

    return (
        <>
            <DialogDemo isOpen={isDialogOpen} onClose={closeDialog} />
            <Button
                variant={buttonVariant}
                className={cn("gap-3 w-[120px] bg-[#EC3BE1] rounded-half", ClassName)}
                onClick={openDialog}
            >
                <span>{text}</span>
            </Button>
        </>
    );
}

export default Waitlist
