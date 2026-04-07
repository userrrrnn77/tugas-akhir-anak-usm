// src/utils/cn.ts

/**
 * CN (Class Names) - Gabungin class Tailwind biar rapi
 */
export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
