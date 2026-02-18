import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sortlist Radar - Turn Website Visitors Into Your Next Clients",
  description:
    "See which companies visit your agency website, get verified decision-maker contacts, and reach out before your competitors. Built for agencies. Powered by Sortlist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans font-normal text-secondary-700 bg-white leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
