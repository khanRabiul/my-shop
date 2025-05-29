import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/ui/landingPage/header/TopNavbar";
import TopNavSocialLink from "@/ui/landingPage/header/TopNavSocialLink";
import TopUsersActions from "@/ui/landingPage/header/TopUsersAction";
import { Separator } from "@/components/ui/separator"
import TopMenu from "@/ui/landingPage/header/TopMenu";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Shop",
  description: "A modern e-commerce platform. Multivendor, multi-currency, and more.",
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
        <TopNavbar />
        <TopNavSocialLink />
        <Separator  className="bg-gray-300"/>
        <TopUsersActions />
        <TopMenu />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
