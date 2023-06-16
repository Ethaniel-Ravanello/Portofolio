import "./globals.css";
import { Roboto } from "next/font/google";

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
      <body>{children}</body>
    </html>
  );
}
