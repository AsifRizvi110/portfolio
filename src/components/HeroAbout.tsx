import { motion } from "motion/react";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="bg-[#1e293b] p-6 rounded-2xl border border-white/10 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 rounded-full mx-auto mb-4 bg-blue-500 flex items-center justify-center text-white font-bold text-2xl uppercase border-2 border-[#1e293b] ring-2 ring-blue-500/30 overflow-hidden"
      >
        <img
          src="/image/asif photo 2.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl font-bold text-slate-50 mb-1"
        >
          Syed Hashim Hussain Rizvi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[13px] text-blue-500 font-medium"
        >
          Aspiring Web Developer & Creative Designer
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button
          onClick={() => window.open("/image/HSHIM HUSSAIN 110-1.pdf")}
          className="w-full bg-blue-500 text-white rounded-md px-4 py-2 text-[12px] font-semibold hover:bg-blue-600 transition-colors"
        >
          Download CV
        </button>
      </motion.div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-[#1e293b] p-5 rounded-2xl border border-white/10 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[11px] uppercase tracking-[1px] text-slate-400 mb-3 block font-semibold">About Me</span>
        <p className="text-[13px] text-slate-400 leading-relaxed">
          I am seeking an opportunity in a professional environment where I can continue to learn, grow, and apply new technologies to real-world projects. I aim to contribute positively to the organization by using my skills and creativity while continuously improving myself. I am motivated to bring innovation, adaptability, and a strong work ethic that supports both personal development and the overall success of the team.

        </p>
      </motion.div>
    </section>
  )
}

