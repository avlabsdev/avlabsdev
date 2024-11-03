import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
