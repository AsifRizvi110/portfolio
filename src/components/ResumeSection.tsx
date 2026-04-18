import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, CheckCircle } from "lucide-react";


interface Education {
  degree: string;
  institute: string;
  image: string;
};

const educationDetails = [
  {
    degree: "Intermediate (Commerce)",
    institute: "Board of Intermediate Education Karachi",
    image: "src/image/Inter Certificate copy.png"
  },
  {
    degree: "Matriculation (Computer Science)",
    institute: "Board of Secondary Education Karachi",
    image: "src/image/Matric Certificate copy.png"
  }
];

const courses = [
  { name: "Web Developer", institute: "Aptech Institute", img: "https://picsum.photos/seed/web/400/300" },
  { name: "Graphic Designer", institute: "", img: "https://picsum.photos/seed/graphic/400/300" },
  { name: "Video Editor", institute: "", img: "https://picsum.photos/seed/video/400/300" },
  { name: "3-Month Security Surveillance & CCTV", institute: "BBSYDP", img: "https://picsum.photos/seed/cctv/400/300" },
  { name: "Basic Computer Course", institute: "", img: "https://picsum.photos/seed/computer/400/300" },
  { name: "JavaScript Course", institute: "", img: "https://picsum.photos/seed/js/400/300" },
  { name: "OSHA Confined Space Safety", institute: "", img: "src/image/OSHA certificate.png" },
  { name: "Soft Skills Training", institute: "", img: "https://picsum.photos/seed/soft/400/300" }
];

const skills = [
  "HTML, CSS, JavaScript",
  "Graphic Designing",
  "Video Editing",
  "CCTV Installation & Surveillance"
];

export function ResumeSection() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-4">
      
      {/* Education */}
      <section id="education" className="bg-[#1e293b] p-5 rounded-2xl border border-white/10 scroll-mt-24">
        <span className="text-[11px] uppercase tracking-[1px] text-slate-400 mb-3 block font-semibold">Education</span>
        <ul className="list-none space-y-3">
          {educationDetails.map((edu, idx) => (
             <motion.li 
               key={idx}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="pb-3 border-b border-white/10 last:border-b-0 last:pb-0"
             >
               <span className="text-[13px] font-semibold text-slate-50 tracking-tight block mb-0.5">{edu.degree}</span>
               <span className="text-[11px] text-slate-400 block mb-2">{edu.institute}</span>

               <div 
                 className="h-12 w-24 rounded border border-white/10 overflow-hidden relative group cursor-pointer inline-block bg-slate-900"
                 onClick={() => setSelectedImage(edu.image)}
               >
                 <img 
                   src={edu.image} 
                   alt="cert" 
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                 />
               </div>

             </motion.li>
          ))}
        </ul>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-[#1e293b] p-5 rounded-2xl border border-white/10 scroll-mt-24">
        <span className="text-[11px] uppercase tracking-[1px] text-slate-400 mb-3 block font-semibold">Key Certifications</span>
        <ul className="list-none space-y-3">
          {courses.map((course, idx) => (
             <motion.li 
               key={idx}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="pb-3 border-b border-white/10 last:border-b-0 last:pb-0 flex flex-col gap-1"
             >
                <div className="flex justify-between items-start">
                  <span className="text-[13px] font-semibold text-slate-50 tracking-tight block">{course.name}</span>
                </div>
                {course.institute && <span className="text-[11px] text-slate-400">{course.institute}</span>}
             </motion.li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#1e293b] p-5 rounded-2xl border border-white/10 scroll-mt-24">
        <span className="text-[11px] uppercase tracking-[1px] text-slate-400 mb-3 block font-semibold">Core Skills</span>
        <div className="flex flex-wrap gap-4px">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-10px py-4px bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded text-[11px]"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ MODAL (WITH CLOSE BUTTON) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          {/* Image */}
          <img 
            src={selectedImage} 
            alt="preview" 
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />

        </div>
      )}

    </div>
  );
}