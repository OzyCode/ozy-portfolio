import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MotionConfig } from "motion/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osamah AlBahnasi — Junior SAP Consultant & Software Engineer",
  description:
    "SAP-certified junior consultant and software engineer. SAP YPP trainee, former delivery lead at RFID Saudi Trading Company.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <MotionConfig reducedMotion="user">
          <Tooltip.Provider delayDuration={250} skipDelayDuration={300}>
            <Nav />
            {children}
          </Tooltip.Provider>
        </MotionConfig>
      </body>
    </html>
  );
}
