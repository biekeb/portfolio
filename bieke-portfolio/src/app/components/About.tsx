import React from "react";
import Image from "next/image";
import pic from "/public/images/bieke.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full h-screen px-6 bg-[#0e0e0e] text-white flex items-center"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 mx-auto">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h6 className="relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
            About Me
          </h6>
          <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white">
            Hey, I'm <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Bieke</span>
          </h2>
          <p className="text-white/70 leading-relaxed text-lg md:text-xl max-w-xl">
            Full-stack developer focused on modern UX, interactive design, and web performance. 
            I craft immersive web experiences with attention to detail, interactivity, and speed.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="https://github.com/biekeb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center relative group">
          <div className="relative w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full overflow-hidden border-4 border-[#00ffe5] shadow-[0_0_30px_rgba(0,255,229,0.3)] transition-transform duration-300 group-hover:scale-105">
            <Image
              src={pic}
              alt="Bieke avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
