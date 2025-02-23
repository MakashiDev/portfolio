'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            I'm always interested in hearing about new opportunities and exciting projects.
            Feel free to reach out if you'd like to discuss potential collaboration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              variants={fadeIn}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-4 text-violet-400">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>Email: me@christianfurr.dev</p>
                <p>Location: Salt Lake City, Utah</p>
                <p>LinkedIn: <Link className="text-blue-400" href={"https://www.linkedin.com/in/christian-furr/"}>linkedin.com/in/christian-furr/</Link></p>
                <p>GitHub: <Link className="text-blue-400" href={"https://www.github.com/makashidev"}>github.com/makashidev</Link></p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-4 text-violet-400">Professional Experience</h2>
              <div className="space-y-4 text-gray-300">
                <p>Full Stack Engineer Intern @ Onboard</p>
                <p>• Developed backend tools using C# and AWS</p>
                <p>• Collaborated directly with CTO</p>
                <p>• Focused on clean code and optimized solutions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}