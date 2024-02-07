import {  Roboto, Roboto_Condensed, Jost } from "next/font/google";
import { AppConfig } from '../utils/AppConfig';
import "./global.css";
import { Metadata } from "next";



const roboto = Roboto({ subsets: ["cyrillic"], weight: "100", variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

// export const metadata: Metadata = {
//   metadataBase: new URL(siteMetadata.siteUrl),
//   title: {
//     default: siteMetadata.title,
//     template: `%s | ${siteMetadata.title}`,
//   },
//   description: siteMetadata.description,
//   openGraph: {
//     title: siteMetadata.title,
//     description: siteMetadata.description,
//     url: './',
//     siteName: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//     locale: 'en_US',
//     type: 'website',
//   },
//   alternates: {
//     canonical: './',
//     types: {
//       'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
//     },
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   twitter: {
//     title: siteMetadata.title,
//     card: 'summary_large_image',
//     images: [siteMetadata.socialBanner],
//   },
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={AppConfig.locale}  className={`${roboto.variable} font-sans`}>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body>{children}</body>
    </html>
  );
}