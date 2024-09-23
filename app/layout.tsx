import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ibiimemon.com/"),
  title: "Duresa Guye - SWE | backend | frontend -  Portfolio",
  description:
    "Developer Portfolio of Frontend & Mobile App Developer from Ethiopia with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, web development and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Duresa Guye",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
    "iOS",
    "Django",
    "Python",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Mobile Development",
    "Software Engineer",
    "Ethiopia",
    "Addis Ababa",

  ],
  openGraph: {
    title: "Duresa Guye - SWE | web developer | mobile app developer - Portfolio",
    description:
      "Frontend & Mobile App Developer from Ethiopia with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, web development and JavaScript technologies.",
    images: "/portfolio-thumbnail.png",
  },
  alternates: {
    canonical: "https://ibiimemon.com/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
