import Spotlight from './Spotlight';
import React from "react";
import {
  Linkedin,
  Code,
  Server,
  Cloud,
  User,
  Phone,
  Award,
  Github,
  ExternalLink,
} from "lucide-react";

const Portfolio = () => {
  /*   const [formData, setFormData] = useState({ name: '', email: '', message: '' }); */
  /* const [isSubmitted, setIsSubmitted] = useState(false); */

  const skills = [
    {
      name: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      details: "AWS Certified, Infrastructure as Code, Cloud Migration",
    },
    {
      name: "DevOps & CI/CD",
      icon: <Server className="w-6 h-6" />,
      details: "GitHub Actions, Docker, Kubernetes, Automation",
    },
    {
      name: "Web Development",
      icon: <Code className="w-6 h-6" />,
      details: "React.js, JavaScript (ES6+), Tailwind CSS",
    },
  ];

  const projects = [
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
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              An Experienced <br />
              <span className="text-indigo-500 ">Software Engineer</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              Specializing in AWS architecture, DevOps automation, and building
              scalable full-stack applications. Turning complex business
              requirements into robust technical solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/nipuna-c-gomes-39500743/"
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

            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="images/dp.jpg"
                alt="Nipuna Gomes"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-900 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <User className="text-indigo-500" /> About Me
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                With a background deeply rooted in Infrastructure and IT
                management, I bridge the gap between legacy systems and modern
                cloud architectures. I am passionate about AWS services,
                serverless computing, and building responsive user interfaces
                with React.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-indigo-500 mb-2">{skill.icon}</div>
                    <h4 className="font-bold mb-1">{skill.name}</h4>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="group flex flex-col p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/20"
                  >
                    <h3 className="text-lg font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
   {/*        <p className="text-slate-400 mb-8">
            Currently available for freelance projects and consulting.
          </p> */}

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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} Nipuna C. Gomes. Built with React &
          Tailwind.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
