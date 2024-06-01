"use client";
import Button from "@/components/ui/Button";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
    return <>Hello</>;
}
