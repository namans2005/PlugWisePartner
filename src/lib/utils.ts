import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes with proper conflict resolution
 * @param inputs Class names to merge
 * @returns Optimized class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats currency for display
 * @param amount Amount in rupees
 * @returns Formatted string (₹1,000)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0
  }).format(amount);
}