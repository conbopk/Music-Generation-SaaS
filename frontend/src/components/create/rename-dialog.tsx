"use client";

import type {Track} from "~/components/create/track-list";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "~/components/ui/dialog";
import React, {useState} from "react";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";

export function RenameDialog(
    { track, onCloseAction, onRenameAction, }:
    {
        track: Track;
        onCloseAction: () => void;
        onRenameAction: (trackId: string, newTitle: string) => void;})
{
    const [title, setTitle] = useState(track.title ?? "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onRenameAction(track.id, title.trim());
        }
        onCloseAction();
    }

    return (
        <Dialog open={true} onOpenChange={onCloseAction}>
            <DialogContent className='sm:max-w-[425px]'>
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Rename Song</DialogTitle>
                        <DialogDescription>Enter a new name for your song. Click save when you are done.</DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor='name' className='text-right'>
                                Title
                            </Label>
                            <Input
                                id='name'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className='col-span-3'
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant='outline' type='button'>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type='submit'>
                            Save Changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}