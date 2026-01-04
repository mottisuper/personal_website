"use client";
import React, { useEffect, useRef, useState } from "react";

// Mock projects data
const projects = [
  {
    name: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with ML insights for business intelligence and predictive analytics.",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "Node.js"],
  },
  {
    name: "Real-time Chat Application",
    description: "Scalable messaging platform with end-to-end encryption, file sharing, and video conferencing capabilities.",
    technologies: ["Next.js", "WebSocket", "PostgreSQL", "Redis", "TypeScript"],
  },
  {
    name: "Machine Learning Model Deployment",
    description: "Automated ML pipeline for model training, versioning, and deployment with CI/CD integration.",
    technologies: ["Python", "Docker", "Kubernetes", "MLflow", "FastAPI"],
  },
  {
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment processing, inventory management, and analytics dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
  },
];

// Skills data
const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TensorFlow",
  "PyTorch",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git",
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["hero"]));
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const glassCardStyle = {
    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "40px 50px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    transition: "all 0.4s ease",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#e5e7eb",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => (sectionRefs.current["hero"] = el)}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div
          className="card"
          style={{
            ...glassCardStyle,
            textAlign: "center",
            maxWidth: "500px",
            width: "90%",
            animation: visibleSections.has("hero") ? "fadeUp 1s ease-out forwards" : "none",
          }}
        >
          <div
            className="avatar"
            style={{
              width: "120px",
              height: "120px",
              margin: "0 auto 25px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #38bdf8",
              animation: "pulseGlow 5s ease-in-out infinite",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User profile icon"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "10px",
              letterSpacing: "0.5px",
            }}
          >
            Motti Aronsohn
          </h1>
          <div
            className="glow-line"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, transparent, #38bdf8, transparent)",
              margin: "22px auto",
              borderRadius: "10px",
            }}
          ></div>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 400, color: "#9ca3af", marginBottom: "30px" }}>
            Data Science & Fullstack Engineer
          </h2>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.linkedin.com/in/motti-aronsohn/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "10px",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "0.9rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(56, 189, 248, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "10px",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "0.9rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(56, 189, 248, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "10px",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "0.9rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(56, 189, 248, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => (sectionRefs.current["about"] = el)}
        style={{
          padding: "80px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            ...glassCardStyle,
            opacity: visibleSections.has("about") ? 1 : 0,
            transform: visibleSections.has("about") ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginBottom: "20px",
              color: "#38bdf8",
              textAlign: "center",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#d1d5db",
              textAlign: "center",
            }}
          >
            I'm a passionate Data Science & Fullstack Engineer with expertise in building scalable applications
            and implementing machine learning solutions. I specialize in creating end-to-end systems that combine
            data-driven insights with modern web technologies. My work spans from developing predictive models to
            building responsive user interfaces, always focusing on clean code and user experience.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={(el) => (sectionRefs.current["skills"] = el)}
        style={{
          padding: "80px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            ...glassCardStyle,
            opacity: visibleSections.has("skills") ? 1 : 0,
            transform: visibleSections.has("skills") ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginBottom: "30px",
              color: "#38bdf8",
              textAlign: "center",
            }}
          >
            Skills & Technologies
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill}
                style={{
                  padding: "12px 24px",
                  borderRadius: "25px",
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#38bdf8",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "default",
                  transition: "all 0.3s ease",
                  animation: visibleSections.has("skills")
                    ? `fadeIn 0.5s ease ${index * 0.05}s both`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.2)";
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 5px 20px rgba(56, 189, 248, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            marginBottom: "40px",
            color: "#38bdf8",
            textAlign: "center",
          }}
        >
          Featured Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              style={{
                ...glassCardStyle,
                padding: "30px",
                opacity: visibleSections.has("projects") ? 1 : 0,
                transform: visibleSections.has("projects") ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 30px 80px rgba(0, 0, 0, 0.75)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.6)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(139, 92, 246, 0.2))",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                💻
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginBottom: "15px",
                  color: "#38bdf8",
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "15px",
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      color: "#38bdf8",
                      fontSize: "0.8rem",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        style={{
          padding: "80px 20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            ...glassCardStyle,
            textAlign: "center",
            opacity: visibleSections.has("contact") ? 1 : 0,
            transform: visibleSections.has("contact") ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginBottom: "20px",
              color: "#38bdf8",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#d1d5db",
              marginBottom: "30px",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.linkedin.com/in/motti-aronsohn/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 30px",
                borderRadius: "10px",
                background: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                color: "#38bdf8",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(56, 189, 248, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="mailto:contact@example.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 30px",
                borderRadius: "10px",
                background: "rgba(56, 189, 248, 0.15)",
                border: "1px solid rgba(56, 189, 248, 0.4)",
                color: "#38bdf8",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(56, 189, 248, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 0 40px rgba(56, 189, 248, 0.65);
          }
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.75);
          transition: all 0.4s ease;
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          
          .card {
            padding: 30px 25px !important;
          }
        }
      `}</style>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
