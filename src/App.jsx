import Spotlight from './Spotlight';
import React, { useState, useEffect } from "react";
import {
  Linkedin,
  Code,
  Server,
  Cloud,
  User,
  Award,
  Github,
  ExternalLink,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mail,
  Shield,
  Database,
  Layers,
} from "lucide-react";

const Portfolio = () => {
  const skills = [
    {
      name: "Cloud Computing & AWS",
      icon: <Cloud className="w-6 h-6" />,
      details: "AWS Certified Solutions Architect — EC2, S3, Lambda, VPC, IAM, CloudWatch, Secrets Manager, Terraform",
    },
    {
      name: "DevOps & CI/CD",
      icon: <Server className="w-6 h-6" />,
      details: "GitHub Actions, GitLab CI/CD, Docker, Jenkins, Automated Pipelines, Infrastructure as Code",
    },
    {
      name: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      details: "React, Next.js, .NET Core, C#, TypeScript, Node.js, Vite, RESTful APIs, Microservices",
    },
    {
      name: "System Architecture",
      icon: <Layers className="w-6 h-6" />,
      details: "Event-Driven Architecture, CQRS, Clean Architecture, High-Concurrency Microservices, Legacy Migration",
    },
    {
      name: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      details: "MySQL, MS SQL Server, Redis, S3, Performance Optimization, Query Tuning",
    },
    {
      name: "Team Leadership",
      icon: <Shield className="w-6 h-6" />,
      details: "Cross-functional Team Leadership, Agile/Scrum, Technical Mentoring, Architecture Decision Records",
    },
  ];

  const experience = [
    {
      role: "Tech Lead",
      company: "Autoavans Technology (Sweden)",
      period: "July 2025 – Present",
      items: [
        "Led a cross-functional team of 6 engineers building a high-traffic financial transaction platform processing 1M+ daily requests",
        "Architected monolithic-to-microservices migration on AWS, reducing latency by 40%",
        "Migrated frontend to Vite achieving 60% faster hot reload speeds",
        "Built fault-tolerant APIs with Polly (retry/circuit breaker) — 99.9% platform uptime",
      ],
    },
    {
      role: "Associate Tech Lead",
      company: "The Gifted Company (Sweden)",
      period: "June 2024 – July 2025",
      items: [
        "Developed production React/Next.js (TypeScript) apps for a high-volume Gift Card Redeem Platform",
        "Optimized data loading by 30% via Next.js Server-Side Rendering",
        "Integrated Google Tags with Analytics dashboards for user behavior analysis",
        "Communicated architectural risks and trade-offs across product and executive teams",
      ],
    },
    {
      role: "Associate Tech Lead",
      company: "Autoavans Technology (Sweden)",
      period: "July 2022 – June 2024",
      items: [
        "Orchestrated legacy jQuery-to-React migration, reducing regression bugs by 40%",
        "Managed CI/CD deployments via AWS CloudWatch, S3, and Secrets Manager",
        "Mentored junior engineers on clean code, SOLID principles, and modern JS practices",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Mazarin (Sweden)",
      period: "Sep 2019 – May 2022",
      items: [
        "Full-system migration from legacy C# to React + .NET Core stack with automated testing",
        "Facilitated Agile sprints, task estimation, and feature prioritization",
      ],
    },
    {
      role: "Software Engineer / Trainee",
      company: "Mazarin (Sweden)",
      period: "Sep 2011 – Sep 2019",
      items: [
        "Engineered payment processing for a platform handling $12B+ annual volume (500K+ merchants)",
        "Built customer management, inventory, and SSO architecture using ASP.NET MVC and C#",
        "Started as part-time intern while completing BEng at University of Westminster",
      ],
    },
  ];

  const projects = [
    {
      name: "AI News",
      description:
        "A zero-dependency AI news aggregator that scrapes TechCrunch, The Verge, VentureBeat, Wired, and Hacker News every hour via GitHub Actions, then serves a fast static card-grid site with search and source filtering — fully automated and $0/month.",
      tags: ["Python", "GitHub Actions", "RSS", "GitHub Pages"],
      liveUrl: "https://dkcngomes.github.io/ai-news/",
      repoUrl: "https://github.com/dkcngomes/ai-news",
    },
    {
      name: "Climate Survival",
      description:
        "A climate-adaptive advisory platform that detects El Niño / La Niña, drought, flood, and heatwave signals, then recommends what to stock up on and which crops to plant before weather shifts. Features Google Gemini LLM re-ranking, interactive charts, a downloadable PDF survival report, live Sri Lanka market prices, and 5-language support.",
      tags: ["Next.js 16", ".NET 9", "Gemini AI", "Recharts", "i18n"],
      liveUrl: "https://climate-survival.netlify.app/",
      repoUrl: "https://github.com/dkcngomes/climate-survival",
    },
    {
      name: "Secure Chat Room",
      description:
        'A real-time chat platform with JWT-authenticated public ("General") and private DM rooms, image sharing, and an AI-agent-driven security layer that tracks sessions and emails an IP/GPS transcript on logout. Built with ASP.NET Core, SignalR, and a React + TypeScript frontend.',
      tags: [".NET 9", "SignalR", "React", "TypeScript", "AI Agent"],
      liveUrl: "https://kamare.netlify.app/chat",
      repoUrl: "https://github.com/dkcngomes/chat-app",
    },
    {
      name: "AI Creative Writing Canvas",
      description:
        "A generative-AI writing studio that helps you brainstorm, draft, and refine creative pieces on an interactive canvas. Built as a cloud-native web app and deployed on Google Cloud Run.",
      tags: ["AI", "Generative AI", "Cloud Run", "Web App"],
      liveUrl:
        "https://ais-pre-s5ba7w73xz23xubplr6yen-923915641458.asia-southeast1.run.app/",
      repoUrl: null,
    },
  ];

  // --- Projects carousel state ---
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index) =>
    setCurrent((index + projects.length) % projects.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, current]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <Spotlight />
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Nipuna Gomes
          </span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors text-indigo-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Nipuna Gomes — <br />
              <span className="text-indigo-500">Tech Lead</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              <strong className="text-slate-200">AWS Certified Solutions Architect</strong> with 15+ years of experience building scalable full-stack applications with <strong className="text-slate-200">.NET, React, and AWS</strong>. Specializing in microservices architecture, DevOps automation, and leading cross-functional engineering teams.
            </p>

            {/* Meta description (hidden, for SEO) */}
            <div className="sr-only" aria-hidden="true">
              Nipuna C. Gomes — Tech Lead, React Developer, Full Stack Developer, AWS Certified Tech Lead. Based in Colombo, Sri Lanka. Open to remote opportunities.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/nipuna-gomes/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-900 rounded-xl hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://www.credly.com/badges/01da665b-bcfd-49d1-afc7-421f91ba30cc"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-900 rounded-xl hover:bg-slate-800 border border-slate-800 transition-all flex items-center gap-2 group"
                title="View Credly Badge"
              >
                <Award className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium pr-2 text-slate-300 group-hover:text-amber-400 transition-colors">
                  AWS Certified
                </span>
              </a>

              <a
                href="mailto:dkcnipunagomes@gmail.com"
                className="p-3 bg-slate-900 rounded-xl hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center group"
                title="Email"
              >
                <Mail className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="images/profilepic.jpg"
                alt="Nipuna Gomes — AWS Certified Tech Lead and React & .NET Full Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-900 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section — CV-targeted */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <User className="text-indigo-500" /> About Me
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                <strong className="text-slate-200">Nipuna C. Gomes</strong> is a results-driven <strong className="text-slate-200">Tech Lead</strong> with 15+ years of experience architecting and scaling high-performance fintech and e-commerce platforms using <strong className="text-slate-200">.NET, React, and AWS</strong>. He is an <strong className="text-slate-200">AWS Certified Solutions Architect</strong> with a proven track record of leading cross-functional engineering teams, modernizing monolithic legacy applications into resilient microservices architectures, and managing platforms processing over 1M+ daily requests.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Based in <strong className="text-slate-200">Colombo, Sri Lanka</strong>, Nipuna holds a <strong className="text-slate-200">BEng (Hons) in Software Engineering</strong> from the <strong className="text-slate-200">University of Westminster, UK</strong>. He is open to remote roles as a <strong className="text-slate-200">Tech Lead, Senior Full Stack Developer (.NET + React), or Solutions Architect</strong>.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Key strengths: Team Leadership, Architecture Design, Performance Optimization, Agile Project Management, Technical Mentoring, Conflict Resolution. Languages: English (Fluent), Sinhala (Native).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-indigo-500 mb-2">{skill.icon}</div>
                    <h4 className="font-bold mb-1 text-sm">{skill.name}</h4>
                    <p className="text-xs text-slate-500 leading-tight">
                      {skill.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section — Full CV Timeline */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <Briefcase className="text-indigo-500" /> Experience
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
            15+ years of professional software engineering experience — from trainee to Tech Lead — working with Swedish enterprise teams.
          </p>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item pl-8 relative">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
                {i < experience.length - 1 && (
                  <div className="absolute left-[5px] top-5 w-[2px] bottom-0 bg-gradient-to-b from-indigo-500/40 to-transparent" />
                )}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3">
                    <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
                    <span className="text-indigo-400 text-sm font-medium">{exp.company}</span>
                    <span className="text-slate-500 text-xs sm:ml-auto">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.items.map((item, j) => (
                      <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-indigo-500 mt-1 flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-indigo-500" /> Projects
              </h2>
              <p className="text-slate-400 mb-10 max-w-2xl leading-relaxed">
                A selection of things I've built — from AI-powered tools to
                real-time platforms and climate-resilience apps.
              </p>

              {/* Carousel */}
              <div
                className="relative max-w-3xl mx-auto"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Slide counter */}
                <div className="text-xs text-slate-500 mb-4 text-center font-mono">
                  {current + 1} / {projects.length}
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {projects.map((project, i) => (
                      <div
                        key={i}
                        className="w-full flex-shrink-0 group flex flex-col p-6 md:p-8 bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-colors duration-300 min-h-[300px]"
                      >
                        <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tags.map((tag, t) => (
                            <span key={t} className="skill-pill">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" /> Live
                          </a>
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                            >
                              <Github className="w-4 h-4" /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev / Next arrows */}
                <button
                  onClick={prev}
                  aria-label="Previous project"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next project"
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {projects.map((project, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to project ${i + 1}: ${project.name}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-8 bg-indigo-500"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Award className="text-amber-400" /> Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-100 mb-2">🎓 Education</h3>
              <p className="text-indigo-400 font-medium">BEng (Hons) in Software Engineering</p>
              <p className="text-slate-400 text-sm mb-1">University of Westminster, United Kingdom</p>
              <p className="text-slate-500 text-xs">Second Class Honours — First Division · Sep 2010 – Sep 2015</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-100 mb-2">🏅 Certifications</h3>
              <p className="text-amber-400 font-medium">AWS Certified Solutions Architect – Associate</p>
              <p className="text-slate-400 text-sm mb-1">SAA-C03</p>
              <a
                href="https://www.credly.com/badges/01da665b-bcfd-49d1-afc7-421f91ba30cc"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 text-sm hover:text-indigo-300 flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" /> View Credly Badge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">Let's Work Together</h2>
          <p className="text-slate-400 mb-8">
            <MapPin className="inline w-4 h-4 text-indigo-400" /> Colombo, Sri Lanka · Open to Remote
          </p>

          {/* Direct Contact Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
             <a
              href="https://www.linkedin.com/in/nipuna-gomes/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors bg-slate-900 px-6 py-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 group"
            >
              <Linkedin className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>

            <a
              href="mailto:dkcnipunagomes@gmail.com"
              className="flex items-center justify-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors bg-slate-900 px-6 py-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 group"
            >
              <Mail className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">dkcnipunagomes@gmail.com</span>
            </a>

            <a
              href="https://github.com/dkcngomes"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors bg-slate-900 px-6 py-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 group"
            >
              <Github className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p className="mb-1">
          © {new Date().getFullYear()} Nipuna C. Gomes. AWS Certified Tech Lead · React & .NET Full Stack Developer · Colombo, Sri Lanka
        </p>
        <p className="text-xs text-slate-600">
          Built with React & Tailwind CSS. Available for remote opportunities worldwide.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
