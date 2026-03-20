import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dinesh Lal Das | Cybersecurity & Ethical Hacking",
  description: "B.Sc. Hons Cybersecurity and Ethical Hacking graduate specializing in network security, penetration testing, ethical hacking, and vulnerability assessment.",
  keywords: ["cybersecurity", "ethical hacking", "penetration testing", "network security", "vulnerability assessment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-gray-300 scanline">
        {children}
      </body>
    </html>
  );
}
