import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tirth Patel | Software Engineer & AI Orchestrator",
  description: "Portfolio of Tirth Patel, specializing in autonomous AI swarms, distributed systems, and premium web experiences.",
  keywords: [
    "Tirth Patel",
    "Software Engineer",
    "AI Orchestrator",
    "Autonomous AI Swarms",
    "Distributed Systems",
    "Web Developer",
    "Portfolio"
  ],
  alternates: {
    canonical: "https://portfolio-delta-lime-36.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ShNtUO9NIZT5fzsYO2a6QY5o63KmbBHEjt7pQS-pE68",
  },
  openGraph: {
    title: "Tirth Patel | Software Engineer & AI Orchestrator",
    description: "Portfolio of Tirth Patel, specializing in autonomous AI swarms, distributed systems, and premium web experiences.",
    url: "https://portfolio-delta-lime-36.vercel.app/",
    siteName: "Tirth Patel Portfolio",
    images: [
      {
        url: "https://portfolio-delta-lime-36.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tirth Patel Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirth Patel | Software Engineer & AI Orchestrator",
    description: "Portfolio of Tirth Patel, specializing in autonomous AI swarms, distributed systems, and premium web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tirth Patel",
    "jobTitle": "Software Engineer & AI Orchestrator",
    "url": "https://portfolio-delta-lime-36.vercel.app/",
    "description": "Portfolio of Tirth Patel, specializing in autonomous AI swarms, distributed systems, and premium web experiences.",
    "knowsAbout": [
      "AI Swarms",
      "Distributed Systems",
      "Web Development",
      "AI Orchestration"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
