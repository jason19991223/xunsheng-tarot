import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { GoogleTools } from "@/components/GoogleTools";
import { Header } from "@/components/Header";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.url),
  title: {
    default: siteContent.title,
    template: `%s｜${siteContent.name}`
  },
  description: siteContent.description,
  openGraph: {
    title: siteContent.title,
    description: siteContent.description,
    url: siteContent.url,
    siteName: siteContent.name,
    images: [
      {
        url: siteContent.coverImage,
        width: 1024,
        height: 1024,
        alt: siteContent.title
      }
    ],
    locale: "zh_TW",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.title,
    description: siteContent.description,
    images: [siteContent.coverImage]
  },
  icons: {
    icon: siteContent.markImage,
    shortcut: siteContent.markImage,
    apple: siteContent.markImage
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleTools />
        <Analytics />
      </body>
    </html>
  );
}
