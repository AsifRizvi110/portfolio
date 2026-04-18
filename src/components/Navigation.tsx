import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Courses", href: "#courses" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="max-w-1240px mx-auto px-4 md:px-5">
          <div className={`flex items-center justify-between rounded-xl transition-all duration-300 ${scrolled ? "bg-[#1e293b]/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl" : "bg-transparent p-2"}`}>
            <a href="#home" className="text-xl font-bold tracking-tighter text-slate-50">
              Syed Hashim <span className="text-blue-500"> Hussain Rizvi</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              {links.map(link => (
                <a key={link.name} href={link.href} className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 hover:text-blue-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:block text-[12px] uppercase tracking-wide font-bold bg-blue-500 text-white px-5 py-2.5 rounded hover:bg-blue-600 transition-colors">
                Hire Me
              </a>
              <button 
                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                onClick={() => setMobileMenu(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-[#0f172a]/95 backdrop-blur-2xl flex flex-col p-6"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenu(false)} className="p-2 text-slate-400 bg-[#1e293b] rounded border border-white/10 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-center">
              {links.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-2xl font-bold text-slate-300 hover:text-blue-500 uppercase tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <button className="w-full py-4 bg-blue-500 text-white rounded font-bold uppercase tracking-wider text-sm hover:bg-blue-600 transition-colors">
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
