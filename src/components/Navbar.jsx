import { Sun, Moon, X, Menu } from 'lucide-react';
import { useState } from 'react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

export default function Navbar({ dark, onToggleDark, activePage, onNavigate, onHireMe }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate?.(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="shrink-0 z-50 flex items-center justify-between px-10 h-[68px]
                         bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md
                         transition-colors duration-300 relative">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-[#7C5CFF] to-[#A78BFA]
                          text-white font-extrabold text-[15px] tracking-wide
                          shadow-lg shadow-purple-500/30">
            SK
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-bold text-slate-800 dark:text-white">Selvakumari K</p>
            <p className="text-[12px] font-medium text-[#7C5CFF]">Full Stack Developer</p>
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

        {/* RIGHT: Theme toggle + Hire Me (desktop) / Hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Theme toggle — always visible */}
          <button
            onClick={onToggleDark}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-300
                       hover:bg-purple-50 dark:hover:bg-white/10
                       transition-colors duration-150"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hire Me — desktop only */}
          <button
            onClick={() => onHireMe?.()}
            className="hidden md:inline-flex btn-purple !py-2.5 !px-6 !text-[14px]"
          >
            Hire Me
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl text-slate-500 dark:text-slate-300
                       hover:bg-purple-50 dark:hover:bg-white/10
                       transition-colors duration-150"
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Slide-in panel */}
          <div
            className="md:hidden fixed top-[68px] left-0 right-0 z-50
                       bg-white dark:bg-[#0f172a]
                       border-b border-slate-100 dark:border-white/10
                       shadow-xl"
            style={{ animation: 'slideDown 0.22s ease both' }}
          >
            <style>{`
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-12px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <nav className="flex flex-col py-2">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => handleNav(l)}
                  className={`flex items-center gap-3 px-6 py-3.5 text-[15px] font-medium
                              text-left transition-colors duration-150
                              border-none bg-transparent cursor-pointer
                              ${activePage === l
                                ? 'text-[#7C5CFF] bg-purple-50 dark:bg-purple-900/20'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-white/5 hover:text-[#7C5CFF]'
                              }`}
                >
                  {activePage === l && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] flex-shrink-0" />
                  )}
                  {activePage !== l && <span className="w-1.5 h-1.5 flex-shrink-0" />}
                  {l}
                </button>
              ))}
              {/* Hire Me — inside drawer */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-white/10 mt-1">
                <button
                  onClick={() => { onHireMe?.(); setMobileOpen(false); }}
                  className="w-full py-3 rounded-xl bg-[#7C5CFF] text-white text-[14px] font-bold
                             hover:shadow-[0_8px_24px_rgba(124,92,255,0.45)]
                             active:scale-[0.98] transition-all duration-200"
                >
                  Hire Me
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}