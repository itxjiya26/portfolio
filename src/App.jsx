import { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Layout, 
  ExternalLink, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Send,
  Sparkles,
  Globe
} from "lucide-react";

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      title: "CareGrid Health — MERN Hospital & EHR Platform",
      description: "A comprehensive full-stack healthcare platform featuring Electronic Health Records (EHR) with vital tracking, clinical history tables, active prescriptions, and an integrated doctor appointment booking system.",
      tags: ["React", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs"],
      liveUrl: "https://hospital-management-system-3rsa.vercel.app/",
      githubUrl: "https://github.com/itxjiya26/hospital-management-system",
      featured: true
    },
    {
      title: "Interactive Web Development Dashboard",
      description: "A dynamic frontend application implementing state management, live API fetching, custom theme switching, and responsive user interfaces.",
      tags: ["React", "Vite", "JavaScript (ES6+)", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Layout color="#0ea5e9" size={24} />, desc: "React, Vite, HTML5, CSS3, Responsive Design" },
    { name: "Backend Development", icon: <Server color="#10b981" size={24} />, desc: "Node.js, Express.js, RESTful APIs, Serverless" },
    { name: "Database & Cloud", icon: <Database color="#8b5cf6" size={24} />, desc: "MongoDB Atlas, Mongoose, Vercel Deployment" },
    { name: "Tools & Workflow", icon: <Terminal color="#f59e0b" size={24} />, desc: "Git, GitHub, VS Code, Linux / WSL Environments" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#0f172a", color: "#f8fafc", minHeight: "100vh", margin: 0, padding: 0 }}>
      
      {/* Navigation Header */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 5%", borderBottom: "1px solid #1e293b", position: "sticky", top: 0, backgroundColor: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(10px)", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "800", fontSize: "1.25rem", color: "#38bdf8" }}>
          <Code2 size={28} /> Wajeeha.dev
        </div>
        <div style={{ display: "flex", gap: "2rem", fontSize: "0.95rem", fontWeight: "600" }}>
          <a href="#about" style={{ color: "#94a3b8", textDecoration: "none" }}>About</a>
          <a href="#skills" style={{ color: "#94a3b8", textDecoration: "none" }}>Skills</a>
          <a href="#projects" style={{ color: "#94a3b8", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ color: "#38bdf8", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "7rem 1.5rem 5rem 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#0369a120", border: "1px solid #0284c740", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.85rem", color: "#38bdf8", marginBottom: "1.5rem", fontWeight: "600" }}>
          <Sparkles size={16} /> Full-Stack MERN Developer
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "800", margin: "0 0 1rem 0", lineHeight: 1.1, color: "#ffffff" }}>
          Building Scalable & Modern Web Applications
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.6, margin: "0 0 2.5rem 0", maxWidth: "650px" }}>
          Hi, I'm <strong style={{ color: "#f8fafc" }}>Wajeeha Imran</strong>. I specialize in designing and developing robust full-stack applications with React, Node.js, and MongoDB, turning complex requirements into clean digital experiences.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#projects" style={{ backgroundColor: "#0ea5e9", color: "#ffffff", padding: "0.8rem 1.75rem", borderRadius: "10px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 14px rgba(14, 165, 233, 0.4)" }}>
            Explore Projects
          </a>
          <a href="#contact" style={{ backgroundColor: "transparent", color: "#f8fafc", border: "1px solid #334155", padding: "0.8rem 1.75rem", borderRadius: "10px", fontWeight: "700", textDecoration: "none" }}>
            Get in Touch
          </a>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" style={{ padding: "5rem 5%", backgroundColor: "#1e293b50", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "800", textAlign: "center", marginBottom: "3rem", color: "#ffffff" }}>
            Technical Expertise & Tech Stack
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {skills.map((skill, index) => (
              <div key={index} style={{ backgroundColor: "#1e293b", padding: "1.75rem", borderRadius: "16px", border: "1px solid #334155", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ backgroundColor: "#0f172a", width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #334155" }}>
                  {skill.icon}
                </div>
                <h3 style={{ margin: 0, fontSize: "1.15rem", color: "#ffffff" }}>{skill.name}</h3>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.5 }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: "6rem 5%", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "800", margin: "0 0 0.5rem 0", color: "#ffffff" }}>Featured Web Development Work</h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem" }}>Here are some of the full-stack applications I've built and deployed.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ backgroundColor: "#1e293b", borderRadius: "20px", border: "1px solid #334155", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", backgroundColor: "#0ea5e920", color: "#38bdf8", padding: "0.25rem 0.75rem", borderRadius: "20px", border: "1px solid #0ea5e940" }}>
                    Full-Stack MERN Project
                  </span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#ffffff", margin: "0.75rem 0 0.5rem 0" }}>{proj.title}</h3>
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#0f172a", color: "#f8fafc", padding: "0.6rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.4rem", border: "1px solid #334155" }}>
                    <Code2 size={16} /> Code
                  </a>
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#0ea5e9", color: "#ffffff", padding: "0.6rem 1rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
              <p style={{ margin: 0, color: "#94a3b8", lineHeight: 1.6, fontSize: "1rem" }}>{proj.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingTop: "0.5rem" }}>
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ backgroundColor: "#0f172a", color: "#cbd5e1", padding: "0.35rem 0.85rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: "600", border: "1px solid #334155" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "6rem 5%", backgroundColor: "#1e293b50", borderTop: "1px solid #1e293b" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "800", margin: "0 0 0.5rem 0", color: "#ffffff" }}>Let's Work Together</h2>
            <p style={{ color: "#94a3b8", fontSize: "1rem" }}>Have a project in mind or want to connect? Drop me a message below!</p>
          </div>

          <form onSubmit={handleSubmit} style={{ backgroundColor: "#1e293b", padding: "2.5rem", borderRadius: "20px", border: "1px solid #334155", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {submitted && (
              <div style={{ backgroundColor: "#065f4630", border: "1px solid #10b981", color: "#34d399", padding: "1rem", borderRadius: "10px", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "600" }}>
                <CheckCircle2 size={20} /> Thank you! Your message has been sent successfully.
              </div>
            )}
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>Your Name</label>
              <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", backgroundColor: "#0f172a", border: "1px solid #334155", color: "#fff", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>Your Email</label>
              <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", backgroundColor: "#0f172a", border: "1px solid #334155", color: "#fff", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>Message</label>
              <textarea required rows="4" placeholder="Write your message here..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", backgroundColor: "#0f172a", border: "1px solid #334155", color: "#fff", resize: "none", boxSizing: "border-box" }}></textarea>
            </div>
            <button type="submit" style={{ backgroundColor: "#0ea5e9", color: "#ffffff", border: "none", padding: "0.9rem", borderRadius: "8px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2.5rem", borderTop: "1px solid #1e293b", color: "#64748b", fontSize: "0.9rem" }}>
        <p style={{ margin: "0 0 1rem 0" }}>© 2026 Wajeeha Imran. Built with React & Vite, deployed on Vercel.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a href="https://github.com/itxjiya26" target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8" }}><Code2 size={20} /></a>
          <a href="mailto:wajeehaimran260@gmail.com" style={{ color: "#94a3b8" }}><Mail size={20} /></a>
          <a href="https://www.linkedin.com/in/wajeeha-imran-314672414/" target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", textDecoration: "none" }}><Globe size={20} /></a>
        </div>
      </footer>

    </div>
  );
}