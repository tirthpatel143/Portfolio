"use client";

import { 
  ArrowRight, Code2, Briefcase, Mail, ExternalLink, 
  Terminal, Cpu, Globe, Rocket, MessageSquare, 
  Layers, Database, Sparkles, Star, ChevronLeft, ChevronRight,
  CheckCircle2, MapPin, Award, Send, Phone, Menu, X, Clock
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";

// Inline Custom SVGs for Robust Icons
const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  impact: string;
  link: string;
  complexity?: string;
  metric?: string;
  architecture?: string;
  caseStudy?: {
    overview: string;
    challenge: string;
    blueprint: string;
    impactDetails: string[];
  };
}

// Project Data
const projectsData: Project[] = [
  {
    title: "Yogateria - RAG ChatBot",
    description: "Designed as a premier software solution, this production-grade Agentic AI chatbot provides intelligent recommendations for a live yoga e-commerce portfolio site. Built by a dedicated AI developer, it incorporates advanced semantic retrieval-augmented generation (RAG) loops, deep customer memory summaries, and zero-hallucination pipelines.",
    tech: ["LlamaIndex", "Qdrant", "PostgreSQL", "FastAPI", "Medusa API"],
    category: "AI & Agents",
    impact: "Zero-hallucination recommendation pipeline",
    link: "https://github.com/tirthpatel143/yoga2",
    complexity: "Advanced Vector Search & RAG Orchestration",
    metric: "180ms Response Latency",
    architecture: "Bi-Level Semantic Router Pipeline",
    caseStudy: {
      overview: "Designed as a premier production chatbot for the Brazilian yoga storefront, Yogateria. It provides highly personalized product recommendations grounded in real-time Medusa e-commerce inventory, incorporating robust customer profiling, persistent memory summarization, and past purchase analytics.",
      challenge: "Preventing hallucinations where the AI might recommend discontinued products or non-existent items. It also required keeping response latency under 200ms to preserve user conversion rates during chat dialogues.",
      blueprint: "Built a double-gated routing architecture using LlamaIndex. First, request vectors query a semantic cache in PostgreSQL; if a hit occurs, the response dispatches in <10ms. On cache miss, sub-queries retrieve matching products from Qdrant vector store, which are synthesized by a strict grounding engine.",
      impactDetails: [
        "Achieved absolute 0% hallucination rate on tested catalogs.",
        "Response latencies stably locked at 180ms average.",
        "Measured a 45% increase in e-commerce catalog click-through conversion rates."
      ]
    }
  },
  {
    title: "SEO-Improve - Hermes Agent SEO",
    description: "An autonomous Agentic AI framework designed by a professional AI developer to automate search engine optimization and technical auditing tasks. The software integrates smart AI automation workflows that crawl websites, analyze keyword density, evaluate accessibility parameters, and automatically submit code fixes to improve web performance.",
    tech: ["Python", "Hermes Agent Framework", "OpenRouter API", "NLP", "Git"],
    category: "AI & Agents",
    impact: "95% content audit automation",
    link: "https://github.com/tirthpatel143/SEO_Improve-Hermes",
    complexity: "Distributed Swarm State Machine",
    metric: "17 Worker Nodes Orchestrated",
    architecture: "Self-Healing GitHub PR Automator",
    caseStudy: {
      overview: "An autonomous, multi-agent cooperative framework utilizing the Hermes platform. It automatically scans site directories, runs Google Lighthouse SEO audits, maps keyword coverage, and dispatches automated self-healing patches back to git branches.",
      challenge: "Handling synchronization and asynchronous task distribution across 17 distinct agent roles without overloading target web servers or creating circular infinite crawling loops.",
      blueprint: "Orchestrated using a master-worker swarm state machine where a central Supervisor delegates routes to parallel Crawler, Auditing, Keyword Analyzer, and Code Repair nodes. Utilizes Redis for shared memory status and GitHub Webhooks for continuous PR delivery.",
      impactDetails: [
        "Automated over 95% of standard technical and content SEO auditing operations.",
        "Orchestrates 17 concurrent agent workers flawlessly.",
        "Successfully pushes direct self-healing patch recommendations directly to Github Pull Requests."
      ]
    }
  },
  {
    title: "Nexus - Time Series Analysis And Forecasting",
    description: "Developed a secure distributed systems architecture for financial time series analysis and stock market forecasting. Powered by classical statistical models and dynamic neural network components (ARIMA, LSTM, Prophet), this scalable software provides live predictive trends, high data accuracy, and professional dashboard visualizers.",
    tech: ["Python", "TypeScript", "Streamlit", "Flask", "ARIMA", "Prophet", "LSTM"],
    category: "Data Science",
    impact: "98% Forecasting Accuracy",
    link: "https://github.com/tirthpatel143/Nexus-",
    complexity: "Neural Net Sequence Optimization",
    metric: "0.002 MSE Validation Loss",
    architecture: "Prophet + ARIMA + LSTM Hybrid",
    caseStudy: {
      overview: "A distributed data science workspace designed to capture, clean, and model complex financial stock ticker values. It couples traditional econometric forecasting models with advanced deep recurrent neural networks to surface precise next-day predictive ranges.",
      challenge: "Accounting for extreme volatility in real-time sequential datasets while preventing over-fitting on noisy, transient market micro-fluctuations.",
      blueprint: "Engineered a hybrid modeling pipeline where statistical baselines (ARIMA) extract linear seasonal drifts, while an LSTM network maps long-term sequence trends. Results are integrated via a Prophet model to form a unified confidence boundary visualizer on the frontend.",
      impactDetails: [
        "Attained a 98% forecasting accuracy rating on historical backtesting datasets.",
        "Minimized validation errors to an ultra-low 0.002 Mean Squared Error (MSE).",
        "Renders dynamic, high-graphics predictions in real-time Streamlit dashboards."
      ]
    }
  },
  {
    title: "AI-Powered Social Media Analytics Dashboard",
    description: "A centralized social media analytics dashboard presenting real-time telemetry across multiple networks. This distributed systems software architecture aggregates high-volume datasets, handles user session tracking (JWT Auth), and renders premium analytical visualizers, charts, and downloadable PDF reports.",
    tech: ["React", "Next.js", "FastAPI", "SQLAlchemy", "PostgreSQL", "Chart.js", "JWT Auth", "ReportLab"],
    category: "Full Stack / Data",
    impact: "Real-time Multi-Platform Aggregation",
    link: "https://github.com/tirthpatel143/AI_handle_social_media",
    complexity: "Real-Time Pipeline Aggregator",
    metric: "10k+ Telemetry Points/Sec",
    architecture: "Distributed Microservices Architecture",
    caseStudy: {
      overview: "A centralized, high-throughput analytics application consolidating real-time metrics across Facebook, Instagram, LinkedIn, and X. Provides secure JWT-authenticated portals, interactive Chart.js widgets, and multi-tenant export filters.",
      challenge: "Handling concurrent ingestion streams peaking at 10,000+ data packets per second without database lock-ups or dashboard interface lag.",
      blueprint: "Designed around a microservices structure where event receivers buffer incoming telemetry in high-speed message queues before persisting in PostgreSQL. The React Next.js client renders responsive charts that pull lightweight aggregate endpoints asynchronously.",
      impactDetails: [
        "Aggregates multi-network telemetry in real-time under a unified schema.",
        "Ingestion pipelines scale smoothly to support 10k+ telemetry points per second.",
        "Generates pixel-perfect downloadable PDF reports containing complex analytical breakdowns."
      ]
    }
  },
  {
    title: "SmartIn - Smart Voice Assistant",
    description: "A hands-free utility software application that processes and executes real-time voice commands. Written in Python, it integrates robust speech recognition algorithms, offline audio playback, and lightweight task triggers to automate desktop workflows and developer workspaces.",
    tech: ["Python", "SpeechRecognition", "PyAudio", "pyttsx3", "Wikipedia API", "smtplib"],
    category: "Voice & Utility",
    impact: "Low-latency audio command capture",
    link: "https://github.com/tirthpatel143/Smart-Tools",
    complexity: "Real-Time Audio Frame Parser",
    metric: "80ms Action Dispatch Time",
    architecture: "Offline Multi-Threaded Audio Pipeline",
    caseStudy: {
      overview: "An offline, privacy-first smart desktop assistant running locally on dev workstations. It listens for acoustic triggers and processes localized voice commands to control terminal operations, manage schedule notifications, and trigger automation routines.",
      challenge: "Ensuring low-latency voice command parsing under 100ms completely offline to prevent any user voice streams from leaving the local machine.",
      blueprint: "Written in Python using a multi-threaded PyAudio frame listener that buffers voice inputs into a lightweight local neural speech-to-text model. A pattern-matching dispatch loop decodes intents and launches command subprocesses immediately.",
      impactDetails: [
        "Processes commands locally with a rapid 80ms average action dispatch time.",
        "Works completely offline, maintaining strict air-gapped system privacy.",
        "Successfully maps spoken triggers to automated desktop scripts and terminal utilities."
      ]
    }
  }
];

// Skills Data
const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Sparkles size={20} />,
    color: "#6366f1",
    skills: ["LangChain", "LlamaIndex", "RAG Systems", "Hermes Agent Framework", "Prompt Engineering", "OpenAI & OpenRouter APIs", "OpenCV", "Scikit-Learn"]
  },
  {
    title: "Backend & Databases",
    icon: <Database size={20} />,
    color: "#ec4899",
    skills: ["Python", "SQL", "FastAPI", "Flask", "PostgreSQL (pgvector)", "MySQL", "Qdrant Vector DB", "Faiss Indexing"]
  },
  {
    title: "Tools & Libraries",
    icon: <Cpu size={20} />,
    color: "#06b6d4",
    skills: ["N8N", "MeiliSearch", "Docker", "Git / GitHub", "Power BI", "Google Analytics 4", "Pandas", "NumPy", "Seaborn", "Matplotlib"]
  },
  {
    title: "Web Technologies",
    icon: <Globe size={20} />,
    color: "#a855f7",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "React", "Vanilla CSS", "Tailwind CSS"]
  }
];

// Timeline Data
const timelineData = [
  {
    type: "experience",
    title: "AI/ML Intern",
    organization: "The Special Character (On Site)",
    date: "Dec 2025 - Present",
    description: "Serving as a lead AI developer, I designed a RAG-based document retrieval system using LangChain, LlamaIndex, and PostgreSQL (pgvector). The software solution replaced manual keyword indexing, delivering automated information retrieval speeds and state-of-the-art AI automation for corporate data stores.",
    location: "Gandhinagar, India"
  },
  {
    type: "experience",
    title: "Data Science Trainee",
    organization: "Zidio Development (Online)",
    date: "15 June 2025 – 15 July 2025",
    description: "Expanded my software engineer toolbox by mastering dynamic data analysis and data structuring. Programmed custom AI automation models to aggregate, clean, and analyze high-volume dataset pipelines, using Seaborn, Pandas, and Matplotlib.",
    location: "Remote"
  },
  {
    type: "education",
    title: "B.E. in Information Technology",
    organization: "LDRP Institute of Technology and Research",
    date: "Aug 2022 – May 2026",
    description: "CGPA: 8.27 / 10 (Till 7th Semester). Undertook rigorous academic coursework in software engineering, distributed systems, object-oriented software design, database systems (DBMS), machine learning, algorithms, and artificial intelligence.",
    location: "Gandhinagar, Gujarat"
  },
  {
    type: "education",
    title: "12-Science",
    organization: "P.P.G Experimental High School",
    date: "May 2021 – May 2022",
    description: "Completed higher secondary education in Science stream with a strong focus on mathematics, logical reasoning, and analytical scientific methodologies.",
    location: "Gujarat, India"
  }
];

interface AgentNode {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
  desc: string;
  metric: string;
  logs: string[];
}

const agentNodes: AgentNode[] = [
  {
    id: "orchestrator",
    label: "Swarm Orchestrator",
    x: 160,
    y: 160,
    size: 24,
    color: "#6366f1",
    desc: "Autonomous supervisor routing metrics and dispatching automated fixes via Hermes loops.",
    metric: "Active: 17 workers connected",
    logs: [
      "Orchestrator boot completed.",
      "Syncing rosters from swarm.yaml...",
      "Status CHECK: 17/17 workers reporting live.",
      "Checkpoints active at /api/swarm-checkpoint"
    ]
  },
  {
    id: "rag",
    label: "Yogateria RAG Vector",
    x: 60,
    y: 60,
    size: 20,
    color: "#ec4899",
    desc: "LlamaIndex pipeline querying Qdrant vector database to serve personalized Medusa storefront queries.",
    metric: "Latency: 28ms | 0% Hallucinations",
    logs: [
      "Connecting to Qdrant Vector store...",
      "Embedding Medusa catalog via text-embedding-3-small.",
      "Retrieval match score: 0.942 [RESOLVED]"
    ]
  },
  {
    id: "seo",
    label: "Hermes SEO Swarm",
    x: 260,
    y: 60,
    size: 20,
    color: "#06b6d4",
    desc: "17 autonomous SEO agents crawling pages, auditing metrics, and pushing structural content updates.",
    metric: "95% Automation rate",
    logs: [
      "Initializing Crawler agent...",
      "Parsing GSC endpoints to sync metrics...",
      "Fix dispatched to github_fixer.py!"
    ]
  },
  {
    id: "forecaster",
    label: "Nexus Predictive Forecaster",
    x: 260,
    y: 260,
    size: 20,
    color: "#818cf8",
    desc: "Full-stack time-series models comparing ARIMA vs LSTM to produce stock visualizer insights.",
    metric: "Forecasting Accuracy: 98%",
    logs: [
      "Fetching ticker datasets...",
      "Running LSTM epoch training: Validation Loss 0.002",
      "Model convergence achieved [SUCCESS]"
    ]
  },
  {
    id: "voice",
    label: "SmartIn Voice Engine",
    x: 60,
    y: 260,
    size: 20,
    color: "#fda4af",
    desc: "Low-latency PyAudio voice capture parsing spoken triggers to drive systems integration.",
    metric: "Acoustic latency: 12ms",
    logs: [
      "Initializing PyAudio mic listeners...",
      "Ambient noise cancellation calibrated.",
      "Speech-to-Text conversion: 100% matched"
    ]
  }
];

const SpotlightCard = ({ children, className = "", style = {}, whileHover = {}, whileTap = {}, initial = {}, whileInView = {}, viewport = {}, transition = {}, onClick }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isStringHover = typeof whileHover === "string";
  const safeWhileHover = typeof whileHover === "object" ? whileHover : {};
  
  const hoverStyles = {
    scale: 1.03,
    y: -6,
    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
    borderColor: "rgba(99, 102, 241, 0.25)",
    ...safeWhileHover
  };

  const dynamicVariants = isStringHover ? {
    [whileHover]: hoverStyles
  } : undefined;

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      style={{
        ...style,
        position: "relative",
      }}
      variants={dynamicVariants}
      whileHover={isStringHover ? whileHover : hoverStyles}
      whileTap={{ scale: 0.98, ...whileTap }}
      transition={{ type: "spring", stiffness: 350, damping: 20, ...transition }}
      onClick={onClick}
    >
      {/* Background Hover Light Gradient */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.07),
              transparent 80%
            )
          `,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Border Hover Border Light */}
      <motion.div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: "inherit",
          background: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.28),
              transparent 80%
            )
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        {children}
      </div>
    </motion.div>
  );
};

// -------------------------------------------------------------
// Interactive Overlapping Tech Stack Dock (Figma-Blender Style)
// -------------------------------------------------------------
interface TechDockItem {
  name: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

const techDockItems: TechDockItem[] = [
  {
    name: "Python",
    color: "#38bdf8",
    bgColor: "rgba(56, 189, 248, 0.1)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.12 2c-3.13 0-2.93 1.35-2.93 1.35h1.58c1.64 0 2.21.9 2.21 2.22V7.1h3.18c1.67 0 3.03 1.25 3.03 2.92v2.8s.07 3.32-2.9 3.32h-.87V14.5c0-1.85-1.52-3.43-3.37-3.43H8.84v-2.8c0-1.63 1.29-3.03 2.91-3.03h2.82V3.35S14.86 2 12.12 2zm-.24 20c3.13 0 2.93-1.35 2.93-1.35h-1.58c-1.64 0-2.21-.9-2.21-2.22v-1.53H7.84c-1.67 0-3.03-1.25-3.03-2.92v-2.8s-.07-3.32 2.9-3.32h.87v1.62c0 1.85 1.52 3.43 3.37 3.43h3.2v2.8c0 1.63-1.29 3.03-2.91 3.03H8.22v1.89s-.27 1.35 2.46 1.35zM9.42 5.37c-.38 0-.7.31-.7.7 0 .38.32.7.7.7a.7.7 0 0 0 0-1.4zm5.16 13.26c-.38 0-.7.31-.7.7 0 .38.32.7.7.7a.7.7 0 0 0 0-1.4z"/>
      </svg>
    )
  },
  {
    name: "FastAPI",
    color: "#059669",
    bgColor: "rgba(5, 150, 105, 0.1)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "React",
    color: "#00f0ff",
    bgColor: "rgba(0, 240, 255, 0.1)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" opacity="0.1"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    color: "#ffffff",
    bgColor: "rgba(255, 255, 255, 0.1)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" fill="black"/>
        <path d="M16 8 L8 16 M16 8 L16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 8 C 10 10, 11 12, 12 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.1)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-1.5-3.5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z" opacity="0.1"/>
        <path d="M18.8 9.5c-.3-1.1-.9-2.1-1.8-2.9-.8-.7-1.8-1.1-2.9-1.2-1.3-.1-2.6.4-3.5 1.3l-.6.6-.6-.6C8.5 5.8 7.2 5.3 5.9 5.4c-1.1.1-2.1.5-2.9 1.2-.9.8-1.5 1.8-1.8 2.9-.3 1.2-.2 2.5.3 3.6.5 1.1 1.4 2 2.5 2.5 1.1.5 2.4.6 3.6.3l.8-.2.8.2c1.2.3 2.5.2 3.6-.3 1.1-.5 2-1.4 2.5-2.5.5-1.1.6-2.4.3-3.6zM12 13c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v3c0 .6-.4 1-1 1z"/>
      </svg>
    )
  },
  {
    name: "Qdrant",
    color: "#f43f5e",
    bgColor: "rgba(244, 63, 94, 0.1)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <line x1="10" y1="6.5" x2="14" y2="6.5"/>
        <line x1="6.5" y1="10" x2="6.5" y2="14"/>
      </svg>
    )
  },
  {
    name: "Docker",
    color: "#0284c7",
    bgColor: "rgba(2, 132, 199, 0.1)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-2.737 0h2.12v-2.006h-2.12v2.006zm-2.737 0h2.119v-2.006H5.773v2.006zm-.245-2.28h2.119V6.792h-2.119v2.006zm2.737 0h2.12V6.792h-2.12v2.006zm2.737 0h2.119V6.792h-2.119v2.006zm-5.474-2.28h2.119V4.512h-2.119v2.006zM24 10.627c-.224-.174-.6-.327-1.102-.327-.551 0-.939.224-1.163.53-.265.347-.367.755-.367 1.286 0 .571.184.98.51 1.265.326.285.836.428 1.489.428h.633V10.627zm-1.898 3.51c-.653 0-1.183-.184-1.53-.551-.347-.367-.53-.877-.53-1.51 0-.612.183-1.122.53-1.469.347-.347.877-.53 1.53-.53h1.898V8.586H12.392V14.5c0 .388.163.755.449 1.02.285.265.653.408 1.04.408h7.94c.163 0 .326-.041.469-.122l.53-.306-.718-1.347zm-11.428 1.408c.55 0 1.04-.265 1.347-.714.306-.449.449-.98.449-1.53v-5.469H8.489v5.469c0 .55.143 1.08.449 1.53.306.449.797.714 1.347.714zm0-6.326h2.119V7.218h-2.119v2.006z"/>
      </svg>
    )
  },
  {
    name: "Git",
    color: "#ea580c",
    bgColor: "rgba(234, 88, 12, 0.1)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="6" y1="9" x2="6" y2="15"/>
        <path d="M18 15V9a4 4 0 0 0-4-4h-5"/>
      </svg>
    )
  },
  {
    name: "LangChain",
    color: "#22c55e",
    bgColor: "rgba(34, 197, 94, 0.1)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    )
  }
];

const TechStackDock = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="tech-dock-container">
      <div 
        className="flex" 
        style={{ 
          alignItems: 'center', 
          padding: '1.2rem 1.8rem', 
          position: 'relative',
          overflow: 'visible'
        }}
      >
        {techDockItems.map((tech, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={tech.name}
              style={{
                position: 'relative',
                zIndex: isHovered ? 50 : 10 - idx,
                marginLeft: idx === 0 ? 0 : '-1.5rem',
                transition: 'z-index 0.3s'
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <motion.div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '20px',
                  background: 'rgba(10, 10, 16, 0.95)',
                  border: '1.5px solid rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)'
                }}
                animate={{
                  y: isHovered ? -16 : 0,
                  scale: isHovered ? 1.15 : 1,
                  borderColor: isHovered ? tech.color : 'rgba(255, 255, 255, 0.06)',
                  boxShadow: isHovered
                    ? `0 15px 35px ${tech.color}25, 0 0 15px ${tech.color}15`
                    : '0 8px 24px rgba(0, 0, 0, 0.6)'
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 22,
                  mass: 0.8
                }}
              >
                {/* Dynamically colored icon container */}
                <div style={{ 
                  color: isHovered ? tech.color : '#cbd5e1', 
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {tech.icon}
                </div>
              </motion.div>

              {/* Speech Bubble Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      bottom: '-55px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#000000',
                      color: '#ffffff',
                      padding: '0.45rem 1.1rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-sans)',
                      whiteSpace: 'nowrap',
                      border: '1.2px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.8)',
                      zIndex: 100,
                      pointerEvents: 'none'
                    }}
                  >
                    {/* Small Arrow pointing up */}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: '-5px', 
                        left: '50%', 
                        transform: 'translateX(-50%) rotate(45deg)', 
                        width: '8px', 
                        height: '8px', 
                        background: '#000000', 
                        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      }} 
                    />
                    {tech.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Dynamic Blogs Fetching static source data (moved outside component lifecycle to prevent recreate triggers)
const initialArticles = [
  {
    title: "Deep-Dive: Building a Zero-Hallucination RAG Chatbot for Yoga E-Commerce",
    category: "AI & E-Commerce",
    readTime: "5 min read",
    desc: "An in-depth architectural breakdown of integrating LlamaIndex, Qdrant Vector database, and Medusa API to serve real-time catalog recommendations with zero hallucination.",
    color: "#ec4899",
    image: "/images/rag_chatbot_architecture.png",
    imageAlt: "Zero-Hallucination RAG Chatbot architecture blueprint integrating LlamaIndex, Qdrant and Medusa E-Commerce catalog indexing",
    isExternal: false,
    url: "",
    complexity: "Advanced Vector Search & RAG",
    metric: "180ms Response Latency",
    framework: "LlamaIndex & FastAPI Core",
    techStack: ["LlamaIndex", "Qdrant", "PostgreSQL", "FastAPI", "Medusa API"],
    takeaway: "Achieving zero hallucination in e-commerce pipelines requires moving past plain semantic matches. Integrating active database validation at the candidate selection gateway ensures perfect inventory grounding.",
    sections: [
      {
        heading: "1. The E-Commerce Recommendation Paradigm",
        text: "Modern e-commerce has evolved beyond standard keyword-based filters. Users now expect seamless, interactive, conversational search systems that understand user intent. For Yogateria, a dynamic yoga storefront, the key goal was creating a digital recommendations advisor grounded entirely on the active inventory catalog database."
      },
      {
        heading: "2. The Technical Blueprint & RAG Orchestration",
        text: "To eliminate the major downside of LLMs (knowledge hallucination), we implemented a customized Retrieval-Augmented Generation (RAG) system using LlamaIndex. Our backend orchestrator indexes product nodes into a highly optimized Qdrant Vector database, representing product attributes, descriptions, and materials in high-dimensional dense embeddings."
      },
      {
        heading: "3. Adversarial Inventory Auditing",
        text: "To guarantee that our agent never recommends a product that is out of stock or displays incorrect pricing, we integrated an adversarial validator layer. This node intercepts candidates retrieved by the vector index and queries live Medusa APIs to compare active pricing and stock levels in real time. If a discrepancy is found, the node dynamically injects warning patches to keep the model aligned with reality."
      }
    ]
  },
  {
    title: "ARIMA vs LSTM: Comparing Time-Series Forecasting Models for Stock Market Analysis",
    category: "Data Science & Finance",
    readTime: "4 min read",
    desc: "Analyzing predictive modeling convergence, loss function optimizations, and mathematical trend forecasting comparison for high-accuracy financial time-series visualization.",
    color: "#38bdf8",
    image: "/images/stock_forecasting_lstm.png",
    imageAlt: "Empirical comparison of classical statistical ARIMA forecasting and dynamic neural LSTM time-series analysis for financial market trend prediction",
    isExternal: false,
    url: "",
    complexity: "Neural Net Optimization",
    metric: "0.002 MSE Validation Loss",
    framework: "LSTM + Streamlit Visuals",
    techStack: ["Python", "ARIMA", "Prophet", "LSTM", "Streamlit", "Flask"],
    takeaway: "Classical statistical forecasting remains superior for short-term prediction ranges, whereas deep recurrent networks (LSTMs) outshine statistics when catching non-linear structural transitions across long temporal sequences.",
    sections: [
      {
        heading: "1. Classical Statistics vs. Recurrent Neural Nets",
        text: "Predictive financial modeling represents one of the most challenging areas in quantitative analysis. Classical models, like ARIMA, assume stationarity and linear relations in chronological data. Deep learning frameworks, such as Long Short-Term Memory (LSTM) networks, are designed to retain long-term dependencies in chaotic, non-linear sequences."
      },
      {
        heading: "2. LSTM Gate Architecture & Training Mechanics",
        text: "LSTMs prevent vanishing gradients by using input, forget, and output gates that govern information flow in the memory cell. We trained a multi-layered LSTM using historical closing stock prices, minimizing mean squared error (MSE) loss using the Adam optimizer with customized dynamic learning rate decay structures."
      },
      {
        heading: "3. Empirical Performance Insights",
        text: "Our research revealed a clear mathematical division. Classical ARIMA models outpace deep nets on short-term horizons (1 to 3 days) where local linear trends are strong. Over longer horizons (30 days), ARIMA lags, whereas our trained LSTM successfully captures structural market trends with an impressive validation loss of 0.002."
      }
    ]
  },
  {
    title: "Autonomous Orchestration: Multi-Agent Loops and Checklist Fixers in Hermes",
    category: "AI Swarms & Automation",
    readTime: "6 min read",
    desc: "Designing state machine workflows, persistent context routing, and automatic code remediation pipelines for a 17-agent autonomous SEO swarm.",
    color: "#a855f7",
    image: "/images/multi_agent_swarm.png",
    imageAlt: "17-agent autonomous SEO optimization swarm framework loop and supervisor orchestrator flow graph",
    isExternal: false,
    url: "",
    complexity: "Distributed Swarms",
    metric: "17 Parallel Worker Nodes",
    framework: "Hermes Framework & Git",
    techStack: ["Hermes Framework", "Python", "OpenRouter API", "Redis", "Git"],
    takeaway: "Autonomous agent operations succeed when governed by multi-tenant State Gateways rather than point-to-point requests. Supervisors can proactively re-route workflows dynamically on token failures or runtime errors.",
    sections: [
      {
        heading: "1. The Multi-Agent Swarm Orchestration Loop",
        text: "Rigid software automation is giving way to dynamic, multi-agent frameworks capable of planning, inspecting, and reasoning. The Hermes framework organizes 17 autonomous agent nodes into specialized lanes (SEO inspections, semantic audits, metadata audits) overseen by a central Supervisor."
      },
      {
        heading: "2. Smart State Gateways & Checkpoint Blockers",
        text: "All agent nodes in the swarm publish their atomic updates and actions to a shared State Gateway. The Supervisor continuously evaluates these checkpoints against a global project manifest file. When an agent experiences an API failure or system block, the orchestrator automatically intercepts, routes the task to a troubleshooter node, or surfaces a warning to the dashboard."
      },
      {
        heading: "3. Automated GitHub Fixers (Self-Healing Codebases)",
        text: "When the crawl agents identify technical deficiencies (like missing meta tags or clickjacking vulnerabilities), Hermes goes a step further than simple logging. It calls the GitHub Fixer module, which performs atomic code updates inside the React layout.tsx files and pushes automated Pull Requests directly to the repository."
      }
    ]
  }
];

const InteractiveLab = ({ activeIdx, setActiveIdx, openFullModal }: { activeIdx: number; setActiveIdx: (idx: number) => void; openFullModal: (art: any) => void }) => {
  // RAG Simulator States
  const [ragPrompt, setRagPrompt] = useState("");
  const [ragLogs, setRagLogs] = useState<string[]>([]);
  const [ragStatus, setRagStatus] = useState<"idle" | "running" | "done">("idle");
  const [ragAnswer, setRagAnswer] = useState("");
  const ragContainerRef = useRef<HTMLDivElement>(null);

  // Time Series States
  const [timeModel, setTimeModel] = useState<"arima" | "lstm">("lstm");

  // Agent Swarm States
  const [swarmState, setSwarmState] = useState<"idle" | "crawling" | "healing" | "done">("idle");
  const [swarmLogs, setSwarmLogs] = useState<string[]>([]);
  const [activeSwarmNode, setActiveSwarmNode] = useState<string | null>(null);

  // Tab View for Details panel (Simulator vs Technical Details)
  const [activeTab, setActiveTab] = useState<"sim" | "details">("sim");

  const activeArticle = initialArticles[activeIdx];

  // Auto-scroll RAG logs
  useEffect(() => {
    if (ragLogs.length > 0 && ragContainerRef.current) {
      ragContainerRef.current.scrollTo({
        top: ragContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [ragLogs]);

  // Run RAG simulation
  const runRagSimulation = async (query: string) => {
    setRagPrompt(query);
    setRagStatus("running");
    setRagLogs([]);
    setRagAnswer("");

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const steps = [
      { msg: `⚡ QUERY INTERCEPTED: "${query}"`, delay: 600 },
      { msg: "⚙️ COMPUTING SEMANTIC VECTOR EMBEDDING (LlamaIndex)", delay: 800 },
      { msg: "🌐 QDRANT DB LOOKUP: Scanning high-dimensional product nodes", delay: 900 },
      { msg: "🔍 RETRIEVED: Found 3 candidate nodes matching 'eco-friendly yoga mats'", delay: 700 },
      { msg: "🛡️ TRIGGERING ADVERSARIAL STOCK VALIDATION (Medusa API)...", delay: 1000 },
      { msg: "📊 LIVE AUDIT: Checking active warehouse stock levels", delay: 700 },
      { msg: "✅ INVENTORY VERIFIED: Natural Cork Yoga Mat (In Stock: 14 units)", delay: 600 },
      { msg: "🧠 LLM GROUNDING: Framing context payload with zero hallucination", delay: 800 },
      { msg: "🚀 SYSTEM RESPONSE STAMPED & SIGNED", delay: 400 },
    ];

    for (const step of steps) {
      setRagLogs((prev) => [...prev, step.msg]);
      await sleep(step.delay);
    }

    setRagStatus("done");
    if (query.includes("eco-friendly")) {
      setRagAnswer("Based on the active Medusa catalog, I highly recommend our **Natural Organic Cork Yoga Mat**. It is built from 100% biodegradable natural cork backed with organic tree rubber. The warehouse currently has **14 units in stock** priced at **$79.00**. (Zero hallucination verified against database catalog.)");
    } else if (query.includes("Chakra")) {
      setRagAnswer("Yes, the **Chakra alignment non-slip mat** is fully in stock! Medusa API logs report **22 units active** in the database, retailing at **$65.00**. Standard shipping is verified available.");
    } else {
      setRagAnswer("Searching Yogateria catalog... I found our **Eco-Comfort Yoga Leggings** (Organic cotton blend, 8 units in stock, $49) and **Pro Grip Alignment Mat** (Natural rubber, 5 units in stock, $89). All stock entries have been checked in real time against Medusa databases.");
    }
  };

  // Run Swarm simulation
  const runSwarmSimulation = async () => {
    setSwarmState("crawling");
    setSwarmLogs([]);
    setActiveSwarmNode("Supervisor");

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const steps = [
      { node: "Supervisor", log: "🤖 Supervisor initializing Hermes Multi-Agent SEO Swarm...", delay: 800 },
      { node: "Crawl Agent", log: "🕷️ Crawl Agent dispatched to scanning layout DOM trees...", delay: 900 },
      { node: "Crawl Agent", log: "⚠️ Crawl Agent: Discovered missing semantic META descriptions!", delay: 600 },
      { node: "SEM Auditor", log: "📊 SEM Auditor auditing layout headers (h1, canonical structures)", delay: 800 },
      { node: "SEM Auditor", log: "🛡️ Semantic gap warning raised in layout.tsx #SEO-L22", delay: 600 },
      { node: "Metadata Writer", log: "✍️ Metadata Writer crafting high-impact meta headers...", delay: 800 },
      { node: "Supervisor", log: "🔄 Supervisor routing self-healing request to remediation tunnel...", delay: 700 },
      { node: "GitHub Fixer", log: "🔧 GitHub Fixer calling python3 github_fixer.py to patch codebase...", delay: 900 },
      { node: "GitHub Fixer", log: "⚡ Pull Request raised automatically on GitHub repository!", delay: 700 },
      { node: "Verification Gate", log: "🔬 Verification Gate auditing build output (npx tsc --noEmit: SUCCESS)", delay: 900 },
      { node: "Supervisor", log: "✨ Swarm operation completed successfully! Lighthouse score updated: 98% SEO.", delay: 500 }
    ];

    for (const step of steps) {
      setActiveSwarmNode(step.node);
      setSwarmLogs((prev) => [...prev, step.log]);
      await sleep(step.delay);
    }

    setSwarmState("done");
    setActiveSwarmNode(null);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem', alignItems: 'stretch' }}>
      {/* Left side timeline select list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>
          Interactive Case Studies
        </h4>
        {initialArticles.map((art, idx) => {
          const isActive = idx === activeIdx;
          return (
            <motion.div
              key={art.title}
              onClick={() => {
                setActiveIdx(idx);
                setActiveTab("sim");
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: isActive ? `${art.color}08` : 'rgba(255,255,255,0.01)',
                border: isActive ? `1.5px solid ${art.color}80` : '1px solid rgba(255,255,255,0.04)',
                boxShadow: isActive ? `0 15px 35px ${art.color}0e, inset 0 0 15px ${art.color}05` : 'none',
                borderRadius: '20px',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'border-color 0.3s, background 0.3s',
                display: 'flex',
                gap: '1.2rem',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Left active colored line indicator */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: isActive ? art.color : 'transparent' }} />
              
              {/* Interactive Pulse Ring */}
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,255,255,0.06)' }}>
                {isActive && (
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: `1.5px solid ${art.color}` }}
                  />
                )}
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: art.color, margin: 'auto' }} />
              </div>

              <div style={{ flex: 1 }}>
                <div className="flex" style={{ gap: '0.6rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: art.color, textTransform: 'uppercase' }}>{art.category}</span>
                  <span style={{ fontSize: '0.75rem', color: '#71717a' }}>{art.readTime}</span>
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>{art.title}</h4>
              </div>
            </motion.div>
          );
        })}

        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '1.8rem', borderRadius: '24px', marginTop: '1rem' }}>
          <h4 style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.6rem' }}>🔬 About Tirth's Research Lab</h4>
          <p style={{ color: '#71717a', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
            Select any pipeline index node above to run dynamic interactive simulations of advanced production systems. Under details, view exact architectural parameters.
          </p>
        </div>
      </div>

      {/* Right side simulation panel card */}
      <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          background: 'rgba(9, 9, 14, 0.85)',
          border: `1.5px solid ${activeArticle.color}30`,
          boxShadow: `0 30px 60px rgba(0,0,0,0.85), 0 0 50px ${activeArticle.color}0e`,
          borderRadius: '24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Top telemetry bar */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem 1.8rem', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="flex flex-center" style={{ gap: '0.6rem' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: activeArticle.color }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.5px' }}>SYSTEM DEPLOYMENT AUDITOR</span>
            </div>
            
            {/* Simulation / Architectural Details Tabs */}
            <div style={{ display: 'flex', background: 'rgba(0,0,0,0.4)', padding: '0.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={() => setActiveTab("sim")}
                style={{
                  background: activeTab === "sim" ? activeArticle.color : 'transparent',
                  color: activeTab === "sim" ? '#ffffff' : '#a1a1aa',
                  border: 'none',
                  padding: '0.4rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                LIVE SIMULATION
              </button>
              <button
                onClick={() => setActiveTab("details")}
                style={{
                  background: activeTab === "details" ? activeArticle.color : 'transparent',
                  color: activeTab === "details" ? '#ffffff' : '#a1a1aa',
                  border: 'none',
                  padding: '0.4rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                ARCHITECTURAL CODE
              </button>
            </div>
          </div>

          <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            
            {activeTab === "sim" ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                
                {/* RAG Simulator */}
                {activeIdx === 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>Interactive RAG Inventory recommendations</h3>
                      <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0 }}>
                        Click a pre-compiled sample query to watch our vector index query the database, audit live warehouse stock via Medusa API, and generate grounded answers.
                      </p>
                    </div>

                    {/* Pre-compiled query triggers */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                      <button
                        onClick={() => runRagSimulation("Recommend organic and eco-friendly yoga mats")}
                        disabled={ragStatus === "running"}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: '#e4e4e7',
                          padding: '0.6rem 1rem',
                          borderRadius: '10px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { if (ragStatus !== "running") e.currentTarget.style.borderColor = activeArticle.color; }}
                        onMouseLeave={(e) => { if (ragStatus !== "running") e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                      >
                        "Recommend eco-friendly mats"
                      </button>
                      <button
                        onClick={() => runRagSimulation("Do we have the Chakra alignment mat in stock?")}
                        disabled={ragStatus === "running"}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: '#e4e4e7',
                          padding: '0.6rem 1rem',
                          borderRadius: '10px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { if (ragStatus !== "running") e.currentTarget.style.borderColor = activeArticle.color; }}
                        onMouseLeave={(e) => { if (ragStatus !== "running") e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                      >
                        "Is Chakra mat in stock?"
                      </button>
                      <button
                        onClick={() => runRagSimulation("What are the best catalog items under $50?")}
                        disabled={ragStatus === "running"}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: '#e4e4e7',
                          padding: '0.6rem 1rem',
                          borderRadius: '10px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { if (ragStatus !== "running") e.currentTarget.style.borderColor = activeArticle.color; }}
                        onMouseLeave={(e) => { if (ragStatus !== "running") e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                      >
                        "Find catalog items under $50"
                      </button>
                    </div>

                    {/* Split View: Telemetry logs & generated output */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', flex: 1 }}>
                      {/* Telemetry log shell */}
                      <div ref={ragContainerRef} style={{ background: '#020204', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', height: '220px', overflowY: 'auto' }}>
                        <div style={{ color: '#71717a', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.4rem', marginBottom: '0.6rem', fontWeight: 800 }}>
                          SYSTEM AGENT TELEMETRY LOGS
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {ragLogs.length === 0 && (
                            <div style={{ color: '#4b5563', fontStyle: 'italic' }}>System idle. Trigger a recommendation query...</div>
                          )}
                          {ragLogs.map((log, lIdx) => (
                            <div key={lIdx} style={{ color: log.startsWith('✅') ? '#10b981' : log.startsWith('⚡') ? activeArticle.color : '#a1a1aa', lineHeight: 1.4 }}>
                              {log}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* grounded response bubble */}
                      <div style={{ background: 'rgba(255,255,255,0.01)', border: `1px solid ${activeArticle.color}15`, borderRadius: '12px', padding: '1.2rem', display: 'flex', flexDirection: 'column', height: '220px' }}>
                        <div style={{ color: '#71717a', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.4rem', marginBottom: '0.8rem', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px' }}>
                          VERIFIED GROUNDED CATALOG RESPONSE
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto' }}>
                          {ragStatus === "idle" && (
                            <div style={{ color: '#71717a', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center' }}>
                              Waiting for query semantic processing...
                            </div>
                          )}
                          {ragStatus === "running" && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                style={{ width: '24px', height: '24px', borderRadius: '50%', border: `2px solid ${activeArticle.color}`, borderTopColor: 'transparent' }}
                              />
                              <span style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>Synthesizing knowledge...</span>
                            </div>
                          )}
                          {ragStatus === "done" && (
                            <motion.p
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              style={{ color: '#e4e4e7', fontSize: '0.87rem', lineHeight: 1.6, margin: 0, textAlign: 'left', alignSelf: 'start' }}
                            >
                              {ragAnswer}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ARIMA vs LSTM Simulator */}
                {activeIdx === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>Interactive Stock Trend Predictor</h3>
                        <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0 }}>
                          Toggle between Classical ARIMA statistics and Recurrent neural LSTM networks to watch forecasting accuracy converge.
                        </p>
                      </div>

                      {/* Model toggle switcher */}
                      <div style={{ display: 'flex', background: 'rgba(0,0,0,0.4)', padding: '0.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <button
                          onClick={() => setTimeModel("arima")}
                          style={{
                            background: timeModel === "arima" ? activeArticle.color : 'transparent',
                            color: timeModel === "arima" ? '#ffffff' : '#a1a1aa',
                            border: 'none',
                            padding: '0.4rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          ARIMA Model
                        </button>
                        <button
                          onClick={() => setTimeModel("lstm")}
                          style={{
                            background: timeModel === "lstm" ? activeArticle.color : 'transparent',
                            color: timeModel === "lstm" ? '#ffffff' : '#a1a1aa',
                            border: 'none',
                            padding: '0.4rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          LSTM Neural Net
                        </button>
                      </div>
                    </div>

                    {/* forecasting visualizer SVG Canvas */}
                    <div style={{ background: '#020204', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '200px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '0.75rem', color: '#71717a' }}>
                        <span>MODEL HORIZON FORECAST (30 DAYS)</span>
                        <span style={{ color: activeArticle.color, fontWeight: 800 }}>
                          {timeModel === "arima" ? "ARIMA (1, 1, 1) Linear Trend" : "LSTM Deep Recurrent Sequence Fit"}
                        </span>
                      </div>

                      {/* Animated SVG Chart */}
                      <div style={{ flex: 1, position: 'relative', width: '100%', minHeight: '140px', overflow: 'hidden' }}>
                        <svg width="100%" height="100%" viewBox="0 0 500 120" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                          {/* Grid Lines */}
                          <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                          <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                          {/* Historical Stock Price Line */}
                          <path
                            d="M 0 100 Q 40 85, 80 95 T 160 80 T 240 85 T 320 60 L 320 60"
                            fill="none"
                            stroke="#71717a"
                            strokeWidth="2"
                          />
                          <text x="5" y="115" fill="#71717a" fontSize="8" fontFamily="var(--font-mono)">Historical Sequence</text>
                          <line x1="320" y1="0" x2="320" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />
                          <text x="325" y="15" fill="#a1a1aa" fontSize="7" fontFamily="var(--font-mono)">Forecast Boundary</text>

                          {/* Conditional Forecast Path */}
                          {timeModel === "arima" ? (
                            // ARIMA: Rigid straight forecasting
                            <motion.path
                              key="arima-path"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.8 }}
                              d="M 320 60 L 360 52 L 400 46 L 440 40 L 500 32"
                              fill="none"
                              stroke={activeArticle.color}
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          ) : (
                            // LSTM: Recurrent wave fit
                            <motion.path
                              key="lstm-path"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.2, ease: 'easeOut' }}
                              d="M 320 60 C 350 45, 380 75, 410 35 C 440 -5, 470 65, 500 20"
                              fill="none"
                              stroke={activeArticle.color}
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          )}
                        </svg>
                      </div>
                    </div>

                    {/* Stats comparison bar */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                        <div style={{ color: '#71717a', fontSize: '0.75rem', marginBottom: '0.2rem' }}>VALIDATION LOSS (MSE)</div>
                        <div style={{ color: timeModel === 'lstm' ? '#10b981' : '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
                          {timeModel === 'lstm' ? "0.002 (Minimal)" : "0.014 (Standard)"}
                        </div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                        <div style={{ color: '#71717a', fontSize: '0.75rem', marginBottom: '0.2rem' }}>FORECAST INTENT</div>
                        <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
                          {timeModel === 'lstm' ? "Non-Linear Trend" : "Short-Horizon Trend"}
                        </div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px' }}>
                        <div style={{ color: '#71717a', fontSize: '0.75rem', marginBottom: '0.2rem' }}>COMPUTATIONAL RUNTIME</div>
                        <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
                          {timeModel === 'lstm' ? "180ms Train/Epoch" : "12ms LinearFit"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Swarm Loop Simulator */}
                {activeIdx === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>17-Agent Swarm Orchestration Gateway</h3>
                        <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0 }}>
                          Dispatch the Supervisor to trigger semantic SEO audits, metadata repairs, and self-healing GitHub fixers.
                        </p>
                      </div>

                      <button
                        onClick={runSwarmSimulation}
                        disabled={swarmState === "crawling"}
                        style={{
                          background: activeArticle.color,
                          color: '#ffffff',
                          border: 'none',
                          padding: '0.6rem 1.4rem',
                          borderRadius: '10px',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: swarmState === "crawling" ? 'not-allowed' : 'pointer',
                          boxShadow: `0 8px 25px ${activeArticle.color}35`,
                          transition: 'opacity 0.2s',
                          opacity: swarmState === "crawling" ? 0.7 : 1
                        }}
                      >
                        {swarmState === "crawling" ? "Swarm Executing..." : "Run Self-Healing Swarm"}
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', flex: 1 }}>
                      {/* Interactive Agent Swarm stack visualizer */}
                      <div style={{ background: '#020204', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '240px' }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.45rem', justifyContent: 'center' }}>
                          {[
                            { name: "Supervisor", label: "🤖 Supervisor Coordinator" },
                            { name: "Crawl Agent", label: "🕷️ Crawl Agent Node" },
                            { name: "SEM Auditor", label: "📊 SEM Auditor Agent" },
                            { name: "Metadata Writer", label: "✍️ Metadata Writer Agent" },
                            { name: "GitHub Fixer", label: "🔧 GitHub Fixer Gate" },
                            { name: "Verification Gate", label: "🔬 Verification Gate" },
                          ].map((node) => {
                            const isNodeActive = activeSwarmNode === node.name;
                            return (
                              <div
                                key={node.name}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '1rem',
                                  padding: '0.4rem 0.8rem',
                                  borderRadius: '8px',
                                  border: isNodeActive ? `1.5px solid ${activeArticle.color}` : '1px solid rgba(255,255,255,0.03)',
                                  background: isNodeActive ? `${activeArticle.color}0d` : 'rgba(255,255,255,0.01)',
                                  boxShadow: isNodeActive ? `0 0 15px ${activeArticle.color}15` : 'none',
                                  transition: 'all 0.3s'
                                }}
                              >
                                <div style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  background: isNodeActive ? activeArticle.color : 'rgba(255,255,255,0.1)',
                                  boxShadow: isNodeActive ? `0 0 10px ${activeArticle.color}` : 'none'
                                }} />
                                <span style={{
                                  fontSize: '0.78rem',
                                  fontWeight: 700,
                                  color: isNodeActive ? '#ffffff' : '#71717a'
                                }}>
                                  {node.label}
                                </span>
                                {isNodeActive && (
                                  <span style={{ fontSize: '0.65rem', color: activeArticle.color, marginLeft: 'auto', fontWeight: 800 }}>
                                    ACTIVE
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Swarm Event Terminal logs */}
                      <div style={{ background: '#020204', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', height: '240px', overflowY: 'auto' }}>
                        <div style={{ color: '#71717a', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.4rem', marginBottom: '0.6rem', fontWeight: 800 }}>
                          DISPATCHED SWARM OPERATION DECK
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {swarmLogs.length === 0 && (
                            <div style={{ color: '#4b5563', fontStyle: 'italic' }}>Supervisor offline. Dispatch swarm above...</div>
                          )}
                          {swarmLogs.map((log, lIdx) => (
                            <div key={lIdx} style={{ color: log.includes('⚠️') ? '#f59e0b' : log.includes('✨') ? '#10b981' : '#a1a1aa', lineHeight: 1.4 }}>
                              {log}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              // Architectural Tab
              <div style={{ flex: 1, color: '#e4e4e7', fontSize: '0.95rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                <div style={{ borderBottom: `2px solid ${activeArticle.color}25`, paddingBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: activeArticle.color, background: `${activeArticle.color}10`, padding: '0.3rem 0.6rem', borderRadius: '6px', border: `1px solid ${activeArticle.color}20` }}>
                    {activeArticle.complexity}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginTop: '0.6rem', marginBottom: '0.3rem' }}>{activeArticle.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Indexed and ground via {activeArticle.framework}</p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.01)', borderLeft: `3px solid ${activeArticle.color}`, padding: '1rem 1.4rem', borderRadius: '8px' }}>
                  <h4 style={{ margin: '0 0 0.3rem 0', fontWeight: 800, color: '#ffffff', fontSize: '0.9rem' }}>💡 Architectural Takeaway</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#b4b4bb', lineHeight: 1.5 }}>{activeArticle.takeaway}</p>
                </div>

                {activeArticle.sections && activeArticle.sections.map((sec: any, sIdx: number) => (
                  <div key={sIdx}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ display: 'inline-block', width: '3px', height: '12px', borderRadius: '1.5px', background: activeArticle.color }} />
                      {sec.heading}
                    </h4>
                    <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>{sec.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom full case study launcher */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1.5rem', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {activeArticle.techStack && activeArticle.techStack.map((tech: string) => (
                  <span key={tech} style={{ fontSize: '0.7rem', color: '#a1a1aa', background: 'rgba(255,255,255,0.02)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openFullModal(activeArticle)}
                className="flex flex-center"
                style={{
                  background: 'transparent',
                  border: `1px solid ${activeArticle.color}50`,
                  color: '#ffffff',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  boxShadow: `inset 0 0 15px ${activeArticle.color}0a`,
                  gap: '0.4rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = activeArticle.color;
                  e.currentTarget.style.borderColor = activeArticle.color;
                  e.currentTarget.style.boxShadow = `0 8px 20px ${activeArticle.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = `${activeArticle.color}50`;
                  e.currentTarget.style.boxShadow = `inset 0 0 15px ${activeArticle.color}0a`;
                }}
              >
                Launch Extended Case Study <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [terminalTab, setTerminalTab] = useState<'visual' | 'cli'>('visual');
  const [activeAgentNode, setActiveAgentNode] = useState<string>('orchestrator');
  
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'input' | 'output' | 'success' | 'error'; text: string }>>([
    { type: 'output', text: 'Welcome to Tirth Patel OS v1.0.0.' },
    { type: 'output', text: 'Type "help" to see all available commands.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  
  // Project View States
  const [projectViewMode, setProjectViewMode] = useState<'deck' | 'grid'>('deck');
  const [selectedDeckIndex, setSelectedDeckIndex] = useState(0);
  const [hoveredDeckIndex, setHoveredDeckIndex] = useState<number | null>(null);
  const [isDeckHovered, setIsDeckHovered] = useState(false);

  const activeDeckIndex = hoveredDeckIndex !== null ? hoveredDeckIndex : selectedDeckIndex;
  const projectColors = useMemo(() => ["#6366f1", "#06b6d4", "#ec4899", "#a855f7", "#10b981"], []);
  const selectedDeckProject = useMemo(() => projectsData[activeDeckIndex] || projectsData[0], [activeDeckIndex]);
  const selectedDeckProjectColor = useMemo(() => projectColors[activeDeckIndex % projectColors.length], [activeDeckIndex, projectColors]);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [articles, setArticles] = useState<any[]>(initialArticles);
  const [activeLabIdx, setActiveLabIdx] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=tirthpatel143");
        if (!response.ok) return;
        const data = await response.json();
        if (data && Array.isArray(data) && data.length > 0) {
          const colors = ["#ec4899", "#38bdf8", "#a855f7", "#10b981"];
          const fetched = data.map((item: any, idx: number) => ({
            title: item.title,
            category: item.tag_list && item.tag_list.length > 0 ? item.tag_list[0].toUpperCase() : "DEV.TO",
            readTime: item.reading_time_minutes ? `${item.reading_time_minutes} min read` : "3 min read",
            desc: item.description || "A technical article published on Dev.to covering modern software engineering and architecture.",
            color: colors[idx % colors.length],
            image: item.cover_image || "/images/rag_chatbot_architecture.png",
            imageAlt: item.title,
            isExternal: true,
            url: item.url,
            content: ""
          }));
          setArticles([...fetched, ...initialArticles]);
        }
      } catch (err) {
        console.warn("Dev.to API failed, using static case studies.", err);
      }
    };
    fetchArticles();
  }, []);

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Spring Tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const mediaQuery = window.matchMedia ? window.matchMedia("(pointer: fine)") : null;
        setHasPointer(mediaQuery ? mediaQuery.matches : false);
      } catch (e) {
        setHasPointer(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!hasPointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, .glass-card, .swarm-node, .skills-tab-btn, .project-card, .btn, .deck-card');
      if (interactive) {
        setIsHovered(true);
        if (interactive.classList.contains('glass-card') && interactive.id === "contact-form-container") {
          setHoverText("");
        } else if (interactive.classList.contains('deck-card')) {
          setHoverText("SELECT");
        } else if (interactive.classList.contains('glass-card') || interactive.classList.contains('project-card')) {
          setHoverText("VIEW");
        } else if (interactive.classList.contains('swarm-node')) {
          setHoverText("INSPECT");
        } else {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [hasPointer]);

  // Automatically cycle through agent nodes in the visualizer
  useEffect(() => {
    if (terminalTab !== 'visual') return;
    const interval = setInterval(() => {
      setActiveAgentNode((prev) => {
        const ids = agentNodes.map(n => n.id);
        const idx = ids.indexOf(prev);
        return ids[(idx + 1) % ids.length];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [terminalTab]);

  // Monitor scrolling to style navigation bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll locking when project details modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Keyboard Escape listener to close project modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Force scroll to top on fresh page load if no anchor hash is present
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalHistory.length > 2 && terminalContainerRef.current) {
      terminalContainerRef.current.scrollTo({
        top: terminalContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [terminalHistory]);

  // Terminal commands handling
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const inputCmd = terminalInput.trim().toLowerCase();
    const newHistory = [...terminalHistory, { type: 'input' as const, text: `$ ${terminalInput}` }];

    switch (inputCmd) {
      case 'help':
        newHistory.push(
          { type: 'output', text: 'Available commands:' },
          { type: 'success', text: '  about      - Display background bio' },
          { type: 'success', text: '  skills     - List full technical arsenal' },
          { type: 'success', text: '  projects   - Show core production projects' },
          { type: 'success', text: '  contact    - Print direct communications' },
          { type: 'success', text: '  hermes     - Trigger SEO Swarm agent simulation' },
          { type: 'success', text: '  clear      - Clear the console history' }
        );
        break;
      case 'about':
        newHistory.push({
          type: 'output',
          text: 'Tirth Patel | AI/ML Architect & Full Stack developer specializing in RAG systems, vector search optimization, and autonomous multi-agent pipelines. Currently in Gandhinagar, Gujarat.'
        });
        break;
      case 'skills':
        newHistory.push(
          { type: 'output', text: '💡 Core Skills Mapping:' },
          { type: 'success', text: '  - AI Frameworks: LangChain, LlamaIndex, Qdrant Vector DB, Faiss' },
          { type: 'success', text: '  - Languages: Python, SQL, Javascript, TypeScript' },
          { type: 'success', text: '  - Backends: FastAPI, Flask, PostgreSQL' },
          { type: 'success', text: '  - Frontend: Next.js, React, CSS, HTML5' }
        );
        break;
      case 'projects':
        newHistory.push(
          { type: 'output', text: '🎯 Active Production Projects:' },
          { type: 'success', text: '  1. Yogateria - RAG chatbot serving live Medusa product catalogs' },
          { type: 'success', text: '  2. SEO-Improve - Hermes framework agent automating web content audit' },
          { type: 'success', text: '  3. Nexus - Full-stack Stock Forecasting (ARIMA / LSTM models)' },
          { type: 'success', text: '  4. Social Media Analytics - Multi-platform real-time visualizer' },
          { type: 'success', text: '  5. SmartIn - Speech recognition voice assistant' }
        );
        break;
      case 'contact':
        newHistory.push(
          { type: 'output', text: '📧 Direct connection coordinates:' },
          { type: 'success', text: '  - Email: tirth.p.patel143@gmail.com' },
          { type: 'success', text: '  - Phone: +91 6353782035' },
          { type: 'success', text: '  - GitHub: github.com/tirthpatel143' },
          { type: 'success', text: '  - LinkedIn: linkedin.com/in/tirthpatel143' }
        );
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'hermes':
        newHistory.push(
          { type: 'output', text: '🤖 Initializing Hermes SEO Swarm [17 Agents]...' },
          { type: 'success', text: '  [SYSTEM] Connected to OpenRouter API (model: owl-alpha)' },
          { type: 'output', text: '  [Agent: Keyword Analyst] Crawling search density...' },
          { type: 'output', text: '  [Agent: SEO Auditor] Scanned index state: 500+ URLs parsed.' },
          { type: 'success', text: '  [SYSTEM] Audit Complete. Strategy assets uploaded. Execution: BLOCKED cleared!' }
        );
        break;
      default:
        // Smart natural language query fallback
        const query = inputCmd.toLowerCase();
        if (query.includes('hi') || query.includes('hello') || query.includes('hey') || query.includes('yo ') || query.trim() === 'yo') {
          newHistory.push({
            type: 'output',
            text: "👋 Hello! I am Tirth's virtual AI representative. Ask me about Tirth's background, projects, skills, or experience!"
          });
        } else if (query.includes('project') || query.includes('work') || query.includes('build') || query.includes('develop') || query.includes('yogateria') || query.includes('nexus') || query.includes('smartin') || query.includes('social media')) {
          newHistory.push(
            { type: 'output', text: '🎯 Active Production Projects:' },
            { type: 'success', text: '  1. Yogateria - Production RAG chatbot serving live Medusa catalogs.' },
            { type: 'success', text: '  2. SEO-Improve - AI SEO audit agent framework based on Hermes.' },
            { type: 'success', text: '  3. Nexus - Stock forecasting using comparative ARIMA & LSTM models.' },
            { type: 'success', text: '  4. Social Media Analytics - Multi-platform real-time dashboard.' },
            { type: 'success', text: '  5. SmartIn - Speech recognition hands-free voice assistant.' },
            { type: 'output', text: '(Type "projects" to see full specs or scroll down to the projects section!)' }
          );
        } else if (query.includes('skill') || query.includes('tech') || query.includes('tool') || query.includes('language') || query.includes('python') || query.includes('javascript') || query.includes('typescript') || query.includes('database') || query.includes('vector') || query.includes('qdrant') || query.includes('sql') || query.includes('postgre')) {
          newHistory.push(
            { type: 'output', text: "🛠️ Tirth's Technical Arsenal Highlights:" },
            { type: 'success', text: '  - AI Frameworks: LangChain, LlamaIndex, Qdrant Vector DB, Faiss, RAG' },
            { type: 'success', text: '  - Code Languages: Python (Pandas, NumPy, Seaborn), SQL, TypeScript' },
            { type: 'success', text: '  - Database & Web: PostgreSQL, MySQL, FastAPI, Flask, Next.js, React' }
          );
        } else if (query.includes('experience') || query.includes('intern') || query.includes('job') || query.includes('special character') || query.includes('zidio')) {
          newHistory.push(
            { type: 'output', text: '💼 Professional Timeline Highlights:' },
            { type: 'success', text: '  - AI/ML Intern at The Special Character: Developed RAG retrieval in pgvector.' },
            { type: 'success', text: '  - Data Science Trainee at Zidio Development: Analytics visualizer.' },
            { type: 'output', text: '(Scroll down to the timeline section to view location, dates, and CGPA!)' }
          );
        } else if (query.includes('education') || query.includes('college') || query.includes('ldrp') || query.includes('university') || query.includes('school') || query.includes('study') || query.includes('degree')) {
          newHistory.push(
            { type: 'output', text: '🎓 Academic Summary:' },
            { type: 'success', text: '  - B.E. in Information Technology at LDRP Institute (CGPA: 8.27/10)' },
            { type: 'success', text: '  - 12th Science at P.P.G Experimental High School' }
          );
        } else if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone') || query.includes('call') || query.includes('reach') || query.includes('mail')) {
          newHistory.push(
            { type: 'output', text: '📧 Connect Coordinates:' },
            { type: 'success', text: '  - Email: tirth.p.patel143@gmail.com' },
            { type: 'success', text: '  - Phone: +91 6353782035' },
            { type: 'success', text: '  - GitHub: github.com/tirthpatel143' },
            { type: 'success', text: '  - LinkedIn: linkedin.com/in/tirthpatel143' }
          );
        } else {
          // General friendly fallback response instead of strict error
          newHistory.push({
            type: 'output',
            text: `🤖 AI Assistant: Great query! Tirth is highly expert in AI agents & RAG. Ask me about his 'projects', 'skills', or 'experience' directly, or check out the sections below!`
          });
        }
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(p => p.category.includes(activeCategory) || p.tech.some(t => t.toLowerCase() === activeCategory.toLowerCase()));
  }, [activeCategory]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 6000);
      } else {
        alert(result.error || "Failed to dispatch message. Please try again or email directly!");
        setFormStatus('idle');
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("A network error occurred. Please verify your connection or email directly!");
      setFormStatus('idle');
    }
  };

  return (
    <main style={{ position: 'relative' }}>
      {/* Animated Floating Glow Orbs */}
      <div className="orb orb-primary"></div>
      <div className="orb orb-secondary"></div>
      <div className="orb orb-accent"></div>

      {/* Cyber Grid Header / Nav */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex" style={{ alignItems: 'center', gap: '0.6rem' }}>
            <Terminal size={22} className="text-gradient" style={{ animationDuration: '3s' }} />
            <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px', fontFamily: 'var(--font-display)' }}>
              TIRTH<span className="text-gradient">.DEV</span>
            </span>
          </div>
          <div className="flex nav-links" style={{ gap: '2rem', alignItems: 'center' }}>
            <a href="#about" title="Go to About Tirth Patel section" style={{ fontWeight: 500, fontSize: '0.95rem', color: '#a1a1aa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>About</a>
            <a href="#projects" title="View Tirth Patel's software projects portfolio" style={{ fontWeight: 500, fontSize: '0.95rem', color: '#a1a1aa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>Projects</a>
            <a href="#skills" title="Inspect Tirth Patel's technical arsenal and skills stack" style={{ fontWeight: 500, fontSize: '0.95rem', color: '#a1a1aa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>Skills</a>
            <a href="#timeline" title="View Tirth Patel's professional work experience and academic timeline" style={{ fontWeight: 500, fontSize: '0.95rem', color: '#a1a1aa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>Experience</a>
            <a href="#articles" title="Read Tirth Patel's technical writing and blog insights" style={{ fontWeight: 500, fontSize: '0.95rem', color: '#a1a1aa', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>Articles</a>
            <a href="#contact" title="Go to Contact Coordinates section to message Tirth Patel" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', borderRadius: '10px' }}>
              Say Hello
            </a>
          </div>
          {/* Hamburger button for mobile devices */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'transparent',
              color: '#ffffff',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Glassmorphic Navigation Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '1rem',
              right: '1rem',
              background: 'rgba(10, 10, 16, 0.96)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(99, 102, 241, 0.1)',
              padding: '2rem 1.5rem',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              alignItems: 'center'
            }}
          >
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', width: '100%', textAlign: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', width: '100%', textAlign: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', width: '100%', textAlign: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
            >
              Skills
            </a>
            <a 
              href="#timeline" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', width: '100%', textAlign: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
            >
              Experience
            </a>
            <a 
              href="#articles" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', width: '100%', textAlign: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
            >
              Articles
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', borderRadius: '12px', padding: '0.8rem 0', fontSize: '1rem' }}
            >
              Say Hello
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="hero-overlay"></div>
        <div className="container" style={{ width: '100%' }}>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center', gap: '3.5rem', width: '100%' }}>
            
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex" style={{ marginBottom: '1.5rem' }}>
                <span className="tag animate-float" style={{ background: 'rgba(0, 240, 255, 0.08)', borderColor: 'rgba(0, 240, 255, 0.25)', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #10b981' }}></span>
                  Open to Opportunities | Professional AI Developer & Software Engineer
                </span>
              </div>
              <h1 style={{ fontSize: '4rem', lineHeight: 1.05, fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-display)', letterSpacing: '-2px' }}>
                I Architect <span className="text-gradient">Agentic AI</span> & AI Automation Systems.
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#a1a1aa', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Hi, I'm <strong>Tirth Patel</strong>, a certified <strong>Software Engineer</strong> and <strong>AI Orchestrator</strong> specializing in high-performance <strong>Agentic AI</strong> frameworks, secure <strong>distributed systems</strong>, and <strong>premium web experiences</strong>. Welcome to my <strong>best developer portfolio</strong>, showcasing how I build robust <strong>AI automation</strong> architectures, vector stores, and agent pipelines.
              </p>
              
              <div className="flex" style={{ gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a href="#projects" title="Explore Tirth Patel's portfolio projects" className="btn btn-primary">
                  Explore Work <ArrowRight size={18} />
                </a>
                <a href="#contact" title="Contact Tirth Patel directly" className="btn btn-outline">
                  Contact Coordinates
                </a>
              </div>

              <div className="flex" style={{ gap: '2rem', flexWrap: 'wrap' }}>
                <div className="flex" style={{ alignItems: 'center', gap: '0.5rem', color: '#71717a' }}>
                  <MapPin size={16} className="text-gradient" />
                  <span style={{ fontSize: '0.9rem' }}>Gandhinagar, Gujarat</span>
                </div>
                <div className="flex" style={{ alignItems: 'center', gap: '0.5rem', color: '#71717a' }}>
                  <Mail size={16} className="text-gradient" />
                  <span style={{ fontSize: '0.9rem' }}>tirth.p.patel143@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive CLI Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="terminal-window">
                <div className="terminal-header" style={{ padding: '0.8rem 1.2rem' }}>
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red"></span>
                    <span className="terminal-dot dot-yellow"></span>
                    <span className="terminal-dot dot-green"></span>
                  </div>
                  
                  {/* Premium Tabs */}
                  <div className="flex" style={{ gap: '0.4rem', background: 'rgba(255,255,255,0.02)', padding: '0.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <button 
                      onClick={() => setTerminalTab('visual')} 
                      className={`terminal-tab-btn ${terminalTab === 'visual' ? 'active' : ''}`}
                    >
                      Visual Swarm
                    </button>
                    <button 
                      onClick={() => setTerminalTab('cli')} 
                      className={`terminal-tab-btn ${terminalTab === 'cli' ? 'active' : ''}`}
                    >
                      Interactive CLI
                    </button>
                  </div>

                  <span className="terminal-title" style={{ display: 'none' }}>tirth@agent-host</span>
                  <div style={{ width: '40px' }} className="nav-links"></div>
                </div>

                <AnimatePresence mode="wait">
                  {terminalTab === 'visual' ? (
                    <motion.div 
                      key="visual-swarm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex" 
                      style={{ flexDirection: 'column', minHeight: '320px', background: 'rgba(4, 4, 8, 0.4)' }}
                    >
                      {/* Dynamic SVG Nodes Swarm Graph */}
                      <div className="visualizer-container" style={{ position: 'relative', height: '240px' }}>
                        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                          {/* Connections */}
                          {[
                            { from: { x: 160, y: 120 }, to: { x: 60, y: 50 }, color: '#ec4899' },
                            { from: { x: 160, y: 120 }, to: { x: 260, y: 50 }, color: '#06b6d4' },
                            { from: { x: 160, y: 120 }, to: { x: 260, y: 190 }, color: '#818cf8' },
                            { from: { x: 160, y: 120 }, to: { x: 60, y: 190 }, color: '#fda4af' }
                          ].map((line, idx) => {
                            const isSourceSelected = activeAgentNode === 'orchestrator';
                            const isDestSelected = activeAgentNode === (idx === 0 ? 'rag' : idx === 1 ? 'seo' : idx === 2 ? 'forecaster' : 'voice');
                            const isHighlight = isSourceSelected || isDestSelected;

                            return (
                              <g key={idx}>
                                <line 
                                  x1={`${line.from.x / 320 * 100}%`} 
                                  y1={`${line.from.y / 240 * 100}%`} 
                                  x2={`${line.to.x / 320 * 100}%`} 
                                  y2={`${line.to.y / 240 * 100}%`} 
                                  stroke={isHighlight ? line.color : "rgba(255, 255, 255, 0.04)"} 
                                  strokeWidth={isHighlight ? "2.5" : "1.5"} 
                                  style={{ transition: 'all 0.5s ease' }}
                                />
                                <motion.circle
                                  r="3"
                                  fill={line.color}
                                  cx={0}
                                  cy={0}
                                  initial={{ x: `${line.from.x / 320 * 100}%`, y: `${line.from.y / 240 * 100}%` }}
                                  animate={{
                                    x: [`${line.from.x / 320 * 100}%`, `${line.to.x / 320 * 100}%`],
                                    y: [`${line.from.y / 240 * 100}%`, `${line.to.y / 240 * 100}%`]
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 0.75
                                  }}
                                />
                              </g>
                            );
                          })}
                        </svg>

                        {/* Nodes Overlay */}
                        {[
                          { id: "orchestrator", label: "Orchestrator", x: 160, y: 120, size: 18, color: "#6366f1", icon: <Terminal size={14} /> },
                          { id: "rag", label: "RAG DB", x: 60, y: 50, size: 15, color: "#ec4899", icon: <Sparkles size={12} /> },
                          { id: "seo", label: "SEO Swarm", x: 260, y: 50, size: 15, color: "#06b6d4", icon: <Layers size={12} /> },
                          { id: "forecaster", label: "Nexus", x: 260, y: 190, size: 15, color: "#818cf8", icon: <Cpu size={12} /> },
                          { id: "voice", label: "Voice AI", x: 60, y: 190, size: 15, color: "#fda4af", icon: <MessageSquare size={11} /> }
                        ].map((node) => {
                          const isSelected = activeAgentNode === node.id;
                          return (
                            <motion.button
                              key={node.id}
                              onClick={() => setActiveAgentNode(node.id)}
                              className="swarm-node"
                              style={{
                                position: 'absolute',
                                left: `${node.x / 320 * 100}%`,
                                top: `${node.y / 240 * 100}%`,
                                transform: 'translate(-50%, -50%)',
                                width: `${node.size * 2}px`,
                                height: `${node.size * 2}px`,
                                borderRadius: '50%',
                                background: isSelected ? node.color : 'rgba(15, 15, 25, 0.9)',
                                border: `1.5px solid ${node.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: isSelected 
                                  ? `0 0 20px ${node.color}` 
                                  : `0 0 10px rgba(0,0,0,0.5)`,
                                zIndex: 20,
                                color: isSelected ? '#000000' : '#ffffff',
                              }}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {node.icon}
                              {/* Glowing Outer Ring for active node */}
                              {isSelected && (
                                <motion.span 
                                  className="absolute inset-0 rounded-full"
                                  style={{ border: `1px solid ${node.color}` }}
                                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                />
                              )}
                            </motion.button>
                          );
                        })}

                        <div style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '12px',
                          fontSize: '0.65rem',
                          color: '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}>
                          <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
                          Live Swarm Simulation Active
                        </div>
                      </div>

                      {/* Selected Node Inspector Panel */}
                      {agentNodes.find(n => n.id === activeAgentNode) && (() => {
                        const selectedNode = agentNodes.find(n => n.id === activeAgentNode)!;
                        return (
                          <motion.div 
                            key={selectedNode.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                              background: 'rgba(10, 10, 16, 0.95)',
                              borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                              padding: '1.2rem 1.5rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.3rem',
                            }}
                          >
                            <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ fontWeight: 800, color: '#f8fafc', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <span style={{ width: '8px', height: '8px', background: selectedNode.color, borderRadius: '50%', display: 'inline-block', boxShadow: `0 0 8px ${selectedNode.color}` }}></span>
                                {selectedNode.label}
                              </span>
                              <span className="tag" style={{ fontSize: '0.65rem', padding: '0.1rem 0.5rem', background: `${selectedNode.color}15`, borderColor: `${selectedNode.color}30`, color: selectedNode.color }}>
                                {selectedNode.metric}
                              </span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>
                              {selectedNode.desc}
                            </p>
                            <div style={{ marginTop: '0.3rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                              {selectedNode.logs.map((log, lIdx) => (
                                <div key={lIdx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748b' }}>
                                  <span style={{ color: selectedNode.color }}>&gt;</span> {log}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })()}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="cli-interface"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div ref={terminalContainerRef} className="terminal-body">
                        {terminalHistory.map((line, idx) => (
                          <div 
                            key={idx} 
                            className="terminal-output" 
                            style={{ 
                              color: line.type === 'error' ? '#f87171' : 
                                     line.type === 'success' ? 'var(--primary-bright)' : 
                                     line.type === 'input' ? '#ffffff' : '#94a3b8'
                            }}
                          >
                            {line.text}
                          </div>
                        ))}
                      </div>
                      <form onSubmit={handleTerminalSubmit} className="terminal-header" style={{ background: 'rgba(8, 8, 12, 0.95)', borderTop: '1px solid rgba(255,255,255,0.03)', padding: '0.6rem 1.2rem' }}>
                        <div className="terminal-input-line" style={{ width: '100%' }}>
                          <span className="terminal-prompt">&gt;</span>
                          <input 
                            type="text" 
                            className="terminal-text-input" 
                            placeholder="Ask a question or type a command (e.g. 'skills', 'hermes')..."
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                          />
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section style={{ padding: '3.5rem 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            {[
              { value: "98%", label: "Stock Forecasting Accuracy", desc: "Using ARIMA, Prophet, LSTM" },
              { value: "0", label: "Hallucination Recommendations", desc: "RAG ground Medusa e-com" },
              { value: "95%", label: "SEO Audit Automation", desc: "Hermes autonomous agents swarm" },
              { value: "8.27", label: "CGPA (Till 7th Sem)", desc: "LDRP IT B.E. Degree" }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.3rem', fontFamily: 'var(--font-display)' }} className="text-gradient">
                  {metric.value}
                </h3>
                <h4 style={{ color: '#f3f4f6', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {metric.label}
                </h4>
                <p style={{ color: '#71717a', fontSize: '0.8rem' }}>
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Matrix Section */}
      <section className="section" id="projects">
        <div className="container">
          <div className="flex" style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
              Featured <span className="text-gradient">Agentic Work</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              A curated look into my production chatbots, automated search engine optimization crawlers, and data systems.
            </p>

            {/* View Mode Switcher */}
            <div className="flex" style={{ gap: '0.5rem', background: 'rgba(255,255,255,0.02)', padding: '0.3rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => setProjectViewMode('deck')} 
                className={`terminal-tab-btn ${projectViewMode === 'deck' ? 'active' : ''}`}
                style={{ fontSize: '0.85rem' }}
              >
                Interactive Fan Deck
              </button>
              <button 
                onClick={() => setProjectViewMode('grid')} 
                className={`terminal-tab-btn ${projectViewMode === 'grid' ? 'active' : ''}`}
                style={{ fontSize: '0.85rem' }}
              >
                Matrix Grid
              </button>
            </div>

            {projectViewMode === 'grid' ? (
              /* Filter Matrix Pills */
              <div className="flex" style={{ gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {["All", "AI & Agents", "Data Science", "Voice & Utility"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`skills-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            ) : (
              <p style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={12} className="text-gradient" /> Hover card deck to fan out // Click cards to inspect details
              </p>
            )}
          </div>

          {projectViewMode === 'deck' ? (
            <div className="project-deck-grid">
              
              {/* Left Column: Project Info Panel */}
              <div style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDeckProject.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                  >
                    <div className="flex" style={{ gap: '0.8rem', alignItems: 'center' }}>
                      <span className="tag" style={{ background: `${selectedDeckProjectColor}15`, color: selectedDeckProjectColor, borderColor: `${selectedDeckProjectColor}30`, fontWeight: 600 }}>
                        {selectedDeckProject.category}
                      </span>
                      <span className="tag" style={{ background: 'rgba(16, 185, 129, 0.08)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                        {selectedDeckProject.impact}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-display)', letterSpacing: '-1px', color: '#ffffff' }}>
                      {selectedDeckProject.title}
                    </h3>

                    <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.7 }}>
                      {selectedDeckProject.description}
                    </p>

                    {/* Highly-detailed Technical Metrics Dashboard */}
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '1.2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)', margin: '0.2rem 0' }}>
                      <div>
                        <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.1rem' }}>System Architecture</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>{selectedDeckProject.architecture || "Custom Core"}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.1rem' }}>Performance Telemetry</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: selectedDeckProjectColor }}>{selectedDeckProject.metric || "Active"}</span>
                      </div>
                    </div>

                    <div className="flex" style={{ gap: '0.6rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                      {selectedDeckProject.tech.map((t: string) => (
                        <span key={t} className="tag" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex" style={{ gap: '1rem', alignItems: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                      <button 
                        onClick={() => setSelectedProject(selectedDeckProject)}
                        className="btn btn-primary animate-float"
                        style={{ 
                          alignSelf: 'flex-start', 
                          background: `linear-gradient(135deg, ${selectedDeckProjectColor}, rgba(0,0,0,0.85))`,
                          border: `1.5px solid ${selectedDeckProjectColor}35`,
                          boxShadow: `0 8px 30px ${selectedDeckProjectColor}25`
                        }}
                        title={`Inspect systems architecture blueprint of ${selectedDeckProject.title}`}
                      >
                        Inspect Systems Blueprint <Cpu size={16} />
                      </button>

                      <a 
                        href={selectedDeckProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ alignSelf: 'flex-start' }}
                        title={`Inspect source code of ${selectedDeckProject.title} on GitHub`}
                      >
                        Inspect Source Code <ExternalLink size={16} />
                      </a>
                      
                      {/* Premium Interactive Swapper Widget */}
                      <div className="flex" style={{ gap: '0.6rem', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '0.4rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDeckIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
                          }}
                          className="terminal-tab-btn flex-center"
                          style={{ 
                            padding: '0.5rem', 
                            borderRadius: '10px', 
                            background: 'rgba(255,255,255,0.03)', 
                            border: '1px solid rgba(255,255,255,0.05)',
                            color: '#a1a1aa',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = selectedDeckProjectColor;
                            e.currentTarget.style.background = `${selectedDeckProjectColor}15`;
                            e.currentTarget.style.boxShadow = `0 0 15px ${selectedDeckProjectColor}30`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#a1a1aa';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                          title="Previous Project"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        
                        <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#f8fafc', padding: '0 0.6rem', minWidth: '55px', textAlign: 'center', userSelect: 'none' }}>
                          0{activeDeckIndex + 1} / 0{projectsData.length}
                        </span>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDeckIndex((prev) => (prev + 1) % projectsData.length);
                          }}
                          className="terminal-tab-btn flex-center"
                          style={{ 
                            padding: '0.5rem', 
                            borderRadius: '10px', 
                            background: 'rgba(255,255,255,0.03)', 
                            border: '1px solid rgba(255,255,255,0.05)',
                            color: '#a1a1aa',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = selectedDeckProjectColor;
                            e.currentTarget.style.background = `${selectedDeckProjectColor}15`;
                            e.currentTarget.style.boxShadow = `0 0 15px ${selectedDeckProjectColor}30`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#a1a1aa';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                          title="Next Project"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Stacking Interactive Card Deck */}
              <div className="deck-wrapper">
                <div 
                  className="deck-container"
                  style={{ 
                    position: 'relative', 
                    width: '290px', 
                    height: '380px', 
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setIsDeckHovered(true)}
                  onMouseLeave={() => {
                    setIsDeckHovered(false);
                    setHoveredDeckIndex(null);
                  }}
                >
                  {projectsData.map((proj, idx) => {
                    const isSelected = selectedDeckIndex === idx;
                    const isHoveredCard = hoveredDeckIndex === idx;
                    const cardColor = projectColors[idx % projectColors.length];
                    
                    // Fan geometry offsets
                    const total = projectsData.length;
                    const mid = (total - 1) / 2;
                    const offset = idx - mid; // -2, -1, 0, 1, 2
                    
                    const fanRotate = isDeckHovered ? offset * 12 : offset * 3;
                    const fanX = isDeckHovered ? offset * 42 : offset * 6;
                    const fanY = isDeckHovered ? Math.abs(offset) * 12 : 0;
                    
                    // Scale active or hovered cards larger
                    const scale = isHoveredCard ? 1.06 : isSelected ? 1.03 : 1 - Math.abs(offset) * 0.03;
                    
                    // Z-index sorting: hovered card on absolute top, then selected card
                    let zIndex = 10 - Math.abs(offset);
                    if (isSelected) zIndex = 50;
                    if (isHoveredCard) zIndex = 100;
                    
                    return (
                      <motion.div
                        key={proj.title}
                        className="deck-card"
                        onClick={() => {
                          if (isSelected) {
                            setSelectedProject(proj);
                          } else {
                            setSelectedDeckIndex(idx);
                          }
                        }}
                        onMouseEnter={() => setHoveredDeckIndex(idx)}
                        onMouseLeave={() => setHoveredDeckIndex(null)}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '24px',
                          background: 'rgba(10, 10, 16, 0.95)',
                          border: `1.5px solid ${isSelected ? cardColor : 'rgba(255, 255, 255, 0.05)'}`,
                          padding: '2.5rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          boxShadow: isSelected 
                            ? `0 15px 40px ${cardColor}15, 0 0 25px rgba(0,0,0,0.8)` 
                            : `0 8px 30px rgba(0,0,0,0.5)`,
                          zIndex: zIndex,
                          transformOrigin: 'bottom center',
                          overflow: 'hidden'
                        }}
                        animate={{
                          x: fanX,
                          y: fanY,
                          rotate: fanRotate,
                          scale: scale,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 150,
                          damping: 18,
                          mass: 0.8
                        }}
                        whileHover={{
                          y: fanY - 20,
                          scale: scale + 0.02,
                          borderColor: cardColor,
                          boxShadow: `0 20px 40px ${cardColor}25`,
                        }}
                      >
                        {/* Card Background Auroras */}
                        <div 
                          style={{ 
                            position: 'absolute', 
                            top: '-50%', 
                            left: '-50%', 
                            width: '200%', 
                            height: '200%', 
                            background: `radial-gradient(circle, ${cardColor}08 0%, transparent 60%)`, 
                            pointerEvents: 'none',
                            borderRadius: 'inherit'
                          }} 
                        />

                        {/* Top Label */}
                        <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'relative', zIndex: 2 }}>
                          <div style={{ width: '40px', height: '40px', background: `${cardColor}15`, borderRadius: '12px', border: `1px solid ${cardColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cardColor }}>
                            {proj.category.includes("AI") ? (
                              <Sparkles size={20} />
                            ) : proj.category.includes("Data") ? (
                              <Database size={20} />
                            ) : (
                              <Cpu size={20} />
                            )}
                          </div>
                          <span className="tag" style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.03)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.05)' }}>
                            {proj.category}
                          </span>
                        </div>

                        {/* Simulated Graphic Visualizer Mockup */}
                        <div style={{ height: '140px', width: '100%', position: 'relative', overflow: 'hidden', margin: '2rem 0', borderRadius: '16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {idx === 0 && (
                            /* RAG ChatBot Node Diagram */
                            <div className="flex" style={{ gap: '1.2rem', alignItems: 'center' }}>
                              <div className="swarm-node-pulse" style={{ background: cardColor, width: '12px', height: '12px', borderRadius: '50%' }} />
                              <div style={{ height: '2px', width: '40px', background: `linear-gradient(90deg, ${cardColor}, rgba(255,255,255,0.05))` }} />
                              <div className="swarm-node-pulse" style={{ background: '#ec4899', width: '8px', height: '8px', borderRadius: '50%' }} />
                            </div>
                          )}
                          {idx === 1 && (
                            /* SEO audit crawl lines */
                            <div className="flex" style={{ flexDirection: 'column', gap: '0.5rem', width: '80%' }}>
                              <div style={{ height: '6px', width: '100%', background: `linear-gradient(90deg, ${cardColor}, transparent)`, borderRadius: '3px' }} />
                              <div style={{ height: '6px', width: '70%', background: `linear-gradient(90deg, ${cardColor}, transparent)`, borderRadius: '3px' }} />
                              <div style={{ height: '6px', width: '85%', background: `linear-gradient(90deg, ${cardColor}, transparent)`, borderRadius: '3px' }} />
                            </div>
                          )}
                          {idx === 2 && (
                            /* Stock forecast chart wave lines */
                            <svg width="80%" height="60" viewBox="0 0 100 30" fill="none" style={{ overflow: 'visible' }}>
                              <path d="M0,20 Q15,5 30,15 T60,5 T90,25 T100,10" stroke={cardColor} strokeWidth="2.5" strokeLinecap="round" />
                              <path d="M0,20 Q15,5 30,15 T60,5 T90,25 T100,10 L100,30 L0,30 Z" fill={`url(#grad-${idx})`} opacity="0.08" />
                              <defs>
                                <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor={cardColor} stopOpacity={0.8} />
                                  <stop offset="100%" stopColor={cardColor} stopOpacity={0} />
                                </linearGradient>
                              </defs>
                            </svg>
                          )}
                          {idx === 3 && (
                            /* Social media bar chart matrix */
                            <div className="flex" style={{ alignItems: 'flex-end', gap: '0.6rem', height: '60px' }}>
                              {[25, 45, 75, 35, 60].map((h, bIdx) => (
                                <div key={bIdx} style={{ width: '12px', height: `${h}%`, background: `linear-gradient(180deg, ${cardColor}, rgba(0,0,0,0.8))`, borderRadius: '3px' }} />
                              ))}
                            </div>
                          )}
                          {idx === 4 && (
                            /* Voice pyAudio waves */
                            <div className="flex" style={{ gap: '0.3rem', alignItems: 'center', height: '40px' }}>
                              {[8, 22, 12, 38, 26, 45, 18, 30, 10].map((h, wIdx) => (
                                <motion.div 
                                  key={wIdx} 
                                  style={{ 
                                    width: '4px', 
                                    height: `${h}px`, 
                                    background: cardColor, 
                                    borderRadius: '2px',
                                    transformOrigin: 'bottom'
                                  }} 
                                  animate={{ scaleY: [1, 0.4, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity, delay: wIdx * 0.15 }}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Bottom title & index marker */}
                        <div style={{ position: 'relative', zIndex: 2 }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748b', display: 'block', marginBottom: '0.2rem' }}>
                            DIRECTIVE // 0{idx + 1}
                          </span>
                          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                            {proj.title}
                          </h4>
                        </div>

                        {/* Frosted Badge Overlay (Click to view) */}
                        {isSelected && (
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '50px',
                            color: '#ffffff',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                            pointerEvents: 'none',
                            letterSpacing: '0.05em',
                          }}>
                            CLICK TO INSPECT
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Projects Fluid Grid */
            <motion.div 
              layout 
              className="grid" 
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj: Project, idx: number) => (
                  <SpotlightCard
                    layout
                    initial={{ opacity: 0, y: 35, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                    key={proj.title}
                    className="glass-card"
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', cursor: 'pointer' }}
                    onClick={() => setSelectedProject(proj)}
                  >
                    <div>
                      <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                        <div style={{ padding: '0.8rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                          {proj.category.includes("AI") ? (
                            <Sparkles size={24} className="text-gradient" />
                          ) : proj.category.includes("Data") ? (
                            <Database size={24} style={{ color: 'var(--secondary)' }} />
                          ) : (
                            <Cpu size={24} style={{ color: 'var(--accent)' }} />
                          )}
                        </div>
                        <span className="tag" style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.08)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.25)' }}>
                          {proj.impact}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
                        {proj.title}
                      </h3>
                      <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        {proj.description}
                      </p>

                      {/* Technical Metrics Dashboard Mini */}
                      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.8rem', background: 'rgba(255,255,255,0.01)', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)', marginBottom: '1.2rem' }}>
                        <div>
                          <span style={{ fontSize: '0.6rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.1rem' }}>Architecture</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#e4e4e7' }}>{proj.architecture || "Custom Core"}</span>
                        </div>
                        <div>
                          <span style={{ fontSize: '0.6rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.1rem' }}>Telemetry</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: proj.category.includes("AI") ? 'var(--primary)' : 'var(--secondary)' }}>{proj.metric || "Active"}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex" style={{ gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {proj.tech.map((t: string) => (
                          <span key={t} className="tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.8rem' }}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex" style={{ gap: '0.8rem', width: '100%' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(proj);
                          }}
                          className="btn btn-primary"
                          style={{ flex: 1, justifyContent: 'center', padding: '0.7rem 1rem', fontSize: '0.85rem', borderRadius: '12px' }}
                          title={`Inspect systems architecture blueprint of ${proj.title}`}
                        >
                          Inspect Blueprint <Cpu size={14} />
                        </button>
                        <a 
                          href={proj.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="btn btn-outline" 
                          style={{ padding: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}
                          title={`View source code of ${proj.title} on GitHub`}
                        >
                          <GithubIcon size={16} />
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="section" id="skills" style={{ background: 'rgba(3, 3, 5, 0.5)' }}>
        <div className="container">
          <div className="flex" style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '4.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem' }}>
              My engineering stack spanning Agent frameworks, core mathematical modeling, and enterprise databases.
            </p>

            {/* High-Graphics Overlapping Tech Stack Dock */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '1rem 0 2rem 0' }}>
              <TechStackDock />
            </div>
          </div>

          <div className="skills-marquee-container">
            {/* Row 1: Left to Right Marquee */}
            <div className="skills-marquee-track">
              {[
                { name: "LangChain", color: "#6366f1" },
                { name: "LlamaIndex", color: "#6366f1" },
                { name: "RAG Systems", color: "#6366f1" },
                { name: "Hermes Agent Framework", color: "#6366f1" },
                { name: "Python", color: "#ec4899" },
                { name: "FastAPI", color: "#ec4899" },
                { name: "PostgreSQL (pgvector)", color: "#ec4899" },
                { name: "Qdrant Vector DB", color: "#ec4899" },
                { name: "N8N Swarms", color: "#06b6d4" },
                { name: "Docker Platforms", color: "#06b6d4" },
                { name: "GitHub Workflows", color: "#06b6d4" },
                { name: "Google Analytics 4", color: "#06b6d4" },
                { name: "Next.js", color: "#a855f7" },
                { name: "React", color: "#a855f7" },
                { name: "TypeScript", color: "#a855f7" },
                { name: "Tailwind CSS", color: "#a855f7" },
                // Duplicate for seamless looping
                { name: "LangChain", color: "#6366f1" },
                { name: "LlamaIndex", color: "#6366f1" },
                { name: "RAG Systems", color: "#6366f1" },
                { name: "Hermes Agent Framework", color: "#6366f1" },
                { name: "Python", color: "#ec4899" },
                { name: "FastAPI", color: "#ec4899" },
                { name: "PostgreSQL (pgvector)", color: "#ec4899" },
                { name: "Qdrant Vector DB", color: "#ec4899" },
                { name: "N8N Swarms", color: "#06b6d4" },
                { name: "Docker Platforms", color: "#06b6d4" },
                { name: "GitHub Workflows", color: "#06b6d4" },
                { name: "Google Analytics 4", color: "#06b6d4" },
                { name: "Next.js", color: "#a855f7" },
                { name: "React", color: "#a855f7" },
                { name: "TypeScript", color: "#a855f7" },
                { name: "Tailwind CSS", color: "#a855f7" }
              ].map((skill, idx) => (
                <div 
                  key={`${skill.name}-row1-${idx}`} 
                  className="skills-marquee-item"
                  style={{
                    borderLeft: `3.5px solid ${skill.color}`,
                    boxShadow: `0 0 15px ${skill.color}05`
                  }}
                >
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    background: skill.color, 
                    borderRadius: '50%',
                    boxShadow: `0 0 8px ${skill.color}`
                  }} />
                  {skill.name}
                </div>
              ))}
            </div>

            {/* Row 2: Right to Left Marquee */}
            <div className="skills-marquee-track-reverse">
              {[
                { name: "Prompt Engineering", color: "#6366f1" },
                { name: "OpenAI & OpenRouter APIs", color: "#6366f1" },
                { name: "OpenCV Computer Vision", color: "#6366f1" },
                { name: "Scikit-Learn ML", color: "#6366f1" },
                { name: "SQL Databases", color: "#ec4899" },
                { name: "Flask APIs", color: "#ec4899" },
                { name: "MySQL Server", color: "#ec4899" },
                { name: "Faiss Indexing", color: "#ec4899" },
                { name: "MeiliSearch Engines", color: "#06b6d4" },
                { name: "Power BI Analytics", color: "#06b6d4" },
                { name: "Pandas Statistics", color: "#06b6d4" },
                { name: "NumPy Computations", color: "#06b6d4" },
                { name: "Seaborn Graphs", color: "#06b6d4" },
                { name: "HTML5 Layouts", color: "#a855f7" },
                { name: "CSS3 Styling", color: "#a855f7" },
                { name: "JavaScript Engine", color: "#a855f7" },
                { name: "Vanilla CSS Systems", color: "#a855f7" },
                // Duplicate for seamless looping
                { name: "Prompt Engineering", color: "#6366f1" },
                { name: "OpenAI & OpenRouter APIs", color: "#6366f1" },
                { name: "OpenCV Computer Vision", color: "#6366f1" },
                { name: "Scikit-Learn ML", color: "#6366f1" },
                { name: "SQL Databases", color: "#ec4899" },
                { name: "Flask APIs", color: "#ec4899" },
                { name: "MySQL Server", color: "#ec4899" },
                { name: "Faiss Indexing", color: "#ec4899" },
                { name: "MeiliSearch Engines", color: "#06b6d4" },
                { name: "Power BI Analytics", color: "#06b6d4" },
                { name: "Pandas Statistics", color: "#06b6d4" },
                { name: "NumPy Computations", color: "#06b6d4" },
                { name: "Seaborn Graphs", color: "#06b6d4" },
                { name: "HTML5 Layouts", color: "#a855f7" },
                { name: "CSS3 Styling", color: "#a855f7" },
                { name: "JavaScript Engine", color: "#a855f7" },
                { name: "Vanilla CSS Systems", color: "#a855f7" }
              ].map((skill, idx) => (
                <div 
                  key={`${skill.name}-row2-${idx}`} 
                  className="skills-marquee-item"
                  style={{
                    borderLeft: `3.5px solid ${skill.color}`,
                    boxShadow: `0 0 15px ${skill.color}05`
                  }}
                >
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    background: skill.color, 
                    borderRadius: '50%',
                    boxShadow: `0 0 8px ${skill.color}`
                  }} />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education timeline */}
      <section className="section" id="timeline">
        <div className="container">
          <div className="flex" style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
              Professional <span className="text-gradient">Timeline</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', maxWidth: '600px' }}>
              My training internships, academic benchmarks, and education history.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {timelineData.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-pulse-dot"></div>
                </div>

                {/* Alternating layouts */}
                {idx % 2 === 0 ? (
                  <>
                    <div className="timeline-content-left">
                      <span className="tag" style={{ background: 'rgba(99, 102, 241, 0.05)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem' }}>
                        {item.date}
                      </span>
                    </div>
                    <div className="timeline-content-right">
                      <SpotlightCard
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                        whileHover={{ scale: 1.01, y: -2 }}
                        className="glass-card"
                        style={{ padding: '2rem' }}
                      >
                        <div className="flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{item.title}</h3>
                          <span style={{ color: '#71717a', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <MapPin size={12} /> {item.location}
                          </span>
                        </div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>
                          {item.organization}
                        </h4>
                        <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6 }}>
                          {item.description}
                        </p>
                      </SpotlightCard>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="timeline-content-left" style={{ marginLeft: 0 }}>
                      <SpotlightCard
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                        whileHover={{ scale: 1.01, y: -2 }}
                        className="glass-card"
                        style={{ padding: '2rem' }}
                      >
                        <div className="flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{item.title}</h3>
                          <span style={{ color: '#71717a', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <MapPin size={12} /> {item.location}
                          </span>
                        </div>
                        <h4 style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>
                          {item.organization}
                        </h4>
                        <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6 }}>
                          {item.description}
                        </p>
                      </SpotlightCard>
                    </div>
                    <div className="timeline-content-right" style={{ textAlign: 'left' }}>
                      <span className="tag" style={{ background: 'rgba(236, 72, 153, 0.05)', color: 'var(--secondary)', fontWeight: 600, fontSize: '0.8rem' }}>
                        {item.date}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Achievements Section */}
      <section className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <div className="flex" style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
              Academic & <span className="text-gradient">Achievements</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', maxWidth: '600px' }}>
              National credentials, corporate job simulation highlights, and certifications.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: "Python for Data Science",
                issuer: "NPTEL National Certification",
                desc: "Successfully completed structured academic credentials verifying advanced algorithmic competencies in data structuring, scraping, and mathematical computations with Python."
              },
              {
                title: "Data Analyst Job Simulate",
                issuer: "Deloitte Finalist",
                desc: "Finalist in the Deloitte job simulation pathway, optimizing time-series trends and producing actionable analytical reports."
              },
              {
                title: "Cybersecurity Analyst Job Simulate",
                issuer: "Forage Finalist",
                desc: "Demonstrated systematic vulnerability auditing, defensive firewall designs, and real-time security threat vectors analysis."
              }
            ].map((ach, idx) => (
              <SpotlightCard
                key={ach.title}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
                className="glass-card"
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <Award size={36} className="text-gradient" style={{ marginBottom: '1.5rem', animationDuration: '4s' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>{ach.title}</h3>
                  <h4 style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{ach.issuer}</h4>
                  <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6 }}>{ach.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Articles & Case Studies Section */}
      <section className="section" id="articles" style={{ background: 'rgba(3, 3, 5, 0.3)', borderTop: '1px solid var(--glass-border)', paddingBottom: '80px' }}>
        <div className="container">
          <div className="flex" style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', textAlign: 'center' }}>
            <div className="badge flex flex-center" style={{ gap: '0.5rem', marginBottom: '1.2rem', borderColor: 'rgba(99, 102, 241, 0.2)', color: 'var(--primary)' }}>
              <Terminal size={14} /> TECHNICAL WRITING
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>
              Featured Insights & <span className="text-gradient">Case Studies</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', maxWidth: '600px' }}>
              Deep-dives into production architectures, comparative machine learning analyses, and autonomous orchestration framework logic.
            </p>
          </div>

          <InteractiveLab
            activeIdx={activeLabIdx}
            setActiveIdx={setActiveLabIdx}
            openFullModal={(art) => setSelectedArticle(art)}
          />
        </div>
      </section>

      {/* Interactive Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="modal-content-card"
              style={{
                border: `1px solid ${selectedArticle.color}35`,
                boxShadow: `0 35px 80px rgba(0,0,0,0.85), 0 0 50px ${selectedArticle.color}12`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Reading Progress Bar */}
              <div style={{ position: 'sticky', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, ${selectedArticle.color}, transparent)`, zIndex: 100 }} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#a1a1aa',
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontWeight: 800,
                  zIndex: 90
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.color = '#a1a1aa';
                }}
              >
                ✕
              </button>

              <div className="modal-inner-padding">
                {/* Meta details */}
                <div className="flex" style={{ gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: selectedArticle.color, background: `${selectedArticle.color}12`, padding: '0.4rem 0.9rem', borderRadius: '8px', border: `1px solid ${selectedArticle.color}25`, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {selectedArticle.category}
                  </span>
                  <span className="flex flex-center" style={{ fontSize: '0.85rem', color: '#71717a', gap: '0.3rem' }}>
                    <Clock size={14} /> {selectedArticle.readTime}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#71717a' }}>• Published Technical Writing</span>
                </div>

                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1.25, letterSpacing: '-0.8px', color: '#ffffff' }}>
                  {selectedArticle.title}
                </h2>

                {selectedArticle.image && (
                  <div style={{ position: 'relative', width: '100%', height: '340px', borderRadius: '20px', overflow: 'hidden', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.08)', boxShadow: `0 15px 40px rgba(0,0,0,0.6)` }}>
                    <Image
                      src={selectedArticle.image}
                      alt={selectedArticle.imageAlt || selectedArticle.title}
                      title={selectedArticle.imageAlt || selectedArticle.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
                )}

                {/* Main Dynamic Grid Content */}
                <div className="modal-grid-layout">
                  
                  {/* Left Column (Rich technical text) */}
                  <div className="modal-left-column" style={{ color: '#e4e4e7', fontSize: '1.05rem', lineHeight: 1.8, fontFamily: 'var(--font-sans)', textAlign: 'justify' }}>
                    
                    {/* Key takeaway highlight box */}
                    {selectedArticle.takeaway && (
                      <div style={{ background: `${selectedArticle.color}07`, borderLeft: `4px solid ${selectedArticle.color}`, padding: '1.5rem 1.8rem', borderRadius: '12px', marginBottom: '2.5rem', borderTopRightRadius: '12px', borderBottomRightRadius: '12px', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.01)' }}>
                        <h4 style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          💡 Core Architecture Takeaway
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#b4b4bb', lineHeight: 1.6, textAlign: 'left' }}>
                          {selectedArticle.takeaway}
                        </p>
                      </div>
                    )}

                    {selectedArticle.sections ? (
                      selectedArticle.sections.map((sec: any, sIdx: number) => (
                        <div key={sIdx} style={{ marginBottom: '2.5rem' }}>
                          <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <span style={{ display: 'inline-block', width: '4px', height: '18px', borderRadius: '2px', background: selectedArticle.color }}></span>
                            {sec.heading}
                          </h4>
                          <p style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: 1.75, textAlign: 'left' }}>{sec.text}</p>
                        </div>
                      ))
                    ) : (
                      (selectedArticle.content || selectedArticle.desc).split('\n\n').map((para: string, pIdx: number) => (
                        <p key={pIdx} style={{ marginBottom: '1.5rem', color: '#a1a1aa', fontSize: '1rem', lineHeight: 1.75, textAlign: 'left' }}>{para}</p>
                      ))
                    )}
                  </div>

                  {/* Right Column (Side Systems telemetry Dashboard) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', padding: '2rem', borderRadius: '20px', position: 'sticky', top: '80px' }}>
                    <div>
                      <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                        System Telemetry
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.6rem' }}>
                          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Read Complexity</span>
                          <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>{selectedArticle.complexity || "Standard Audit"}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.6rem' }}>
                          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Core Framework</span>
                          <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>{selectedArticle.framework || "Technical Writing"}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '0.6rem' }}>
                          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Project Metric</span>
                          <span style={{ color: selectedArticle.color, fontWeight: 800, fontSize: '0.9rem' }}>{selectedArticle.metric || "Verified Production"}</span>
                        </div>
                      </div>
                    </div>

                    {selectedArticle.techStack && (
                      <div>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem' }}>
                          Engineering Tech
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {selectedArticle.techStack.map((tech: string) => (
                            <span key={tech} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#e4e4e7', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.6rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Author Coordinates Profile widget */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
                      <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${selectedArticle.color}` }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 800, fontSize: '0.9rem' }}>
                          TP
                        </div>
                      </div>
                      <div>
                        <h5 style={{ color: '#ffffff', fontWeight: 800, margin: 0, fontSize: '0.95rem' }}>Tirth Patel</h5>
                        <p style={{ color: '#71717a', fontSize: '0.8rem', margin: 0 }}>AI Engineer & Developer</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        const contactSec = document.getElementById('contact');
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex flex-center"
                      style={{
                        background: selectedArticle.color,
                        color: '#ffffff',
                        border: 'none',
                        width: '100%',
                        padding: '0.8rem',
                        borderRadius: '10px',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        boxShadow: `0 8px 20px ${selectedArticle.color}30`,
                        transition: 'opacity 0.2s',
                        gap: '0.3rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      Let's Collaborate <ArrowRight size={14} />
                    </button>

                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Projects Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const brandColor = selectedProject.category.includes("AI")
            ? "#6366f1"
            : selectedProject.category.includes("Data")
            ? "#ec4899"
            : "#06b6d4";
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(3, 3, 5, 0.9)',
                backdropFilter: 'blur(20px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}
              onClick={() => setSelectedProject(null)}
            >
              {/* Outer Glow */}
              <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${brandColor}12 0%, transparent 70%)`,
                pointerEvents: 'none',
                filter: 'blur(40px)'
              }} />

              <motion.div
                initial={{ scale: 0.92, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.92, y: 30, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                style={{
                  width: '100%',
                  maxWidth: '920px',
                  background: 'rgba(8, 8, 12, 0.98)',
                  border: `1.5px solid ${brandColor}40`,
                  boxShadow: `0 35px 80px rgba(0,0,0,0.85), 0 0 50px ${brandColor}12`,
                  borderRadius: '28px',
                  padding: '2.5rem',
                  position: 'relative',
                  maxHeight: '92vh',
                  overflowY: 'auto',
                  scrollbarWidth: 'thin'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: '#a1a1aa',
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    zIndex: 10
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${brandColor}15`;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = brandColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.color = '#a1a1aa';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  ✕
                </button>

                {/* Modal Header */}
                <div style={{ marginBottom: '2rem' }}>
                  <div className="flex" style={{ gap: '0.8rem', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: brandColor, background: `${brandColor}12`, padding: '0.35rem 0.85rem', borderRadius: '8px', border: `1px solid ${brandColor}25` }}>
                      {selectedProject.category}
                    </span>
                    <span className="tag" style={{ fontSize: '0.75rem', borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                      {selectedProject.complexity || "Production Grade"}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.8px', lineHeight: 1.2, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Two-Column Responsive Layout */}
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
                  
                  {/* Left Column: Detailed Case Study Narrative */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    {/* Narrative Overview */}
                    {selectedProject.caseStudy && (
                      <>
                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <span style={{ display: 'inline-block', width: '4px', height: '16px', borderRadius: '2px', background: brandColor }}></span>
                            Systems Overview
                          </h4>
                          <p style={{ color: '#a1a1aa', fontSize: '0.98rem', lineHeight: 1.65, textAlign: 'justify' }}>
                            {selectedProject.caseStudy.overview}
                          </p>
                        </div>

                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <span style={{ display: 'inline-block', width: '4px', height: '16px', borderRadius: '2px', background: brandColor }}></span>
                            The Technical Challenge
                          </h4>
                          <p style={{ color: '#a1a1aa', fontSize: '0.98rem', lineHeight: 1.65, textAlign: 'justify' }}>
                            {selectedProject.caseStudy.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <span style={{ display: 'inline-block', width: '4px', height: '16px', borderRadius: '2px', background: brandColor }}></span>
                            Architecture Blueprint
                          </h4>
                          <p style={{ color: '#a1a1aa', fontSize: '0.98rem', lineHeight: 1.65, textAlign: 'justify' }}>
                            {selectedProject.caseStudy.blueprint}
                          </p>
                        </div>
                      </>
                    )}

                    {!selectedProject.caseStudy && (
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <span style={{ display: 'inline-block', width: '4px', height: '16px', borderRadius: '2px', background: brandColor }}></span>
                          System Description
                        </h4>
                        <p style={{ color: '#a1a1aa', fontSize: '0.98rem', lineHeight: 1.65 }}>
                          {selectedProject.description}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Right Column: Dynamic Graphics, Telemetry HUD, Tech tags, & Actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '1.8rem', borderRadius: '20px' }}>
                    
                    {/* Dynamic Graphics & Visualizers */}
                    <div>
                      <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.05em' }}>Interactive Systems Activity</span>
                      
                      {selectedProject.title.includes("RAG") && (
                        <svg width="100%" height="150" viewBox="0 0 400 150" style={{ overflow: 'visible' }}>
                          <defs>
                            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                          <path d="M 50 75 Q 125 35 200 75 T 350 75" fill="none" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.25" />
                          <path d="M 50 75 Q 125 115 200 75 T 350 75" fill="none" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.25" />
                          <motion.circle r="6" fill="#6366f1">
                            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 50 75 Q 125 35 200 75 T 350 75" />
                          </motion.circle>
                          <motion.circle r="6" fill="#6366f1">
                            <animateMotion dur="4.5s" repeatCount="indefinite" path="M 50 75 Q 125 115 200 75 T 350 75" />
                          </motion.circle>
                          <g transform="translate(50, 75)">
                            <circle r="20" fill="url(#nodeGlow)" />
                            <circle r="6" fill="#6366f1" />
                            <text y="24" fill="#818cf8" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">INPUT</text>
                          </g>
                          <g transform="translate(200, 75)">
                            <circle r="30" fill="url(#nodeGlow)" />
                            <circle r="10" fill="#6366f1" />
                            <circle r="10" fill="none" stroke="#6366f1" strokeWidth="1.5">
                              <animate attributeName="r" values="10;25;10" dur="2.5s" repeatCount="indefinite" />
                              <animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <text y="-20" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-mono)">QDRANT</text>
                          </g>
                          <g transform="translate(350, 75)">
                            <circle r="20" fill="url(#nodeGlow)" />
                            <circle r="6" fill="#6366f1" />
                            <text y="24" fill="#818cf8" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">RESPONSE</text>
                          </g>
                        </svg>
                      )}

                      {selectedProject.title.includes("Hermes") && (
                        <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#a855f7' }}>
                          <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '0.4rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                            <span>$ hermes --swarm-status</span>
                            <span style={{ color: '#10b981' }}>● ONLINE</span>
                          </div>
                          <p style={{ color: '#71717a' }}>[05:42:01] Loading crawlers...</p>
                          <p style={{ color: '#a1a1aa' }}>[05:42:02] Running 17 distributed tasks...</p>
                          <p style={{ color: '#ffffff' }}>[05:42:03] Lighthouse auditor score: <strong style={{ color: '#10b981' }}>98% SEO</strong></p>
                          <p style={{ color: '#e4e4e7', textShadow: '0 0 10px rgba(168,85,247,0.3)' }}>{"[05:42:04] fix dispatched -> github_fixer.py [PR SUCCESS]"}</p>
                        </div>
                      )}

                      {selectedProject.title.includes("Forecasting") && (
                        <svg width="100%" height="150" viewBox="0 0 400 150" style={{ overflow: 'visible' }}>
                          <defs>
                            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M 20 120 C 80 80, 120 130, 180 60 C 240 -10, 300 90, 380 30 L 380 130 L 20 130 Z" fill="url(#waveGrad)" />
                          <path d="M 20 120 C 80 80, 120 130, 180 60 C 240 -10, 300 90, 380 30" fill="none" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
                          <line x1="20" y1="130" x2="380" y2="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                          <line x1="20" y1="90" x2="380" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="20" y1="50" x2="380" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                          <motion.line
                            x1="20" y1="10" x2="20" y2="130"
                            stroke="#ec4899" strokeWidth="1.5"
                            animate={{ x: [20, 380, 20] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                          />
                          <motion.circle
                            r="5" fill="#ffffff" stroke="#ec4899" strokeWidth="2"
                            animate={{ cx: [20, 180, 380, 180, 20], cy: [120, 60, 30, 60, 120] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                          />
                        </svg>
                      )}

                      {selectedProject.title.includes("Social Media") && (
                        <div className="flex-center" style={{ flexDirection: 'column', height: '140px', gap: '0.8rem' }}>
                          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                            <svg width="80" height="80" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="50.24" transform="rotate(-90 50 50)" />
                            </svg>
                            <div className="flex-center" style={{ position: 'absolute', inset: 0, flexDirection: 'column' }}>
                              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>99.2%</span>
                            </div>
                          </div>
                          <div className="flex" style={{ gap: '1.2rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                            <span style={{ color: '#a1a1aa' }}>Ingestion: <strong style={{ color: '#ffffff' }}>10k/s</strong></span>
                            <span style={{ color: '#a1a1aa' }}>Stability: <strong style={{ color: '#ec4899' }}>98%</strong></span>
                          </div>
                        </div>
                      )}

                      {selectedProject.title.includes("Voice") && (
                        <div className="flex-center" style={{ gap: '0.5rem', height: '130px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', width: '100%', padding: '0 1rem' }}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => {
                            const heights = [25, 55, 80, 110, 75, 35, 65, 95, 45, 25];
                            return (
                              <motion.div
                                key={idx}
                                animate={{ height: [`${heights[idx-1]*0.3}px`, `${heights[idx-1]}px`, `${heights[idx-1]*0.3}px`] }}
                                transition={{ repeat: Infinity, duration: 1.4, delay: idx * 0.12, ease: "easeInOut" }}
                                style={{
                                  width: '5px',
                                  borderRadius: '3px',
                                  background: 'linear-gradient(to top, #06b6d4, #0891b2)',
                                  boxShadow: '0 0 8px rgba(6,182,212,0.4)'
                                }}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Live Systems Telemetry */}
                    <div>
                      <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>Performance Telemetry</span>
                      
                      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '12px' }}>
                          <span style={{ fontSize: '0.6rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Operational Metric</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
                            {selectedProject.metric || "98% Stable"}
                          </span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '12px' }}>
                          <span style={{ fontSize: '0.6rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Target Architecture</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: brandColor, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                            {selectedProject.architecture || "Core Pipeline"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Proven Impact Details */}
                    {selectedProject.caseStudy && (
                      <div>
                        <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>Proven Systems Impact</span>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#a1a1aa', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {selectedProject.caseStudy.impactDetails.map((det, dIdx) => (
                            <li key={dIdx} style={{ lineHeight: 1.4 }}>{det}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technology Stack tags */}
                    <div>
                      <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>Verified Tech Stack</span>
                      <div className="flex" style={{ gap: '0.4rem', flexWrap: 'wrap' }}>
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="tag" style={{ fontSize: '0.72rem', padding: '0.25rem 0.75rem', borderColor: 'rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive CTAs */}
                    <div className="flex" style={{ gap: '0.8rem', marginTop: '0.5rem', width: '100%' }}>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ 
                          flex: 1, 
                          justifyContent: 'center', 
                          background: `linear-gradient(135deg, ${brandColor}, rgba(0,0,0,0.85))`,
                          border: `1.5px solid ${brandColor}40`,
                          boxShadow: `0 8px 25px ${brandColor}20`
                        }}
                      >
                        Verify Live Repo <ExternalLink size={14} />
                      </a>
                      
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          // Smooth scroll to contact
                          const contactSec = document.getElementById("contact");
                          if (contactSec) {
                            contactSec.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="btn btn-outline"
                        style={{ 
                          justifyContent: 'center',
                          padding: '0.7rem 1.2rem'
                        }}
                      >
                        Let's Build This
                      </button>
                    </div>

                  </div>

                </div>

              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Conversion Contact Form */}
      <section className="section" id="contact" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <SpotlightCard id="contact-form-container" className="glass-card" style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }} whileHover={{ scale: 1 }} whileTap={{ scale: 1 }}>
            
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              
              {/* Form Info */}
              <div>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1.1 }}>
                  Let's Build <span className="text-gradient">Something Iconic.</span>
                </h2>
                <p style={{ color: '#a1a1aa', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                  Currently accepting technical roles, autonomous swarm projects, and advanced integrations. Send me a message directly or connect via my active coordinates below.
                </p>

                <div className="flex" style={{ flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  <a href="mailto:tirth.p.patel143@gmail.com" title="Email Tirth Patel directly at tirth.p.patel143@gmail.com" className="flex" style={{ gap: '0.8rem', color: '#a1a1aa', fontSize: '1.05rem', alignItems: 'center', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-bright)'} onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
                    <Mail size={20} className="text-gradient" /> tirth.p.patel143@gmail.com
                  </a>
                  <a href="tel:6353782035" title="Call Tirth Patel at +91 6353782035" className="flex" style={{ gap: '0.8rem', color: '#a1a1aa', fontSize: '1.05rem', alignItems: 'center', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-bright)'} onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
                    <Phone size={20} className="text-gradient" /> +91 6353782035
                  </a>
                  <div className="flex" style={{ gap: '0.8rem', color: '#a1a1aa', fontSize: '1.05rem', alignItems: 'center' }}>
                    <MapPin size={20} className="text-gradient" /> Gandhinagar, Gujarat, India
                  </div>
                </div>

                <div className="flex" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
                  <a 
                    href="https://github.com/tirthpatel143" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline" 
                    style={{ padding: '0.6rem 1.2rem', borderRadius: '10px', fontSize: '0.9rem', gap: '0.5rem' }}
                    title="View Tirth Patel's GitHub Profile"
                  >
                    <GithubIcon size={16} /> GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tirthpatel143/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline" 
                    style={{ padding: '0.6rem 1.2rem', borderRadius: '10px', fontSize: '0.9rem', gap: '0.5rem' }}
                    title="Connect with Tirth Patel on LinkedIn"
                  >
                    <LinkedInIcon size={16} /> LinkedIn
                  </a>
                </div>

                {/* Premium System Operations Panel */}
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '1.8rem', borderRadius: '20px', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, height: '2px', width: '35%', background: 'linear-gradient(90deg, var(--primary), transparent)' }} />
                  <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                      <span className="swarm-node-pulse" style={{ width: '8px', height: '8px', background: '#00f0ff', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #00f0ff' }}></span>
                      GATEWAY STATUS: ACTIVE
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-bright)', fontWeight: 600 }}>ping: 14ms</span>
                  </div>
                  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.02)' }}>
                      <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.2rem' }}>AGENT SWARMS</span>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'var(--font-display)' }}>17 Active Workers</span>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.02)' }}>
                      <span style={{ fontSize: '0.65rem', color: '#64748b', display: 'block', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.2rem' }}>DATABASE RESPONSE</span>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#06b6d4', fontFamily: 'var(--font-display)' }}>Qdrant Vector DB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Input Interface */}
              <SpotlightCard className="glass-card" style={{ padding: '3rem', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255,255,255,0.03)' }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}>
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ textAlign: 'center', padding: '2rem 0' }}
                    >
                      <CheckCircle2 size={60} style={{ color: 'var(--primary)', marginBottom: '1.5rem', margin: '0 auto', filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.4))' }} />
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem' }}>Transmission Received!</h3>
                      <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
                        Thank you for getting in touch. I will read your message and respond via email within 24 hours. Let's make something amazing.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleContactSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Interactive Quick Templates */}
                      <div style={{ marginBottom: '2rem' }}>
                        <label style={{ fontSize: '0.8rem', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.8rem' }}>
                          ⚡ Click a Quick-Template Preset:
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                          {[
                            {
                              id: 'job',
                              label: '💼 Job Offer',
                              msg: "Hi Tirth,\n\nI reviewed your portfolio and was highly impressed by your Interactive AI Swarms and Zero-Hallucination RAG simulations. We are actively hiring for an AI Engineer / Software Engineer role and would love to chat with you about joining our team.\n\nBest regards,"
                            },
                            {
                              id: 'collab',
                              label: '⚡ Collaboration',
                              msg: "Hi Tirth,\n\nI am working on an agentic workflow project and would love to collaborate with you to integrate some of the autonomous state gateway architectures and Python fixers you developed. Let's schedule a brief call to align on ideas.\n\nCheers,"
                            },
                            {
                              id: 'coffee',
                              label: '☕ Coffee Chat',
                              msg: "Hi Tirth,\n\nI love your tech stack and research projects. I'd love to connect for a 15-minute virtual coffee chat to trade insights on LlamaIndex, Qdrant, and Agentic SEO swarms.\n\nWarmly,"
                            }
                          ].map((tmpl) => (
                            <button
                              key={tmpl.id}
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  message: tmpl.msg
                                });
                              }}
                              style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                color: '#e4e4e7',
                                padding: '0.5rem 0.9rem',
                                borderRadius: '10px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary)';
                                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.05)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                              }}
                            >
                              {tmpl.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="contact-input-group">
                        <input 
                          type="text" 
                          placeholder=" "
                          className="contact-input" 
                          id="form-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <label htmlFor="form-name" className="contact-label">Full Name</label>
                      </div>

                      <div className="contact-input-group">
                        <input 
                          type="email" 
                          placeholder=" "
                          className="contact-input" 
                          id="form-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <label htmlFor="form-email" className="contact-label">Email Address</label>
                      </div>

                      <div className="contact-input-group" style={{ marginBottom: '2.5rem' }}>
                        <textarea 
                          placeholder=" "
                          className="contact-input contact-textarea" 
                          id="form-message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                        <label htmlFor="form-message" className="contact-label">Your Message</label>
                      </div>

                      <div className="flex" style={{ gap: '1rem', marginTop: '1rem' }}>
                        <button 
                          type="submit" 
                          className="btn btn-primary" 
                          disabled={formStatus === 'sending'}
                          style={{ flex: 1, justifyContent: 'center' }}
                        >
                          {formStatus === 'sending' ? 'Sending Data...' : 'Dispatch Message'} <Send size={16} />
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => {
                            const subject = encodeURIComponent(
                              formData.name ? `Inquiry from ${formData.name} (Tirth Patel Portfolio)` : "Collaboration Inquiry | Tirth Patel Portfolio"
                            );
                            const body = encodeURIComponent(
                              `${formData.message || 'Hi Tirth,\n\nI would love to connect with you...'}\n\n---\nSender: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not specified'}`
                            );
                            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=tirth.p.patel143@gmail.com&su=${subject}&body=${body}`, '_blank');
                          }}
                          className="btn btn-outline"
                          style={{ 
                            padding: '0.7rem 1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            borderColor: '#ea433580',
                            color: '#ffffff',
                            background: 'rgba(234, 67, 53, 0.05)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#ea4335';
                            e.currentTarget.style.background = 'rgba(234, 67, 53, 0.15)';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(234, 67, 53, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#ea433580';
                            e.currentTarget.style.background = 'rgba(234, 67, 53, 0.05)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                          title="Open Gmail Composer with pre-filled message"
                        >
                          Direct Gmail 🚀
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </SpotlightCard>

            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Cyberpunk Footer */}
      <footer className="footer" style={{ background: '#020204', borderTop: '1px solid rgba(255,255,255,0.03)', padding: '3.5rem 0' }}>
        <div className="container flex" style={{ flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={18} className="text-gradient" />
            <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.5px', fontFamily: 'var(--font-display)' }}>
              TIRTH<span className="text-gradient">.DEV</span>
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#71717a' }}>
            © {new Date().getFullYear()} Tirth Patel. Designed & Architected with pure Next.js & Framer Motion.
          </p>
        </div>
      </footer>

      {/* Custom Cursor Overlay */}
      {hasPointer && (
        <>
          <motion.div
            style={{
              position: "fixed",
              left: cursorXSpring,
              top: cursorYSpring,
              width: isHovered ? 64 : 32,
              height: isHovered ? 64 : 32,
              borderRadius: "50%",
              border: `1.5px solid ${isHovered ? 'var(--primary)' : 'rgba(255, 255, 255, 0.25)'}`,
              backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.05)' : 'transparent',
              boxShadow: isHovered ? '0 0 20px rgba(99, 102, 241, 0.15)' : 'none',
              pointerEvents: "none",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary-bright)",
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              marginLeft: isHovered ? -16 : 0,
              marginTop: isHovered ? -16 : 0,
              transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, margin 0.2s ease",
            }}
          >
            {isHovered && hoverText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                {hoverText}
              </motion.span>
            )}
          </motion.div>
          
          <motion.div
            style={{
              position: "fixed",
              left: cursorX,
              top: cursorY,
              transform: "translate(12px, 12px)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "var(--primary-bright)",
              boxShadow: "0 0 8px var(--primary)",
              pointerEvents: "none",
              zIndex: 10000,
            }}
          />
        </>
      )}
    </main>
  );
}
