import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://facile.me"),
  title: {
    default: "Facile RID — NFC Smart Card & Digital Profile",
    template: "%s · Facile RID",
  },
  description:
    "Facile RID NFC smart cards let you share your contact, links, and socials with one tap — no app required. Free digital profile included. Ships in 2–3 days.",
  keywords: [
    "NFC business card",
    "digital business card",
    "smart card",
    "NFC card",
    "digital profile",
    "tap to share",
    "contactless card",
    "metal business card",
  ],
  openGraph: {
    title: "Facile RID — NFC Smart Card & Digital Profile",
    description:
      "One tap shares your contact, links, and socials. No app required. Free digital profile. Ships in 2–3 days.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
