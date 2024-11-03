import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "./components/headernav";
import Footer from "./components/footer";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/100.css"; // Specify weight
import "@fontsource/poppins/100-italic.css"; // Specify weight and style
import "@fontsource/poppins/200.css"; // Specify weight
import "@fontsource/poppins/200-italic.css"; // Specify weight and style
import "@fontsource/poppins/300.css"; // Specify weight
import "@fontsource/poppins/300-italic.css"; // Specify weight and style
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import "@fontsource/poppins/500.css"; // Specify weight
import "@fontsource/poppins/500-italic.css"; // Specify weight and style
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/600-italic.css"; // Specify weight and style
import "@fontsource/poppins/700.css"; // Specify weight
import "@fontsource/poppins/700-italic.css"; // Specify weight and style
import "@fontsource/poppins/800.css"; // Specify weight
import "@fontsource/poppins/800-italic.css"; // Specify weight and style
import "@fontsource/poppins/900.css"; // Specify weight
import "@fontsource/poppins/900-italic.css"; // Specify weight and style

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
        className={`antialiased`}
      >
        <HeaderNav />
        <main className="p-4 flex-grow h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
