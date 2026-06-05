import { User, ArrowRight } from 'lucide-react';
import {
  SiReact, SiJavascript, SiNodedotjs, SiMongodb,
  SiExpress, SiDjango, SiPython, SiTailwindcss,
} from 'react-icons/si';

/* ─── Animation keyframes ─── */
const keyframes = `
  @keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes floatYSlow {
    0%, 100% { transform: translateY(-50%); }
    50%       { transform: translateY(calc(-50% - 6px)); }
  }
  @keyframes floatYFast {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
`;

const techIcons = [
  { Icon: SiReact,       color: '#61DAFB', label: 'React' },
  { Icon: SiJavascript,  color: '#F7DF1E', label: 'JS',       bg: '#323330' },
  { Icon: SiNodedotjs,   color: '#68A063', label: 'Node' },
  { Icon: SiMongodb,     color: '#4DB33D', label: 'MongoDB' },
  { Icon: SiExpress,     color: '#ffffff', label: 'Express' },
  { Icon: SiDjango,      color: '#092E20', label: 'Django',   bg: '#44B78B' },
  { Icon: SiPython,      color: '#FFD43B', label: 'Python' },
  { Icon: SiTailwindcss, color: '#38BDF8', label: 'Tailwind' },
];

/* ✅ Single constant width for ALL cards */
const CARD_WIDTH = 260;

function GlassCard({ style = {}, children }) {
  return (
    <div style={{
      position: 'absolute',
      width: CARD_WIDTH,
      borderRadius: 16,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      background: 'rgba(255,255,255,0.13)',
      border: '1px solid rgba(255,255,255,0.22)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
      zIndex: 10,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Code Card ── */
export function CodeCard() {
  return (
    <GlassCard style={{ top: 16, right: 16, animation: 'floatY 4s ease-in-out infinite' }}>
      <div style={{ padding: '14px 16px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(196,181,253,0.9)', marginBottom: 6 }}>
          &lt;code&gt;
        </p>
        <pre style={{
          fontFamily: 'monospace', fontSize: 10.5, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.9)', whiteSpace: 'pre', overflow: 'hidden', margin: 0,
        }}>
<span style={{color:'#c4b5fd'}}>const</span> <span style={{color:'#fff'}}>developer</span> = {`{
  `}<span style={{color:'#c4b5fd'}}>name</span>: <span style={{color:'#6ee7b7'}}>"Selvakumari K"</span>,{`
  `}<span style={{color:'#c4b5fd'}}>role</span>: <span style={{color:'#6ee7b7'}}>"Full Stack Dev"</span>,{`
  `}<span style={{color:'#c4b5fd'}}>passion</span>: <span style={{color:'#fde68a'}}>"Building"</span>,{`
  `}<span style={{color:'#c4b5fd'}}>learning</span>: [{`
    `}<span style={{color:'#6ee7b7'}}>"Django"</span>,<span style={{color:'#6ee7b7'}}>"AI"</span>{`
  `}]{`
}`};</pre>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(196,181,253,0.9)', marginTop: 6 }}>
          &lt;/code&gt;
        </p>
        <div style={{ display: 'flex', gap: 5, marginTop: 10 }}>
          {[0.85, 0.3, 0.3].map((op, i) => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: `rgba(255,255,255,${op})`, display: 'inline-block' }} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ── Tech Card ── */
export function TechCard() {
  return (
    <GlassCard style={{
      top: '50%', right: 16,
      transform: 'translateY(-50%)',
      animation: 'floatYSlow 5s ease-in-out infinite',
      animationDelay: '0.6s',
    }}>
      <div style={{ padding: '14px 16px' }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, marginBottom: 12, fontFamily: "'Syne', sans-serif" }}>
          Tech I Use
        </p>
        {/* ✅ 4-col grid, icons uniform 40×40, perfectly centered */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {techIcons.map(({ Icon, color, label, bg }) => (
            <div key={label} title={label} style={{
              width: 40, height: 40, borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: bg ?? 'rgba(255,255,255,0.2)',
              cursor: 'default', margin: '0 auto',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Icon size={18} color={color} />
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ── About Card ── */
export function AboutCard({onNavigate}) {
  return (
    <GlassCard style={{
      bottom: 20, right: 16,
      animation: 'floatYFast 3.5s ease-in-out infinite',
      animationDelay: '0.4s',
    }}>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <User size={13} color="white" />
          </div>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: "'Syne', sans-serif" }}>
            About Me
          </p>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, lineHeight: 1.65, marginBottom: 12 }}>
          I'm a final-year B.Tech AI &amp; Data Science student passionate about web
          development. I enjoy building full stack applications and exploring AI
          integration to solve real-world problems.
        </p>
        <button
         onClick={() => onNavigate?.('About')}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.9)', color: '#7C5CFF',
            fontSize: 11.5, fontWeight: 700,
            padding: '7px 14px', borderRadius: 10, border: 'none', cursor: 'pointer',
            fontFamily: "'Syne', sans-serif", transition: 'transform 0.15s, background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateX(3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.transform = 'translateX(0)'; }}
        >
          More About Me <ArrowRight size={12} strokeWidth={2.5} />
        </button>
      </div>
    </GlassCard>
  );
}

export default function FloatingCards({onNavigate}) {
  return (
    <>
      <style>{keyframes}</style>
      <CodeCard />
      <TechCard />
      <AboutCard onNavigate={onNavigate} />
    </>
  );
}