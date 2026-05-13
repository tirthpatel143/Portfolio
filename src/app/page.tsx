import { 
  ArrowRight, Code, Code2, Briefcase, Mail, ExternalLink, 
  Terminal, Cpu, Globe, Rocket, MessageSquare, 
  Layers, Database, Sparkles, Star, ChevronRight
} from "lucide-react";
import Image from "next/image";

export default function Home() {
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
      title: "Aura AI Dashboard",
      description: "Premium glassmorphic interface for monitoring swarm health, used to manage 17+ autonomous agents in real-time.",
      tech: ["Next.js", "Chart.js", "Lucide"],
      impact: "Real-time Orchestration",
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
          <div className="animate-fade-in" style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
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
              <a href="#projects" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
                View Portfolio <ChevronRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline" style={{ fontSize: '1.1rem' }}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section style={{ padding: '2rem 0', background: 'rgba(255,255,255,0.02)', borderY: '1px solid var(--glass-border)' }}>
        <div className="container flex-center" style={{ gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
             <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">5+</h3>
             <p style={{ color: '#71717a', fontSize: '0.9rem', fontWeight: 600 }}>Years Exp.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
             <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">50+</h3>
             <p style={{ color: '#71717a', fontSize: '0.9rem', fontWeight: 600 }}>Projects Delivered</p>
          </div>
          <div style={{ textAlign: 'center' }}>
             <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">100k+</h3>
             <p style={{ color: '#71717a', fontSize: '0.9rem', fontWeight: 600 }}>Lines of Code</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>Featured <span className="text-gradient">Work</span></h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.1rem' }}>Proven results across AI, FinTech, and SEO.</p>
            </div>
            <a href="#" className="flex" style={{ alignItems: 'center', gap: '0.5rem', color: '#3b82f6', fontWeight: 600 }}>
              See all projects <ExternalLink size={16} />
            </a>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {projects.map((project, i) => (
              <div key={i} className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Categorized */}
      <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center' }}>
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.5rem' }}>
                <div className="flex" style={{ alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                   <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                      {cat.icon}
                   </div>
                   <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{cat.title}</h3>
                </div>
                <div className="flex" style={{ flexWrap: 'wrap', gap: '0.8rem' }}>
                  {cat.skills.map(skill => (
                    <span key={skill} className="tag" style={{ fontWeight: 600 }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="section">
        <div className="container">
           <div className="glass-card" style={{ padding: '4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              <Star className="text-gradient" size={40} style={{ marginBottom: '2rem', margin: '0 auto' }} />
              <p style={{ fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.5, marginBottom: '2.5rem', fontStyle: 'italic' }}>
                "Tirth didn't just build our SEO dashboard; he built a system that thinks for us. 
                His ability to blend AI intelligence with premium UX is unmatched."
              </p>
              <div>
                <p style={{ fontWeight: 800, fontSize: '1.2rem' }}>Alex Rivera</p>
                <p style={{ color: '#71717a' }}>Product Director @ Hermes Tech</p>
              </div>
           </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section id="contact" className="section" style={{ paddingBottom: '150px' }}>
        <div className="container">
          <div className="glass-card contact-card" style={{ padding: '5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(168,85,247,0.05))' }}>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              Ready to Build <span className="text-gradient">Something Iconic?</span>
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto 4rem' }}>
              Currently accepting new high-impact projects. Let's discuss how we can scale your vision.
            </p>
            <div className="flex-center" style={{ gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <a href="mailto:hello@tirthpatel.dev" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                Start a Conversation
              </a>
              <a href="#" className="btn btn-outline" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                Download CV
              </a>
            </div>
            <div className="flex-center" style={{ gap: '3rem' }}>
              <a href="#" className="flex" style={{ gap: '0.5rem', color: '#a1a1aa' }}><Code2 size={20} /> GitHub</a>
              <a href="#" className="flex" style={{ gap: '0.5rem', color: '#a1a1aa' }}><Briefcase size={20} /> LinkedIn</a>
              <a href="#" className="flex" style={{ gap: '0.5rem', color: '#a1a1aa' }}><Mail size={20} /> Email</a>
            </div>
          </div>
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
