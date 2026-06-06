/* ─────────────────────────────────────────
   Skills.jsx — RESTORED ARCHITECTURE
   Fixed: Exact skill ordering, 3-column uniformity, 
   full font preservation, and integrated dark mode.
───────────────────────────────────────── */

import { useState } from 'react';
import {
  Code2, Server, Database, Wrench,
  Brain, BookOpen, Zap, Shield,
  ChevronDown, Sparkles, Lock, GitBranch,
} from 'lucide-react';

/* ── Devicons — frozen pack, never removed ── */
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
  DiPython,
  DiDjango,
  DiJava,
} from 'react-icons/di';

/* ── Simple Icons — only historically-stable exports ── */
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

/* ─────────────────────────────────────────
   DATA — Reordered perfectly as requested
───────────────────────────────────────── */
const categories = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: Code2,
    color: '#7C5CFF',
    bg: '#EDE9FF',
    desc: 'Building responsive and interactive user interfaces.',
    skills: [
      { icon: DiHtml5,       color: '#E34F26', label: 'HTML 5',        chipBg: '#FEF0EC' },
      { icon: DiReact,       color: '#61DAFB', label: 'React.js',      chipBg: '#E8F9FE' },
      { icon: DiCss3,        color: '#1572B6', label: 'css3',          chipBg: '#EAF3FB' },
      { icon: DiJavascript1, color: '#F7DF1E', label: 'javascript(Es6)', chipBg: '#323330' },
      { icon: DiBootstrap,   color: '#7952B3', label: 'bootstrap',     chipBg: '#F3EEFF' },
      { icon: SiTailwindcss, color: '#38BDF8', label: 'tailwind css',  chipBg: '#E8F7FE' },
      { icon: SiChartdotjs,  color: '#FF6384', label: 'chart.js',      chipBg: '#FFF0F3' },
      { icon: SiAxios,       color: '#5A29E4', label: 'axios',         chipBg: '#F0EDFF' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: Server,
    color: '#3B82F6',
    bg: '#EBF3FF',
    desc: 'Developing robust APIs and server-side logic.',
    skills: [
      { icon: DiNodejs,  color: '#68A063', label: 'node.js',    chipBg: '#EEF7EE' },
      { icon: SiExpress, color: '#888888', label: 'express.js', chipBg: '#F4F4F4' },
    ],
    extras: [
      { lucide: Lock,      color: '#d63aff', label: 'jwt auth',         chipBg: '#FDF0FF' },
      { lucide: Shield,    color: '#10B981', label: 'o auth',           chipBg: '#EDFAF5' },
      { lucide: Lock,      color: '#7C5CFF', label: 'bcrypt.js',        chipBg: '#F0EDFF' },
      { lucide: GitBranch, color: '#F59E0B', label: 'route protection', chipBg: '#FEF9EC' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    color: '#10B981',
    bg: '#EDFAF5',
    desc: 'Designing schemas and performing advanced queries.',
    skills: [
      { icon: DiMongodb, color: '#4DB33D', label: 'mongodb', chipBg: '#EEF8EE' },
      { icon: DiMysql,   color: '#00758F', label: 'mysql',   chipBg: '#E8F4F7' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: Wrench,
    color: '#F59E0B',
    bg: '#FEF9EC',
    desc: 'Tools and platforms that speed up development.',
    skills: [
      { icon: DiGit,     color: '#F05032', label: 'git and github', chipBg: '#FEF0EC' },
      { icon: SiPostman, color: '#FF6C37', label: 'postman',        chipBg: '#FEF2EE' },
      { icon: Wrench,    color: '#0284C7', label: 'thunderclient',  chipBg: '#E8F4F7' },
      { icon: SiVite,    color: '#646CFF', label: 'vite',           chipBg: '#F0EDFF' },
      { icon: SiVercel,  color: '#24292E', label: 'vercel',         chipBg: '#F0F0F0' },
      { icon: SiNetlify, color: '#00C7B7', label: 'netlify',        chipBg: '#E8FAF9' },
      { icon: Sparkles,  color: '#FFCA28', label: 'firebase',       chipBg: '#FEF9EC' },
      { icon: Server,    color: '#46E3B7', label: 'render',         chipBg: '#EDFAF5' },
      { icon: DiNpm,     color: '#CB3837', label: 'npm',            chipBg: '#FEEAEA' },
    ],
  },
  {
    id: 'languages',
    label: 'Language',
    icon: BookOpen,
    color: '#8B5CF6',
    bg: '#F3EEFF',
    desc: 'Programming languages I work with.',
    skills: [
      { icon: DiPython, color: '#FFD43B', label: 'python', chipBg: '#FEF9EC' },
      { icon: DiJava,   color: '#f89820', label: 'java',   chipBg: '#FEF3E8' },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    icon: Brain,
    color: '#EC4899',
    bg: '#FEF0F7',
    desc: 'Core concepts I follow while building applications.',
    concepts: [
      'RESTful API Design',
      'Secure Authentication Flows',
      'CRUD Operations',
      'API Integration',
      'Responsive Design',
      'Component-Based Architecture',
      'Schema Design & Indexing',
      'Aggregation Pipelines',
      'Error Handling',
      'Middleware Design',
    ],
  },
  {
    id: 'learning',
    label: 'Currently Learning',
    icon: Sparkles,
    color: '#7C5CFF',
    bg: '#EDE9FF',
    desc: 'Expanding my stack with new technologies.',
    learning: [
      {
        icon: DiDjango,
        color: '#ffffff',
        bg: '#092E20',
        label: 'Django',
        note: 'Building secure and scalable web applications with Django.',
      },
    ],
  },
];

const highlights = [
  { icon: Code2,    label: 'Full Stack Development', desc: 'Building end-to-end web applications using MERN stack.' },
  { icon: Shield,   label: 'Secure & Scalable',       desc: 'Implementing JWT authentication, route protection and optimized APIs.' },
  { icon: Database, label: 'Database Expertise',      desc: 'Designing efficient schemas, indexing and aggregation pipelines.' },
  { icon: Brain,    label: 'AI Integration',          desc: 'Exploring AI tools and APIs to build smarter, intelligent solutions.' },
  { icon: BookOpen, label: 'Continuous Learner',      desc: 'Always learning new technologies to stay up-to-date.' },
];

const stats = [
  { count: '10+', label: 'Technologies' },
  { count: '5+',  label: 'Categories' },
  { count: '3+',  label: 'Projects Built' },
  { count: '∞',   label: 'Learning Always' },
];

/* ─────────────────────────────────────────
   SKILL CHIP
───────────────────────────────────────── */
function SkillChip({ icon: Icon, color, label, chipBg }) {
  return (
    <div 
      className="bg-white dark:bg-zinc-900 border border-[#F1F0FF] dark:border-zinc-800"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 12px',
        borderRadius: '12px',
        cursor: 'default',
        transition: 'all 0.18s ease',
        minWidth: 0,
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
        className="dark:bg-zinc-800"
        style={{
          width: '26px', height: '26px',
          borderRadius: '7px',
          background: chipBg ?? '#F4F4F8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={15} color={color} />
      </span>
      <span 
        className="text-[#374151] dark:text-zinc-300"
        style={{
          fontSize: '12px',
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   EXTRA CHIP
───────────────────────────────────────── */
function ExtraChip({ lucide: Icon, color, label, chipBg }) {
  return (
    <div 
      className="bg-white dark:bg-zinc-900 border border-[#F1F0FF] dark:border-zinc-800"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 12px',
        borderRadius: '12px',
        cursor: 'default',
        transition: 'all 0.18s ease',
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
        className="dark:bg-zinc-800"
        style={{
          width: '26px', height: '26px',
          borderRadius: '7px',
          background: chipBg ?? '#F4F4F8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={13} strokeWidth={2} style={{ color }} />
      </span>
      <span 
        className="text-[#374151] dark:text-zinc-300"
        style={{ fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   CONCEPT CHIP
───────────────────────────────────────── */
function ConceptChip({ label }) {
  return (
    <div 
      className="text-[#4B5563] dark:text-zinc-400"
      style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}
    >
      <span 
        className="bg-[#EDE9FF] dark:bg-purple-950/40"
        style={{
          width: '20px', height: '20px',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
          stroke="#7C5CFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────
   CATEGORY CARD
───────────────────────────────────────── */
function CategoryCard({ cat }) {
  const { icon: CatIcon, label, color, bg, desc, skills, extras, concepts, learning } = cat;

  return (
    <div 
      className="bg-[#ffffff] dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800/80"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        padding: '22px',
        boxShadow: '0 2px 18px rgba(124,92,255,0.06)',
        transition: 'all 0.28s ease',
        height: '100%',       
        boxSizing: 'border-box',
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
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
        <div 
          className="dark:bg-purple-950/40"
          style={{
            width: '42px', height: '42px',
            borderRadius: '12px',
            background: bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <CatIcon size={19} style={{ color }} strokeWidth={2} />
        </div>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color, lineHeight: '1.2' }}>{label}</h3>
          <p className="text-[#9CA3AF] dark:text-zinc-500" style={{ margin: '3px 0 0', fontSize: '11.5px', lineHeight: '1.4' }}>{desc}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#F3F4F6] dark:bg-zinc-800/60" style={{ width: '100%', height: '1px', marginBottom: '16px' }} />

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {skills && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map(s => <SkillChip key={s.label} {...s} />)}
          </div>
        )}

        {extras && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {extras.map(e => <ExtraChip key={e.label} {...e} />)}
          </div>
        )}

        {concepts && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {concepts.map(c => <ConceptChip key={c} label={c} />)}
          </div>
        )}

        {learning && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {learning.map(l => (
              <div 
                key={l.label} 
                className="bg-[#F5F3FF] dark:bg-purple-950/20 border border-[#DDD6FE] dark:border-purple-900/40"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '12px',
                  borderRadius: '14px',
                }}
              >
                <span style={{
                  width: '38px', height: '38px',
                  borderRadius: '10px',
                  background: l.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <l.icon size={20} color={l.color} />
                </span>
                <div>
                  <p className="text-[#1F2937] dark:text-zinc-200" style={{ margin: 0, fontSize: '13px', fontWeight: 700 }}>{l.label}</p>
                  <p className="text-[#6B7280] dark:text-zinc-400" style={{ margin: '3px 0 0', fontSize: '11px', lineHeight: '1.4' }}>{l.note}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent */}
      <div style={{
        marginTop: '16px',
        height: '3px',
        borderRadius: '999px',
        opacity: 0.25,
        background: `linear-gradient(to right, ${color}, transparent)`,
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE ACCORDION CARD
───────────────────────────────────────── */
function AccordionCard({ cat }) {
  const [open, setOpen] = useState(false);
  const { icon: CatIcon, label, color, bg, skills, extras, concepts, learning } = cat;

  return (
    <div 
      className="bg-[#ffffff] dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800"
      style={{
        borderRadius: '16px',
        boxShadow: '0 1px 8px rgba(124,92,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
        padding: '16px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
      }}>
        <div 
          className="dark:bg-purple-950/40"
          style={{
            width: '44px', height: '44px', borderRadius: '12px', background: bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}
        >
          <CatIcon size={20} style={{ color }} strokeWidth={2} />
        </div>
        <span className="text-[#1F2937] dark:text-zinc-200" style={{ flex: 1, fontSize: '15px', fontWeight: 700 }}>{label}</span>
        <ChevronDown size={18} style={{
          color: '#9CA3AF', flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s ease',
        }} />
      </button>

      {open && (
        <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="bg-[#F3F4F6] dark:bg-zinc-800" style={{ height: '1px', marginBottom: '4px' }} />
          {skills && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>{skills.map(s => <SkillChip key={s.label} {...s} />)}</div>}
          {extras && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>{extras.map(e => <ExtraChip key={e.label} {...e} />)}</div>}
          {concepts && <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>{concepts.map(c => <ConceptChip key={c} label={c} />)}</div>}
          {learning && learning.map(l => (
            <div 
              key={l.label} 
              className="bg-[#F5F3FF] dark:bg-purple-950/20 border border-[#DDD6FE] dark:border-purple-900/40"
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                borderRadius: '12px',
              }}
            >
              <span style={{ width: '34px', height: '34px', borderRadius: '9px', background: l.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <l.icon size={17} color={l.color} />
              </span>
              <div>
                <p className="text-[#1F2937] dark:text-zinc-200" style={{ margin: 0, fontSize: '13px', fontWeight: 700 }}>{l.label}</p>
                <p className="text-[#6B7280] dark:text-zinc-400" style={{ margin: '2px 0 0', fontSize: '11px' }}>{l.note}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   LEFT PANEL
───────────────────────────────────────── */
function LeftPanel() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      height: '100%', padding: '40px 36px', overflowY: 'auto',
      animation: 'fadeInLeft 0.5s ease both',
    }}>
      {/* Badge */}
      <div 
        className="bg-[#F5F3FF] dark:bg-purple-950/40 border border-[#DDD6FE] dark:border-purple-900/40 text-[#7C5CFF] dark:text-purple-400"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          padding: '6px 16px', borderRadius: '999px', marginBottom: '22px',
          fontSize: '13px', fontWeight: 600, width: 'fit-content',
          animation: 'fadeUp 0.4s ease 0.1s both',
        }}
      >
        <Zap size={13} strokeWidth={2.5} />
        My Expertise
      </div>

      {/* Title */}
      <h2 style={{ margin: '0 0 16px', animation: 'fadeUp 0.4s ease 0.2s both' }}>
        <span className="text-[#111827] dark:text-white" style={{ display: 'block', fontSize: '40px', fontWeight: 800, lineHeight: 1.15 }}>
          Skills &amp;
        </span>
        <span style={{
          display: 'block', fontSize: '40px', fontWeight: 800, lineHeight: 1.15,
          background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          Technologies
        </span>
      </h2>

      <p className="text-[#6B7280] dark:text-zinc-400" style={{
        margin: '0 0 28px', fontSize: '14px', lineHeight: 1.7,
        maxWidth: '280px', animation: 'fadeUp 0.4s ease 0.3s both',
      }}>
        A tech stack I use to build scalable, secure and intelligent web applications.
      </p>

      {/* Highlights */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px',
        animation: 'fadeUp 0.4s ease 0.4s both',
      }}>
        {highlights.map(({ icon: Icon, label, desc }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span 
              className="bg-[#F5F3FF] dark:bg-purple-950/40 text-[#7C5CFF] dark:text-purple-400"
              style={{
                marginTop: '2px',
                width: '34px', height: '34px', borderRadius: '10px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Icon size={15} strokeWidth={2} />
            </span>
            <div style={{ minWidth: 0 }}>
              <p className="text-[#1F2937] dark:text-zinc-200" style={{ margin: 0, fontSize: '13.5px', fontWeight: 700, lineHeight: 1.3 }}>{label}</p>
              <p className="text-[#9CA3AF] dark:text-zinc-500" style={{ margin: '3px 0 0', fontSize: '12px', lineHeight: 1.5 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '4px',
        padding: '16px', borderRadius: '18px',
        background: 'linear-gradient(135deg, #7C5CFF, #A78BFA)',
        boxShadow: '0 8px 28px rgba(124,92,255,0.35)',
        animation: 'fadeUp 0.4s ease 0.55s both',
      }}>
        {stats.map(({ count, label }, i) => (
          <div key={label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            color: '#fff', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
            padding: '0 4px',
          }}>
            <span style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1 }}>{count}</span>
            <span style={{ fontSize: '10px', fontWeight: 500, opacity: 0.78, marginTop: '4px', lineHeight: 1.3 }}>{label}</span>
          </div>
        ))}
      </div>

      <p className="text-[#D1D5DB] dark:text-zinc-600" style={{
        marginTop: '18px', fontSize: '11px', fontStyle: 'italic',
        animation: 'fadeUp 0.4s ease 0.65s both',
      }}>
        © 2024 Selvakumari K. All rights reserved.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   RIGHT PANEL — Fixed 3-Column Layout Preserved
───────────────────────────────────────── */
function RightPanel() {
  return (
    <div style={{
      height: '100%', overflowY: 'auto', padding: '28px 24px',
      animation: 'fadeInRight 0.5s ease both',
    }}>
      {/* Exact 3-column grid structure fully preserved */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '18px',
        alignItems: 'stretch',
      }}>
        {categories.map((cat, i) => (
          <div key={cat.id} style={{
            display: 'flex',           
            animation: `fadeUp 0.4s ease ${0.1 + i * 0.08}s both`,
          }}>
            <CategoryCard cat={cat} />
          </div>
        ))}
      </div>

      {/* Bottom banner */}
      <div 
        className="bg-[#fff] dark:bg-zinc-900 border border-[#EDE9FF] dark:border-zinc-800"
        style={{
          marginTop: '20px',
          display: 'flex', alignItems: 'center', gap: '14px',
          padding: '14px 20px', borderRadius: '18px',
          boxShadow: '0 2px 12px rgba(124,92,255,0.07)',
          animation: 'fadeUp 0.4s ease 0.7s both',
        }}
      >
        <span 
          className="bg-[#F5F3FF] dark:bg-purple-950/40"
          style={{
            width: '36px', height: '36px', borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}
        >
          <Sparkles size={16} style={{ color: '#7C5CFF' }} />
        </span>
        <p className="text-[#6B7280] dark:text-zinc-400" style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.6 }}>
          Passionate about building real-world applications with{' '}
          <span style={{ color: '#7C5CFF', fontWeight: 600 }}>clean code</span>,{' '}
          <span style={{ color: '#7C5CFF', fontWeight: 600 }}>optimized performance</span>{' '}
          and <span style={{ color: '#7C5CFF', fontWeight: 600 }}>smart features</span>.
        </p>
        <span style={{ marginLeft: 'auto', color: '#7C5CFF', opacity: 0.4, fontSize: '20px', flexShrink: 0 }}>✦</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE LAYOUT
───────────────────────────────────────── */
function MobileLayout() {
  return (
    <div 
      className="lg:hidden bg-[#F8F9FC] dark:bg-black"
      style={{
        display: 'flex', flexDirection: 'column', height: '100%',
        overflowY: 'auto',
      }} 
    >
      <div style={{ padding: '28px 20px 16px' }}>
        <div 
          className="bg-[#F5F3FF] dark:bg-purple-950/40 border border-[#DDD6FE] dark:border-purple-900/40 text-[#7C5CFF] dark:text-purple-400"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 14px', borderRadius: '999px', marginBottom: '16px',
            fontSize: '12px', fontWeight: 600,
          }}
        >
          <Sparkles size={11} /> My Expertise
        </div>
        <h2 style={{ margin: '0 0 10px', fontSize: '28px', fontWeight: 800, lineHeight: 1.2 }}>
          <span className="text-[#111827] dark:text-white">Skills &amp; </span>
          <span style={{
            background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Technologies</span>
        </h2>
        <p className="text-[#6B7280] dark:text-zinc-400" style={{ margin: 0, fontSize: '13px', lineHeight: 1.6 }}>
          Technologies I use to build modern web applications and AI-powered solutions.
        </p>
      </div>

      <div style={{ padding: '0 20px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {categories.map(cat => <AccordionCard key={cat.id} cat={cat} />)}
      </div>

      <div style={{
        margin: '0 20px 24px',
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '4px',
        padding: '16px', borderRadius: '18px',
        background: 'linear-gradient(135deg, #7C5CFF, #A78BFA)',
        boxShadow: '0 6px 24px rgba(124,92,255,0.35)',
      }}>
        {stats.map(({ count, label }, i) => (
          <div key={label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            color: '#fff', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
          }}>
            <span style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1 }}>{count}</span>
            <span style={{ fontSize: '9px', fontWeight: 500, opacity: 0.78, marginTop: '4px' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SKILLS ROOT EXPORT
───────────────────────────────────────── */
export default function Skills() {
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

      {/* DESKTOP — hidden on mobile */}
      <section className="hidden lg:flex w-full bg-white dark:bg-zinc-950" style={{ height: '100%' }}>
        {/* Left panel: fixed 32% width */}
        <div 
          className="bg-white dark:bg-zinc-950 border-r border-[#F3F4F6] dark:border-zinc-900"
          style={{
            width: '32%', minWidth: '300px', height: '100%',
            overflowY: 'auto',
          }}
        >
          <LeftPanel />
        </div>
        {/* Right panel */}
        <div className="bg-[#F8F9FC] dark:bg-zinc-900/30" style={{ flex: 1, height: '100%', overflowY: 'auto' }}>
          <RightPanel />
        </div>
      </section>

      {/* MOBILE */}
      <MobileLayout />
    </>
  );
}