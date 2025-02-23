'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'AWS',
    'AI',
    'Python',
    'SQL',
  ];

  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Christian Furr
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer crafting elegant solutions with modern technologies
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Technical Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-colors"
              >
                <span className="text-violet-400">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-bold">Let's Build Something Amazing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm passionate about creating innovative solutions and always excited to take on new challenges.
            Check out my projects or get in touch to discuss how we can work together.
          </p>
          <div className="flex justify-center gap-6">
            <Link 
              href="/projects"
              className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold"
            >
              View Projects
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-colors text-white font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
