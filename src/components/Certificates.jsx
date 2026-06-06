/* ─────────────────────────────────────────────────────────────────────────────
   Certificates.jsx — COMPLETED PRODUCTION SPECIFICATION
   Fixed: Embedded missing Mobile Accordion sub-components securely.
───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import { 
  Award, BookOpen, GraduationCap, Infinity as InfinityIcon, 
  Calendar, ExternalLink, CheckCircle2, Lightbulb, ArrowUp, Briefcase, ChevronDown
} from 'lucide-react';

/* ── Certificate Preview Graphic Assets (from src/assets/) ── */
import internshipImg from '../assets/internship.png';
import nptelImg from '../assets/nptel.png';
import htmlImg from '../assets/html.png';
import gitImg from '../assets/git.png';

/* ─────────────────────────────────────────────────────────────────────────────
   DATA LAYER CONFIGURATIONS
───────────────────────────────────────────────────────────────────────────── */
const stats = [
  { icon: Award,          count: '04+',   label: 'Credentials',  bg: '#F5F3FF', color: '#7C5CFF' },
  { icon: BookOpen,       count: '03+',   label: 'Courses',      bg: '#F3EEFF', color: '#8B5CF6' },
  { icon: Briefcase,      count: '01',    label: 'Internship',   bg: '#EBF3FF', color: '#3B82F6' },
  { icon: InfinityIcon,   count: 'Continuous',  label: 'Learning',     bg: '#EDFAF5', color: '#10B981' }
];

const certificatesData = [
  {
    id: 'cybernaut-internship',
    title: 'Web Development Project Intern',
    issuer: 'Cybernaut EdTech Pvt. Ltd.',
    date: '10/08/2025 – 10/10/2025',
    desc: 'Gained real-world project understanding building end-to-end applications. Actively utilized and mastered React.js and Node.js backend structures throughout the employment timeframe.',
    image: internshipImg,
    badge: 'Intern',
    badgeBg: '#EBF3FF',
    badgeColor: '#3B82F6',
    verifyUrl: '/intern.pdf', 
    isInternship: true
  },
  {
    id: 'nptel-iot',
    title: 'NPTEL – IoT',
    issuer: 'NPTEL Online Certification',
    date: 'Jan – Apr 2024',
    desc: 'Completed the course with a focus on IoT concepts, architecture and applications.',
    image: nptelImg,
    badge: '96%',
    badgeBg: '#F5F3FF',
    badgeColor: '#7C5CFF',
    verifyUrl: '/nptel.pdf' 
  },
  {
    id: 'guvi-python',
    title: 'GUVI – Python Programming',
    issuer: 'GUVI / HCL',
    date: 'Apr 2023',
    desc: 'Completed Python programming course covering fundamentals to advanced topics.',
    image: htmlImg, 
    badge: '2023',
    badgeBg: '#F3EEFF',
    badgeColor: '#8B5CF6',
    verifyUrl: 'https://www.guvi.in/verify-certificate.html?id=W17616sp9I1S119768&course=modern_html_css_tamil'
  },
  {
    id: 'guvi-git',
    title: 'GUVI – Git & Version Control',
    issuer: 'GUVI / HCL',
    date: 'Mar 2024',
    desc: 'Completed course on Git, GitHub and version control best practices.',
    image: gitImg, 
    badge: '2024',
    badgeBg: '#EDFAF5',
    badgeColor: '#10B981',
    verifyUrl: 'https://www.guvi.in/verify-certificate.html?id=0016u575ajK8MG373X&course=git'
  }
];

const highlights = [
  'Industry recognized credentials',
  'Practical corporate internship exposure',
  'Verified and authentic credentials',
  'Continuous skill enhancement'
];

const focusItems = [
  'Real-world project understanding & design',
  'Full stack React.js and Node.js assembly',
  'Internet of Things (IoT) concepts',
  'Python programming fundamentals',
  'Git & Version Control best practices',
  'Problem solving & agile logic implementation'
];

/* ─────────────────────────────────────────
   REUSABLE SUB-COMPONENTS
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

function CertificateCard({ cert }) {
  return (
    <div 
      className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800/80 transition-all duration-500 ease-in-out"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 2px 18px rgba(124,92,255,0.06)',
        boxSizing: 'border-box',
        height: '100%'
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
      <div className="bg-zinc-50 dark:bg-zinc-950 p-5 border-b border-[#F3F4F6] dark:border-zinc-800/60 flex items-center justify-center overflow-hidden transition-colors duration-500">
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="rounded-xl shadow-sm w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.015]"
        />
      </div>

      <div className="p-[22px] flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-4 mb-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div 
                className="dark:bg-purple-950/40"
                style={{
                  width: '26px', height: '26px', borderRadius: '7px',
                  background: cert.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                {cert.isInternship ? (
                  <Briefcase size={14} style={{ color: cert.badgeColor }} strokeWidth={2.5} />
                ) : (
                  <Award size={14} style={{ color: cert.badgeColor }} strokeWidth={2.5} />
                )}
              </div>
              <div>
                <h3 className="text-zinc-800 dark:text-zinc-100 m-0 transition-colors duration-500" style={{ fontSize: '15px', fontWeight: 700, tracking: '-0.2px', lineHeight: '1.2' }}>
                  {cert.title}
                </h3>
                <p className="text-zinc-400 dark:text-zinc-500 m-0 mt-0.5" style={{ fontSize: '11px', fontWeight: 500 }}>{cert.issuer}</p>
              </div>
            </div>
            
            <span 
              className="font-bold border"
              style={{ 
                fontSize: '11px', 
                padding: '3px 10px', 
                borderRadius: '8px',
                background: cert.badgeBg,
                color: cert.badgeColor,
                borderColor: 'transparent'
              }}
            >
              {cert.badge}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 mb-3" style={{ fontSize: '12px', fontWeight: 600 }}>
            <Calendar size={13} strokeWidth={2.5} />
            <span>{cert.date}</span>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 m-0 mb-5 transition-colors duration-500" style={{ fontSize: '13px', lineHeight: 1.55 }}>
            {cert.desc}
          </p>
        </div>

        <a 
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 border border-[#DDD6FE] dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center justify-center gap-1.5 no-underline transition-all duration-300 font-semibold w-fit"
          style={{ fontSize: '12px', padding: '8px 16px', borderRadius: '10px' }}
        >
          {cert.verifyUrl.endsWith('.pdf') ? 'View PDF' : 'Verify Credential'} <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

function AccordionSection({ title, children, icon: Icon }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm transition-colors duration-500">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex items-center gap-2.5 p-4 bg-transparent border-none text-left cursor-pointer outline-none"
      >
        <span className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400 transition-colors duration-500">
          <Icon size={14} />
        </span>
        <span className="flex-1 text-[14px] font-bold text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
          {title}
        </span>
        <ChevronDown 
          size={15} 
          className={`text-zinc-400 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      {open && (
        <div className="p-4 pt-0 border-t border-[#F3F4F6] dark:border-zinc-800/80 bg-[#FCFCFD] dark:bg-zinc-900/40 transition-colors duration-500">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   DESKTOP VIEWPORT LAYOUT GRID
───────────────────────────────────────── */
function DesktopLayout() {
  return (
    <section className="hidden lg:flex flex-col w-full h-full bg-[#F8F9FC] dark:bg-zinc-950 overflow-y-auto p-8 pb-12 box-border transition-colors duration-500 ease-in-out">
      
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-6 w-full">
        <div style={{ flex: '0 1 35%', minWidth: '320px', animation: 'fadeUp 0.4s ease 0.1s both' }}>
          <div 
            className="bg-[#F5F3FF] dark:bg-purple-950/40 border border-[#DDD6FE] dark:border-purple-900/40 text-[#7C5CFF] dark:text-purple-400 transition-colors duration-500"
            style={{
              display: 'inline-flex', items: 'center', gap: '7px',
              padding: '6px 16px', borderRadius: '999px', marginBottom: '14px',
              fontSize: '13px', fontWeight: 600, width: 'fit-content',
            }}
          >
            <Award size={13} strokeWidth={2.5} /> My Achievements
          </div>
          <h2 className="m-0">
            <span className="text-[#111827] dark:text-white transition-colors duration-500" style={{ display: 'inline', fontSize: '36px', fontWeight: 800, tracking: '-0.5px' }}>My </span>
            <span style={{
              fontSize: '36px', fontWeight: 800, tracking: '-0.5px',
              background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Credentials</span>
          </h2>
          <p className="text-[#6B7280] dark:text-zinc-400 transition-colors duration-500" style={{ margin: '8px 0 0', fontSize: '13.5px', lineHeight: 1.6 }}>
            Here are some of the certifications and training achievements I've earned that validate my technical skills.
          </p>
        </div>

        <div style={{ display: 'flex', flex: 1, gap: '16px', width: '100%', animation: 'fadeUp 0.4s ease 0.2s both' }}>
          {stats.map((stat, i) => <DashboardStatCard key={i} stat={stat} />)}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 310px', gap: '20px', alignItems: 'start', width: '100%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }}>
          {certificatesData.map((cert, i) => (
            <div key={cert.id} style={{ animation: `fadeUp 0.4s ease ${0.25 + i * 0.06}s both` }}>
              <CertificateCard cert={cert} />
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div 
            className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-[22px] rounded-[20px] transition-colors duration-500 relative overflow-hidden"
            style={{ animation: 'fadeUp 0.4s ease 0.4s both', boxShadow: '0 2px 18px rgba(124,92,255,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-bold" style={{ fontSize: '15px' }}>
              <GraduationCap size={16} /> About My Credentials
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 mt-0 mb-4" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
              These certifications and project timelines reflect professional handshakes, platform optimizations, and rigorous architectural courses.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400" style={{ fontSize: '12.5px', lineHeight: 1.4 }}>
                  <CheckCircle2 size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span style={{ fontWeight: 500 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-[22px] rounded-[20px] transition-colors duration-500"
            style={{ animation: 'fadeUp 0.4s ease 0.5s both', boxShadow: '0 2px 18px rgba(124,92,255,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-bold" style={{ fontSize: '15px' }}>
              <Lightbulb size={16} /> Core Competencies Built
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {focusItems.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400" style={{ fontSize: '12.5px', lineHeight: 1.4 }}>
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span style={{ fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MOBILE COMPLIANT REPLICATION PORT
───────────────────────────────────────── */
function MobileLayout() {
  const scrollToTop = () => {
    const mainShell = document.querySelector('.mobile-scroll-container');
    if (mainShell) mainShell.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mobile-scroll-container lg:hidden bg-[#F8F9FC] dark:bg-black flex flex-col h-full overflow-y-auto relative transition-colors duration-500">
      
      <div className="px-5 pt-8 pb-4">
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full mb-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-purple-600 dark:text-purple-400 text-[11.5px] font-bold transition-colors duration-500">
          <Award size={11} /> My Achievements
        </div>
        <h2 className="m-0 mb-2 text-[28px] font-black tracking-tight leading-tight">
        <span className="text-zinc-900 dark:text-white transition-colors duration-500">My </span>
        <span style={{
            background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        }}>Credentials</span>
        </h2>
        <p className="m-0 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed transition-colors duration-500">
          Here are some of the certifications and internship achievements I've earned that validate my knowledge.
        </p>
      </div>

      <div className="px-5 mb-5 grid grid-cols-4 gap-2">
        {stats.map((st, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-2.5 rounded-xl flex flex-col items-center text-center transition-colors duration-500">
            <span className="text-purple-600 dark:text-purple-400 text-[13px] font-extrabold transition-colors duration-500">{st.count}</span>
            <span className="text-zinc-400 dark:text-zinc-500 text-[9px] font-semibold mt-0.5 whitespace-nowrap transition-colors duration-500">{st.label}</span>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5 flex flex-col gap-4">
        {certificatesData.map(cert => (
          <div key={cert.id} className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm flex flex-col transition-colors duration-500">
            <div className="bg-zinc-50 dark:bg-zinc-950 p-4 flex items-center justify-center border-b border-[#F3F4F6] dark:border-zinc-800/60 transition-colors duration-500">
              <img src={cert.image} alt={cert.title} className="rounded-lg w-full h-auto object-contain" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-[14.5px] font-bold text-zinc-800 dark:text-zinc-100 m-0 transition-colors duration-500">{cert.title}</h3>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 block mt-0.5">{cert.issuer}</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors duration-500 flex-shrink-0 align-self-start" style={{ background: cert.badgeBg, color: cert.badgeColor }}>
                  {cert.badge}
                </span>
              </div>
              <div className="flex items-center gap-1 text-zinc-400 dark:text-zinc-500 mb-2.5 text-[11px] font-semibold">
                <Calendar size={12} /> <span>{cert.date}</span>
              </div>
              <p className="text-[12.5px] text-zinc-500 dark:text-zinc-400 mt-0 mb-4 leading-relaxed transition-colors duration-500">{cert.desc}</p>
              <a 
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-zinc-800 border border-[#DDD6FE] dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center justify-center gap-1.5 text-[12px] font-bold py-2 px-4 rounded-lg no-underline transition-all duration-300 w-fit"
              >
                {cert.verifyUrl.endsWith('.pdf') ? 'View PDF' : 'Verify Credential'} <ExternalLink size={11} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 pb-6 flex flex-col gap-3">
        <AccordionSection title="About My Credentials" icon={GraduationCap}>
          <div className="flex flex-col gap-3 mt-2 pb-1">
            <p className="text-zinc-500 dark:text-zinc-400 m-0 text-[12.5px] leading-relaxed transition-colors duration-500">
              These certifications and project timelines reflect professional handshakes, platform optimizations, and rigorous architectural courses.
            </p>
            <div className="flex flex-col gap-2.5 mt-1">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[12.5px] text-zinc-600 dark:text-zinc-400 transition-colors duration-500">
                  <CheckCircle2 size={13} className="text-purple-500 flex-shrink-0" />
                  <span style={{ fontWeight: 500 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </AccordionSection>

        <AccordionSection title="Core Competencies Built" icon={Lightbulb}>
          <div className="flex flex-col gap-2.5 mt-2 pb-1">
            {focusItems.map((f, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[12.5px] text-zinc-600 dark:text-zinc-400 transition-colors duration-500">
                <CheckCircle2 size={13} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span style={{ fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
        </AccordionSection>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute bottom-5 right-5 bg-[#7C5CFF] text-white p-3 rounded-full border-none shadow-md shadow-purple-500/20 active:scale-95 transition-transform cursor-pointer flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        <ArrowUp size={16} strokeWidth={2.5} />
      </button>

      <div className="text-center px-5 pt-2 pb-8 mt-auto">
        <p className="m-0 text-[11px] text-zinc-400 dark:text-zinc-600 transition-colors duration-500">
          © 2026 Selvakumari K. All rights reserved.
        </p>
      </div>

    </div>
  );
}

export default function Certificates() {
  return (
    <>
      <DesktopLayout />
      <MobileLayout />
    </>
  );
}