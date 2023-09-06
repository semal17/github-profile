import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cx from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Profile",
  description: "Find GitHub profile",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "bg-amber-50 w-full sm:w-[600px] mx-auto")}>
        {children}
      </body>
    </html>
  );
}
