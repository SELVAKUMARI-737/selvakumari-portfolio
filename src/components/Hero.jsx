import { ArrowRight, Download, Mail } from 'lucide-react';
import girlImg from '../assets/image.png';
import { CodeCard, TechCard, AboutCard } from './FloatingCards';

/* ─────────────────────────────────────────
   PERSONAL INFO — update these anytime
───────────────────────────────────────── */
const GITHUB_URL  = 'https://github.com/SELVAKUMARI-737/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/selvakumari-sk/';
const EMAIL       = 'kselvakumari737@gmail.com';
const RESUME_PATH = '/resume.pdf';

/* ─── Inline SVGs ─── */
function GithubIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7
        3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236
        1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332
        -5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0
        1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405
        2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23
        1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
        0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24
        12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
        1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
        3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065
        2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
        0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24
        24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── Desktop: Social item (horizontal pill) ─── */
function SocialItem({ href, icon, label, sub, isEmail }) {
  return (
    <a
      href={isEmail ? `mailto:${href}` : href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      className="flex items-center gap-2.5 group transition-colors duration-150
                 text-slate-600 dark:text-slate-300
                 hover:text-[#7C5CFF] dark:hover:text-purple-300"
    >
      <span className="shrink-0 text-slate-400 group-hover:text-[#7C5CFF]
                       dark:group-hover:text-purple-300 transition-colors">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-[13px] font-semibold text-slate-700 dark:text-white
                      group-hover:text-[#7C5CFF] dark:group-hover:text-purple-300">
          {label}
        </p>
        <p className="text-[11px] text-slate-400 dark:text-slate-500">{sub}</p>
      </div>
    </a>
  );
}

/* ─── Mobile: Social row (full-width card with arrow) ─── */
function MobileSocialRow({ href, icon, label, sub, isEmail }) {
  return (
    <a
      href={isEmail ? `mailto:${href}` : href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      className="flex items-center justify-between px-4 py-3.5
                 bg-white dark:bg-[#1e293b]
                 border border-slate-100 dark:border-white/5
                 rounded-2xl shadow-sm
                 group hover:border-purple-200 dark:hover:border-purple-700/50
                 hover:shadow-md transition-all duration-150"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center
                        bg-purple-50 dark:bg-purple-900/30 text-[#7C5CFF]
                        group-hover:bg-purple-100 dark:group-hover:bg-purple-800/40
                        transition-colors shrink-0">
          {icon}
        </div>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-slate-700 dark:text-white
                        group-hover:text-[#7C5CFF] dark:group-hover:text-purple-300 transition-colors">
            {label}
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">{sub}</p>
        </div>
      </div>
      <ArrowRight size={15}
        className="text-slate-300 dark:text-slate-600
                   group-hover:text-[#7C5CFF] transition-colors shrink-0" />
    </a>
  );
}

/* ══════════════════════════════════════════
   DESKTOP — Left Panel
══════════════════════════════════════════ */
function LeftPanel({ onNavigate }) {
  const handleViewResume = () => {
    window.open(RESUME_PATH, '_blank');
  };

  return (
    <div
      className="flex flex-col justify-center h-full px-10 lg:px-14"
      style={{ animation: 'fadeInLeft 0.6s ease both' }}
    >
      {/* Badge — green pulse dot + bigger text */}
      <div
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                   bg-purple-50 dark:bg-purple-900/30
                   border border-purple-200/70 dark:border-purple-700/50
                   text-[#7C5CFF] dark:text-purple-300 text-[14px] font-semibold
                   w-fit mb-6"
        style={{ animation: 'fadeUp 0.5s ease 0.15s both' }}
      >
        {/* Green pulse dot */}
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full
                           rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3
                           bg-emerald-500" />
        </span>
       2026 Graduate &amp; Open to Full-Time Roles
      </div>

      {/* Heading */}
      <h1 className="leading-tight mb-3" style={{ animation: 'fadeUp 0.5s ease 0.3s both' }}>
        <span className="block text-[40px] lg:text-[50px] font-extrabold text-slate-800 dark:text-white">
          Hi, I'm
        </span>
        <span
          className="block text-[44px] lg:text-[56px] font-extrabold leading-tight"
          style={{
            background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Selvakumari K
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-[16px] lg:text-[18px] font-semibold text-slate-700 dark:text-slate-200 mb-4"
        style={{ animation: 'fadeUp 0.5s ease 0.35s both' }}
      >
        B.Tech AI &amp; Data Science ·{' '}
        <span className="text-[#7C5CFF] dark:text-purple-300">Full Stack Developer</span>
      </p>

      {/* Description */}
      <p
        className="text-[14.5px] text-slate-500 dark:text-slate-400 leading-[1.8] mb-7 max-w-[420px]"
        style={{ animation: 'fadeUp 0.5s ease 0.5s both' }}
      >
        I'm Selvakumari K — a Full Stack Developer who believes great web apps are built
        with logic, creativity and heart. I craft MERN Stack + AI powered solutions —
        taking every idea from concept to a real, working product.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-8" style={{ animation: 'fadeUp 0.5s ease 0.65s both' }}>
        <button
          onClick={() => onNavigate?.('Projects')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-[#7C5CFF] text-white text-[14px] font-bold
                     hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                     transition-all duration-200"
        >
          View My Projects
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>

        <button
          onClick={handleViewResume}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     border-2 border-[#7C5CFF]/30 dark:border-purple-500/40
                     text-[#7C5CFF] dark:text-purple-300 text-[14px] font-bold
                     hover:bg-purple-50 dark:hover:bg-purple-900/20
                     hover:-translate-y-0.5 transition-all duration-200"
        >
          View Resume
          <Download size={15} strokeWidth={2.5} />
        </button>
      </div>

      {/* Social Card */}
      <div
        className="inline-flex items-center gap-5 px-5 py-3.5 rounded-2xl
                    bg-white dark:bg-[#1e293b]
                    border border-slate-100 dark:border-white/5
                    shadow-[0_4px_24px_rgba(0,0,0,0.07)] w-fit"
        style={{ animation: 'fadeUp 0.5s ease 1s both' }}
      >
        <SocialItem href={GITHUB_URL} icon={<GithubIcon />} label="GitHub" sub="@SELVAKUMARI-737" />
        <div className="w-px h-8 bg-slate-100 dark:bg-white/10" />
        <SocialItem href={LINKEDIN_URL} icon={<LinkedinIcon />} label="LinkedIn" sub="selvakumari-sk" />
        <div className="w-px h-8 bg-slate-100 dark:bg-white/10" />
        <SocialItem href={EMAIL} icon={<Mail size={19} />} label="Email" sub="kselvakumari737" isEmail />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   DESKTOP — Right Visual Panel (unchanged)
══════════════════════════════════════════ */
function RightPanel({ onNavigate }) {
  return (
    <div
      className="relative h-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7C5CFF 0%, #8B6FFF 50%, #C4B5FD 100%)',
        animation: 'fadeInRight 0.6s ease both',
      }}
    >
      <div
        className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.55) 1.2px, transparent 1.2px)',
          backgroundSize: '14px 14px',
          opacity: 0.4,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 40% 35%, rgba(255,255,255,0.14) 0%, transparent 65%)' }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg width="55%" height="100%" viewBox="0 0 300 660" preserveAspectRatio="xMidYMax meet" className="absolute bottom-0 left-0">
          <polygon points="150,50 280,200 280,590 20,590 20,200" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" />
          <polygon points="150,78 258,218 258,568 42,568 42,218" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 flex flex-col gap-2.5 pointer-events-none" style={{ zIndex: 1 }}>
        {[70, 50, 35].map((w, i) => (
          <div key={i} className="h-[3px] rounded-full bg-white" style={{ width: `${w}px`, opacity: 0.35 - i * 0.08 }} />
        ))}
      </div>
      <div className="absolute bottom-8 left-10 text-white/60 text-2xl pointer-events-none select-none"
        style={{ zIndex: 2, animation: 'floatSparkle 3s ease-in-out infinite' }}>✦</div>
      <img
        src={girlImg} alt="Selvakumari K"
        className="absolute bottom-0 object-contain pointer-events-none select-none"
        style={{ left: '-20%', height: '90%', maxHeight: '700px', zIndex: 3, filter: 'drop-shadow(0 24px 48px rgba(60,20,120,0.38))', animation: 'floatY 5s ease-in-out infinite' }}
      />
      <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
        <CodeCard />
        <TechCard />
        <AboutCard onNavigate={onNavigate} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MOBILE — Full stacked layout
══════════════════════════════════════════ */
function MobileHero({ onNavigate }) {
  const handleViewResume = () => {
    window.open(RESUME_PATH, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#0f172a]">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        bg-purple-50 dark:bg-purple-900/30
                        border border-purple-200/70 dark:border-purple-700/50
                        text-[#7C5CFF] dark:text-purple-300 text-[13px] font-semibold
                        w-fit mb-4">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          2026 Graduate · Open to Full-Time Roles
        

        {/* Heading */}
        <h1 className="leading-tight mb-2" style={{ animation: 'fadeUp 0.5s ease 0.2s both' }}>
          <span className="block text-[34px] font-extrabold text-slate-800 dark:text-white">
            Hi, I'm
          </span>
          <span
            className="block text-[38px] font-extrabold leading-tight"
            style={{
              background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Selvakumari K
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[14px] font-semibold text-slate-700 dark:text-slate-200 mb-3"
          style={{ animation: 'fadeUp 0.5s ease 0.3s both' }}
        >
          B.Tech AI &amp; Data Science ·{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300">Full Stack Developer</span>
        </p>

        {/* Description */}
        <p
          className="text-[13.5px] text-slate-500 dark:text-slate-400 leading-[1.8] mb-5"
          style={{ animation: 'fadeUp 0.5s ease 0.4s both' }}
        >
          I'm Selvakumari K — a Full Stack Developer who believes great web apps are built
          with logic, creativity and heart. I craft MERN Stack + AI powered solutions —
          taking every idea from concept to a real, working product.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3" style={{ animation: 'fadeUp 0.5s ease 0.5s both' }}>
          <button
            onClick={() => onNavigate?.('Projects')}
            className="w-full inline-flex items-center justify-center gap-2
                       px-6 py-3.5 rounded-xl
                       bg-[#7C5CFF] text-white text-[14px] font-bold
                       hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                       transition-all duration-200"
          >
            View My Projects
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>

          <button
            onClick={handleViewResume}
            className="w-full inline-flex items-center justify-center gap-2
                       px-6 py-3.5 rounded-xl
                       border-2 border-[#7C5CFF]/30 dark:border-purple-500/40
                       text-[#7C5CFF] dark:text-purple-300 text-[14px] font-bold
                       hover:bg-purple-50 dark:hover:bg-purple-900/20
                       transition-all duration-200"
          >
            View Resume
            <Download size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* ── BLOCK 2: Purple visual with centered girl image ── */}
      <div
        className="relative w-full overflow-hidden flex justify-center items-end"
        style={{
          minHeight: 360,
          background: 'linear-gradient(135deg, #7C5CFF 0%, #8B6FFF 50%, #C4B5FD 100%)',
          animation: 'fadeUp 0.5s ease 0.55s both',
        }}
      >
        <div className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.55) 1.2px, transparent 1.2px)', backgroundSize: '14px 14px', opacity: 0.4 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.16) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <svg width="70%" height="100%" viewBox="0 0 300 420" preserveAspectRatio="xMidYMax meet" className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <polygon points="150,30 272,148 272,400 28,400 28,148" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" />
            <polygon points="150,56 250,165 250,378 50,378 50,165" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-16 left-0 flex flex-col gap-2 pointer-events-none" style={{ zIndex: 1 }}>
          {[60, 42, 28].map((w, i) => (
            <div key={i} className="h-[3px] rounded-full bg-white" style={{ width: `${w}px`, opacity: 0.35 - i * 0.08 }} />
          ))}
        </div>
        <div className="absolute bottom-5 right-5 text-white/60 text-xl pointer-events-none select-none"
          style={{ zIndex: 2, animation: 'floatSparkle 3s ease-in-out infinite' }}>✦</div>
        <img
          src={girlImg} alt="Selvakumari K"
          className="relative max-w-full bottom-0 object-contain object-bottom pointer-events-none select-none"
          style={{ height: '92%', maxHeight: '350px', zIndex: 3, filter: 'drop-shadow(0 18px 36px rgba(60,20,120,0.40))', animation: 'floatY 5s ease-in-out infinite' }}
        />
      </div>

      {/* ── BLOCK 3: About Me card ── */}
      <div
        className="mx-5 mt-5 rounded-2xl p-4
                   bg-white dark:bg-[#1e293b]
                   border border-slate-100 dark:border-white/5
                   shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
        style={{ animation: 'fadeUp 0.5s ease 0.65s both' }}
      >
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-900/40 flex items-center justify-center shrink-0">
            <svg width="13" height="13" fill="none" stroke="#7C5CFF" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <p className="text-[13px] font-bold text-slate-700 dark:text-white">About Me</p>
        </div>
        <p className="text-[12.5px] text-slate-500 dark:text-slate-400 leading-[1.7] mb-3.5">
          I'm 2026 Graduate in B.Tech AI &amp; Data Science student passionate about web
          development. I enjoy building full stack applications and exploring AI
          integration to solve real-world problems.
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate?.('About')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl
                       border border-slate-200 dark:border-white/10
                       bg-white dark:bg-[#0f172a]
                       text-slate-700 dark:text-slate-200
                       text-[12px] font-semibold
                       hover:border-purple-300 hover:text-[#7C5CFF]
                       transition-all duration-150"
          >
            More About Me <ArrowRight size={12} strokeWidth={2.5} />
          </button>
          <span className="text-[#7C5CFF] text-lg select-none">✦</span>
        </div>
      </div>

      {/* ── BLOCK 4: Social links ── */}
      <div
        className="flex flex-col gap-2.5 px-5 mt-5 mb-6"
        style={{ animation: 'fadeUp 0.5s ease 0.8s both' }}
      >
        <MobileSocialRow href={GITHUB_URL} icon={<GithubIcon size={17} />} label="GitHub" sub="@SELVAKUMARI-737" />
        <MobileSocialRow href={LINKEDIN_URL} icon={<LinkedinIcon size={17} />} label="LinkedIn" sub="selvakumari-sk" />
        <MobileSocialRow href={EMAIL} icon={<Mail size={17} />} label="Email" sub="kselvakumari737@gmail.com" isEmail />
      </div>

      {/* Footer */}
      <p className="text-center text-[11px] text-slate-400 dark:text-slate-600 pb-6">
        © 2026{' '}
        <span className="text-[#7C5CFF] font-medium">Selvakumari K</span>.
        {' '}All rights reserved.
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════════ */
export default function Hero({ onNavigate }) {
  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSparkle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(20deg); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>

      {/* ─── DESKTOP: side-by-side 55/45 (md and above) ─── */}
      <section className="hidden md:flex h-full">
        <div className="w-[55%] h-full overflow-hidden">
          <LeftPanel onNavigate={onNavigate} />
        </div>
        <div className="w-[45%] h-full">
          <RightPanel onNavigate={onNavigate} />
        </div>
      </section>

      {/* ─── MOBILE: fully stacked (below md) ─── */}
      <section className="flex md:hidden w-full h-full overflow-y-auto">
        <MobileHero onNavigate={onNavigate} />
      </section>
    </>
  );
}