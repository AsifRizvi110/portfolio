import { useState, useRef } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { ExternalLink } from "lucide-react";

/* ---------------- PORTFOLIO ---------------- */

export function PortfolioSection() {
  const projects = [
    {
      title: "Modern Web App",
      category: "Web Development",
      img: "src/image/website rider.png",
      link: "https://riderpatner.vercel.app/",
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      img: "src/image/RMR.png",
      link: "https://rmr-visa-91bd.vercel.app/",
    },
    {
      title: "Cinematic Reel",
      category: "Video Editing",
      img: "src/image/DHA.png",
      link: "https://property-kappa-nine.vercel.app/",
    },
    {
      title: "Dashboard Interface",
      category: "UI/UX Design",
      img: "src/image/solar.png",
      link: "https://solartech-coral.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="bg-[#1e293b] p-5 rounded-2xl border border-white/10">
      <span className="text-[11px] uppercase tracking-[1px] text-slate-400 mb-4 block font-semibold">
        Project Portfolio
      </span>

      <div className="grid sm:grid-cols-2 gap-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="group rounded-lg overflow-hidden border border-white/5"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-170px object-cover hover:scale-105 transition duration-300"
              />
            </a>

            {/* category text remove nahi kiya */}
            <div className="p-2">
              <p className="text-blue-400 text-[10px] uppercase">{project.category}</p>
              <h3 className="text-white text-[13px] font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATES (MODAL) ---------------- */

export function CertificatesGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    { title: "Web Developer", img: "src/image/Web Developer certificate copy.png" },
    { title: "Graphic Designer", img: "src/image/Graphic Designer.png" },
    { title: "Video Editing", img: "src/image/Video Editing Certificate.png" },
    { title: "Survelance", img: "src/image/Survelance Certificate copy.png" },
    { title: "Basic Computer", img: "src/image/basic_computer_certificate.png" },
    { title: "JavaScript", img: "src/image/JavaScript- certificate.png" },
    { title: "Soft Skills", img: "src/image/certificate_softskill.png" },
    { title: "OSHA", img: "src/image/OSHA certificate.png" },
    { title: "Data Analyst", img: "src/image/Data Analyst Certificate.png" },
    { title: "WordPress", img: "src/image/WORDPRESS  Certificate.png" },
  ];

  return (
    <section id="certificates" className="bg-[#1e293b] p-5 rounded-2xl border border-white/10">
      <span className="text-[11px] uppercase tracking-[1px] text-slate-400 mb-4 block font-semibold">
        Certificates Gallery
      </span>

      <div className="grid grid-cols-2 gap-3">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(cert.img)}
            className="cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-[11px]">{cert.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[95%] max-h-[95%] rounded-lg shadow-2xl"
          />

          {/* close button */}
          <button className="absolute top-5 right-5 text-white text-3xl">
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

/* ---------------- CONTACT + EMAILJS ---------------- */

export function ContactSection() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oejiw18",
        "template_msgkzuo",
        form.current!,
        "4ZOb7C1DbWNUDbQDL"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="bg-[#1e293b] p-5 rounded-2xl border border-white/10">
      <span className="text-[11px] uppercase tracking-[1px] text-slate-400 mb-4 block font-semibold">
        Get In Touch
      </span>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-3"
      >
        <input
          name="from_name"
          placeholder="Name"
          className="w-full bg-[#0f172a] border border-white/10 p-2 rounded text-white text-[12px]"
        />

        <input
          name="from_contact"
          placeholder="Contact"
          className="w-full bg-[#0f172a] border border-white/10 p-2 rounded text-white text-[12px]"
        />

        <input
          name="from_email"
          placeholder="Email"
          className="w-full bg-[#0f172a] border border-white/10 p-2 rounded text-white text-[12px]"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          className="w-full bg-[#0f172a] border border-white/10 p-2 rounded text-white text-[12px]"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}