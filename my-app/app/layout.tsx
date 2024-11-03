import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "./components/headernav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "AV Labs - Professional Front-End Engineering Services",
  description: "Professional Front-End Engineering Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col gap-8 container mx-auto antialiased`}
      >
        <HeaderNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
