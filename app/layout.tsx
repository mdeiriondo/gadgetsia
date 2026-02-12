import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./components/Analytics";
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
  title: "Gadgets IA",
  description: "Tecnología Smart Home Santa Fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
          scrollBehavior: 'smooth'
        }}
      >
        <main className="snap-y snap-mandatory">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
