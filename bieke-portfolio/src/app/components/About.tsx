"use client"; // Zorg ervoor dat dit bovenaan staat voor Framer Motion

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pic from "/public/images/fotocvsquare.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="w-full h-screen px-6 bg-[#0e0e0e] text-white flex items-center"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 mx-auto">

        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/3">

          </div>

          <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white">
            Hey, I&apos;m <span className="bg-themeGradient bg-clip-text text-transparent">Bieke</span>
          </h2>

          <p className="text-white/70 leading-relaxed text-lg md:text-xl max-w-xl">
            Full-stack developer focused on modern UX, interactive design, and web performance. 
            I craft immersive web experiences with attention to detail, interactivity, and speed.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-block bg-gradient-to-r bg-themeGradient text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>
<div className="flex gap-6 mt-4">
  <a
    href="https://github.com/biekeb"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-pink-500 transition text-3xl"
  >
    <FaGithub />
  </a>
  <a
    href="https://linkedin.com/in/bieke-bellot-b8b8a11b8"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-pink-500 transition text-3xl"
  >
    <FaLinkedin />
  </a>
</div>

          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full overflow-hidden border-4 border-[#00ffe5] shadow-[0_0_30px_rgba(0,255,229,0.3)] transition-transform duration-300">
            <Image
              src={pic}
              alt="Bieke avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
