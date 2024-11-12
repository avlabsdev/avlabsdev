import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ThemeProvider from "./utils/ThemeProvider";

import "./globals.css";

// fonts
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

// components
import HeaderNav from "./components/headernav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "AV Labs - Professional Front-End Development Services",
  description: "Professional Front-End Development Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://www.avlabs.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AV Labs - Professional Front-End Development Services"
        />
        <meta
          property="og:description"
          content="Professional Front-End Development Services"
        />
        <meta property="og:image" content="/avlabs-splash.jpg" />

        <meta name="twitter:card" content="/avlabs-splash.jpg" />
        <meta property="twitter:domain" content="avlabs.dev" />
        <meta property="twitter:url" content="https://www.avlabs.dev" />
        <meta
          name="twitter:title"
          content="AV Labs - Professional Front-End Development Services"
        />
        <meta
          name="twitter:description"
          content="Professional Front-End Development Services"
        />
        <meta name="twitter:image" content="/avlabs-splash.jpg" />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderNav />
          <main className="flex-grow h-full">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JZJDSXZJ6N');
        `}
      </Script>
    </html>
  );
}
