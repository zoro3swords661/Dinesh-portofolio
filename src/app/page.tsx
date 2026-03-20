"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Terminal,
  Lock,
  Search,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Cpu,
  Globe,
  FileCode,
  Bug,
  Network,
  Database,
  Code,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#00ff88]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="font-mono text-[#00ff88] text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-[#00d4ff]">&lt;</span>
            Dinesh
            <span className="text-[#00d4ff]">/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-mono text-gray-400 hover:text-[#00ff88] transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-[#00ff88]/50">0{index + 1}.</span> {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00ff88] transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00ff88] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#00ff88]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-sm font-mono text-gray-400 hover:text-[#00ff88] hover:bg-[#00ff88]/10"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#00ff88]/50">0{index + 1}.</span> {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Cybersecurity & Ethical Hacking Specialist";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00ff88]/5 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              className="font-mono text-[#00ff88] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dinesh Lal Das
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-mono text-[#00d4ff] mb-6 typing-cursor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {displayText}
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              B.Sc. Hons Cybersecurity and Ethical Hacking graduate passionate about protecting digital assets
              through ethical hacking, penetration testing, and vulnerability assessment.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-transparent border-2 border-[#00ff88] text-[#00ff88] font-mono rounded hover:bg-[#00ff88]/10 transition-all glow-green"
              >
                View My Work
              </a>
              <a
                href="https://calendly.com/thisisdineshlal07"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#00ff88] text-[#0a0a0a] font-mono rounded hover:bg-[#00d4ff] transition-all font-semibold"
              >
                Book a Call
              </a>
            </motion.div>
          </div>

          {/* Profile Image Placeholder */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-[#00ff88]/30 p-2 pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center border border-[#00ff88]/20">
                  <div className="text-center">
                    <Shield className="w-20 h-20 text-[#00ff88] mx-auto mb-4" />
                    <p className="font-mono text-sm text-[#00ff88]/70">
                      [Your Photo Here]
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#00ff88]"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#00d4ff]"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="text-[#00ff88]/50 hover:text-[#00ff88]">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const highlights = [
    { icon: Shield, label: "B.Sc. Hons Cybersecurity", value: "Softwarica College (Coventry Univ)" },
    { icon: Lock, label: "Digital Forensics", value: "Certified" },
    { icon: Bug, label: "Focus", value: "Penetration Testing" },
    { icon: Network, label: "Specialty", value: "Network Security" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[#00ff88] text-xl">01.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-[#00ff88]/20 ml-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500"></span>
                <span className="terminal-dot bg-yellow-500"></span>
                <span className="terminal-dot bg-green-500"></span>
                <span className="ml-4 font-mono text-xs text-gray-500">about.txt</span>
              </div>
              <div className="terminal-content space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-[#00ff88]">&gt;</span> I am a passionate cybersecurity professional with a
                  B.Sc. Hons in Cybersecurity and Ethical Hacking from Softwarica College of IT &amp; E-commerce
                  (in collaboration with Coventry University, London). My journey in cybersecurity
                  is driven by a deep curiosity for understanding how systems work and how to protect them.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-[#00ff88]">&gt;</span> With hands-on experience in penetration testing,
                  vulnerability assessment, and network security, I specialize in identifying security
                  weaknesses before malicious actors can exploit them.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-[#00ff88]">&gt;</span> I hold certifications in Digital Forensics and Python Programming.
                  I continuously expand my knowledge in emerging threats and defensive strategies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-[#00ff88]">&gt;</span> When I&apos;m not hunting for vulnerabilities, you&apos;ll find me
                  participating in CTF competitions, contributing to security research, or exploring
                  the latest tools in the cybersecurity landscape.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-[#1a1a2e]/50 border border-[#00ff88]/20 p-6 rounded-lg card-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <item.icon className="w-8 h-8 text-[#00ff88] mb-3" />
                <p className="font-mono text-xs text-[#00d4ff] mb-1">{item.label}</p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: "Network Security",
      icon: Network,
      skills: [
        { name: "Firewall Configuration", level: 90 },
        { name: "IDS/IPS Deployment", level: 85 },
        { name: "VPN Technologies", level: 88 },
        { name: "Network Monitoring", level: 82 },
      ],
    },
    {
      title: "Penetration Testing",
      icon: Bug,
      skills: [
        { name: "Web App Pentesting", level: 92 },
        { name: "Network Pentesting", level: 88 },
        { name: "Social Engineering", level: 85 },
        { name: "Wireless Security", level: 80 },
      ],
    },
    {
      title: "Ethical Hacking",
      icon: Terminal,
      skills: [
        { name: "Kali Linux", level: 95 },
        { name: "Metasploit Framework", level: 90 },
        { name: "Burp Suite", level: 88 },
        { name: "OWASP Testing", level: 92 },
      ],
    },
    {
      title: "Vulnerability Assessment",
      icon: Search,
      skills: [
        { name: "Nessus", level: 90 },
        { name: "OpenVAS", level: 85 },
        { name: "Nmap", level: 95 },
        { name: "Qualys", level: 80 },
      ],
    },
  ];

  const tools = [
    "Python", "HTML", "CSS", "JavaScript", "Wireshark",
    "Nmap", "Metasploit", "Burp Suite", "Nessus", "OWASP ZAP",
    "Linux (Kali, Ubuntu)", "Windows", "NLP", "Prompt Engineering",
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[#00ff88] text-xl">02.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Expertise</h2>
          <div className="flex-1 h-px bg-[#00ff88]/20 ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="bg-[#1a1a2e]/50 border border-[#00ff88]/20 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-[#00ff88]" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">{skill.name}</span>
                      <span className="text-[#00ff88] font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Tools & Technologies</h3>
          <p className="text-gray-400">Technologies I work with daily</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <motion.span
              key={tool}
              className="px-4 py-2 bg-[#1a1a2e] border border-[#00ff88]/30 text-[#00ff88] font-mono text-sm rounded hover:bg-[#00ff88]/10 hover:border-[#00ff88] transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "Password Cracking Simulation",
      description: "Demonstrated the importance of strong password policies and two-factor authentication. Developed a lab project to test password strength using brute force and dictionary attacks.",
      tags: ["Password Security", "Brute Force", "Dictionary Attack", "2FA"],
      icon: Lock,
      color: "#00ff88",
    },
    {
      title: "Web Application Security Lab",
      description: "Conducted vulnerability assessments on a sample web application using OWASP ZAP. Detected and analyzed common vulnerabilities such as SQL injection and cross-site scripting (XSS).",
      tags: ["OWASP ZAP", "SQL Injection", "XSS", "Web Security"],
      icon: Globe,
      color: "#00d4ff",
    },
    {
      title: "Network Monitoring and Performance Testing",
      description: "Configured LANs, analyzed traffic, implemented firewalls, monitored with SNMP, set up VPNs, deployed IDS, and tested network security.",
      tags: ["LAN", "Firewall", "SNMP", "VPN", "IDS"],
      icon: Network,
      color: "#00ff88",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[#00ff88] text-xl">03.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="flex-1 h-px bg-[#00ff88]/20 ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-[#1a1a2e]/50 border border-[#00ff88]/20 rounded-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <project.icon
                      className="w-8 h-8"
                      style={{ color: project.color }}
                    />
                  </div>
                  <button className="text-gray-400 hover:text-[#00ff88] transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#0a0a0a] text-[#00d4ff] font-mono text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00ff88] text-[#00ff88] font-mono rounded hover:bg-[#00ff88]/10 transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection() {
  const posts = [
    {
      title: "Password Security: Beyond Simple Passwords",
      date: "March 2024",
      excerpt: "Exploring password cracking techniques and the importance of strong password policies and two-factor authentication.",
      tags: ["Password Security", "Authentication"],
      readTime: "8 min read",
    },
    {
      title: "Web Application Security with OWASP ZAP",
      date: "February 2024",
      excerpt: "A practical guide to detecting SQL injection and XSS vulnerabilities using OWASP ZAP.",
      tags: ["Web Security", "OWASP ZAP"],
      readTime: "6 min read",
    },
    {
      title: "Network Monitoring and Security Fundamentals",
      date: "January 2024",
      excerpt: "Understanding LAN configuration, firewall implementation, and IDS deployment for network security.",
      tags: ["Networking", "IDS"],
      readTime: "10 min read",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#0d1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[#00ff88] text-xl">04.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Blog & Thoughts</h2>
          <div className="flex-1 h-px bg-[#00ff88]/20 ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              className="group bg-[#1a1a2e]/50 border border-[#00ff88]/20 rounded-lg p-6 card-hover cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FileCode className="w-4 h-4 text-[#00d4ff]" />
                <span className="font-mono text-xs text-[#00d4ff]">{post.date}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#0a0a0a] text-[#00ff88]/70 font-mono text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-mono">{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#00ff88] font-mono hover:underline"
          >
            View All Posts
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[#00ff88] mb-4">05. What&apos;s Next?</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            I&apos;m currently looking for new opportunities in cybersecurity.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <a
            href="https://calendly.com/thisisdineshlal07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[#00ff88] text-[#00ff88] font-mono text-lg rounded hover:bg-[#00ff88]/10 transition-all glow-green mb-12"
          >
            Schedule a Meeting
          </a>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Mail, label: "Email", value: "thisisdineshlal07@gmail.com", href: "mailto:thisisdineshlal07@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dineshlal", href: "#" },
            { icon: Github, label: "GitHub", value: "github.com/dineshlal", href: "#" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="p-6 bg-[#1a1a2e]/50 border border-[#00ff88]/20 rounded-lg card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-6 h-6 text-[#00ff88] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-mono text-xs text-[#00d4ff] mb-1">{item.label}</p>
              <p className="text-white text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-[#00ff88]/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm text-gray-500">
              Designed & Built by Dinesh Lal Das
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <p className="font-mono text-xs text-gray-600 mt-4">
            &lt;/&gt; with passion for cybersecurity
          </p>
        </footer>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  );
}
