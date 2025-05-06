import type { Metadata } from "next";
import { Quicksand, Montserrat } from "next/font/google";
import "./globals.css";

const quicksands = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memphis Tech Scene Newsletter",
  description: "Single source of truth for the Memphis Tech Scene",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksands.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
