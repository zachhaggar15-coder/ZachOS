import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zach OS",
  description: "A private personal life dashboard for fitness, finance, and intellectual habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
