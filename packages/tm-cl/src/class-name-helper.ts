import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function c(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
