import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-[#0e0e0e] text-white py-24 px-5 min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-between max-w-[1200px] w-full gap-12">
        {/* Hero Text */}
        <div className="flex-1 min-w-[300px] animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-snug">
            Hey, Im <span className="text-[#00ffe5]">Bieke</span>{' '}
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            <br />
            I build sleek & performant web apps.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl">
            Full-stack developer focused on modern UX, interactive design, and web performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="https://github.com/biekeb"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 min-w-[250px] flex justify-center animate-fadeIn">
          {/* <Image
            src={aboutData.mainData.heroAvatar}
            alt="hero avatar"
            placeholder="blur"
            className="w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full border-4 border-[#00ffe5] shadow-[0_0_30px_rgba(0,255,229,0.3)] object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
}
