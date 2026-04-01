import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fast.com Clone | Internet Speed Test",
  description: "Check your internet speed instantly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
