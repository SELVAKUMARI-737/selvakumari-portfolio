import {
  Home,
  User,
  Code2,
  Briefcase,
  Award,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';

const icons = [
  { Icon: Home,      label: 'Home' },
  { Icon: User,      label: 'About' },
  { Icon: Code2,     label: 'Skills' },
  { Icon: Briefcase, label: 'Projects' },
  { Icon: Award,     label: 'Certificates' },
  { Icon: Mail,      label: 'Contact' },
];

export default function Sidebar({ dark, onToggleDark, activePage, onNavigate }) {
  return (
    <aside
      className="hidden lg:flex flex-col items-center
                 w-[58px] h-screen shrink-0
                 bg-white dark:bg-[#111827]
                 border-r border-purple-50 dark:border-white/5
                 shadow-[2px_0_12px_rgba(0,0,0,0.04)]
                 transition-colors duration-300"
    >
      {/* Centered Navigation Icons */}
      <div className="flex-1 flex flex-col items-center justify-center gap-1.5">
        {icons.map(({ Icon, label }) => (
          <button
            key={label}
            title={label}
            onClick={() => onNavigate?.(label)}
            className={`w-9 h-9 rounded-xl flex items-center justify-center
                        transition-all duration-150
                        ${activePage === label
                          ? 'bg-purple-50 dark:bg-purple-900/30 text-[#7C5CFF]'
                          : 'text-slate-400 dark:text-slate-500 hover:bg-purple-50 dark:hover:bg-white/10 hover:text-[#7C5CFF]'
                        }`}
          >
            <Icon size={17} />
          </button>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={onToggleDark}
        title="Toggle theme"
        className="mb-5 w-9 h-9 rounded-xl flex items-center justify-center
                   text-slate-400 dark:text-slate-400
                   hover:bg-purple-50 dark:hover:bg-white/10 hover:text-[#7C5CFF]
                   transition-all duration-150"
      >
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </aside>
  );
}