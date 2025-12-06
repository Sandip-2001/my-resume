import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Cpu,
  GraduationCap,
  User,
  Briefcase,
  Terminal,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";

// --- Data based on your Resume ---
const resumeData = {
  personalInfo: {
    name: "Sandip Ghosh",
    title: "M.Tech Student & Blockchain Developer",
    subtitle:
      "Specializing in Web3.0, Internet Computer (IC), and Full Stack Solutions",
    email: "2025pcp5380@mnit.ac.in",
    phone: "+91-9093861079",
    github: "https://github.com/Sandip-2001",
    linkedin: "https://linkedin.com/in/sandip2001",
    location: "MNIT, Jaipur, India",
    objective:
      "Motivated and innovative M.Tech student with hands-on experience in web development and Web3.0 technologies, specializing in Internet Computer (IC) blockchain solutions. Experienced in building and delivering software tech products through one year of freelancing on Fiverr. Committed to creating scalable, secure, and efficient solutions.",
  },
  education: [
    {
      degree: "Master of Technology (CSE)",
      institution: "Malaviya National Institute of Technology (MNIT), Jaipur",
      period: "2025 – Present",
      grade: null,
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "Techno International New Town, Kolkata",
      period: "2020 – 2024",
      grade: "CGPA: 8.05",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Gushkara Purnananda Public Institution, Burdwan",
      period: "2016 – 2018",
      grade: "Grade: 77.2%",
      icon: GraduationCap,
    },
  ],
  projects: [
    {
      title: "Blockchain Based Chat Application",
      tech: ["React JS", "Node JS", "Motoko", "IC Blockchain"],
      description:
        "A Web3.0-based chat application prioritizing complete anonymity without email or mobile number requirements. Delivers a seamless, secure communication experience on the Internet Computer (IC) blockchain.",
      link: "https://github.com/Sandip-2001/w3messenger.git",
    },
    {
      title: "Hybrid SQL Injection Detection System",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas", "SQLite"],
      description:
        "A hybrid security system combining rule-based and ML approaches. Features a character-level TF-IDF Vectorizer to detect 'zero-day' attacks and uses a defense-in-depth strategy with parameterized queries.",
      link: "https://github.com/Sandip-2001/SQLi-Detection-System.git",
    },
    {
      title: "Blockchain-Integrated Data Provenance",
      tech: ["React", "Flask", "PostgreSQL", "Solidity", "Hardhat"],
      description:
        "Full-stack CRUD application with Ethereum integration. Stores hashed provenance records on-chain using canonical SHA-256 hashing to prevent tampering and verify data integrity.",
      link: "https://github.com/Sandip-2001/Data-Provenance-System.git",
    },
  ],
  skills: {
    languages: ["C", "Java", "Python", "JavaScript", "Solidity", "Motoko"],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "MySQL",
      "PostgreSQL",
      "React",
      "Node.js",
      "Flask",
      "Hardhat",
    ],
    os: ["Linux", "Windows", "MacOS"],
    softSkills: [
      "Problem-Solving",
      "Communication",
      "Adaptability",
      "Team Leadership",
    ],
  },
};

// --- Components ---

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-3 bg-blue-600 rounded-lg shadow-lg text-white">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 relative">
      {title}
      <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
    </h2>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 ${className}`}
  >
    {children}
  </div>
);

const ProjectCard = ({ project }) => (
  <Card className="h-full flex flex-col group overflow-hidden">
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          <Code size={24} />
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-600"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </Card>
);

const EducationItem = ({ item, isLast }) => (
  <div className="relative pl-8 pb-8 sm:pl-10">
    {/* Timeline Line */}
    {!isLast && (
      <div className="absolute left-3.5 top-10 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700"></div>
    )}

    {/* Timeline Dot */}
    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-blue-100 dark:bg-slate-700 border-2 border-blue-600 flex items-center justify-center text-blue-600 dark:text-blue-400 z-10 shadow-sm">
      <GraduationCap size={16} />
    </div>

    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {item.degree}
        </h3>
        <span className="inline-block px-3 py-1 mt-2 sm:mt-0 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
          {item.period}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">
        {item.institution}
      </p>
      {item.grade && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          {item.grade}
        </p>
      )}
    </div>
  </div>
);

const SkillSection = ({ title, skills, icon: Icon }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-3 text-gray-700 dark:text-gray-200">
      <Icon size={18} className="text-blue-600" />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1.5 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm rounded-md shadow-sm border border-gray-200 dark:border-slate-700 hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  // --- UPDATED LOGIC FOR DARK MODE ---

  // 1. Initialize state from localStorage if available
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  const [scrolled, setScrolled] = useState(false);

  // 2. Apply the 'dark' class to the HTML element and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    // Removed the inline 'dark' class logic here because we are applying it to <html> now
    <div className="font-sans min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100">
      {/* --- Navbar --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">
            Sandip<span className="text-blue-600">.Dev</span>
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left z-10 animate-fade-in-up">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                Available for Hire
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {resumeData.personalInfo.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                {resumeData.personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {resumeData.personalInfo.objective}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                >
                  <Mail size={18} /> Contact Me
                </a>
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg font-medium hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-700 rounded-lg font-medium hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Decorative Code Block / Visual */}
            <div className="hidden md:block w-80 h-80 relative group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 flex flex-col p-6 rotate-0 group-hover:-rotate-2 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 font-mono text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <p>
                    <span className="text-purple-600">const</span>{" "}
                    <span className="text-blue-600">developer</span> ={" "}
                    <span className="text-yellow-600">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    name:{" "}
                    <span className="text-green-600">
                      "{resumeData.personalInfo.name}"
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    skills: [<span className="text-green-600">"React"</span>,{" "}
                    <span className="text-green-600">"Blockchain"</span>],
                  </p>
                  <p className="pl-4">
                    hardWorker: <span className="text-blue-600">true</span>,
                  </p>
                  <p className="pl-4">
                    openToWork: <span className="text-blue-600">true</span>
                  </p>
                  <p>
                    <span className="text-yellow-600">{"}"}</span>;
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Terminal size={14} />
                    <span>Compiling...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
            <ChevronDown size={24} />
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="container mx-auto px-6 py-12 max-w-5xl space-y-24">
        {/* Projects Section */}
        <section id="projects">
          <SectionTitle icon={Briefcase} title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Education & Skills Split */}
        <section className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div id="education">
            <SectionTitle icon={GraduationCap} title="Education" />
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
              <div className="mt-2">
                {resumeData.education.map((item, index) => (
                  <EducationItem
                    key={index}
                    item={item}
                    isLast={index === resumeData.education.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div id="skills">
            <SectionTitle icon={Cpu} title="Technical Skills" />
            <Card className="p-6 h-full">
              <div className="space-y-6">
                <SkillSection
                  title="Languages"
                  icon={Code}
                  skills={resumeData.skills.languages}
                />
                <SkillSection
                  title="Tools & Frameworks"
                  icon={Terminal}
                  skills={resumeData.skills.tools}
                />
                <SkillSection
                  title="Operating Systems"
                  icon={Database}
                  skills={resumeData.skills.os}
                />
                <SkillSection
                  title="Soft Skills"
                  icon={User}
                  skills={resumeData.skills.softSkills}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              I'm always open to discussing product design work, blockchain
              projects, or partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
              >
                Send an Email
              </a>
              <a
                href={`tel:${resumeData.personalInfo.phone}`}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Phone size={18} /> {resumeData.personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Background circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-1/4 translate-y-1/4"></div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-12 mt-12 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-bold text-gray-800 dark:text-white text-lg">
              Sandip Ghosh
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={resumeData.personalInfo.github}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={resumeData.personalInfo.linkedin}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* CSS for custom entrance animation since we are using Tailwind */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
