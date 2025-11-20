import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Moon, 
  Sun, 
  Server, 
  Layout, 
  Cloud, 
  ExternalLink, 
  Code, 
  Terminal,
  Cpu,
  Database,
  ChevronRight
} from 'lucide-react';

import ExperienceItem from './components/ExperienceItem';
import ProjectCard from './components/ProjectCard';
import StatCard from './components/StatCard';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';
import SocialLink from './components/SocialLink';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
        
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-20"
             style={{
               backgroundImage: `linear-gradient(to right, ${darkMode ? '#334155' : '#cbd5e1'} 1px, transparent 1px), linear-gradient(to bottom, ${darkMode ? '#334155' : '#cbd5e1'} 1px, transparent 1px)`,
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
             }}>
        </div>

        {/* --- NAVIGATION --- */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-xl font-bold tracking-tighter font-mono">
              <span className="text-cyan-600 dark:text-cyan-400">&lt;</span>
              Gyan<span className="text-purple-600 dark:text-purple-400">Kumar</span>
              <span className="text-cyan-600 dark:text-cyan-400">/&gt;</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              {['About', 'Stats', 'Experience', 'Projects'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
              </button>

              <a href="#contact" className="hidden sm:block px-5 py-2 rounded-full text-sm font-semibold border transition-all
                border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white
                dark:border-cyan-500/50 dark:text-cyan-400 dark:bg-cyan-500/10 dark:hover:bg-cyan-500 dark:hover:text-white">
                Hire Me
              </a>
            </div>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section id="about" className="relative z-10 pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Work & Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-slate-100">
              Engineering <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
                Scalable Systems
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              I am a <strong>Full-Stack Engineer</strong> specializing in high-performance backends with <span className="text-slate-900 dark:text-slate-200 font-semibold">Spring Boot</span> and reactive frontends with <span className="text-slate-900 dark:text-slate-200 font-semibold">React.js</span>. 
              I optimize systems for speed, scale, and reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="/Gyan_kumar_CV_1+_Year_Experience.pdf" download className="flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-bold hover:translate-y-[-2px] transition-transform shadow-lg">
                <FileText size={20} /> Download CV
              </a>
              <div className="flex gap-3">
                <SocialLink href="https://github.com/GyanKumar62065" icon={<Github size={20} />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/gyan-kumar-988a32203/" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://leetcode.com/u/gyankumar62065/" icon={<Code size={20} />} label="LeetCode" />
                <SocialLink href="https://www.geeksforgeeks.org/user/gyankumar62065/" icon={<Terminal size={20} />} label="GFG" />
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS DASHBOARD --- */}
        <section id="stats" className="relative z-10 py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard number="1,000+" label="DSA Problems Solved" color="cyan" />
              <StatCard number="1,673" label="LeetCode Rating" color="purple" />
              <StatCard number="Top 15%" label="Global Rank" color="green" />
              <StatCard number="Finalist" label="Smart India Hackathon" color="yellow" />
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="relative z-10 py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <SectionTitle number="01" title="Experience" />

            <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
              <ExperienceItem 
                role="Software Engineer"
                company="Kapittx"
                date="Mar 2025 - Present"
                description={[
                  "Built AI-driven automation agents using AWS Bedrock, reducing manual workflows by 80%.",
                  "Optimized SQL queries and React rendering, boosting system performance by 30-40%.",
                  "Designed CI/CD pipelines for reliable production releases in an Agile environment."
                ]}
                current={true}
              />
              <ExperienceItem 
                role="Software Engineer"
                company="Raja Software Labs"
                date="Oct 2024 - Feb 2025"
                description={[
                  "Developed modular UI components with React.js & TypeScript.",
                  "Implemented lazy loading and memoization, improving load times by 30%.",
                  "Ensured cross-browser compatibility and WCAG accessibility compliance."
                ]}
              />
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="02" title="Technical Arsenal" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard 
                icon={<Server size={32} />} 
                title="Backend Core" 
                skills={['Java', 'Spring Boot', 'Node.js', 'Microservices', 'MySQL', 'System Design']}
                color="cyan"
              />
              <SkillCard 
                icon={<Layout size={32} />} 
                title="Frontend Modern" 
                skills={['React.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS']}
                color="purple"
              />
              <SkillCard 
                icon={<Cloud size={32} />} 
                title="Cloud & DevOps" 
                skills={['AWS (Bedrock/S3)', 'Docker', 'CI/CD', 'Linux', 'Git/GitHub', 'Postman']}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="relative z-10 py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle number="03" title="Featured Work" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard 
                title="AICTE Task Manager"
                desc="A centralized platform for role-based task assignments and real-time collaboration. Features chat, meeting scheduling, and automated notifications."
                tags={['Spring Boot', 'MySQL', 'AWS', 'WebSocket']}
                icon={<Cpu />}
                link="https://github.com/GyanKumar62065"
                color="cyan"
              />
              <ProjectCard 
                title="CareHub Connect"
                desc="Hospital management system for patient/doctor coordination. Includes medical record centralization and automated appointment handling."
                tags={['Java', 'Swing', 'JDBC', 'MySQL']}
                icon={<Database />}
                link="#"
                color="purple"
              />
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer id="contact" className="relative z-10 py-20 text-center border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a]">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's Build Something Scalable.</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              I'm currently looking for new opportunities in Backend & Full-Stack Engineering. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <a href="mailto:gyankumar62065@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-600 dark:border-cyan-500 text-cyan-700 dark:text-cyan-400 rounded-lg font-mono text-sm hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-all">
              <Mail size={18} /> gyankumar62065@gmail.com
            </a>
            
            <div className="mt-16 flex justify-center gap-6 text-slate-500">
               <a href="https://github.com/GyanKumar62065" className="hover:text-slate-900 dark:hover:text-white"><Github /></a>
               <a href="https://www.linkedin.com/in/gyan-kumar-988a32203/" className="hover:text-cyan-600 dark:hover:text-cyan-400"><Linkedin /></a>
            </div>
            <div className="mt-8 text-slate-400 dark:text-slate-600 text-xs font-mono">
              &copy; 2025 Gyan Kumar. Built with React & Tailwind.
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;