"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Wraps next-themes. Class strategy so Tailwind's `dark:` variant (wired to the
 * `.dark` class in globals.css) and our token overrides resolve correctly.
 * RID is white-dominant, so light is the default (the `.dark` class is never
 * applied, so `dark:` utilities stay inert on the white site).
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
