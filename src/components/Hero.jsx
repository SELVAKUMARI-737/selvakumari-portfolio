import { ArrowRight, Download, Mail } from 'lucide-react';
import girlImg from '../assets/image.png';
import { CodeCard, TechCard, AboutCard } from './FloatingCards';

/* ─────────────────────────────────────────
   PERSONAL INFO — update these anytime
───────────────────────────────────────── */
const GITHUB_URL   = 'https://github.com/SELVAKUMARI-737/';
const LINKEDIN_URL = 'https://www.linkedin.com/in/selvakumari-sk/';
const EMAIL        = 'kselvakumari737@gmail.com';
const RESUME_PATH  = '/resume.pdf';

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

/* ─── Social item ─── */
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

/* ─── Mobile Social Row Item ─── */
function MobileSocialRow({ href, icon, label, sub, isEmail }) {
  return (
    <a
      href={isEmail ? `mailto:${href}` : href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      className="flex items-center justify-between px-4 py-3
                 bg-white dark:bg-[#1e293b]
                 border border-slate-100 dark:border-white/5
                 rounded-xl shadow-sm
                 group transition-all duration-150
                 hover:border-purple-200 dark:hover:border-purple-700/50"
    >
      <div className="flex items-center gap-3">
        <span className="text-slate-400 group-hover:text-[#7C5CFF] dark:group-hover:text-purple-300 transition-colors">
          {icon}
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-slate-700 dark:text-white
                        group-hover:text-[#7C5CFF] dark:group-hover:text-purple-300">
            {label}
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">{sub}</p>
        </div>
      </div>
      <ArrowRight size={14} className="text-slate-300 group-hover:text-[#7C5CFF] transition-colors" />
    </a>
  );
}

/* ─── Left Panel ─── */
function LeftPanel({ onNavigate }) {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = 'Selvakumari_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="flex flex-col justify-center h-full px-10 lg:px-14"
      style={{ animation: 'fadeInLeft 0.6s ease both' }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    bg-purple-50 dark:bg-purple-900/30
                    border border-purple-200/70 dark:border-purple-700/50
                    text-[#7C5CFF] dark:text-purple-300 text-[13px] font-medium
                    w-fit mb-6"
        style={{ animation: 'fadeUp 0.5s ease 0.15s both' }}
      >
        <span className="w-2 h-2 rounded-full bg-[#43ea26] dark:bg-purple-400 animate-pulse" />
        Welcome to my portfolio
      </div>

      {/* Heading */}
      <h1
        className="leading-tight mb-3"
        style={{ animation: 'fadeUp 0.5s ease 0.3s both' }}
      >
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
        className="text-[17px] lg:text-[19px] font-semibold text-slate-700 dark:text-slate-200 mb-4"
        style={{ animation: 'fadeUp 0.5s ease 0.35s both' }}
      >
        Aspiring{' '}
        <span className="text-[#7C5CFF] dark:text-purple-300">Full Stack Developer</span>
      </p>

      {/* Description */}
      <p
        className="text-[14.5px] text-slate-500 dark:text-slate-400 leading-[1.75] mb-7 max-w-[400px]"
        style={{ animation: 'fadeUp 0.5s ease 0.5s both' }}
      >
        I build real-world web applications using MERN stack and love integrating
        AI to create smart solutions.
      </p>

      {/* Buttons */}
      <div
        className="flex flex-wrap gap-3 mb-8"
        style={{ animation: 'fadeUp 0.5s ease 0.65s both' }}
      >
        <button
          onClick={() => onNavigate?.('Projects')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-[#7C5CFF] text-white text-[14px] font-bold
                     hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                     transition-all duration-200"
        >
          View My Work
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>

        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     border-2 border-[#7C5CFF]/30 dark:border-purple-500/40
                     text-[#7C5CFF] dark:text-purple-300 text-[14px] font-bold
                     hover:bg-purple-50 dark:hover:bg-purple-900/20
                     hover:-translate-y-0.5 transition-all duration-200"
        >
          Download Resume
          <Download size={15} strokeWidth={2.5} />
        </button>
      </div>

      {/* Social Card */}
      <div
        className="inline-flex items-center gap-5 px-5 py-3.5 rounded-2xl
                    bg-white dark:bg-[#1e293b]
                    border border-slate-100 dark:border-white/5
                    shadow-[0_4px_24px_rgba(0,0,0,0.07)]
                    w-fit"
        style={{ animation: 'fadeUp 0.5s ease 1s both' }}
      >
        <SocialItem
          href={GITHUB_URL}
          icon={<GithubIcon />}
          label="GitHub"
          sub="@SELVAKUMARI-737"
        />
        <div className="w-px h-8 bg-slate-100 dark:bg-white/10" />
        <SocialItem
          href={LINKEDIN_URL}
          icon={<LinkedinIcon />}
          label="LinkedIn"
          sub="selvakumari-sk"
        />
        <div className="w-px h-8 bg-slate-100 dark:bg-white/10" />
        <SocialItem
          href={EMAIL}
          icon={<Mail size={19} />}
          label="Email"
          sub="kselvakumari737"
          isEmail
        />
      </div>
    </div>
  );
}

/* ─── Right Visual Panel ─── */
function RightPanel({ onNavigate }) {
  return (
    <div
      className="relative h-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7C5CFF 0%, #8B6FFF 50%, #C4B5FD 100%)',
        animation: 'fadeInRight 0.6s ease both',
      }}
    >
      {/* Halftone dot pattern top-right */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.55) 1.2px, transparent 1.2px)',
          backgroundSize: '14px 14px',
          opacity: 0.4,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 40% 35%, rgba(255,255,255,0.14) 0%, transparent 65%)',
        }}
      />

      {/* Geometric diamond outlines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg
          width="55%" height="100%"
          viewBox="0 0 300 660"
          preserveAspectRatio="xMidYMax meet"
          className="absolute bottom-0 left-0"
        >
          <polygon
            points="150,50 280,200 280,590 20,590 20,200"
            fill="none"
            stroke="rgba(255,255,255,0.20)"
            strokeWidth="1.5"
          />
          <polygon
            points="150,78 258,218 258,568 42,568 42,218"
            fill="none"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Diagonal accent lines bottom-left */}
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

      {/* Sparkle */}
      <div
        className="absolute bottom-8 left-10 text-white/60 text-2xl pointer-events-none select-none"
        style={{ zIndex: 2, animation: 'floatSparkle 3s ease-in-out infinite' }}
      >
        ✦
      </div>

      {/* Girl image */}
      <img
        src={girlImg}
        alt="Selvakumari K"
        className="absolute bottom-0 object-contain pointer-events-none select-none"
        style={{
          left: '-20%',
          height: '90%',
          maxHeight: '700px',
          zIndex: 3,
          filter: 'drop-shadow(0 24px 48px rgba(60,20,120,0.38))',
          animation: 'floatY 5s ease-in-out infinite',
        }}
      />

      {/* Floating Cards */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
        <CodeCard />
        <TechCard />
        <AboutCard onNavigate={onNavigate} />
      </div>
    </div>
  );
}

/* ─── Mobile Hero ─── */
function MobileHero({ onNavigate }) {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = 'Selvakumari_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Purple visual banner with girl image */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: '420px',
          background: 'linear-gradient(135deg, #7C5CFF 0%, #8B6FFF 50%, #C4B5FD 100%)',
          animation: 'fadeInRight 0.6s ease both',
        }}
      >
        {/* Halftone dots */}
        <div
          className="absolute top-0 right-0 w-[70%] h-[70%] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.55) 1.2px, transparent 1.2px)',
            backgroundSize: '14px 14px',
            opacity: 0.4,
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.16) 0%, transparent 65%)',
          }}
        />
        {/* Diamond outlines */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <svg
            width="70%" height="100%"
            viewBox="0 0 300 480"
            preserveAspectRatio="xMidYMax meet"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          >
            <polygon
              points="150,30 280,160 280,450 20,450 20,160"
              fill="none"
              stroke="rgba(255,255,255,0.20)"
              strokeWidth="1.5"
            />
            <polygon
              points="150,55 258,172 258,432 42,432 42,172"
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1"
            />
          </svg>
        </div>
        {/* Accent lines */}
        <div className="absolute bottom-16 left-4 flex flex-col gap-2 pointer-events-none" style={{ zIndex: 1 }}>
          {[60, 42, 28].map((w, i) => (
            <div key={i} className="h-[3px] rounded-full bg-white" style={{ width: `${w}px`, opacity: 0.35 - i * 0.08 }} />
          ))}
        </div>
        {/* Sparkle */}
        <div
          className="absolute bottom-6 right-6 text-white/60 text-xl pointer-events-none select-none"
          style={{ zIndex: 2, animation: 'floatSparkle 3s ease-in-out infinite' }}
        >✦</div>

        {/* Girl image — centered */}
        <img
          src={girlImg}
          alt="Selvakumari K"
          className="absolute bottom-0 left-1/2 object-contain pointer-events-none select-none"
          style={{
            transform: 'translateX(-50%)',
            height: '90%',
            maxHeight: '390px',
            zIndex: 3,
            filter: 'drop-shadow(0 20px 40px rgba(60,20,120,0.38))',
            animation: 'floatY 5s ease-in-out infinite',
          }}
        />

        {/* Code card — top right */}
        <div
          className="absolute top-3 right-3"
          style={{
            zIndex: 10,
            width: 'min(220px, 56vw)',
            borderRadius: 14,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(255,255,255,0.13)',
            border: '1px solid rgba(255,255,255,0.22)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            animation: 'floatY 4s ease-in-out infinite',
          }}
        >
          <div style={{ padding: '10px 12px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(196,181,253,0.9)', marginBottom: 4 }}>&lt;code&gt;</p>
            <pre style={{ fontFamily: 'monospace', fontSize: 9, lineHeight: 1.65, color: 'rgba(255,255,255,0.9)', whiteSpace: 'pre', overflow: 'hidden', margin: 0 }}>
<span style={{color:'#c4b5fd'}}>const</span> <span style={{color:'#fff'}}>dev</span> = {`{
  `}<span style={{color:'#c4b5fd'}}>name</span>: <span style={{color:'#6ee7b7'}}>"Selvakumari K"</span>,{`
  `}<span style={{color:'#c4b5fd'}}>role</span>: <span style={{color:'#6ee7b7'}}>"Full Stack"</span>,{`
  `}<span style={{color:'#c4b5fd'}}>passion</span>: <span style={{color:'#fde68a'}}>"Building"</span>{`
}`};</pre>
            <p style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(196,181,253,0.9)', marginTop: 4 }}>&lt;/code&gt;</p>
            <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
              {[0.85, 0.3, 0.3].map((op, i) => (
                <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: `rgba(255,255,255,${op})`, display: 'inline-block' }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content below banner */}
      <div className="flex flex-col px-5 pt-6 pb-8 bg-white dark:bg-[#0f172a]" style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                      bg-purple-50 dark:bg-purple-900/30
                      border border-purple-200/70 dark:border-purple-700/50
                      text-[#7C5CFF] dark:text-purple-300 text-[12px] font-medium
                      w-fit mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#43ea26] animate-pulse" />
          Welcome to my portfolio
        </div>

        {/* Heading */}
        <h1 className="leading-tight mb-2.5">
          <span className="block text-[32px] font-extrabold text-slate-800 dark:text-white">Hi, I'm</span>
          <span
            className="block text-[36px] font-extrabold leading-tight"
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
        <p className="text-[15px] font-semibold text-slate-700 dark:text-slate-200 mb-3">
          Aspiring <span className="text-[#7C5CFF] dark:text-purple-300">Full Stack Developer</span>
        </p>

        {/* Description */}
        <p className="text-[13.5px] text-slate-500 dark:text-slate-400 leading-[1.75] mb-6">
          I build real-world web applications using MERN stack and love integrating AI to create smart solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={() => onNavigate?.('Projects')}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                       bg-[#7C5CFF] text-white text-[14px] font-bold
                       hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                       active:scale-[0.98] transition-all duration-200"
          >
            View My Work
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <button
            onClick={handleDownloadResume}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                       border-2 border-[#7C5CFF]/30 dark:border-purple-500/40
                       text-[#7C5CFF] dark:text-purple-300 text-[14px] font-bold
                       hover:bg-purple-50 dark:hover:bg-purple-900/20
                       active:scale-[0.98] transition-all duration-200"
          >
            Download Resume
            <Download size={15} strokeWidth={2.5} />
          </button>
        </div>

        {/* About card */}
        <div
          className="rounded-2xl p-4 mb-5"
          style={{
            background: 'linear-gradient(135deg, #7C5CFF 0%, #8B6FFF 50%, #C4B5FD 100%)',
          }}
        >
          <div className="flex items-center gap-2.5 mb-2.5">
            <div style={{
              width: 26, height: 26, borderRadius: 8,
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, margin: 0 }}>About Me</p>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, lineHeight: 1.65, margin: 0, marginBottom: 10 }}>
            I'm a final-year B.Tech AI &amp; Data Science student passionate about web development. I enjoy building full stack applications and exploring AI integration to solve real-world problems.
          </p>
          <button
            onClick={() => onNavigate?.('About')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.9)', color: '#7C5CFF',
              fontSize: 12, fontWeight: 700,
              padding: '6px 14px', borderRadius: 10, border: 'none', cursor: 'pointer',
              transition: 'background 0.15s',
            }}
          >
            More About Me <ArrowRight size={12} strokeWidth={2.5} />
          </button>
          <div style={{ float: 'right', color: 'rgba(255,255,255,0.5)', fontSize: 20, lineHeight: 1, marginTop: -8 }}>✦</div>
        </div>

        {/* Tech strip */}
        <div
          className="rounded-2xl p-4 mb-5 bg-white dark:bg-[#1e293b]
                     border border-slate-100 dark:border-white/5
                     shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          <p className="text-[13px] font-bold text-slate-700 dark:text-white mb-3">Tech I Use</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
              { label: 'JS', color: '#F7DF1E', bg: '#323330' },
              { label: 'Node', color: '#68A063', bg: 'rgba(104,160,99,0.12)' },
              { label: 'MongoDB', color: '#4DB33D', bg: 'rgba(77,179,61,0.12)' },
              { label: 'Express', color: '#aaa', bg: 'rgba(150,150,150,0.12)' },
              { label: 'Django', color: '#fff', bg: '#44B78B' },
              { label: 'Python', color: '#FFD43B', bg: 'rgba(255,212,59,0.12)' },
              { label: 'Tailwind', color: '#38BDF8', bg: 'rgba(56,189,248,0.12)' },
            ].map(({ label, color, bg }) => (
              <div key={label} title={label} style={{
                height: 40, borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: bg,
                fontSize: 9, fontWeight: 700, color, letterSpacing: 0.3,
              }}>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-2">
          <MobileSocialRow href={GITHUB_URL} icon={<GithubIcon size={17} />} label="GitHub" sub="@SELVAKUMARI-737" />
          <MobileSocialRow href={LINKEDIN_URL} icon={<LinkedinIcon size={17} />} label="LinkedIn" sub="selvakumari-sk" />
          <MobileSocialRow href={EMAIL} icon={<Mail size={17} />} label="Email" sub="kselvakumari737" isEmail />
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
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

      {/* ── Desktop layout (md and above) ── */}
      <section className="hidden md:flex h-full">
        {/* Left 55% */}
        <div className="w-[55%] h-full overflow-hidden">
          <LeftPanel onNavigate={onNavigate} />
        </div>
        {/* Right 45% */}
        <div className="w-[45%] h-full">
          <RightPanel onNavigate={onNavigate} />
        </div>
      </section>

      {/* ── Mobile layout (below md) ── */}
      <section className="md:hidden w-full overflow-y-auto">
        <MobileHero onNavigate={onNavigate} />
      </section>
    </>
  );
}