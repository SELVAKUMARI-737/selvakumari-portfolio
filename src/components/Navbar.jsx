import { Sun, Moon, X, Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Home,
  User,
  Code2,
  Briefcase,
  Award,
  Mail,
} from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

const navIcons = {
  Home:         <Home size={17} />,
  About:        <User size={17} />,
  Skills:       <Code2 size={17} />,
  Projects:     <Briefcase size={17} />,
  Certificates: <Award size={17} />,
  Contact:      <Mail size={17} />,
};

export default function Navbar({ dark, onToggleDark, activePage, onNavigate, onHireMe }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (l) => {
    onNavigate?.(l);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="shrink-0 z-50 flex items-center justify-between px-4 md:px-10 h-[64px] md:h-[68px]
                         bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md
                         border-b border-slate-100/60 dark:border-white/5
                         transition-colors duration-300">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-[#7C5CFF] to-[#A78BFA]
                          text-white font-extrabold text-[14px] md:text-[15px] tracking-wide
                          shadow-lg shadow-purple-500/30">
            SK
          </div>
          <div className="leading-tight">
            <p className="text-[14px] md:text-[15px] font-bold text-slate-800 dark:text-white">Selvakumari K</p>
            <p className="text-[11px] md:text-[12px] font-medium text-[#7C5CFF]">Full Stack Developer</p>
          </div>
        </div>

        {/* NAV LINKS — desktop only */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => onNavigate?.(l)}
              className={`text-[14px] font-medium transition-colors duration-150
                          bg-transparent border-none cursor-pointer
                          ${activePage === l
                            ? 'text-[#7C5CFF]'
                            : 'text-slate-500 dark:text-slate-400 hover:text-[#7C5CFF] dark:hover:text-purple-300'
                          }`}
            >
              {l}
            </button>
          ))}
        </nav>

        {/* RIGHT — desktop: theme + hire me | mobile: theme + hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme toggle */}
          <button
            onClick={onToggleDark}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-300
                       hover:bg-purple-50 dark:hover:bg-white/10
                       transition-colors duration-150"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Hire Me — desktop only */}
          <button
            onClick={() => onHireMe?.()}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                       bg-[#7C5CFF] text-white text-[14px] font-bold
                       hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                       transition-all duration-200"
          >
            Hire Me
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-xl text-slate-500 dark:text-slate-300
                       hover:bg-purple-50 dark:hover:bg-white/10
                       transition-colors duration-150"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[998] md:hidden"
          style={{ animation: 'fadeIn 0.2s ease both' }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] z-[999] md:hidden
                    bg-white dark:bg-[#0f172a]
                    shadow-[−8px_0_40px_rgba(0,0,0,0.15)]
                    flex flex-col
                    transition-transform duration-300 ease-out
                    ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4
                        border-b border-slate-100 dark:border-white/5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-[36px] h-[36px] rounded-xl flex items-center justify-center
                            bg-gradient-to-br from-[#7C5CFF] to-[#A78BFA]
                            text-white font-extrabold text-[13px] tracking-wide
                            shadow-md shadow-purple-500/30">
              SK
            </div>
            <div className="leading-tight">
              <p className="text-[14px] font-bold text-slate-800 dark:text-white">Selvakumari K</p>
              <p className="text-[11px] font-medium text-[#7C5CFF]">Full Stack Developer</p>
            </div>
          </div>
          {/* Close */}
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 dark:text-slate-400
                       hover:bg-purple-50 dark:hover:bg-white/10
                       hover:text-[#7C5CFF] transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-3 py-4 gap-1 overflow-y-auto">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl text-left
                          text-[14px] font-medium transition-all duration-150 border-none cursor-pointer
                          ${activePage === l
                            ? 'bg-purple-50 dark:bg-purple-900/30 text-[#7C5CFF]'
                            : 'bg-transparent text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-white/5 hover:text-[#7C5CFF]'
                          }`}
            >
              <span className={`${activePage === l ? 'text-[#7C5CFF]' : 'text-slate-400'}`}>
                {navIcons[l]}
              </span>
              {l}
            </button>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-4 border-t border-slate-100 dark:border-white/5 flex flex-col gap-3">
          {/* Hire Me */}
          <button
            onClick={() => { onHireMe?.(); setMobileOpen(false); }}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                       bg-[#7C5CFF] text-white text-[14px] font-bold
                       hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                       transition-all duration-200"
          >
            Hire Me
          </button>

          {/* Theme toggle row */}
          <button
            onClick={onToggleDark}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                       border border-slate-100 dark:border-white/10
                       text-slate-500 dark:text-slate-300 text-[13px] font-medium
                       hover:bg-purple-50 dark:hover:bg-white/5
                       hover:text-[#7C5CFF] transition-all duration-150"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}