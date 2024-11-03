import "./globals.css";
import "@fontsource/poppins/100.css"; // Specify weight
import "@fontsource/poppins/100-italic.css"; // Specify weight and style
import "@fontsource/poppins/200.css"; // Specify weight
import "@fontsource/poppins/200-italic.css"; // Specify weight and style
import "@fontsource/poppins/300.css"; // Specify weight
import "@fontsource/poppins/300-italic.css"; // Specify weight and style
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import "@fontsource/poppins/500.css"; // Specify weight
import "@fontsource/poppins/500-italic.css"; // Specify weight and style
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/600-italic.css"; // Specify weight and style
import "@fontsource/poppins/700.css"; // Specify weight
import "@fontsource/poppins/700-italic.css"; // Specify weight and style
import "@fontsource/poppins/800.css"; // Specify weight
import "@fontsource/poppins/800-italic.css"; // Specify weight and styl8
import "@fontsource/poppins/900.css"; // Specify weight
import "@fontsource/poppins/900-italic.css"; // Specify weight and style

export const metadata = {
  title: "AV Labs",
  description: "Software Development",
};

export default function RootLayout({ children }) {
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
