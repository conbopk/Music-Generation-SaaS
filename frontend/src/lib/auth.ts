import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {db} from "~/server/db";
import {Polar} from "@polar-sh/sdk";
import {env} from "~/env";
import {checkout, polar, portal, webhooks} from "@polar-sh/better-auth";


const polarClient = new Polar({
    accessToken: env.POLAR_ACCESS_TOKEN,
    server: 'sandbox'
});

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },

    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [
                        {
                            productId: "b45c6fa2-28ee-47b5-a627-55e739236c6d", // ID of Product from Polar Dashboard
                            slug: "small" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        },
                        {
                            productId: "ed7162d4-0422-4ecf-9941-fb7a604b79c3",
                            slug: "medium"
                        },
                        {
                            productId: "f7471a38-97bb-4963-8d7e-2015765bfa42",
                            slug: "large"
                        }
                    ],
                    successUrl: "/",
                    authenticatedUsersOnly: true
                }),
                portal(),
                webhooks({
                    secret: env.POLAR_WEBHOOK_SECRET,
                    onOrderPaid: async (order) => {
                        const externalCustomerId = order.data.customer.externalId;

                        if (!externalCustomerId) {
                            console.error("No external customer ID found.");
                            throw new Error("No external customer id found.");
                        }

                        const productId = order.data.productId;

                        let creditsToAdd = 0;

                        switch (productId) {
                            case "b45c6fa2-28ee-47b5-a627-55e739236c6d":
                                creditsToAdd = 10;
                                break;
                            case "ed7162d4-0422-4ecf-9941-fb7a604b79c3":
                                creditsToAdd = 25;
                                break;
                            case "f7471a38-97bb-4963-8d7e-2015765bfa42":
                                creditsToAdd = 50;
                                break;
                        }

                        await db.user.update({
                            where: {
                                id: externalCustomerId,
                            },
                            data: {
                                credits: {
                                    increment: creditsToAdd,
                                },
                            },
                        });
                    },
                }),
            ],
        }),
    ],
});