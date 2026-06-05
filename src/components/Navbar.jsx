import { Sun, Moon } from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

export default function Navbar({ dark, onToggleDark, activePage, onNavigate, onHireMe }) {
  return (
    <header className="shrink-0 z-50 flex items-center justify-between px-10 h-[68px]
                       bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md
                       transition-colors duration-300">
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

      {/* NAV LINKS */}
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

      {/* RIGHT: Theme toggle + Hire Me */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleDark}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-300
                     hover:bg-purple-50 dark:hover:bg-white/10
                     transition-colors duration-150"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Hire Me → navigates to Contact section */}
        <button
          onClick={() => onHireMe?.()}
          className="btn-purple !py-2.5 !px-6 !text-[14px]"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
}