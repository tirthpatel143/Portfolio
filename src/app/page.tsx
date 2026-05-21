"use client";

import { useState, useRef } from "react";
import { 
  ArrowRight, Code, Code2, Briefcase, Mail, ExternalLink, 
  Terminal, Cpu, Globe, Rocket, MessageSquare, 
  Layers, Database, Sparkles, Star, ChevronRight,
  Send, RefreshCw, Play
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "Initializing Nous Hermes Terminal environment...",
    "Loading LLM provider: openrouter/google/gemini-2.5-flash:free...",
    "Ready. Type a command or click one of the quick actions below.",
    "Type 'help' to see available commands."
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleCommand = async (cmd: string) => {
    if (!cmd.trim() || isTyping) return;
    setIsTyping(true);
    
    // Add command to terminal
    setTerminalLines(prev => [...prev, `tirthdev@macos ~ % ${cmd}`]);
    setInputValue("");
    
    // Auto-scroll
    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    // Simulate thinking delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const lowerCmd = cmd.toLowerCase().trim();
    let responseLines: string[] = [];

    if (lowerCmd === "help" || lowerCmd === "/help") {
      responseLines = [
        "🤖 Nous Hermes - Available commands:",
        "  /xurl           - Initialize xurl skill & verify X API credentials",
        "  whoami          - Query current authenticated X handle details",
        "  post [text]     - Draft and post a new update to X via Free API",
        "  bookmarks       - Fetch and ingest user bookmarks (Free fallback enabled)",
        "  help            - View this instructions panel",
        "  clear           - Wipe the terminal output clean"
      ];
    } else if (lowerCmd === "clear") {
      setTerminalLines([]);
      setIsTyping(false);
      return;
    } else if (lowerCmd === "/xurl") {
      responseLines = [
        "⚡ Loading X-Agent skill: xurl...",
        "⚙️ Scanning PATH for xurl executable...",
        "   ✓ Found xurl CLI at ~/.local/bin/xurl (v1.2.0)",
        "🔑 Validating X developer application credentials...",
        "   ✓ App Name: 'my-portfolio-app'",
        "   ✓ Client ID: 817f39...0a1h (Free Tier Write-Only)",
        "📡 Establishing OAuth 2.0 Handshake...",
        "   ✓ Tokens verified (stored in ~/.hermes/auth.json)",
        "👤 Authenticated as X user: @tirthdev",
        "",
        "✓ X-Agent skill loaded. You are ready to tweet & interact conversationally for $0!"
      ];
    } else if (lowerCmd === "whoami") {
      responseLines = [
        "📡 Running: xurl whoami",
        "-------------------------------------------------------",
        "  Authorized X Username : @tirthdev",
        "  Client Application    : my-portfolio-app",
        "  OAuth 2.0 Scopes      : tweet.read, tweet.write, users.read",
        "  Active API Plan       : Free Tier ($0/month Limit)",
        "  Daily Limits          : 50 posts/day max (1,500/month)",
        "  Connectivity Status   : HEALTHY (200 OK)",
        "-------------------------------------------------------"
      ];
    } else if (lowerCmd.startsWith("post ")) {
      const tweetText = cmd.slice(5).replace(/^['"]|['"]$/g, "");
      responseLines = [
        "🧠 Intent Detected: Post text update to X (Twitter)",
        `📝 Content: "${tweetText}"`,
        "📋 Planning steps:",
        "  1. Verify tweet length (less than 280 chars)",
        "  2. Invoke xurl CLI: xurl post [content]",
        "  3. Monitor JSON callback for tweet ID & URL",
        "",
        "🚀 Executing: xurl post \"mock_payload\"...",
        "   Sending payload to api.twitter.com/2/tweets...",
        "   ✓ API 201 Created response received!",
        "",
        "🎉 SUCCESS! Posted to X for $0.00!",
        "-------------------------------------------------------",
        "  Tweet ID  : 2047107136023650625",
        "  Author    : @tirthdev",
        `  Text      : "${tweetText}"`,
        `  Link      : https://x.com/tirthdev/status/2047107136023650625`,
        "-------------------------------------------------------"
      ];
    } else if (lowerCmd === "bookmarks") {
      responseLines = [
        "🧠 Intent Detected: Retrieve bookmarks",
        "📡 Executing: xurl bookmarks -n 5...",
        "",
        "⚠️ X API Free Tier limitation encountered: endpoint requires Basic Tier ($100/mo).",
        "💡 Smart fallback activated: Ingesting local bookmarks database (bookmarks.json)...",
        "",
        "📂 Found 3 bookmarks cached in Hermes memory:",
        "  1. [@nousresearch] 'Nous Hermes 1.0 terminal agent is officially released!' (Tools, planning, execution in your terminal)",
        "  2. [@karpathy] 'AI agents running on your local shell represent a major UX shift. Standard APIs meet raw bash capability.'",
        "  3. [@xdevplatform] 'xurl CLI tool makes OAuth 2.0 scripting for X incredibly easy...'"
      ];
    } else {
      responseLines = [
        `🧠 Nous Hermes is thinking... input: "${cmd}"`,
        "🤖 Response:",
        `  \"I recognized your custom prompt! To interact with the X API, please try:`,
        `   - '/xurl' to initialize the skill`,
        `   - 'whoami' to view credential details`,
        `   - 'post \"[your message]\"' to post to X for free!\"`
      ];
    }

    // Print lines with minor typing delay
    for (let i = 0; i < responseLines.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 80));
      setTerminalLines(prev => [...prev, responseLines[i]]);
      setTimeout(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 20);
    }
    
    setIsTyping(false);
  };

  const clickSuggestion = (text: string) => {
    if (isTyping) return;
    setInputValue(text);
    handleCommand(text);
  };

  const skillCategories = [
    {
      title: "Intelligence & Backend",
      icon: <Sparkles className="text-gradient" size={20} />,
      skills: ["FastAPI", "Python", "Node.js", "LangChain", "OpenAI API", "PostgreSQL", "Redis"]
    },
    {
      title: "Frontend Excellence",
      icon: <Layers className="text-gradient" size={20} />,
      skills: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Database className="text-gradient" size={20} />,
      skills: ["Docker", "AWS", "CI/CD", "Vercel", "Linux", "GraphQL"]
    }
  ];

  const projects = [
    {
      title: "Hermes SEO Swarm",
      description: "Built an autonomous multi-agent system that automated SEO auditing for 500+ pages, reducing manual workload by 90%.",
      tech: ["Python", "OpenAI", "Next.js"],
      impact: "90% Efficiency Increase",
      link: "#"
    },
    {
      title: "Stock Time Nexus",
      description: "Real-time stock analysis platform processing 10k+ data points per second with 98% prediction accuracy on market trends.",
      tech: ["FastAPI", "React", "yfinance"],
      impact: "98% Accuracy Rate",
      link: "#"
    },
    {
      title: "Hermes X-Agent (xurl)",
      description: "Connected Nous Hermes to X (Twitter) using OAuth 2.0 and xurl CLI, enabling conversational posting and bookmark ingestion at $0.",
      tech: ["Nous Hermes", "xurl CLI", "OAuth 2.0", "Next.js"],
      impact: "100% Free Autonomous Posting",
      link: "#hermes-demo"
    },
    {
      title: "Aura AI Dashboard",
      description: "Premium glassmorphic interface for monitoring swarm health, used to manage 17+ autonomous agents in real-time.",
      tech: ["Next.js", "Chart.js", "Lucide"],
      impact: "Real-time Orchestration",
      link: "#"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main style={{ position: 'relative' }}>
      {/* Animated Orbs */}
      <div className="orb orb-primary"></div>
      <div className="orb orb-secondary"></div>

      {/* Navbar */}
      <nav className="nav glass">
        <div className="container flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex-center" style={{ gap: '0.5rem' }}>
            <Terminal size={22} className="text-gradient" />
            <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.5px' }}>TP.DEV</span>
          </div>
          <div className="flex nav-links" style={{ gap: '2rem' }}>
            <a href="#about" style={{ fontWeight: 500 }}>About</a>
            <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
          >
            <div className="flex-center" style={{ marginBottom: '2rem' }}>
              <span className="tag animate-float" style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
                Available for New Challenges
              </span>
            </div>
            <h1 style={{ fontSize: '5rem', lineHeight: 1, fontWeight: 900, marginBottom: '2rem', letterSpacing: '-3px' }}>
              I Build <span className="text-gradient">Autonomous Systems</span> <br /> 
              & High-Impact User Experiences.
            </h1>
            <p style={{ fontSize: '1.4rem', color: '#a1a1aa', maxWidth: '750px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
              Software Engineer & AI Architect specializing in bridging complex 
              intelligence with world-class design. Turning ideas into scalable reality.
            </p>
            <div className="flex-center" style={{ gap: '1.5rem', flexWrap: 'wrap' }}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="btn btn-primary" 
                style={{ fontSize: '1.1rem' }}
              >
                View Portfolio <ChevronRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="btn btn-outline" 
                style={{ fontSize: '1.1rem' }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section style={{ padding: '2rem 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container flex-center" style={{ gap: '4rem', flexWrap: 'wrap' }}>
          {[
            { label: "Years Exp.", value: "5+" },
            { label: "Projects Delivered", value: "50+" },
            { label: "Lines of Code", value: "100k+" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
               <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">{stat.value}</h3>
               <p style={{ color: '#71717a', fontSize: '0.9rem', fontWeight: 600 }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div 
            {...fadeInUp}
            className="flex" 
            style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
          >
            <div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>Featured <span className="text-gradient">Work</span></h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.1rem' }}>Proven results across AI, FinTech, and SEO.</p>
            </div>
            <a href="#" className="flex" style={{ alignItems: 'center', gap: '0.5rem', color: '#3b82f6', fontWeight: 600 }}>
              See all projects <ExternalLink size={16} />
            </a>
          </motion.div>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="glass-card" 
                style={{ padding: '2.5rem', position: 'relative' }}
              >
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                  <span className="tag" style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                    {project.impact}
                  </span>
                </div>
                <Rocket className="text-gradient" size={32} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 800 }}>{project.title}</h3>
                <p style={{ color: '#a1a1aa', marginBottom: '2rem', lineHeight: 1.6, fontSize: '1.05rem' }}>{project.description}</p>
                <div className="flex" style={{ gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tech.map(t => <span key={t} className="tag" style={{ fontSize: '0.75rem' }}>{t}</span>)}
                </div>
                <a href={project.link} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  View Case Study
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hermes Interactive Playground */}
      <section id="hermes-demo" className="section" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(59,130,246,0.03) 50%, rgba(10,10,10,0) 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Grid Background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: -1 }}></div>
        
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="tag animate-float" style={{ background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)', color: '#d8b4fe', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={16} /> Live Simulation
            </span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              Nous Hermes <span className="text-gradient">X-Agent Terminal</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: 1.6 }}>
              Experience how my autonomous terminal agent connects to the X API using <strong>xurl</strong>, OAuth 2.0, and OpenRouter free-tier LLMs for a <strong>$0 setup cost</strong>.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '950px', margin: '0 auto' }}>
            {/* Terminal Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card" 
              style={{ 
                padding: '0', 
                overflow: 'hidden', 
                border: '1px solid rgba(59, 130, 246, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px'
              }}
            >
              {/* Terminal Header */}
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.8rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div className="flex" style={{ gap: '0.5rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308', display: 'block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', display: 'block' }}></span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#71717a', fontFamily: 'monospace', fontWeight: 600 }}>
                  hermes-xurl-agent ~ bash
                </div>
                <div style={{ width: '48px' }}></div>
              </div>

              {/* Terminal Screen */}
              <div style={{ 
                background: '#070a13', 
                color: '#34d399', 
                fontFamily: 'Courier New, Courier, monospace', 
                padding: '1.5rem', 
                height: '400px', 
                overflowY: 'auto',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                {terminalLines.map((line, idx) => {
                  let style: React.CSSProperties = { whiteSpace: 'pre-wrap', marginBottom: '0.4rem' };
                  if (line.startsWith("tirthdev@macos")) {
                    style.color = '#60a5fa'; // Blue for prompt commands
                    style.fontWeight = 'bold';
                  } else if (line.startsWith("⚠️")) {
                    style.color = '#fbbf24'; // Yellow for warnings
                  } else if (line.startsWith("✓") || line.startsWith("🎉") || line.startsWith("SUCCESS")) {
                    style.color = '#34d399'; // Green for successes
                  } else if (line.startsWith("🧠") || line.startsWith("⚙️") || line.startsWith("📡") || line.startsWith("⚡")) {
                    style.color = '#c084fc'; // Purple for logs / metadata
                  } else if (line.startsWith("----------------")) {
                    style.color = '#4b5563'; // Gray dividers
                  } else if (line.includes("Authorized X") || line.includes("Tweet ID") || line.includes("Text") || line.includes("Link")) {
                    style.color = '#e2e8f0'; // Off-white for credential values
                  } else if (line.startsWith("Available commands")) {
                    style.color = '#a1a1aa'; // Muted gray
                  }
                  
                  return (
                    <div key={idx} style={style}>
                      {line}
                    </div>
                  );
                })}
                {isTyping && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#a1a1aa', fontStyle: 'italic', marginTop: '0.5rem' }}>
                    <RefreshCw size={14} className="animate-spin" /> Hermes is running skill pipelines...
                  </div>
                )}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Form Input */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(inputValue);
                }}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.01)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '1rem 1.5rem',
                  gap: '1rem'
                }}
              >
                <span style={{ color: '#60a5fa', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                  tirthdev@macos ~ %
                </span>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isTyping}
                  placeholder="Type a command (e.g. whoami, /xurl, post 'Hello World', bookmarks)..."
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    outline: 'none', 
                    color: 'white', 
                    fontFamily: 'monospace', 
                    fontSize: '1rem',
                    flex: 1,
                    caretColor: '#3b82f6'
                  }}
                />
                <button 
                  type="submit" 
                  disabled={isTyping || !inputValue.trim()}
                  className="btn btn-primary" 
                  style={{ 
                    padding: '0.6rem 1.2rem', 
                    borderRadius: '8px', 
                    fontSize: '0.85rem',
                    opacity: (isTyping || !inputValue.trim()) ? 0.5 : 1,
                    cursor: (isTyping || !inputValue.trim()) ? 'not-allowed' : 'pointer'
                  }}
                >
                  Run <Send size={14} />
                </button>
              </form>
            </motion.div>

            {/* Quick Actions Panel */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#71717a', fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.2rem' }}>
                💡 Click a quick command to execute immediately:
              </p>
              <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { label: "Initialize Skill", cmd: "/xurl" },
                  { label: "Check Session", cmd: "whoami" },
                  { label: "Post Free Tweet", cmd: 'post "Building autonomous agent pipelines for $0! 🤖"' },
                  { label: "Fetch Bookmarks", cmd: "bookmarks" },
                  { label: "Get Help Menu", cmd: "help" }
                ].map((s, i) => (
                  <button
                    key={i}
                    onClick={() => clickSuggestion(s.cmd)}
                    disabled={isTyping}
                    className="btn btn-outline"
                    style={{ 
                      fontSize: '0.85rem', 
                      padding: '0.5rem 1.2rem', 
                      borderRadius: '99px',
                      fontFamily: 'monospace',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'all 0.2s',
                      cursor: isTyping ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <Play size={10} className="text-gradient" /> {s.cmd.startsWith("post") ? "post" : s.cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Categorized */}
      <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <motion.h2 
            {...fadeInUp}
            style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center' }}
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {skillCategories.map((cat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card" 
                style={{ padding: '2.5rem' }}
              >
                <div className="flex" style={{ alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                   <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                      {cat.icon}
                   </div>
                   <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{cat.title}</h3>
                </div>
                <div className="flex" style={{ flexWrap: 'wrap', gap: '0.8rem' }}>
                  {cat.skills.map(skill => (
                    <motion.span 
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      key={skill} 
                      className="tag" 
                      style={{ fontWeight: 600, cursor: 'default' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="section">
        <div className="container">
           <motion.div 
            {...fadeInUp}
            className="glass-card" 
            style={{ padding: '4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
           >
              <Star className="text-gradient" size={40} style={{ marginBottom: '2rem', margin: '0 auto' }} />
              <p style={{ fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.5, marginBottom: '2.5rem', fontStyle: 'italic' }}>
                "Tirth didn't just build our SEO dashboard; he built a system that thinks for us. 
                His ability to blend AI intelligence with premium UX is unmatched."
              </p>
              <div>
                <p style={{ fontWeight: 800, fontSize: '1.2rem' }}>Alex Rivera</p>
                <p style={{ color: '#71717a' }}>Product Director @ Hermes Tech</p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section id="contact" className="section" style={{ paddingBottom: '150px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card contact-card" 
            style={{ padding: '5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              Ready to Build <span className="text-gradient">Something Iconic?</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto 4rem' }}>
              Currently accepting new high-impact projects. Let's discuss how we can scale your vision.
            </p>
            <div className="flex-center" style={{ gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@tirthpatel.dev" 
                className="btn btn-primary" 
                style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
              >
                Start a Conversation
              </motion.a>
              <a href="#" className="btn btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                Download CV
              </a>
            </div>
            <div className="flex-center" style={{ gap: '3rem' }}>
              <a href="#" className="flex" style={{ gap: '0.5rem', color: '#a1a1aa' }}><Code2 size={20} /> GitHub</a>
              <a href="#" className="flex" style={{ gap: '0.5rem', color: '#a1a1aa' }}><Briefcase size={20} /> LinkedIn</a>
              <a href="#" className="flex" style={{ gap: '0.5rem', color: '#a1a1aa' }}><Mail size={20} /> Email</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026. Architected with Passion & AI by Tirth Patel.</p>
        </div>
      </footer>
    </main>
  );
}
