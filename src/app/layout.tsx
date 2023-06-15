import "./globals.css";
import { Roboto } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";

import Navbar from "./components/Navbar";

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
