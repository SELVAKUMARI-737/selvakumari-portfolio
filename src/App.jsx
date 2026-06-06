import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact'; // Added the import for your new Contact section

export default function App() {
  const [dark, setDark] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':         return <Hero dark={dark} onNavigate={setActivePage} />;
      case 'About':        return <About dark={dark} onNavigate={setActivePage}/>;
      case 'Skills':       return <Skills dark={dark} />;
      case 'Projects':     return <Projects dark={dark} />;
      case 'Certificates': return <Certificates dark={dark} />;
      case 'Contact':      return <Contact dark={dark} />; // Enabled contact routing
      default:             return <Hero dark={dark} onNavigate={setActivePage} />;
    }
  };

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="relative flex flex-col h-screen overflow-hidden font-poppins
                      bg-[#F8F9FC] dark:bg-[#0f172a] transition-colors duration-300">

        <Navbar
          dark={dark}
          onToggleDark={() => setDark(d => !d)}
          activePage={activePage}
          onNavigate={setActivePage}
          onHireMe={() => setActivePage('Contact')}
        />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            dark={dark}
            onToggleDark={() => setDark(d => !d)}
            activePage={activePage}
            onNavigate={setActivePage}
          />
          <main className="flex-1 overflow-hidden">
            {renderPage()}
          </main>
        </div>

      </div>
    </div>
  );
}