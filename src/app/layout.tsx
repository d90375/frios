import { Roboto, Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./global.css";
import { Metadata } from "next";
import { Header } from "@/components/Blocks/Header";
import { Footer } from "@/components/Blocks/Footer";
import { siteMetadata } from "@/utils/siteMetadata";

import { Background } from "@/components/Background";

const jost = localFont({
  src: [
    {
      path: "../../public/font/FuturaNewDemi.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-jost",
});
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const robotoCond = Roboto_Condensed({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--font-roboto-cond",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${roboto.variable} ${jost.variable} ${robotoCond.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-[#F2F9FD] text-text antialiased">
        <div className="flex h-screen flex-col justify-between font-roboto">
          <div>
            <Background />
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
