import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DashboardNav } from "@/components/dashboard/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agent Dashboard",
  description: "Monitor and manage your AI agents in real-time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <DashboardNav />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
