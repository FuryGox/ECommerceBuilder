import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/site-header/header";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { I18nProvider } from "@/components/provider/i18next-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NetEra",
  description: "Commerce for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <I18nProvider>
        <html lang="en" suppressHydrationWarning>
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground ease-in-out transition-all duration-500`}
          >
            {children}
          </body>
        </html>
      </I18nProvider>
    </ThemeProvider>
  );
}
