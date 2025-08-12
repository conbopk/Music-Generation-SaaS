import {serve} from "inngest/next";
import {inngest} from "~/inngest/client";
import {generateSong} from "~/inngest/functions";

// Create a client to send and receive events
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        /* your functions will be passed here later! */
        generateSong,
    ],
});