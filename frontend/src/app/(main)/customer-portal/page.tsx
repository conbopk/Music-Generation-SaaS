import {auth} from "~/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import CustomerPortalRedirect from "~/components/customer-portal-redirect";

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) redirect("/auth/sign-in")

    return <CustomerPortalRedirect />
}