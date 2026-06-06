/* ─────────────────────────────────────────────────────────────────────────────
   Contact.jsx
 ───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import {
  Mail, Phone, MapPin, Send,
  Clock, Calendar, ArrowUp,
  User, Bookmark, HelpCircle, ExternalLink
} from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import contactGirlImg from '../assets/contact-girl.png';

const WA_NUMBER = '919345726974';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending]   = useState(false);
  const [sent, setSent]         = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSending(true);
    const text = [
      `👋 *New Portfolio Message*`, ``,
      `*Name:* ${formData.name}`,
      formData.email   ? `*Email:* ${formData.email}`     : null,
      formData.subject ? `*Subject:* ${formData.subject}` : null,
      ``, `*Message:*`, formData.message,
    ].filter((l) => l !== null).join('\n');
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  const scrollToTop = () => {
    const el =
      document.querySelector('.contact-viewport-container') ||
      document.querySelector('.contact-mobile-container');
    if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub,     href: 'https://github.com/SELVAKUMARI-737',     label: 'GitHub'   },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/selvakumari-sk', label: 'LinkedIn' },
    { icon: FaWhatsapp,   href: `https://wa.me/${WA_NUMBER}`,             label: 'WhatsApp' },
    { icon: Mail,         href: 'mailto:kselvakumari737@gmail.com',       label: 'Email'    },
  ];

  const contactDetails = [
    { icon: Mail,         title: 'Email',    value: 'kselvakumari737@gmail.com',      href: 'mailto:kselvakumari737@gmail.com'       },
    { icon: Phone,        title: 'Phone',    value: '9345726974',                      href: `https://wa.me/${WA_NUMBER}`             },
    { icon: MapPin,       title: 'Location', value: 'Chennai, Tamilnadu, India',       href: '#'                                      },
    { icon: FaLinkedinIn, title: 'LinkedIn', value: 'linkedin.com/in/selvakumari-sk', href: 'https://linkedin.com/in/selvakumari-sk' },
    { icon: FaGithub,     title: 'GitHub',   value: 'github.com/SELVAKUMARI-737',     href: 'https://github.com/SELVAKUMARI-737'     },
  ];

  const inputCls =
    'w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 ' +
    'text-zinc-800 dark:text-zinc-100 rounded-xl outline-none ' +
    'focus:border-purple-400 dark:focus:border-purple-500 ' +
    'transition-all duration-200 text-[13px] font-medium box-border';

  /* ── Single combined quote card — top-left ── */
  const QuoteCard = () => (
    <div style={{
      position: 'absolute',
      top: '18px',
      left: '18px',
      zIndex: 20,
      background: 'rgba(255,255,255,0.93)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '14px',
      padding: '13px 15px',
      boxShadow: '0 6px 24px rgba(124,92,255,0.18)',
      maxWidth: '200px',
      animation: 'quoteSlide 0.6s ease 0.5s both',
      border: '1px solid rgba(124,92,255,0.1)',
    }}>
      {/* Label */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        marginBottom: '9px',
      }}>
        <div style={{ width: '3px', height: '28px', borderRadius: '2px', background: 'linear-gradient(to bottom, #7C5CFF, #A78BFA)', flexShrink: 0 }} />
        <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C5CFF', textTransform: 'uppercase', letterSpacing: '0.09em', lineHeight: 1.3 }}>
          Full Stack<br />Developer
        </span>
      </div>

      {/* Quote 1 */}
      <div style={{
        fontSize: '12px', fontWeight: 700, color: '#1a1a2e',
        lineHeight: 1.45, marginBottom: '8px',
        paddingLeft: '8px',
        borderLeft: '2px solid #EDE9FF',
      }}>
        "Building smarter<br />solutions every day."
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, #EDE9FF, transparent)',
        margin: '8px 0',
      }} />
      
      
      {/* Footer dot row */}
      <div style={{ display: 'flex', gap: '4px', marginTop: '10px', alignItems: 'center' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C5CFF' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A78BFA' }} />
        <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#DDD6FE' }} />
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes sparkle {
          0%,100% { opacity:0.3; transform: scale(0.8) rotate(0deg); }
          50%      { opacity:1;   transform: scale(1.3) rotate(180deg); }
        }
        @keyframes waBounce {
          0%,100% { transform: scale(1); }
          30%      { transform: scale(1.18); }
          60%      { transform: scale(0.94); }
        }
        @keyframes quoteSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wa-btn:hover { animation: waBounce 0.5s ease; }
        .sparkle1 { animation: sparkle 2.8s ease-in-out infinite; }
        .sparkle2 { animation: sparkle 3.4s ease-in-out 0.6s infinite; }
        .sparkle3 { animation: sparkle 2.2s ease-in-out 1.2s infinite; }
        .contact-detail-row { transition: all 0.22s ease; }
        .contact-detail-row:hover { transform: translateX(4px); }
      `}</style>

      {/* ══════════════════════════════════════════
          DESKTOP
      ══════════════════════════════════════════ */}
      <section className="hidden lg:flex w-full h-full bg-[#F8F9FC] dark:bg-zinc-950 overflow-y-auto p-8 pb-12 box-border transition-colors duration-500 contact-viewport-container">
        <div style={{ display: 'grid', gridTemplateColumns: '30% 1fr', gap: '28px', width: '100%', alignItems: 'start' }}>

          {/* ── LEFT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Intro */}
            <div style={{ padding: '8px 4px', animation: 'fadeLeft 0.5s ease 0.1s both' }}>
              <div className="bg-[#F5F3FF] dark:bg-purple-950/40 border border-[#DDD6FE] dark:border-purple-900/40 text-[#7C5CFF] dark:text-purple-400 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full mb-4 text-[13px] font-bold">
                <Mail size={13} strokeWidth={2.5} /> Let's Connect
              </div>
              <h2 className="m-0 text-zinc-900 dark:text-white" style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1.15 }}>
                Let's Work<br />
                <span style={{ background: 'linear-gradient(to right,#7C5CFF,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Together!</span>
              </h2>
              <p className="text-[#6B7280] dark:text-zinc-400 m-0 mt-4 text-[13.5px] leading-relaxed">
                I'm actively looking for opportunities where I can contribute, learn and grow.
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="wa-btn inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-xl no-underline font-bold text-[13px] text-white transition-all duration-200 hover:shadow-lg hover:shadow-green-400/30"
                style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
              >
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>
            </div>

            {/* Get In Touch card */}
            <div
              className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-5 rounded-[22px] transition-colors duration-500"
              style={{ animation: 'fadeLeft 0.5s ease 0.25s both', boxShadow: '0 2px 18px rgba(124,92,255,0.06)' }}
            >
              <div className="text-zinc-800 dark:text-zinc-100 font-bold mb-4 flex items-center gap-2" style={{ fontSize: '14.5px' }}>
                <span style={{ width: '3px', height: '14px', background: '#7C5CFF', borderRadius: '2px', display: 'inline-block', flexShrink: 0 }} />
                Get In Touch
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {contactDetails.map((d, i) => (
                  <a key={i} href={d.href}
                    target={d.href !== '#' ? '_blank' : '_self'} rel="noopener noreferrer"
                    className="contact-detail-row flex items-center justify-between p-3 rounded-xl border border-[#F4F4F8] dark:border-zinc-800 hover:border-purple-200 dark:hover:border-purple-800 bg-[#FCFCFD] dark:bg-zinc-900/40 hover:bg-purple-50/40 dark:hover:bg-purple-950/20 no-underline"
                    style={{ animationDelay: `${0.3 + i * 0.07}s`, animation: 'fadeUp 0.4s ease both', opacity: 0 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                      <div className="bg-[#F5F3FF] dark:bg-purple-950/40 text-[#7C5CFF] dark:text-purple-400 flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0">
                        <d.icon size={14} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <span className="block text-zinc-400 dark:text-zinc-500 font-semibold" style={{ fontSize: '10.5px' }}>{d.title}</span>
                        <span className="block text-zinc-700 dark:text-zinc-300 font-medium truncate mt-0.5" style={{ fontSize: '12.5px' }}>{d.value}</span>
                      </div>
                    </div>
                    <ExternalLink size={12} className="text-purple-400 opacity-50 flex-shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social card */}
            <div
              className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-5 rounded-[22px] transition-colors duration-500"
              style={{ animation: 'fadeLeft 0.5s ease 0.4s both', boxShadow: '0 2px 18px rgba(124,92,255,0.06)' }}
            >
              <div className="text-zinc-500 dark:text-zinc-400 font-bold mb-4" style={{ fontSize: '13px' }}>
                Let's Connect on Social Media
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    className="w-9 h-9 rounded-xl border border-[#EDEDF5] dark:border-zinc-700
                               text-zinc-600 dark:text-zinc-300 hover:text-[#7C5CFF] dark:hover:text-purple-400
                               hover:border-purple-300 dark:hover:border-purple-600
                               flex items-center justify-center transition-all duration-200 shadow-sm no-underline
                               hover:-translate-y-1 hover:shadow-md"
                  >
                    {s.label === 'WhatsApp'
                      ? <FaWhatsapp size={15} className="text-green-500" />
                      : <s.icon size={15} />
                    }
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Form + Girl card */}
            <div
              className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 rounded-[24px] overflow-hidden"
              style={{ display: 'grid', gridTemplateColumns: '1fr 36%', boxShadow: '0 4px 32px rgba(124,92,255,0.07)', animation: 'fadeRight 0.5s ease 0.2s both' }}
            >
              {/* Form */}
              <div className="p-8">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                  <div className="w-9 h-9 bg-purple-50 dark:bg-purple-950/40 rounded-xl flex items-center justify-center text-[#7C5CFF]">
                    <Send size={15} />
                  </div>
                  <div>
                    <h3 className="text-zinc-800 dark:text-zinc-100 m-0" style={{ fontSize: '17px', fontWeight: 700 }}>Send Me a Message</h3>
                    <p className="text-zinc-400 dark:text-zinc-500 m-0 mt-0.5 flex items-center gap-1.5" style={{ fontSize: '12px', fontWeight: 500 }}>
                      <FaWhatsapp size={12} className="text-green-500" />
                      Opens WhatsApp — I'll reply fast!
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800/60 my-5" />

                {sent && (
                  <div className="p-3.5 mb-5 rounded-xl text-[13px] font-medium border bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <FaWhatsapp size={14} /> WhatsApp opened! Your message is ready to send.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div style={{ position: 'relative' }}>
                      <User size={14} className="text-zinc-400 absolute left-4 top-[17px] pointer-events-none" />
                      <input type="text" name="name" placeholder="Your Name"
                        value={formData.name} onChange={handleChange} required
                        className={inputCls} style={{ padding: '15px 16px 15px 42px' }} />
                    </div>
                    <div style={{ position: 'relative' }}>
                      <Mail size={14} className="text-zinc-400 absolute left-4 top-[17px] pointer-events-none" />
                      <input type="email" name="email" placeholder="Your Email"
                        value={formData.email} onChange={handleChange}
                        className={inputCls} style={{ padding: '15px 16px 15px 42px' }} />
                    </div>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <Bookmark size={14} className="text-zinc-400 absolute left-4 top-[17px] pointer-events-none" />
                    <input type="text" name="subject" placeholder="Subject"
                      value={formData.subject} onChange={handleChange}
                      className={inputCls} style={{ padding: '15px 16px 15px 42px' }} />
                  </div>

                  <div style={{ position: 'relative' }}>
                    <HelpCircle size={14} className="text-zinc-400 absolute left-4 top-[18px] pointer-events-none" />
                    <textarea name="message" placeholder="Your Message" rows="5"
                      value={formData.message} onChange={handleChange} required
                      className={inputCls} style={{ padding: '15px 16px 15px 42px', resize: 'none' }} />
                  </div>

                  <button type="submit" disabled={sending}
                    className="wa-btn flex items-center gap-2.5 border-none cursor-pointer font-bold transition-all duration-300 text-white disabled:opacity-60"
                    style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '13px', width: 'fit-content', background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 4px 18px rgba(37,211,102,0.35)' }}
                  >
                    {sending ? 'Opening WhatsApp…' : <><FaWhatsapp size={15} /> Send via WhatsApp</>}
                  </button>
                </form>
              </div>

              {/* ── Girl illustration panel ── */}
              <div
                className="relative flex items-end justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, #f5f3ff 0%, #ede9fe 60%, #ddd6fe 100%)',
                  /* paddingBottom gives the photo room above the base */
                  paddingBottom: '28px',
                }}
              >
                {/* Dot pattern */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(rgba(124,92,255,0.12) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />

                {/* Sparkles */}
                <span className="sparkle1 absolute top-8 right-8 text-[#7C5CFF] text-2xl select-none pointer-events-none">✦</span>
                <span className="sparkle2 absolute top-1/3 right-5 text-purple-300 text-lg select-none pointer-events-none">✦</span>
                <span className="sparkle3 absolute bottom-1/3 right-6 text-indigo-300 text-base select-none pointer-events-none">✦</span>

                {/* ── SINGLE combined quote card — top-left ── */}
                <QuoteCard />

                {/* Photo — lifted via paddingBottom on parent, NOT flush with bottom */}
                <img
                  src={contactGirlImg}
                  alt="Contact Illustration"
                  className="relative z-10 object-contain select-none"
                  style={{
                    height: '290px',
                    maxHeight: '85%',
                    width: 'auto',
                    filter: 'drop-shadow(0 16px 36px rgba(60,20,120,0.30))',
                  }}
                />
              </div>
            </div>

            {/* KPI cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', animation: 'fadeUp 0.5s ease 0.45s both' }}>
              <div className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-5 rounded-[22px] flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-[44px] h-[44px] bg-purple-50 dark:bg-purple-950/40 text-[#7C5CFF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-zinc-800 dark:text-zinc-200 m-0 font-bold" style={{ fontSize: '14px' }}>My Availability</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 m-0 mt-2" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
                    Open to <span className="text-purple-600 dark:text-purple-400 font-bold">Full Stack Developer</span> roles, internships and exciting projects.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-5 rounded-[22px] flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-[44px] h-[44px] bg-[#EDFAF5] dark:bg-emerald-950/30 text-[#10B981] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-zinc-800 dark:text-zinc-200 m-0 font-bold" style={{ fontSize: '14px' }}>Response Time</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 m-0 mt-2" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
                    I usually respond within <span className="text-emerald-500 font-bold">24 hours</span>. Let's build something amazing!
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-1">
              <p className="m-0 text-[11.5px] text-zinc-400 dark:text-zinc-500">© 2026 Selvakumari K. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MOBILE
      ══════════════════════════════════════════ */}
      <div className="lg:hidden bg-[#F8F9FC] dark:bg-black flex flex-col h-full overflow-y-auto relative transition-colors duration-500 contact-mobile-container">

        {/* Intro */}
        <div className="px-5 pt-8 pb-2" style={{ animation: 'fadeUp 0.5s ease 0.1s both' }}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-purple-600 dark:text-purple-400 text-[12px] font-bold">
            <Mail size={12} /> Let's Connect
          </div>
          <h2 className="m-0 mb-2.5 text-[26px] font-black tracking-tight leading-tight">
            <span className="text-zinc-900 dark:text-white">Let's Work </span>
            <span style={{ background: 'linear-gradient(to right,#7C5CFF,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Together!</span>
          </h2>
          <p className="m-0 text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            I'm actively looking for opportunities. Reach out for collaborations or just a friendly hello!
          </p>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
            className="wa-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl no-underline font-bold text-[13px] text-white"
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 4px 14px rgba(37,211,102,0.35)' }}>
            <FaWhatsapp size={15} /> Chat on WhatsApp
          </a>
        </div>

        {/* ── MOBILE GIRL STRIP ── */}
        <div
          className="relative mx-5 mt-5 rounded-2xl overflow-hidden flex items-end justify-center"
          style={{
            height: '340px',
            background: 'linear-gradient(160deg, #f5f3ff 0%, #ddd6fe 100%)',
            animation: 'fadeUp 0.5s ease 0.2s both',
            paddingBottom: '20px',      /* lifts photo above bottom edge */
          }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(124,92,255,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          <span className="sparkle1 absolute top-4 right-6 text-[#7C5CFF] text-xl select-none pointer-events-none">✦</span>
          <span className="sparkle2 absolute top-1/2 right-4 text-purple-300 text-base select-none pointer-events-none">✦</span>
          <span className="sparkle3 absolute bottom-1/3 right-5 text-indigo-300 text-sm select-none pointer-events-none">✦</span>

          {/* ── Single combined quote card ── */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 20,
            background: 'rgba(255,255,255,0.93)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '13px',
            padding: '12px 14px',
            boxShadow: '0 5px 20px rgba(124,92,255,0.18)',
            maxWidth: '185px',
            border: '1px solid rgba(124,92,255,0.1)',
            animation: 'quoteSlide 0.6s ease 0.5s both',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
              <div style={{ width: '30px', height: '26px', borderRadius: '2px', background: 'linear-gradient(to bottom, #7C5CFF, #A78BFA)', flexShrink: 0 }} />
              <span style={{ fontSize: '8.5px', fontWeight: 800, color: '#7C5CFF', textTransform: 'uppercase', letterSpacing: '0.09em', lineHeight: 1.3 }}>
                Full Stack Developer
              </span>
            </div>
            <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a2e', lineHeight: 1.45, marginBottom: '7px', paddingLeft: '7px', borderLeft: '2px solid #EDE9FF' }}>
              "Building smarter<br />solutions every day."
            </div>
            <div style={{ height: '1px', background: 'linear-gradient(to right, #EDE9FF, transparent)', margin: '7px 0' }} />
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#4B5563', lineHeight: 1.45, paddingLeft: '7px', borderLeft: '2px solid #DDD6FE' }}>
              "Learn. Build.<br />Innovate. Repeat."
            </div>
            <div style={{ display: 'flex', gap: '4px', marginTop: '8px', alignItems: 'center' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C5CFF' }} />
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A78BFA' }} />
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#DDD6FE' }} />
            </div>
          </div>

          {/* Photo lifted via paddingBottom */}
          <img
            src={contactGirlImg}
            alt="Contact Illustration"
            className="relative z-10 select-none"
            style={{
              height: '300px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 14px 28px rgba(60,20,120,0.30))',
            }}
          />
        </div>

        {/* Form */}
        <div className="mx-5 mt-4 mb-4 bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-5 rounded-2xl shadow-sm"
          style={{ animation: 'fadeUp 0.5s ease 0.3s both' }}>
          <div className="flex items-center gap-2 mb-1 font-bold text-zinc-800 dark:text-zinc-100" style={{ fontSize: '14px' }}>
            <div className="w-7 h-7 bg-purple-50 dark:bg-purple-950/40 rounded-lg flex items-center justify-center text-[#7C5CFF] flex-shrink-0">
              <Send size={13} />
            </div>
            Send Me a Message
          </div>
          <p className="text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-1.5" style={{ fontSize: '11.5px', fontWeight: 500 }}>
            <FaWhatsapp size={11} className="text-green-500" /> Opens WhatsApp — I'll reply fast!
          </p>
          {sent && (
            <div className="p-3 mb-4 rounded-xl text-[12px] font-medium border bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 text-emerald-600 flex items-center gap-2">
              <FaWhatsapp size={13} /> WhatsApp opened! Your message is ready to send.
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 p-3 rounded-xl outline-none text-[13px] box-border font-medium focus:border-purple-400 transition-colors" />
            <input type="email" name="email" placeholder="Your Email (optional)" value={formData.email} onChange={handleChange}
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 p-3 rounded-xl outline-none text-[13px] box-border font-medium focus:border-purple-400 transition-colors" />
            <input type="text" name="subject" placeholder="Subject (optional)" value={formData.subject} onChange={handleChange}
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 p-3 rounded-xl outline-none text-[13px] box-border font-medium focus:border-purple-400 transition-colors" />
            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 p-3 rounded-xl outline-none text-[13px] box-border font-medium resize-none focus:border-purple-400 transition-colors" />
            <button type="submit" disabled={sending}
              className="wa-btn w-full flex items-center justify-center gap-2 text-[13px] font-bold py-3.5 rounded-xl border-none cursor-pointer text-white active:scale-95 transition-transform disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 4px 14px rgba(37,211,102,0.3)' }}>
              {sending ? 'Opening WhatsApp…' : <><FaWhatsapp size={14} /> Send via WhatsApp</>}
            </button>
          </form>
        </div>

        {/* Contact rows */}
        <div className="px-5 mb-4 flex flex-col gap-2" style={{ animation: 'fadeUp 0.5s ease 0.4s both' }}>
          {contactDetails.map((d, i) => (
            <a key={i} href={d.href} target={d.href !== '#' ? '_blank' : '_self'} rel="noopener noreferrer"
              className="contact-detail-row flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 no-underline shadow-sm hover:border-purple-200 transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-[#F5F3FF] dark:bg-purple-950/40 text-[#7C5CFF] dark:text-purple-400 flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0">
                  <d.icon size={14} />
                </div>
                <div>
                  <span className="block text-zinc-400 text-[10px] font-bold uppercase tracking-wider">{d.title}</span>
                  <span className="block text-zinc-700 dark:text-zinc-200 text-[12.5px] font-semibold mt-0.5">{d.value}</span>
                </div>
              </div>
              <ExternalLink size={12} className="text-purple-400/70 flex-shrink-0" />
            </a>
          ))}
        </div>

        {/* Info cards */}
        <div className="px-5 mb-4 flex flex-col gap-3" style={{ animation: 'fadeUp 0.5s ease 0.5s both' }}>
          <div className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-4 rounded-xl flex gap-3 shadow-sm">
            <div className="w-8 h-8 bg-purple-50 dark:bg-purple-950/40 text-[#7C5CFF] rounded-lg flex items-center justify-center flex-shrink-0"><Clock size={15} /></div>
            <div>
              <span className="block text-[13px] font-bold text-zinc-800 dark:text-zinc-200">My Availability</span>
              <span className="block text-[11.5px] text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">Open to Full Stack Developer roles, internships and exciting projects.</span>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-800 p-4 rounded-xl flex gap-3 shadow-sm">
            <div className="w-8 h-8 bg-[#EDFAF5] dark:bg-emerald-950/20 text-[#10B981] rounded-lg flex items-center justify-center flex-shrink-0"><Calendar size={15} /></div>
            <div>
              <span className="block text-[13px] font-bold text-zinc-800 dark:text-zinc-200">Response Time</span>
              <span className="block text-[11.5px] text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">I usually respond within <span className="text-emerald-500 font-bold">24 hours</span>. Let's build something amazing!</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="px-5 mb-6 flex gap-3" style={{ animation: 'fadeUp 0.5s ease 0.6s both' }}>
          {socialLinks.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
              className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-[#EDEDF5] dark:border-zinc-700 hover:border-purple-300 flex items-center justify-center transition-all shadow-sm no-underline hover:-translate-y-1">
              {s.label === 'WhatsApp'
                ? <FaWhatsapp size={17} className="text-green-500" />
                : <s.icon size={17} className="text-zinc-600 dark:text-zinc-300" />
              }
            </a>
          ))}
        </div>

        <button onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#7C5CFF] text-white p-3 rounded-full border-none shadow-lg shadow-purple-500/30 active:scale-95 transition-transform cursor-pointer flex items-center justify-center z-50">
          <ArrowUp size={16} strokeWidth={2.5} />
        </button>

        <div className="text-center px-5 pt-2 pb-8 mt-auto">
          <p className="m-0 text-[11px] text-zinc-400 dark:text-zinc-600">© 2026 Selvakumari K. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}