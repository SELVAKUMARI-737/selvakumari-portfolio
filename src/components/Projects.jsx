/* ─────────────────────────────────────────────────────────────────────────────
   Projects.jsx — PREMIUM REFACTOR WITH ACCURATE ROCKET ICON & SMOOTH TRANSITIONS
   Fixed: Swapped Terminal for Rocket, added transition animations.
───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import { 
  Folder, Code2, Cpu, Globe, ExternalLink, 
  ChevronDown, CheckCircle2, Rocket, Sparkles,
  Server, Database, Shield, Wrench, Cloud, Lock
} from 'lucide-react';

/* ── Brand Tech Logos ── */
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiBootstrap,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiGithub,
  DiNpm,
} from 'react-icons/di';

import {
  SiTailwindcss,
  SiChartdotjs,
  SiExpress,
  SiPostman,
  SiVite,
  SiVercel,
  SiNetlify,
  SiAxios,
} from 'react-icons/si';

/* ── Project Showcase Graphics ── */
import expenseImg from '../assets/expense.png';
import campusImg from '../assets/campus.png';
import carImg from '../assets/car.png';

/* ─────────────────────────────────────────────────────────────────────────────
   DATA CONFIGURATIONS
───────────────────────────────────────────────────────────────────────────── */
const stats = [
  { icon: Folder,   count: '03+',      label: 'Projects',  bg: '#F5F3FF', color: '#7C5CFF' },
  { icon: Code2,    count: 'MERN',     label: 'Stack',     bg: '#F3EEFF', color: '#8B5CF6' },
  { icon: Cpu,      count: 'REST APIs',label: 'Built',     bg: '#EBF3FF', color: '#3B82F6' },
  { icon: Globe,    count: 'Deployed',  label: 'Live',      bg: '#EDFAF5', color: '#10B981' }
];

const projectsData = [
  {
    id: 'expense-tracker',
    title: 'Personal Expense Tracker',
    desc: 'A full-stack MERN application to track income, expenses, visualize spending patterns and get AI-powered insights.',
    image: expenseImg,
    featured: true,
    tags: [
      { icon: DiReact,       color: '#61DAFB', label: 'React.js',      chipBg: '#E8F9FE' },
      { icon: DiNodejs,      color: '#68A063', label: 'Node.js',       chipBg: '#EEF7EE' },
      { icon: SiExpress,     color: '#888888', label: 'Express.js',    chipBg: '#F4F4F4' },
      { icon: DiMongodb,     color: '#4DB33D', label: 'MongoDB',       chipBg: '#EEF8EE' },
      { icon: Lock,          color: '#d63aff', label: 'JWT',           chipBg: '#FDF0FF', isLucide: true },
      { icon: SiChartdotjs,  color: '#FF6384', label: 'Chart.js',      chipBg: '#FFF0F3' },
      { icon: Sparkles,      color: '#5A29E4', label: 'Groq API',      chipBg: '#F0EDFF', isLucide: true }
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'campus-event',
    title: 'Campus Event Management System',
    desc: 'A role-based event management system for students, organizers, and admins to manage and participate in events.',
    image: campusImg,
    featured: false,
    tags: [
      { icon: DiNodejs,      color: '#68A063', label: 'Node.js',       chipBg: '#EEF7EE' },
      { icon: SiExpress,     color: '#888888', label: 'Express.js',    chipBg: '#F4F4F4' },
      { icon: DiMongodb,     color: '#4DB33D', label: 'MongoDB',       chipBg: '#EEF8EE' },
      { icon: Lock,          color: '#d63aff', label: 'JWT',           chipBg: '#FDF0FF', isLucide: true },
      { icon: Database,      color: '#10B981', label: 'Mongoose',      chipBg: '#EDFAF5', isLucide: true },
      { icon: Code2,         color: '#8B5CF6', label: 'EJS',           chipBg: '#F3EEFF', isLucide: true },
      { icon: DiBootstrap,   color: '#7952B3', label: 'Bootstrap',     chipBg: '#F3EEFF' },
      { icon: Cpu,           color: '#3B82F6', label: 'REST APIs',     chipBg: '#EBF3FF', isLucide: true }
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'car-booking',
    title: 'Car Booking Platform',
    desc: 'A car booking web application with user & admin modules, booking management and secure payment flow.',
    image: carImg,
    featured: false,
    tags: [
      { icon: DiNodejs,      color: '#68A063', label: 'Node.js',       chipBg: '#EEF7EE' },
      { icon: SiExpress,     color: '#888888', label: 'Express.js',    chipBg: '#F4F4F4' },
      { icon: DiMongodb,     color: '#4DB33D', label: 'MongoDB',       chipBg: '#EEF8EE' },
      { icon: Lock,          color: '#d63aff', label: 'JWT',           chipBg: '#FDF0FF', isLucide: true },
      { icon: Database,      color: '#10B981', label: 'Mongoose',      chipBg: '#EDFAF5', isLucide: true },
      { icon: Cpu,           color: '#3B82F6', label: 'REST APIs',     chipBg: '#EBF3FF', isLucide: true },
      { icon: SiPostman,     color: '#FF6C37', label: 'Postman',       chipBg: '#FEF2EE' }
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const techStackSummary = [
  { title: 'Frontend',       items: 'React.js, Tailwind CSS, Bootstrap',  icon: Code2,       color: '#7C5CFF', bg: '#F5F3FF' },
  { title: 'Backend',        items: 'Node.js, Express.js',               icon: Server,      color: '#3B82F6', bg: '#EBF3FF' },
  { title: 'Database',       items: 'MongoDB, Mongoose',                 icon: Database,    color: '#10B981', bg: '#EDFAF5' },
  { title: 'Authentication', items: 'JWT, bcrypt.js, Role Based Access', icon: Shield,      color: '#EC4899', bg: '#FEF0F7' },
  { title: 'Tools',          items: 'Git, GitHub, Postman, VS Code',     icon: Wrench,      color: '#F59E0B', bg: '#FEF9EC' },
  { title: 'Deployment',     items: 'Vercel, Render',                    icon: Cloud,       color: '#8B5CF6', bg: '#F3EEFF' }
];

const focusItems = [
  'Building responsive and user-friendly UI',
  'Writing clean, scalable and maintainable code',
  'Developing secure RESTful APIs',
  'Solving real-world problems with AI integration',
  'Deploying full stack applications'
];

/* ─────────────────────────────────────────
   REUSEABLE SUB-COMPONENTS
───────────────────────────────────────── */
function DashboardStatCard({ stat }) {
  const Icon = stat.icon;
  return (
    <div 
      className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 transition-colors duration-500"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '18px 24px',
        borderRadius: '20px',
        flex: 1,
        boxShadow: '0 2px 14px rgba(124,92,255,0.03)',
        boxSizing: 'border-box'
      }}
    >
      <div 
        className="dark:bg-purple-950/40 transition-colors duration-500"
        style={{
          width: '44px', height: '44px',
          borderRadius: '12px',
          background: stat.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <Icon size={18} style={{ color: stat.color }} strokeWidth={2.2} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="text-zinc-800 dark:text-zinc-100 transition-colors duration-500" style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.1 }}>{stat.count}</span>
        <span className="text-zinc-400 dark:text-zinc-500 transition-colors duration-500" style={{ fontSize: '11.5px', fontWeight: 600, marginTop: '3px' }}>{stat.label}</span>
      </div>
    </div>
  );
}

function ProjectTagChip({ tag }) {
  const Icon = tag.icon;
  return (
    <div 
      className="bg-white dark:bg-zinc-900 border border-[#F1F0FF] dark:border-zinc-800 transition-all duration-300"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 12px',
        borderRadius: '12px',
        boxShadow: '0 1px 4px rgba(124,92,255,0.06)',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(124,92,255,0.13)';
        e.currentTarget.style.borderColor = '#C4B5FD';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(124,92,255,0.06)';
        e.currentTarget.style.borderColor = '#F1F0FF';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <span 
        className="dark:bg-zinc-800 transition-colors duration-500"
        style={{
          width: '24px', height: '24px',
          borderRadius: '7px',
          background: tag.chipBg ?? '#F4F4F8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {tag.isLucide ? (
          <Icon size={12} strokeWidth={2.5} style={{ color: tag.color }} />
        ) : (
          <Icon size={15} color={tag.color} />
        )}
      </span>
      <span 
        className="text-[#374151] dark:text-zinc-300 transition-colors duration-500"
        style={{ fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}
      >
        {tag.label}
      </span>
    </div>
  );
}

function HorizontalProjectCard({ project }) {
  return (
    <div 
      className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800/80 transition-all duration-500 ease-in-out"
      style={{
        display: 'grid',
        gridTemplateColumns: '46% 54%',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 2px 18px rgba(124,92,255,0.06)',
        boxSizing: 'border-box'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,92,255,0.14)';
        e.currentTarget.style.borderColor = '#C4B5FD';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 18px rgba(124,92,255,0.06)';
        e.currentTarget.style.borderColor = '#EDEDF5';
      }}
    >
      {/* Thumbnail */}
      <div className="bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-5 border-r border-[#F3F4F6] dark:border-zinc-800/50 overflow-hidden transition-colors duration-500">
        <img 
          src={project.image} 
          alt={project.title} 
          className="rounded-xl shadow-sm w-full h-auto object-contain"
        />
      </div>

      {/* Content Side */}
      <div className="p-[22px] flex flex-col justify-between" style={{ minWidth: 0 }}>
        <div>
          {project.featured && (
            <div 
              className="text-purple-600 dark:text-purple-400 bg-[#F5F3FF] dark:bg-purple-950/40 border border-[#DDD6FE] dark:border-purple-900/40 transition-colors duration-500"
              style={{
                display: 'inline-flex', items: 'center', gap: '5px',
                padding: '5px 14px', borderRadius: '999px', marginBottom: '12px',
                fontSize: '11px', fontWeight: 700, width: 'fit-content',
              }}
            >
              <Sparkles size={11} strokeWidth={2.5} /> Featured
            </div>
          )}
          <h3 className="text-zinc-800 dark:text-zinc-100 m-0 transition-colors duration-500" style={{ fontSize: '18px', fontWeight: 700, tracking: '-0.3px', lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 transition-colors duration-500" style={{ fontSize: '13px', lineHeight: 1.6, margin: '10px 0 16px' }}>
            {project.desc}
          </p>

          {/* Tags Chips wrapper */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {project.tags.map(t => <ProjectTagChip key={t.label} tag={t} />)}
          </div>
        </div>

        {/* Buttons wrapper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a 
            href={project.liveUrl}
            className="bg-[#7C5CFF] hover:bg-[#6D4AFF] text-white flex items-center justify-center gap-1.5 no-underline transition-all duration-300 font-semibold"
            style={{ fontSize: '12px', padding: '9px 18px', borderRadius: '11px' }}
          >
            Live Demo <ExternalLink size={13} />
          </a>
          <a 
            href={project.githubUrl}
            className="bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 border border-[#DDD6FE] dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center justify-center gap-1.5 no-underline transition-all duration-300 font-semibold"
            style={{ fontSize: '12px', padding: '9px 18px', borderRadius: '11px' }}
          >
            GitHub
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE LAYOUT COMPONENTS
───────────────────────────────────────── */
function MobileProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm flex flex-col transition-colors duration-500">
      <div className="bg-zinc-50 dark:bg-zinc-950 p-4 flex items-center justify-center border-b border-[#F3F4F6] dark:border-zinc-800/60 transition-colors duration-500">
        <img src={project.image} alt={project.title} className="rounded-lg w-full h-auto object-contain" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        {project.featured && (
          <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-full w-fit mb-1.5 transition-colors duration-500">✦ Featured</span>
        )}
        <h3 className="text-[15px] font-bold text-zinc-800 dark:text-zinc-100 m-0 transition-colors duration-500">{project.title}</h3>
        <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1.5 mb-3 leading-normal transition-colors duration-500">{project.desc}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(t => (
            <span key={t.label} className="bg-[#F8F9FC] dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-[#F1F0FF] dark:border-zinc-700 transition-all duration-500">{t.label}</span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <a href={project.liveUrl} className="bg-[#7C5CFF] text-white flex items-center justify-center gap-1 text-[12px] font-bold py-2 rounded-lg no-underline transition-all duration-300">
            Live Demo <ExternalLink size={11} />
          </a>
          <a href={project.githubUrl} className="bg-white dark:bg-zinc-800 border border-[#DDD6FE] dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center justify-center gap-1 text-[12px] font-bold py-2 rounded-lg no-underline transition-all duration-300">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function AccordionSection({ title, children, icon: Icon }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm transition-colors duration-500">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-2.5 p-4 bg-transparent border-none text-left cursor-pointer outline-none">
        <span className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400 transition-colors duration-500"><Icon size={14} /></span>
        <span className="flex-1 text-[14px] font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-500">{title}</span>
        <ChevronDown size={15} className={`text-zinc-400 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      {open && <div className="p-4 pt-0 border-t border-[#F3F4F6] dark:border-zinc-800/80 bg-[#FCFCFD] dark:bg-zinc-900/40 transition-colors duration-500">{children}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT GRID EXPORT
───────────────────────────────────────── */
export default function Projects() {
  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* DESKTOP INTEGRATED DASHBOARD LAYOUT */}
      <section className="hidden lg:flex flex-col w-full h-full bg-[#F8F9FC] dark:bg-zinc-950 overflow-y-auto p-8 pb-12 box-border transition-colors duration-500 ease-in-out">
        
        {/* UPPER ROW: Header Text Section + Horizontal KPI Stats Deck */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-6 w-full">
          
          <div style={{ flex: '0 1 35%', minWidth: '320px', animation: 'fadeUp 0.4s ease 0.1s both' }}>
            {/* FIXED: Replaced Terminal icon with correct template Rocket icon */}
            <div 
              className="bg-[#F5F3FF] dark:bg-purple-950/40 border border-[#DDD6FE] dark:border-purple-900/40 text-[#7C5CFF] dark:text-purple-400 transition-colors duration-500"
              style={{
                display: 'inline-flex', items: 'center', gap: '7px',
                padding: '6px 16px', borderRadius: '999px', marginBottom: '14px',
                fontSize: '13px', fontWeight: 600, width: 'fit-content',
              }}
            >
              <Rocket size={13} strokeWidth={2.5} /> My Work
            </div>
            <h2 className="m-0" style={{ animation: 'fadeUp 0.4s ease 0.2s both' }}>
              <span className="text-[#111827] dark:text-white transition-colors duration-500" style={{ display: 'inline', fontSize: '36px', fontWeight: 800, tracking: '-0.5px' }}>My </span>
              <span style={{
                fontSize: '36px', fontWeight: 800, tracking: '-0.5px',
                background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Projects</span>
            </h2>
            <p className="text-[#6B7280] dark:text-zinc-400 transition-colors duration-500" style={{ margin: '8px 0 0', fontSize: '13.5px', lineHeight: 1.6 }}>
              Here are some of the projects I've built using modern technologies. Each project is designed to solve real-world problems.
            </p>
          </div>

          {/* Stats Deck Bar */}
          <div style={{ display: 'flex', flex: 1, gap: '16px', width: '100%', animation: 'fadeUp 0.4s ease 0.2s both' }}>
            {stats.map((stat, i) => <DashboardStatCard key={i} stat={stat} />)}
          </div>
        </div>

        {/* LOWER ROW: Content Layout Main Area Split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 310px', gap: '20px', alignItems: 'start', width: '100%' }}>
          
          {/* Main Showcase Stream */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {projectsData.map((project, i) => (
              <div key={project.id} style={{ animation: `fadeUp 0.4s ease ${0.25 + i * 0.08}s both` }}>
                <HorizontalProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Sidebar Widgets Deck Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            {/* Tech Stack Modules Box */}
            <div 
              className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-[22px] rounded-[20px] transition-colors duration-500"
              style={{ animation: 'fadeUp 0.4s ease 0.4s both', boxShadow: '0 2px 18px rgba(124,92,255,0.06)' }}
            >
              <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-bold" style={{ fontSize: '15px' }}>
                <Code2 size={16} /> Tech Stack I Use
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {techStackSummary.map(row => {
                  return (
                    <div key={row.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div 
                        className="dark:bg-purple-950/40 transition-colors duration-500"
                        style={{
                          width: '28px', height: '28px',
                          borderRadius: '8px',
                          background: row.bg,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, mt: '2px'
                        }}
                      >
                        <row.icon size={14} style={{ color: row.color }} strokeWidth={2.5} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h4 className="text-zinc-800 dark:text-zinc-200 m-0 transition-colors duration-500" style={{ fontSize: '13.5px', fontWeight: 700 }}>{row.title}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 m-0 mt-1 transition-colors duration-500" style={{ fontSize: '12px', lineHeight: 1.4 }}>{row.items}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quality Checklist Core Focus Box */}
            <div 
              className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-[22px] rounded-[20px] transition-colors duration-500"
              style={{ animation: 'fadeUp 0.4s ease 0.5s both', boxShadow: '0 2px 18px rgba(124,92,255,0.06)' }}
            >
              <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-bold" style={{ fontSize: '15px' }}>
                <Sparkles size={16} /> What I Focus On
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {focusItems.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400 transition-colors duration-500" style={{ fontSize: '13px', lineHeight: 1.4 }}>
                    <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span style={{ fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOBILE ADAPTATION */}
      <div className="lg:hidden bg-[#F8F9FC] dark:bg-black flex flex-col h-full overflow-y-auto transition-colors duration-500">
        <div className="px-5 pt-8 pb-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full mb-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-purple-600 dark:text-purple-400 text-[11.5px] font-bold transition-colors duration-500">
            {/* FIXED: Mobile setup also swapped for correct Rocket icon */}
            <Rocket size={11} /> My Work
          </div>
          <h2 className="m-0 mb-2 text-[28px] font-black tracking-tight leading-tight">
            <span className="text-zinc-900 dark:text-white transition-colors duration-500">My </span>
            <span className="bg-gradient-to-right from-purple-500 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="m-0 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed transition-colors duration-500">
            Here are some of the projects I've built using modern technologies. Each project is designed to solve real-world problems.
          </p>
        </div>

        <div className="px-5 mb-5 grid grid-cols-4 gap-2">
          {stats.map((st, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-2.5 rounded-xl flex flex-col items-center text-center transition-colors duration-500">
              <span className="text-purple-600 dark:text-purple-400 text-[13px] font-extrabold transition-colors duration-500">{st.count}</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-[9px] font-medium mt-0.5 whitespace-nowrap transition-colors duration-500">{st.label}</span>
            </div>
          ))}
        </div>

        <div className="px-5 pb-5 flex flex-col gap-4">
          {projectsData.map(project => <MobileProjectCard key={project.id} project={project} />)}
        </div>

        <div className="px-5 pb-8 flex flex-col gap-3">
          <AccordionSection title="Tech Stack I Use" icon={Code2}>
            <div className="flex flex-col gap-3 mt-2">
              {techStackSummary.map(row => (
                <div key={row.title} className="flex gap-2">
                  <div className="text-purple-600 dark:text-purple-400 mt-0.5"><row.icon size={12} /></div>
                  <div>
                    <span className="block text-[11px] font-bold text-zinc-500 uppercase">{row.title}</span>
                    <span className="block text-[13px] text-zinc-700 dark:text-zinc-300 font-medium mt-0.5 transition-colors duration-500">{row.items}</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection title="What I Focus On" icon={Sparkles}>
            <div className="flex flex-col gap-2.5 mt-2">
              {focusItems.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[13px] text-zinc-600 dark:text-zinc-400 leading-normal transition-colors duration-500">
                  <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>
      </div>
    </>
  );
}