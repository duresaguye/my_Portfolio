import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://duresa.me/"),
  title: "Duresa Guye - SWE | backend | frontend - Portfolio",
  description:
    "Developer Portfolio of web & Mobile App Developer from Ethiopia with 2+ years of expertise. Software Engineer. Specializing in mobile apps, web development and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portfolio",
    "Duresa Guye",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
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
      "Web & Mobile App Developer from Ethiopia with 2+ years of expertise. Software Engineer. Specializing in mobile apps, web development, and JavaScript technologies.",
    images: "https://duresa.me/portfolio-thumbnail1.png",
  },
  alternates: {
    canonical: "https://duresa.me/",
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
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PRIVATE_GTID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
        {/* End Google Analytics */}
      </head>
      <body
        className="bg-[#111] overflow-y-scroll overflow-x-hidden"
        style={{ fontFamily: 'Inter, sans-serif' }} 
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
