'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  websiteLink?: string;
}

const projects: Project[] = [
  {
    title: 'Book of Mormonn API',
    description: 'A REST API that provides access to the Book of Mormon scriptures, allowing users to search for scriptures by chapter, verse, and content.',
    technologies: ['Node,js', 'Express', 'Tailwind CSS', 'CORS'],
    githubLink: 'https://github.com/makashidev/bom_api',
    websiteLink: 'https://bom.christianfurr.dev'
  },
  {
    title: "Qu24 SysEx Generator",
    description : "An electron app that provides the SysEx commands for MIDI to control the Allen and Heath Qu series",
    technologies: ['Electron', 'MIDI', 'Tailwind CSS', 'SysEX'],
    githubLink: 'https://github.com/MakashiDev/Qu24_SysEx_Generator',
  },
  {
    title: 'Chatty',
    description: 'A streamlined chat platform designed for seamless communication, featuring real-time messaging and intuitive interface.',
    technologies: ['React', 'WebSocket', 'Express.js', 'TypeScript'],
    githubLink: 'https://github.com/MakashiDev/CHATTTYY',
  },
  {
    title: 'Enscheduled',
    description: 'A student-focused tool that enhances mobile access to grades through Skyward web-scraping technology.',
    technologies: ['React', 'Node.js', 'Puppeteer', 'TypeScript'],
    githubLink : "https://github.com/Enscheduled"
  },
  {
    title: 'Valorant Shop',
    description: 'A web application allowing users to view their Valorant item shop, quests, and instalock agents through secure authentication.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };


  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-gray-400">A showcase of my recent work and technical achievements.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl font-bold text-violet-400">{project.title}</h2>
                <div className="flex gap-2">
                  {project.githubLink && (
                    <Link 
                      href={project.githubLink}
                      target="_blank"
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/github-mark-white.svg"
                        alt="GitHub"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </Link>
                  )}
                  {project.websiteLink && (
                    <Link 
                      href={project.websiteLink}
                      target="_blank"
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/globe.svg"
                        alt="Website"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-violet-900/30 text-violet-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}