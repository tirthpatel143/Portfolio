import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tirth Patel | Software Engineer & AI Orchestrator",
  description: "Portfolio of Tirth Patel, specializing in autonomous AI swarms, distributed systems, and premium web experiences.",
  verification: {
    google: "ShNtUO9NIZT5fzsYO2a6QY5o63KmbBHEjt7pQS-pE68",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
