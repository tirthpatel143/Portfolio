import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tirth Patel | Software Engineer & AI Orchestrator",
  description: "Tirth Patel, a professional Software Engineer & AI Orchestrator specializing in autonomous AI swarms, distributed systems, and premium web apps.",
  keywords: [
    "Tirth Patel",
    "Software Engineer",
    "AI Orchestrator",
    "Autonomous AI Swarms",
    "Distributed Systems",
    "Web Developer",
    "Portfolio"
  ],
  authors: [{ name: "Tirth Patel", url: "https://tirthpatelportfolio08.vercel.app/" }],
  creator: "Tirth Patel",
  publisher: "Tirth Patel",
  alternates: {
    canonical: "https://tirthpatelportfolio08.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "ShNtUO9NIZT5fzsYO2a6QY5o63KmbBHEjt7pQS-pE68",
  },
  openGraph: {
    title: "Tirth Patel | Software Engineer & AI Orchestrator",
    description: "Tirth Patel, a professional Software Engineer & AI Orchestrator specializing in autonomous AI swarms, distributed systems, and premium web apps.",
    url: "https://tirthpatelportfolio08.vercel.app/",
    siteName: "Tirth Patel Portfolio",
    images: [
      {
        url: "https://tirthpatelportfolio08.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tirth Patel | Software Engineer & AI Orchestrator Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirth Patel | Software Engineer & AI Orchestrator",
    description: "Tirth Patel, a professional Software Engineer & AI Orchestrator specializing in autonomous AI swarms, distributed systems, and premium web apps.",
    images: ["https://tirthpatelportfolio08.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://tirthpatelportfolio08.vercel.app/#person",
        "name": "Tirth Patel",
        "jobTitle": "Software Engineer & AI Orchestrator",
        "url": "https://tirthpatelportfolio08.vercel.app/",
        "image": "https://tirthpatelportfolio08.vercel.app/og-image.jpg",
        "description": "Tirth Patel, a professional Software Engineer & AI Orchestrator specializing in autonomous AI swarms, distributed systems, and premium web apps.",
        "telephone": "+916353782035",
        "email": "tirth.p.patel143@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gandhinagar",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://github.com/tirthpatel143",
          "https://linkedin.com/in/tirthpatel143"
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Retrieval-Augmented Generation (RAG)",
          "AI Swarms & Orchestration",
          "Software Engineering",
          "Full Stack Web Development",
          "FastAPI",
          "LlamaIndex",
          "LangChain",
          "Python",
          "TypeScript",
          "Next.js",
          "React",
          "PostgreSQL",
          "Qdrant Vector Database",
          "ARIMA",
          "Prophet",
          "LSTM",
          "Streamlit",
          "Docker",
          "N8N"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "LDRP Institute of Technology and Research",
          "url": "https://www.ldrp.ac.in/"
        },
        "worksFor": [
          {
            "@type": "Organization",
            "name": "The Special Character",
            "location": "Gandhinagar, India"
          },
          {
            "@type": "Organization",
            "name": "Zidio Development"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://tirthpatelportfolio08.vercel.app/#website",
        "url": "https://tirthpatelportfolio08.vercel.app/",
        "name": "Tirth Patel | Portfolio",
        "description": "Tirth Patel, a professional Software Engineer & AI Orchestrator specializing in autonomous AI swarms, distributed systems, and premium web apps.",
        "publisher": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://tirthpatelportfolio08.vercel.app/#webpage",
        "url": "https://tirthpatelportfolio08.vercel.app/",
        "name": "Tirth Patel | Software Engineer & AI Orchestrator Portfolio",
        "isPartOf": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#website"
        },
        "about": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        },
        "description": "Tirth Patel, a professional Software Engineer & AI Orchestrator specializing in autonomous AI swarms, distributed systems, and premium web apps."
      },
      {
        "@type": "ProfilePage",
        "@id": "https://tirthpatelportfolio08.vercel.app/#profilepage",
        "url": "https://tirthpatelportfolio08.vercel.app/",
        "isPartOf": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#website"
        },
        "mainEntity": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://tirthpatelportfolio08.vercel.app/#project-yogateria",
        "name": "Yogateria - RAG ChatBot",
        "description": "A production RAG chatbot for a live Brazilian yoga e-commerce platform named Yogateria, serving personalized product recommendations grounded exclusively in a real-time Medusa product catalog along with personalized memory summarization and real-time fetching of user’s past order history using tinyEPR API.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "creator": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        },
        "downloadUrl": "https://github.com/tirthpatel143",
        "softwareRequirements": "LlamaIndex, Qdrant, PostgreSQL, FastAPI, Medusa API"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://tirthpatelportfolio08.vercel.app/#project-seo-improve",
        "name": "SEO-Improve - Hermes Agent SEO",
        "description": "An AI-powered SEO improvement assistant using the Hermes Agent framework to automate SEO-related tasks and content optimization workflows. Worked on integrating AI models through OpenRouter APIs and experimented with intelligent automation for improving website content, keyword handling, and productivity-based operations.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "creator": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        },
        "downloadUrl": "https://github.com/tirthpatel143",
        "softwareRequirements": "Python, Hermes Agent Framework, OpenRouter API, NLP, Git"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://tirthpatelportfolio08.vercel.app/#project-nexus",
        "name": "Nexus - Time Series Analysis And Forecasting",
        "description": "A full-stack solution for stock market time series analysis and forecasting using Python and TypeScript. Developed predictive models and integrated data visualization dashboards for real-time trend insights. Implemented ARIMA, Prophet, and LSTM models to compare accuracy and optimize predictions.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "creator": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        },
        "downloadUrl": "https://github.com/tirthpatel143",
        "softwareRequirements": "Python, TypeScript, Streamlit, Flask, ARIMA, Prophet, LSTM"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://tirthpatelportfolio08.vercel.app/#project-social-analytics",
        "name": "AI-Powered Social Media Analytics Dashboard",
        "description": "A centralized social media analytics dashboard that aggregates and visualizes data from multiple platforms in real-time. Built backend APIs to perform data aggregation, filtering, and time-series analysis. Designed dynamic dashboards showing posts, likes, comments, and engagement metrics.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "creator": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        },
        "downloadUrl": "https://github.com/tirthpatel143",
        "softwareRequirements": "React, Next.js, FastAPI, SQLAlchemy, PostgreSQL, Chart.js, JWT Auth, ReportLab"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://tirthpatelportfolio08.vercel.app/#project-smartin",
        "name": "SmartIn - Smart Voice Assistant",
        "description": "A smart voice assistant application using Python capable of understanding and executing voice commands. The assistant uses SpeechRecognition and PyAudio to convert voice to text and respond. Optimized audio capture using PyAudio to ensure high-accuracy voice command parsing and low-latency response times.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "creator": {
          "@id": "https://tirthpatelportfolio08.vercel.app/#person"
        },
        "downloadUrl": "https://github.com/tirthpatel143",
        "softwareRequirements": "Python, SpeechRecognition, PyAudio, pyttsx3, Wikipedia API, smtplib"
      }
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
