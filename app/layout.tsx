import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Conclave 2025 – GCT",
  description: "Join us at the AI Conclave 2025 hosted by Govt. Arts and Science College, Tanur. Explore AI, Robotics, Workshops, and more!",
  
  // Open Graph
  openGraph: {
    title: "AI Conclave 2025 – GCT",
    description: "Explore the future of AI and innovation at the AI Conclave 2025 in Tanur!",
    url: "https://aiconclave2025.gctanur.in/",
    type: "website",
    images: [
      {
        url: "https://aiconclave2025.gctanur.in/images/ai-updated.jpg",
        width: 1200,
        height: 630,
        alt: "AI Conclave 2025"
      }
    ]
  },
  
 
  twitter: {
    card: "summary_large_image",
    title: "AI Conclave 2025 – GCT",
    description: "Explore the future of AI and innovation at the AI Conclave 2025 in Tanur!",
    images: ["https://aiconclave2025.gctanur.in/images/ai-updated.jpg"],
  },
  
 
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-167x167.png", sizes: "167x167" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" }
    ]
  },
  
  // Additional meta tags
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  
  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AI Conclave 2025"
  },
  
  // Other meta tags
  other: {
    "msapplication-TileColor": "#da532c"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="OXd5kJ4kF63c-G0j24mK1tAb9wUPe5w8-enH0VCgHAg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}