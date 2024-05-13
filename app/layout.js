import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { useAppContext } from "./Context/AppContext";

const manrope = Manrope({ subsets: ["latin"], weights: [400, 500, 600, 700] });

export const metadata = {
  title: "Audiophile",
  description: "Audiophile ecommerce website. A frontend mentor challenge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <useAppContext>{children}</useAppContext>
      </body>
    </html>
  );
}
