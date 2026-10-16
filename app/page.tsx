"use client";

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, FileText, Code2, Database, Layout, Server, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-500">
            Abdullah
          </h1>

          <ul className="flex gap-6 text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-white transition">Projects</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">Skills</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="mb-6 flex flex-col gap-2">
            <span className="text-2xl md:text-3xl text-gray-400 font-medium">Hi, I'm</span>
            <span className="text-4xl md:text-6xl font-bold text-blue-500">
              Abdullah Hashmat
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6 h-[40px]">
            {/* Typewriter Effect */}
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Next.js Expert',
                1000,
                'UI/UX Designer',
                1000,
                'WordPress Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            I craft high-performance websites and stunning user experiences.
            Let's build something amazing together.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="mailto:email@example.com" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300">
              <Mail size={24} />
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-medium"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition flex items-center gap-2 font-medium"
            >
              <FileText size={20} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/profile.jpg"
            alt="Abdullah Hashmat"
            width={400}
            height={400}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-xl"
          />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a passionate Full Stack Developer with expertise in building scalable and high-performance web applications.
              With a strong foundation in Next.js, React, and modern UI libraries, I transform ideas into digital reality.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech is driven by curiosity and a commitment to continuous learning.
              Whether it's crafting pixel-perfect designs or architecting complex backend systems, I thrive on solving challenges.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-gray-900 rounded-2xl text-center border border-gray-800 hover:border-blue-500/50 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">2+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-2xl text-center border border-gray-800 hover:border-blue-500/50 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">20+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-2xl text-center border border-gray-800 hover:border-blue-500/50 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">10+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-2xl text-center border border-gray-800 hover:border-blue-500/50 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">24/7</h3>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 bg-gray-900/50">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-16 tracking-wide">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              category: "Frontend",
              description: "Building responsive and interactive UIs",
              skills: [
                { name: "Next.js", percentage: 95 },
                { name: "React.js", percentage: 90 },
                { name: "TypeScript", percentage: 85 },
                { name: "Tailwind CSS", percentage: 95 },
              ],
              gradient: "from-blue-500/10 to-transparent",
              barColor: "bg-blue-500"
            },
            {
              category: "Backend",
              description: "Designing scalable server-side systems",
              skills: [
                { name: "Node.js", percentage: 80 },
                { name: "Express.js", percentage: 85 },
                { name: "MongoDB", percentage: 75 },
                { name: "PostgreSQL", percentage: 70 },
              ],
              gradient: "from-emerald-500/10 to-transparent",
              barColor: "bg-emerald-500"
            },
            {
              category: "Cloud & DevOps",
              description: "Deploying and managing infrastructure",
              skills: [
                { name: "AWS EC2", percentage: 70 },
                { name: "AWS S3", percentage: 75 },
                { name: "Docker", percentage: 65 },
                { name: "Git & GitHub", percentage: 90 },
              ],
              gradient: "from-purple-500/10 to-transparent",
              barColor: "bg-purple-500"
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition duration-300 overflow-hidden group`}
            >
              {/* Subtle Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 group-hover:opacity-100 transition duration-500`} />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  {category.category}
                </h3>
                <p className="text-gray-400 text-sm text-center mb-8 h-10">
                  {category.description}
                </p>

                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-gray-400 text-xs font-mono">{skill.percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${category.barColor} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
