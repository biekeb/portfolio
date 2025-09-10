import Link from "next/link";
import { projects } from "../data/siteData"; 

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-5 lg:px-10 py-24 bg-darkBg">
      <div className="max-w-[1320px] mx-auto">
        {/* Titel */}
        <div className="md:w-4/5 lg:w-3/4 mx-auto mb-16 text-center md:text-left">
          <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
            Portfolio
          </h6>
          <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
            Recent <span className="bg-themeGradient bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="leading-[1.75] text-white/70 mt-3">
            Here are some of my latest projects showcasing modern web development, interactive design, and performance optimization.
          </p>
        </div>

        {/* Projecten Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 
                backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl overflow-hidden 
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Afbeelding */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition">
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
    </section>
  );
}
