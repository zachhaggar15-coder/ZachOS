import type { Metadata, Viewport } from "next";
import { PwaServiceWorker } from "@/components/pwa-service-worker";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "ZachOS",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ZachOS",
  },
  title: "Zach OS",
  description: "A private personal life dashboard for fitness, finance, and intellectual habits.",
  formatDetection: {
    telephone: false,
  },
  icons: {
    apple: "/icons/zachos-icon-180.png",
    icon: [
      { rel: "icon", sizes: "192x192", url: "/icons/zachos-icon-192.png" },
      { rel: "icon", sizes: "512x512", url: "/icons/zachos-icon-512.png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: "#f9f4ec",
  viewportFit: "cover",
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PwaServiceWorker />
        {children}
      </body>
    </html>
  );
}
