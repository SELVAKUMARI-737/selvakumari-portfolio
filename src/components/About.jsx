import aboutGirlImg from '../assets/about-girl.png';
import {
  User, GraduationCap, MapPin, Heart,
  Briefcase, Rocket, Code2, Globe,
  Sparkles, Download, ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const infoCards = [
  {
    icon: User,
    label: 'Name',
    value: 'Selvakumari K',
  },
  {
    icon: Heart,
    label: 'Passion',
    value: 'Full Stack Web Development\nAI-Powered Solutions',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech AI & Data Science · 2026\nGnanamani College of Technology, Namakkal',
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: 'Entry Level\nOpen to Full-Time Roles',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
  },
  {
    icon: Rocket,
    label: 'Availability',
    value: 'Immediately Available\nOpen to Opportunities',
  },
];

const stats = [
  { icon: Briefcase, count: '5+',  label: 'Projects Built'  },
  { icon: Code2,     count: '10+', label: 'Tech Stack'      },
  { icon: Sparkles,  count: '5+',  label: 'Certifications'  },
  { icon: Globe,     count: '∞',   label: 'Always Growing'  },
];

const RESUME_PATH = '/resume.pdf';

function downloadResume() {
  const link = document.createElement('a');
  link.href = RESUME_PATH;
  link.download = 'Selvakumari_K_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ─────────────────────────────────────────
   LEFT PANEL
   Fixes:
   ✅ wider bio max-w-[600px] — easier to read
   ✅ all spacing tightened so stats never cut off
   ✅ flex col with justify-between to fill height
   ✅ text-left clean reading
   ✅ font size 15px for bio readability
───────────────────────────────────────── */
function LeftPanel({ onNavigate }) {
  return (
    <div
      className="flex flex-col h-full px-8 lg:px-12 pt-5 pb-5 overflow-y-auto"
      style={{ animation: 'fadeInLeft 0.5s ease both' }}
    >

      {/* ── Badge ── */}
      <div
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-3
                   bg-purple-50 dark:bg-purple-900/30
                   border border-purple-200/70 dark:border-purple-700/50
                   text-[#7C5CFF] dark:text-purple-300 text-[14px] font-semibold w-fit"
        style={{ animation: 'fadeUp 0.45s ease 0.1s both' }}
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        Get to Know Me
      </div>

      {/* ── Title ── */}
      <h2
        className="text-[40px] lg:text-[46px] font-extrabold leading-tight mb-2"
        style={{ animation: 'fadeUp 0.45s ease 0.18s both' }}
      >
        <span className="text-slate-800 dark:text-white">About </span>
        <span style={{
          background: 'linear-gradient(to right,#7C5CFF,#A78BFA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Me</span>
      </h2>

      {/* ── Accent rule ── */}
      <div
        className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] mb-4"
        style={{ animation: 'fadeUp 0.45s ease 0.22s both' }}
      />

      {/* ── Bio — wider + readable ──
          max-w-[600px] so it uses left panel width
          text-[15px] line-height 1.85 — easy on eyes
          text-left — no ugly justify gaps
      ── */}
      <p
        className="text-[15px] leading-[1.85] text-slate-500 dark:text-slate-400
                   mb-4 max-w-[700px] text-left"
        style={{ animation: 'fadeUp 0.45s ease 0.28s both' }}
      >
        I'm{' '}
        <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">
          Selvakumari K
        </span>{' '}
        — a 2026 B.Tech AI &amp; Data Science graduate who believes great products
        are built by people who communicate clearly, collaborate openly and code
        with purpose. I specialise in the{' '}
        <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">
          MERN Stack
        </span>{' '}
        with hands-on{' '}
        <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">
          AI integration
        </span>{' '}
        — taking every idea from concept to a real, working product. I thrive in
        teams, adapt fast to new challenges and bring both{' '}
        <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
          technical precision
        </span>{' '}
        and{' '}
        <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
          creative thinking
        </span>{' '}
        to everything I build.
      </p>

      {/* ── CTA Buttons ── */}
      <div
        className="flex flex-wrap gap-3 mb-4"
        style={{ animation: 'fadeUp 0.45s ease 0.34s both' }}
      >
        <button
          onClick={() => onNavigate?.('Skills')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                     bg-[#7C5CFF] text-white text-[13.5px] font-bold
                     hover:-translate-y-0.5
                     hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                     transition-all duration-200"
        >
          Check My Skills <ArrowRight size={15} strokeWidth={2.5} />
        </button>

        <button
          onClick={() => onNavigate?.('Projects')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                     border-2 border-[#7C5CFF]/30 dark:border-purple-500/40
                     text-[#7C5CFF] dark:text-purple-300 text-[13.5px] font-bold
                     hover:bg-purple-50 dark:hover:bg-purple-900/20
                     hover:-translate-y-0.5 transition-all duration-200"
        >
          View My Projects <ArrowRight size={15} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Info Cards 2×3 ──
          p-3 compact, text smaller — saves vertical space
          break-words so college fits without overflow
      ── */}
      <div
        className="grid grid-cols-2 gap-2 mb-4"
        style={{ animation: 'fadeUp 0.5s ease 0.4s both' }}
      >
        {infoCards.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-start gap-2.5 p-3 rounded-xl
                       bg-white dark:bg-[#1e293b]
                       border border-slate-100 dark:border-white/5
                       shadow-[0_1px_8px_rgba(0,0,0,0.04)]
                       hover:border-purple-200 dark:hover:border-purple-700/50
                       hover:shadow-[0_4px_16px_rgba(124,92,255,0.10)]
                       transition-all duration-200 group"
          >
            <span className="mt-0.5 shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                             bg-purple-50 dark:bg-purple-900/30
                             text-[#7C5CFF] dark:text-purple-300
                             group-hover:bg-purple-100 transition-colors duration-200">
              <Icon size={14} strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500
                            uppercase tracking-widest mb-0.5 leading-none">
                {label}
              </p>
              {value.split('\n').map((line, i) => (
                <p
                  key={i}
                  className="text-[12.5px] font-semibold text-slate-700
                             dark:text-slate-200 leading-snug break-words"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Stats Bar ──
          Always visible — compact p-3 not p-4
      ── */}
      <div
        className="grid grid-cols-4 p-3 rounded-2xl
                   bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA]
                   shadow-[0_6px_24px_rgba(124,92,255,0.30)]"
        style={{ animation: 'fadeUp 0.5s ease 0.5s both' }}
      >
        {stats.map(({ icon: Icon, count, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center text-white text-center px-1
                        ${i < stats.length - 1 ? 'border-r border-white/20' : ''}`}
          >
            <Icon size={15} strokeWidth={2} className="mb-1 opacity-80" />
            <span className="text-[19px] font-extrabold leading-none">{count}</span>
            <span className="text-[9.5px] font-medium opacity-75 mt-1 leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   RIGHT PANEL
   ✅ Girl 92% — no dead space
   ✅ No glow ring circle
   ✅ Download Resume overlaps girl — z-20
   ✅ Open to Work top-center
───────────────────────────────────────── */
function RightPanel() {
  return (
    <div
      className="relative h-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg,#7C5CFF 0%,#8B6FFF 50%,#C4B5FD 100%)',
        animation: 'fadeInRight 0.55s ease both',
      }}
    >
      {/* Halftone dots */}
      <div
        className="absolute top-0 right-0 w-[65%] h-[60%] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle,rgba(255,255,255,0.55) 1.2px,transparent 1.2px)',
          backgroundSize: '14px 14px',
          opacity: 0.4,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%,rgba(255,255,255,0.14) 0%,transparent 65%)',
        }}
      />

      {/* Diamond outlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <svg
          width="100%" height="100%"
          viewBox="0 0 420 660"
          preserveAspectRatio="xMidYMax meet"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <polygon
            points="210,50 390,200 390,590 30,590 30,200"
            fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"
          />
          <polygon
            points="210,80 365,220 365,568 55,568 55,220"
            fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"
          />
        </svg>
      </div>

      {/* Accent lines */}
      <div
        className="absolute bottom-36 left-0 flex flex-col gap-2.5 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {[70, 50, 35].map((w, i) => (
          <div
            key={i}
            className="h-[3px] rounded-full bg-white"
            style={{ width: `${w}px`, opacity: 0.35 - i * 0.08 }}
          />
        ))}
      </div>

      {/* Sparkle */}
      <div
        className="absolute bottom-36 left-10 text-white/60 text-2xl
                   pointer-events-none select-none"
        style={{ zIndex: 2, animation: 'floatSparkle 3s ease-in-out infinite' }}
      >✦</div>

      {/* Open to Work — top center */}
      <div
        className="absolute top-5 left-1/2 -translate-x-1/2 z-10
                   flex items-center gap-2.5 px-5 py-2.5 rounded-2xl
                   bg-white/25 backdrop-blur-md border-2 border-white/60
                   shadow-[0_4px_20px_rgba(0,0,0,0.15)] whitespace-nowrap"
        style={{ animation: 'fadeUp 0.5s ease 0.6s both' }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full
                           rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
        <span className="text-white font-bold text-[14px] tracking-wide">
          Open to Work
        </span>
      </div>

      {/* Girl — 92% flush bottom, no dead space */}
      <img
        src={aboutGirlImg}
        alt="Selvakumari K"
        className="absolute bottom-0 left-1/2 -translate-x-1/2
                   object-contain pointer-events-none select-none"
        style={{
          height: '92%',
          maxHeight: '680px',
          zIndex: 3,
          filter: 'drop-shadow(0 24px 48px rgba(60,20,120,0.40))',
          animation: 'floatY 5s ease-in-out infinite',
        }}
      />

      {/* Download Resume — overlaps girl bottom */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
        style={{ animation: 'fadeUp 0.5s ease 0.85s both' }}
      >
        <button
          onClick={downloadResume}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl
                     font-bold text-white text-[13.5px] whitespace-nowrap
                     border-none cursor-pointer
                     hover:-translate-y-0.5 active:scale-95
                     transition-all duration-200"
          style={{
            background:
              'linear-gradient(135deg,rgba(255,255,255,0.28) 0%,rgba(255,255,255,0.12) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow:
              '0 4px 20px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.4)',
            border: '1.5px solid rgba(255,255,255,0.55)',
          }}
        >
          <Download size={15} strokeWidth={2.5} />
          Download Resume
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE LAYOUT
───────────────────────────────────────── */
function MobileLayout({ onNavigate }) {
  return (
    <div className="flex flex-col h-full overflow-y-auto lg:hidden">

      {/* Purple image strip */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{
          height: '300px',
          background: 'linear-gradient(135deg,#7C5CFF 0%,#8B6FFF 50%,#C4B5FD 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle,rgba(255,255,255,0.45) 1.2px,transparent 1.2px)',
            backgroundSize: '14px 14px',
            opacity: 0.3,
          }}
        />

        {/* Open to Work */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2
                     px-4 py-2 rounded-2xl bg-white/25 backdrop-blur-sm
                     border-2 border-white/60 shadow-md z-10 whitespace-nowrap"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full
                             rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-white font-bold text-[13px]">Open to Work</span>
        </div>

        {/* Girl */}
        <img
          src={aboutGirlImg}
          alt="Selvakumari K"
          className="absolute bottom-0 left-1/2 -translate-x-1/2
                     object-contain pointer-events-none select-none"
          style={{
            height: '275px',
            filter: 'drop-shadow(0 12px 24px rgba(60,20,120,0.4))',
            zIndex: 3,
            animation: 'floatYMobile 5s ease-in-out infinite',
          }}
        />

        <div
          className="absolute bottom-3 left-5 text-white/60 text-xl
                     select-none pointer-events-none"
          style={{ animation: 'floatSparkle 3s ease-in-out infinite', zIndex: 2 }}
        >✦</div>

        {/* Download Resume */}
        <div className="absolute bottom-4 right-4 z-20">
          <button
            onClick={downloadResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl
                       text-white font-bold text-[12px] whitespace-nowrap
                       active:scale-95 transition-all duration-200 cursor-pointer"
            style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              border: '1.5px solid rgba(255,255,255,0.5)',
            }}
          >
            <Download size={13} strokeWidth={2.5} /> Download Resume
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col px-5 pt-5 pb-8 gap-4
                      bg-[#F8F9FC] dark:bg-[#0f172a]">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                     bg-purple-50 dark:bg-purple-900/30
                     border border-purple-200/70 dark:border-purple-700/50
                     text-[#7C5CFF] dark:text-purple-300 text-[13px] font-semibold w-fit"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full
                             rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          Get to Know Me
        </div>

        {/* Title */}
        <div>
          <h2 className="text-[28px] font-extrabold leading-tight mb-2">
            <span className="text-slate-800 dark:text-white">About </span>
            <span style={{
              background: 'linear-gradient(to right,#7C5CFF,#A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Me</span>
          </h2>
          <div className="w-10 h-[3px] rounded-full bg-gradient-to-r
                          from-[#7C5CFF] to-[#A78BFA]" />
        </div>

        {/* Bio */}
        <p className="text-[13.5px] leading-[1.8] text-slate-500
                      dark:text-slate-400 text-left">
          I'm{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">
            Selvakumari K
          </span>{' '}
          — a 2026 B.Tech AI &amp; Data Science graduate who believes great
          products are built by people who communicate clearly, collaborate openly
          and code with purpose. I specialise in the{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">
            MERN Stack
          </span>{' '}
          with hands-on{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">
            AI integration
          </span>{' '}
          and bring both{' '}
          <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
            technical precision
          </span>{' '}
          and{' '}
          <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
            creative thinking
          </span>{' '}
          to everything I build.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-2.5">
          <button
            onClick={() => onNavigate?.('Skills')}
            className="flex-1 inline-flex items-center justify-center gap-2
                       px-4 py-2.5 rounded-xl bg-[#7C5CFF] text-white
                       text-[12.5px] font-bold active:scale-95
                       transition-all duration-200"
          >
            My Skills <ArrowRight size={13} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => onNavigate?.('Projects')}
            className="flex-1 inline-flex items-center justify-center gap-2
                       px-4 py-2.5 rounded-xl
                       border-2 border-[#7C5CFF]/30 dark:border-purple-500/40
                       text-[#7C5CFF] dark:text-purple-300 text-[12.5px] font-bold
                       hover:bg-purple-50 dark:hover:bg-purple-900/20
                       active:scale-95 transition-all duration-200"
          >
            Projects <ArrowRight size={13} strokeWidth={2.5} />
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-2">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-2 p-2.5 rounded-xl
                         bg-white dark:bg-[#1e293b]
                         border border-slate-100 dark:border-white/5 shadow-sm
                         hover:border-purple-200 dark:hover:border-purple-700/40
                         transition-all duration-150"
            >
              <span className="mt-0.5 shrink-0 w-6 h-6 rounded-md flex items-center
                               justify-center bg-purple-50 dark:bg-purple-900/30
                               text-[#7C5CFF] dark:text-purple-300">
                <Icon size={12} strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[9.5px] font-bold text-slate-400 dark:text-slate-500
                              uppercase tracking-widest mb-0.5 leading-none">
                  {label}
                </p>
                {value.split('\n').map((line, i) => (
                  <p
                    key={i}
                    className="text-[11.5px] font-semibold text-slate-700
                               dark:text-slate-200 leading-snug break-words"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 p-3 rounded-2xl
                        bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA]
                        shadow-[0_6px_24px_rgba(124,92,255,0.32)]">
          {stats.map(({ icon: Icon, count, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-white text-center px-1
                          ${i < stats.length - 1 ? 'border-r border-white/20' : ''}`}
            >
              <Icon size={13} strokeWidth={2} className="mb-0.5 opacity-80" />
              <span className="text-[17px] font-extrabold leading-none">{count}</span>
              <span className="text-[8.5px] font-medium opacity-75 mt-1 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────── */
export default function About({ onNavigate }) {
  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from { opacity:0; transform:translateX(-28px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity:0; transform:translateX(28px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes floatSparkle {
          0%,100% { transform:translateY(0px) rotate(0deg); }
          50%      { transform:translateY(-8px) rotate(20deg); }
        }
        @keyframes floatY {
          0%,100% { transform:translateX(-50%) translateY(0px); }
          50%      { transform:translateX(-50%) translateY(-10px); }
        }
        @keyframes floatYMobile {
          0%,100% { transform:translateX(-50%) translateY(0px); }
          50%      { transform:translateX(-50%) translateY(-7px); }
        }
      `}</style>

      {/* ── DESKTOP: 60/40 split ── */}
      <section className="hidden lg:flex h-full">
        <div className="w-[60%] h-full overflow-y-auto">
          <LeftPanel onNavigate={onNavigate} />
        </div>
        <div className="w-[40%] h-full">
          <RightPanel />
        </div>
      </section>

      {/* ── MOBILE ── */}
      <MobileLayout onNavigate={onNavigate} />
    </>
  );
}