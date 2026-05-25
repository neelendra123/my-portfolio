import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Code, Database, Layout, Server, User } from 'lucide-react';
import profilePic from './assets/Professional_Portrait.jpg';
import geoSpatial from './assets/geo-spatial.png';

const App = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-md bg-slate-900/80 z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-blue-400">NP.</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="min-h-[70vh] flex flex-col justify-center"
        >
          <p className="text-blue-400 font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            Nilendra Pulipati.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
            I build robust, scalable applications.
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-8">
            I'm a MERN Stack Developer with 5 years of experience specializing in full-stack development, 
            system architecture, and building highly optimized web applications. I focus on clean UX, 
            reusable component systems, and scalable backend integrations.
          </p>
          <div className="flex gap-4">
            <a href="mailto:nilendrapulipati9@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1">
              Get In Touch
            </a>
            <div className="flex gap-4 items-center ml-4">
              <a href="https://github.com/neelendra123/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/nilendra-pulipati-7722a5202/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          id="about" 
          className="py-20"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-blue-400 font-mono text-lg">01.</span> About Me
            <div className="h-px bg-slate-700 flex-1 ml-4"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 text-slate-400 leading-relaxed space-y-4">
              <p>
                Hello! My name is Nilendra and I enjoy creating reliable, complex applications that live on the internet. My journey in web development has been driven by a desire to turn intricate business requirements into seamless, intuitive user experiences.
              </p>
              <p>
                Over the past 5 years, I've had the privilege of architecting enterprise-level Distribution Management Systems (DMS), developing automated HR and expense workflow engines, and integrating real-time geospatial tracking tools. My focus is always on writing clean, scalable code—whether I'm building a dynamic filter component system in TypeScript or optimizing backend data processing.
              </p>
              <p>
                When I'm not deep into React or Node.js, you'll often find me exploring professional photography, portrait restoration, and generating cinematic portraits using AI tools. I find that the meticulous attention to detail required to enhance a photograph translates perfectly into crafting pixel-perfect web interfaces.
              </p>
            </div>
            <div className="md:col-span-2 relative group w-64 h-64 md:w-full md:max-w-xs mx-auto">
              <div className="absolute inset-0 border-2 border-blue-400 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden flex items-center justify-center z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="text-center p-4">
                  <User size={48} className="mx-auto text-slate-500 mb-2" />
                  <span className="text-slate-500 font-mono text-sm block">
                    <img src={profilePic} alt="Profile" className="mx-auto rounded-xl" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          id="skills" 
          className="py-20"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-blue-400 font-mono text-lg">02.</span> Technical Arsenal
            <div className="h-px bg-slate-700 flex-1 ml-4"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <Layout className="text-blue-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">Frontend</h4>
              <p className="text-slate-400 text-sm">React, LitElement, TypeScript, Tailwind CSS, Framer Motion</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <Server className="text-blue-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">Backend</h4>
              <p className="text-slate-400 text-sm">Node.js, Express, GraphQL RESTful APIs, node-schedule</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <Database className="text-blue-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">Database</h4>
              <p className="text-slate-400 text-sm">MongoDB, MySQL, PostgreSQL, Sequelize ORM</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <Code className="text-blue-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">Tools & Libraries</h4>
              <p className="text-slate-400 text-sm">ag-Grid, Google Maps API, Git, Webpack, Vite</p>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          id="projects" 
          className="py-20"
        >
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">
            <span className="text-blue-400 font-mono text-lg">03.</span> Featured Work
            <div className="h-px bg-slate-700 flex-1 ml-4"></div>
          </h3>

          <div className="space-y-24">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-7/12 aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <span className="text-slate-500 font-mono">DMS_Dashboard_Preview.jpg</span>
              </div>
              <div className="w-full lg:w-5/12 lg:text-right z-20">
                <p className="text-blue-400 font-mono text-sm mb-2">Enterprise Application</p>
                <h4 className="text-2xl font-bold mb-4">Distribution Management System</h4>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-slate-300 text-sm leading-relaxed mb-4 lg:-ml-12 shadow-xl">
                  A comprehensive full-stack platform engineered to manage complex distribution operations. Features robust user management, multi-tier approval workflows, and extensive data tracking capabilities. Architected to handle high-volume transactions efficiently.
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-400 lg:justify-end mb-6">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Sequelize ORM</li>
                  <li>ag-Grid</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <a
                href="https://geospatialemployeetracker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-7/12 aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                aria-label="Open Geospatial Employee Tracker"
              >
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <span className="text-slate-500 font-mono"><img src={geoSpatial} alt="Geospatial Employee Tracker" /></span>
              </a>
              <div className="w-full lg:w-5/12 z-20">
                <p className="text-blue-400 font-mono text-sm mb-2">Location & Analytics</p>
                <h4 className="text-2xl font-bold mb-4">Geospatial Employee Tracker</h4>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-slate-300 text-sm leading-relaxed mb-4 lg:-mr-12 shadow-xl">
                  An advanced tracking dashboard featuring seamless Google Maps integration. Developed custom data visualization for regional sales charting and a dynamic top-performer promoter leaderboard, prioritizing rapid data sorting and rendering.
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-400 mb-6">
                  <li>React</li>
                  <li>Google Maps API</li>
                  <li>Chart.js</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-7/12 aspect-video bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <span className="text-slate-500 font-mono">HR_Workflow_Engine.jpg</span>
              </div>
              <div className="w-full lg:w-5/12 lg:text-right z-20">
                <p className="text-blue-400 font-mono text-sm mb-2">Internal Tooling</p>
                <h4 className="text-2xl font-bold mb-4">Automated HR & Expense Engine</h4>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-slate-300 text-sm leading-relaxed mb-4 lg:-ml-12 shadow-xl">
                  Automated background leave processing using time recurrence rules. Enhanced UX for expense approvals by replacing cluttered action buttons with seamless row-click execution and intuitive tick/cross iconography. Implemented a reusable dynamic TS filter component system.
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-400 lg:justify-end mb-6">
                  <li>React</li>
                  <li>Node-schedule</li>
                  <li>LitElement</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 font-mono text-sm">
        <p>Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
