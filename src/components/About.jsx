import aboutGirlImg from '../assets/about-girl.png';
import {
  User,
  GraduationCap,
  MapPin,
  Heart,
  Briefcase,
  Rocket,
  Code2,
  Globe,
  Sparkles,
} from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const infoCards = [
  { icon: User,          label: 'Name',        value: 'Selvakumari K' },
  { icon: Heart,         label: 'Passion',     value: 'Web Development\nAI Integration' },
  { icon: GraduationCap, label: 'Education',   value: 'B.Tech Artificial Intelligence & Data Science' },
  { icon: Briefcase,     label: 'Experience',  value: 'Fresher' },
  { icon: MapPin,        label: 'Location',    value: 'Chennai,Tamil Nadu, India' },
  { icon: Rocket,        label: 'Availability',value: 'Open to Opportunities' },
];

const stats = [
  { icon: Briefcase, count: '3+',  label: 'Projects Completed' },
  { icon: Code2,     count: '10+', label: 'Technologies Learned' },
  { icon: Sparkles,  count: '5+',  label: 'Certifications' },
  { icon: Globe,     count: '∞',   label: 'Learning Always' },
];

/* ─────────────────────────────────────────
   LEFT PANEL
───────────────────────────────────────── */
function LeftPanel() {
  return (
    <div
      className="flex flex-col justify-center h-full px-8 lg:px-12 py-8 overflow-y-auto"
      style={{ animation: 'fadeInLeft 0.5s ease both' }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5
                   bg-purple-50 dark:bg-purple-900/30
                   border border-purple-200/70 dark:border-purple-700/50
                   text-[#7C5CFF] dark:text-purple-300 text-[13px] font-medium w-fit"
        style={{ animation: 'fadeUp 0.45s ease 0.1s both' }}
      >
        <span className="w-2 h-2 rounded-full bg-[#7C5CFF] dark:bg-purple-400 animate-pulse" />
        Get to know me
      </div>

      {/* Title */}
      <h2
        className="text-[38px] sm:text-[44px] font-extrabold leading-tight mb-3"
        style={{ animation: 'fadeUp 0.45s ease 0.2s both' }}
      >
        <span className="text-slate-800 dark:text-white">About </span>
        <span
          style={{
            background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Me
        </span>
      </h2>

      {/* Underline rule */}
      <div
        className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] mb-6"
        style={{ animation: 'fadeUp 0.45s ease 0.25s both' }}
      />

      {/* Bio */}
      <div
        className="space-y-4 text-[15px] leading-[1.85] text-slate-500 dark:text-slate-400 mb-7"
        style={{ animation: 'fadeUp 0.45s ease 0.3s both' }}
      >
        <p>
          I'm{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">Selvakumari K</span>
          , a final-year B.Tech AI &amp; Data Science student with a strong passion for{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">web development</span>
          . <br /> <span>I enjoy turning ideas into real-world web applications that are simple, beautiful, and
          user-friendly.</span>
        </p>
        <p>
          I specialise in the{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">MERN stack</span>{' '}
          and am currently learning{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">Django</span>{' '}
          for backend development.
        </p>
        <p>
          I love exploring{' '}
          <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">AI tools</span>{' '}
          and integrating them into web apps to create{' '}
          <span className="text-emerald-500 dark:text-emerald-400 font-semibold">smart solutions</span>
          .
        </p>
      </div>

      {/* Info Grid — 2×3 */}
      <div
        className="grid grid-cols-2 gap-3 mb-7"
        style={{ animation: 'fadeUp 0.5s ease 0.4s both' }}
      >
        {infoCards.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-start gap-3 p-3.5 rounded-xl
                       bg-white dark:bg-[#1e293b]
                       border border-slate-100 dark:border-white/5
                       shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                       hover:border-purple-200 dark:hover:border-purple-700/50
                       hover:shadow-[0_4px_20px_rgba(124,92,255,0.12)]
                       transition-all duration-200 group"
          >
            <span
              className="mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                         bg-purple-50 dark:bg-purple-900/30
                         text-[#7C5CFF] dark:text-purple-300
                         group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50
                         transition-colors duration-200"
            >
              <Icon size={15} strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                {label}
              </p>
              {value.split('\n').map((line, i) => (
                <p key={i} className="text-[13px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div
        className="grid grid-cols-4 gap-2 p-4 rounded-2xl
                   bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA]
                   shadow-[0_8px_32px_rgba(124,92,255,0.35)]"
        style={{ animation: 'fadeUp 0.5s ease 0.55s both' }}
      >
        {stats.map(({ icon: Icon, count, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center text-white text-center
                        ${i < stats.length - 1 ? 'border-r border-white/20' : ''}`}
          >
            <Icon size={17} strokeWidth={2} className="mb-1 opacity-80" />
            <span className="text-[20px] font-extrabold leading-none">{count}</span>
            <span className="text-[10px] font-medium opacity-75 mt-1 leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   RIGHT PANEL — FIXED
   • Girl centered horizontally, flush at bottom
   • No tech pills
   • "Open to Work" badge — bold & visible, top-center
   • Diamond SVG centered around the girl
───────────────────────────────────────── */
function RightPanel() {
  return (
    <div
      className="relative h-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7C5CFF 0%, #8B6FFF 50%, #C4B5FD 100%)',
        animation: 'fadeInRight 0.55s ease both',
      }}
    >
      {/* ── Halftone dots top-right ── */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.55) 1.2px, transparent 1.2px)',
          backgroundSize: '14px 14px',
          opacity: 0.45,
        }}
      />

      {/* ── Radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.14) 0%, transparent 65%)',
        }}
      />

      {/* ── Diamond outlines — centered around girl ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 420 660"
          preserveAspectRatio="xMidYMax meet"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <polygon
            points="210,50 390,200 390,590 30,590 30,200"
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.5"
          />
          <polygon
            points="210,78 365,218 365,568 55,568 55,218"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ── Diagonal accent lines bottom-left ── */}
      <div
        className="absolute bottom-24 left-0 flex flex-col gap-2.5 pointer-events-none"
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

      {/* ── Floating sparkle ── */}
      <div
        className="absolute bottom-8 left-10 text-white/60 text-2xl pointer-events-none select-none"
        style={{ zIndex: 2, animation: 'floatSparkle 3s ease-in-out infinite' }}
      >
        ✦
      </div>

      {/* ── "Open to Work" badge — prominent, top center ── */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-10
                   flex items-center gap-2.5
                   px-5 py-2.5 rounded-2xl
                   bg-white/25 backdrop-blur-md
                   border-2 border-white/60
                   shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
        style={{ animation: 'fadeUp 0.5s ease 0.7s both' }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>
        <span className="text-white font-bold text-[14px] tracking-wide whitespace-nowrap">
          Open to Work
        </span>
      </div>

      {/* ── Girl image — centered, flush bottom ── */}
      <img
        src={aboutGirlImg}
        alt="Selvakumari K"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain
                   pointer-events-none select-none"
        style={{
          height: '88%',
          maxHeight: '680px',
          zIndex: 3,
          filter: 'drop-shadow(0 24px 48px rgba(60,20,120,0.38))',
          animation: 'floatY 5s ease-in-out infinite',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   MOBILE LAYOUT
───────────────────────────────────────── */
function MobileLayout() {
  return (
    <div className="flex flex-col h-full overflow-y-auto lg:hidden">
      {/* Purple header strip */}
      <div
        className="relative shrink-0 h-[280px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #7C5CFF 0%, #8B6FFF 50%, #C4B5FD 100%)',
        }}
      >
        {/* dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.45) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
            opacity: 0.3,
          }}
        />

        {/* Open to Work — mobile */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2
                        px-4 py-2 rounded-2xl bg-white/25 backdrop-blur-sm
                        border-2 border-white/60 shadow-md z-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-white font-bold text-[13px] whitespace-nowrap">Open to Work</span>
        </div>

        {/* Girl — centered */}
        <img
          src={aboutGirlImg}
          alt="Selvakumari K"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[260px] object-contain
                     pointer-events-none select-none"
          style={{ filter: 'drop-shadow(0 12px 24px rgba(60,20,120,0.4))', zIndex: 3 }}
        />

        {/* sparkle */}
        <div
          className="absolute bottom-4 left-6 text-white/60 text-xl select-none"
          style={{ animation: 'floatSparkle 3s ease-in-out infinite' }}
        >
          ✦
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col px-5 pt-7 pb-8 gap-6 bg-[#F8F9FC] dark:bg-[#0f172a]">
        {/* Badge + Title */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
                          bg-purple-50 dark:bg-purple-900/30
                          border border-purple-200/70 dark:border-purple-700/50
                          text-[#7C5CFF] dark:text-purple-300 text-[12px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-pulse" />
            Get to know me
          </div>
          <h2 className="text-[32px] font-extrabold leading-tight mb-2">
            <span className="text-slate-800 dark:text-white">About </span>
            <span
              style={{
                background: 'linear-gradient(to right, #7C5CFF, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Me
            </span>
          </h2>
          <div className="w-10 h-[3px] rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] mb-5" />
          <div className="space-y-3 text-[14px] leading-[1.8] text-slate-500 dark:text-slate-400">
            <p>
              I'm{' '}
              <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">Selvakumari K</span>
              , a final-year B.Tech AI &amp; Data Science student passionate about{' '}
              <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">web development</span>.
            </p>
            <p>
              Specialising in the{' '}
              <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">MERN stack</span>{' '}
              and learning{' '}
              <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">Django</span>
              . I love integrating{' '}
              <span className="text-[#7C5CFF] dark:text-purple-300 font-semibold">AI tools</span>{' '}
              to build{' '}
              <span className="text-emerald-500 dark:text-emerald-400 font-semibold">smart solutions</span>.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-2.5 p-3 rounded-xl
                         bg-white dark:bg-[#1e293b]
                         border border-slate-100 dark:border-white/5 shadow-sm"
            >
              <span className="mt-0.5 shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                               bg-purple-50 dark:bg-purple-900/30 text-[#7C5CFF] dark:text-purple-300">
                <Icon size={13} strokeWidth={2} />
              </span>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                {value.split('\n').map((line, i) => (
                  <p key={i} className="text-[12px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 p-3.5 rounded-2xl
                        bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA]
                        shadow-[0_6px_24px_rgba(124,92,255,0.35)]">
          {stats.map(({ icon: Icon, count, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-white text-center
                          ${i < stats.length - 1 ? 'border-r border-white/20' : ''}`}
            >
              <Icon size={14} strokeWidth={2} className="mb-1 opacity-80" />
              <span className="text-[17px] font-extrabold leading-none">{count}</span>
              <span className="text-[9px] font-medium opacity-75 mt-1 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   ABOUT ROOT EXPORT
───────────────────────────────────────── */
export default function About() {
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
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>

      {/* ── DESKTOP ── */}
      <section className="hidden lg:flex h-full">
        <div className="w-[58%] h-full overflow-y-auto">
          <LeftPanel />
        </div>
        <div className="w-[42%] h-full">
          <RightPanel />
        </div>
      </section>

      {/* ── MOBILE ── */}
      <MobileLayout />
    </>
  );
}