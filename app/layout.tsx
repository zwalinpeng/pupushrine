import type { Metadata } from "next";
import { gluten } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "pupushrine ♥",
  description: "place of worship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gluten.className}>{children}</body>
    </html>
  );
}
