"use client";

import Link from "next/link";
import { projects } from "../data/siteData"; 

export default function Portfolio() {
  return (
    <div id="portfolio" className="px-5 lg:px-10">
        <div className="bg-darkBg rounded-2xl overflow-hidden py-20">
        <div className="container mx-auto max-w-[1320px] px-5"></div>
      <div className="container mx-auto px-6">
        {/* Titel */}
          <div className="md:w-4/5 lg:w-3/4 md:mx-auto">
            <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40">
              Portfolio
            </h6>
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              Recent <span className="bg-themeGradient bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="leading-[1.75] text-white/70 mt-3">descrption</p>
          </div>

        {/* Projecten Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
           
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 
                backdrop-blur-lg border border-bottom-white/10 rounded-3xl shadow-xl overflow-hidden 
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Afbeelding */}
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 style={{color:"white"}} className="text-2xl font-semibold group-hover:text-purple-400 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.category}</p>
                <p className="mt-3 text-gray-300">{project.description}</p>

                {/* Tech stack */}
                {project.stack?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Knop */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-block px-5 py-2 rounded-full 
                    bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold 
                    hover:opacity-90 transition"
                >
                  See Details →
                </Link>
              </div>
            </div>
          ))}
           </div>
        </div>
      </div>
   </div>
  
  );
}
