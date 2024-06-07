import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function chatHrefConstructor(id1: string, id2: string) {
    if (id1 > id2) {
        // sort
        const temp: string = id1;
        id1 = id2;
        id2 = temp;
    }

    return `${id1}--${id2}`;
}
