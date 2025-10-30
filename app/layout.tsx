import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "kylie chang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plexMono.className} bg-white text-black antialiased`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
