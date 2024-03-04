import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const localData = {
    set(key: string, value: string) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
        const stored = localStorage.getItem(key);
        return stored == null ? undefined : JSON.parse(stored);
    },
    remove(key: string) {
        localStorage.removeItem(key);
    }
};