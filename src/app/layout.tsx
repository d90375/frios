import { Roboto, Roboto_Condensed, Nunito_Sans } from "next/font/google";
import "./global.css";
import { Metadata } from "next";
import { Header } from "@/components/Blocks/Header";
import { Footer } from "@/components/Blocks/Footer";
import SectionContainer from "@/components/SectionContainer";
import { siteMetadata } from "@/utils/siteMetadata";

import { Background } from "@/components/Background";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const jost = Nunito_Sans({
  subsets: ["cyrillic"],
  weight: ["700", "800"],
  variable: "--font-jost",
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
    locale: "en_US",
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

export default function RootLayout({
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
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
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
      <body className="bg-[#F2F9FD] text-[#263238] antialiased">
        <div className="flex h-screen flex-col justify-between font-roboto">
          <Background />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
