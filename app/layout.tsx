import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://duresa.me/"),
  title: "Duresa Guye - Software Engineer | Web & Mobile App Developer from Ethiopia",
  description:
    "Explore the portfolio of Duresa Guye, a skilled Software Engineer specializing in web and mobile app development with over 2 years of experience in JavaScript, React, and Django. Based in Ethiopia, Duresa creates innovative solutions tailored to client needs.",
  keywords: [
    "Duresa Guye",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Django Developer",
    "JavaScript",
    "Ethiopia",
    "Addis Ababa",
    "Developer Portfolio"
  ],
  openGraph: {
    title: "Duresa Guye - Software Engineer | Web & Mobile App Developer",
    description:
      "Discover the work of Duresa Guye, a Software Engineer from Ethiopia with 2+ years of expertise in web and mobile development, specializing in JavaScript, React, and Django.",
    images: [
      {
        url: "https://duresa.me/portfolio-thumbnail1.png",
        width: 800,
        height: 600,
        alt: "Duresa Guye - Software Engineer"
      }
    ],
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
