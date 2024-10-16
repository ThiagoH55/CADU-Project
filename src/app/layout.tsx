import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/session-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const beVietnam = localFont({
  src: "./fonts/BeVietnamPro-SemiBold.woff",
  variable: "--font-be-vietnam",
  weight: "600",
});

const beVietnamRegular = localFont({
  src: "./fonts/BeVietnamPro-Regular.ttf",
  variable: "--font-be-vietnam-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "CADU",
  description: "Centro de Animais em Dificuldade e Urgência",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beVietnam.variable} ${beVietnamRegular.variable} antialiased`}
      >
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
