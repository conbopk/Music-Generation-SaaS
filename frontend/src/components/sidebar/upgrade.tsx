"use client";

import {Button} from "~/components/ui/button";
import {authClient} from "~/lib/auth-client";

export default function Upgrade() {
    const upgrade = async () => {
        await authClient.checkout({
            products: [
                "b45c6fa2-28ee-47b5-a627-55e739236c6d",
                "ed7162d4-0422-4ecf-9941-fb7a604b79c3",
                "f7471a38-97bb-4963-8d7e-2015765bfa42",
            ],
        });
    };

    return (
        <Button
            variant="outline"
            size='sm'
            className='ml-2 cursor-pointer text-orange-400'
            onClick={upgrade}
        >
            Upgrade
        </Button>
    );
}