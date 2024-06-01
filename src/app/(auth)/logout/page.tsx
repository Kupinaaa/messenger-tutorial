"use client";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import { FC } from "react";

async function handleSignOut() {
    signOut({ callbackUrl: "/login" });
}

const page: FC = () => {
    return <Button onClick={handleSignOut}>Log out</Button>;
};

export default page;
