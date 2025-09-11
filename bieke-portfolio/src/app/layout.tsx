import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bieke Bellot | Full Stack Developer & Creative Technologist",
  description: "Portfolio of Bieke Bellot, showcasing full stack development, interactive design, and immersive web experiences.",
  keywords: ["Bieke Bellot", "3D Web Developer", "Interactive Design", "Web Portfolio", "Next.js", "React"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
