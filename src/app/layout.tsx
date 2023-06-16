import "./globals.css";
import { Roboto } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
