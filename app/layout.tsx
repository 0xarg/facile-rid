import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rid.example.com"),
  title: {
    default: "RID — Your Rescue ID, one tap away",
    template: "%s · RID",
  },
  description:
    "RID (Rescue ID) is the emergency profile that turns one tap into the medical and contact information first responders need — instantly, no app required.",
  openGraph: {
    title: "RID — Your Rescue ID, one tap away",
    description:
      "The Rescue ID that puts your emergency medical and contact info one tap away.",
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
