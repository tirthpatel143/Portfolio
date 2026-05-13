import { ArrowRight, Code, Code2, Briefcase, Mail, ExternalLink, Terminal, Cpu, Globe, Rocket, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const skills = [
    "Next.js", "React", "TypeScript", "Node.js", 
    "FastAPI", "Python", "PostgreSQL", "Docker", 
    "AWS", "GraphQL", "Tailwind CSS", "Redis"
  ];

  const projects = [
    {
      title: "Hermes SEO Swarm",
      description: "An autonomous multi-agent system for real-time SEO auditing and automated website optimization.",
      tech: ["Python", "OpenAI", "Next.js"],
      link: "#"
    },
    {
      title: "Stock Time Nexus",
      description: "Real-time stock market analysis platform with predictive modeling and portfolio management.",
      tech: ["FastAPI", "React", "yfinance"],
      link: "#"
    },
    {
      title: "Aura AI Dashboard",
      description: "A premium glassmorphic dashboard for monitoring AI agents and swarm performance metrics.",
      tech: ["Next.js", "Chart.js", "Lucide"],
      link: "#"
    }
  ];

  return (
    <main>
      {/* Navbar */}
      <nav className="nav glass">
        <div className="container flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex-center" style={{ gap: '0.5rem' }}>
            <Terminal size={22} className="text-gradient" />
            <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.5px' }}>TP.DEV</span>
          </div>
          <div className="flex nav-links" style={{ gap: '2rem' }}>
            <a href="#about" style={{ fontWeight: 500 }}>About</a>
            <a href="#skills" style={{ fontWeight: 500 }}>Skills</a>
            <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
            <a href="#contact" style={{ fontWeight: 500 }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="animate-fade-in" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="tag animate-float" style={{ marginBottom: '2rem', display: 'inline-block', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)', color: '#60a5fa' }}>
              Available for New Projects
            </span>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              Building the <span className="text-gradient">Future</span> <br /> 
              with AI & Modern Tech.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
              I'm Tirth Patel, a Software Engineer specializing in building high-performance 
              distributed systems, autonomous AI agents, and stunning user experiences.
            </p>
            <div className="flex-center" style={{ gap: '1.5rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>
                Engineering <span className="text-gradient">Excellence</span>
              </h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Passionate about bridging the gap between complex backend logic and elegant frontend design. 
                With expertise in cloud architecture and AI orchestration, I build applications that are 
                scalable, efficient, and user-centric.
              </p>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <Cpu className="text-gradient" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>Performance</h4>
                  <p style={{ fontSize: '0.9rem', color: '#71717a' }}>Optimizing every millisecond for seamless user flow.</p>
                </div>
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <Globe className="text-gradient" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>Scalability</h4>
                  <p style={{ fontSize: '0.9rem', color: '#71717a' }}>Architecture built to grow with your user base.</p>
                </div>
              </div>
            </div>
            <div className="flex-center">
               <div className="about-img" style={{ position: 'relative', width: '380px', height: '450px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)' }}>
                 <Image 
                   src="/images/hero-bg.png" 
                   alt="Profile" 
                   fill 
                   style={{ objectFit: 'cover', filter: 'brightness(0.7) contrast(1.1)' }}
                 />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(transparent, rgba(10,10,10,0.95))' }}>
                   <p style={{ fontWeight: 800, fontSize: '1.2rem' }}>Innovation First</p>
                   <p style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>System Architect</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)', borderY: '1px solid var(--glass-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center' }}>
            My <span className="text-gradient">Stack</span>
          </h2>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center' }}>
            {skills.map((skill) => (
              <span key={skill} className="glass-card" style={{ padding: '0.8rem 1.8rem', fontWeight: 600, fontSize: '1rem' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4rem' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {projects.map((project, i) => (
              <div key={i} className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                   <Rocket className="text-gradient" size={32} />
                   <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <a href="#" style={{ color: '#71717a' }}><Code2 size={20} /></a>
                      <a href="#" style={{ color: '#71717a' }}><ExternalLink size={20} /></a>
                   </div>
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800 }}>{project.title}</h3>
                <p style={{ color: '#a1a1aa', marginBottom: '2rem', lineHeight: 1.6, fontSize: '1rem' }}>{project.description}</p>
                <div className="flex" style={{ gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tech.map(t => <span key={t} className="tag" style={{ fontSize: '0.75rem', background: 'rgba(59, 130, 246, 0.05)', color: '#93c5fd' }}>{t}</span>)}
                </div>
                <a href={project.link} className="flex" style={{ alignItems: 'center', gap: '0.5rem', color: '#3b82f6', fontWeight: 700, fontSize: '0.95rem' }}>
                  Case Study <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="glass-card contact-card" style={{ padding: '5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
              Have a project in mind? Or just want to say hi? My inbox is always open.
            </p>
            <div className="flex-center" style={{ gap: '2.5rem', flexWrap: 'wrap' }}>
              <a href="#" className="glass-card flex-center" style={{ width: '60px', height: '60px', borderRadius: '50%' }}><Code2 size={24} /></a>
              <a href="#" className="glass-card flex-center" style={{ width: '60px', height: '60px', borderRadius: '50%' }}><Briefcase size={24} /></a>
              <a href="#" className="glass-card flex-center" style={{ width: '60px', height: '60px', borderRadius: '50%' }}><Mail size={24} /></a>
            </div>
            <div style={{ marginTop: '4rem' }}>
               <a href="mailto:hello@example.com" style={{ fontSize: '1.5rem', fontWeight: 700, borderBottom: '2px solid var(--primary)' }}>
                 hello@tirthpatel.dev
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <Terminal size={24} className="text-gradient" style={{ margin: '0 auto' }} />
          </div>
          <p style={{ fontWeight: 500, color: '#ededed', marginBottom: '0.5rem' }}>Tirth Patel</p>
          <p>© 2026. Built with Next.js & Artificial Intelligence.</p>
        </div>
      </footer>
    </main>
  );
}
