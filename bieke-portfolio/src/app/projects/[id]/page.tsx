import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowLeft, PlayCircle } from "lucide-react";
import Link from "next/link";
import { projects } from "../../data/siteData";

// helper to normalize video URLs
function getEmbedUrl(url: string) {
  if (!url) return url;

  // handle youtu.be links
  if (url.includes("youtu.be")) {
    const id = url.split("/").pop();
    return `https://www.youtube.com/embed/${id}`;
  }

  // handle normal YouTube watch links
  if (url.includes("youtube.com/watch")) {
    const id = new URL(url).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }

  return url; // fallback (mp4 or already embed link)
}

// @ts-expect-error: params type mismatch with Next.js internal PageProps
export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28 text-white">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition mb-10 text-sm uppercase tracking-wider"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      {/* Title + Description */}
      <h1 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl mb-4">
        {project.title}
      </h1>
      <p className="text-lg text-white/70 max-w-3xl mb-10">{project.description}</p>


      {/* Video */}
      {project.video && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <PlayCircle size={22} /> Project Video
          </h3>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-darkBg">
            {project.video.endsWith(".mp4") ? (
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={getEmbedUrl(project.video)}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      )}
{/* PDF Case Study */}
{project.pdf && (
  <div className="mb-16">
    <h3 className="text-2xl font-semibold mb-6">Magazine PDF</h3>
    <div className="bg-darkBg p-6 rounded-xl shadow-md">
      {/* Knop om te openen/downloaden */}
      <a
        href={project.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-lg font-medium"
      >
        📄 View / Download PDF
      </a>

      {/* Optioneel inline preview */}
      <div className="mt-6 aspect-[3/4] w-full bg-black/40 rounded-xl overflow-hidden shadow-md">
        <iframe
          src={project.pdf}
          title={`${project.title} PDF`}
          className="w-full h-full"
        />
      </div>
    </div>
  </div>
)}

      {/* Project Details + Technologies */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-darkBg p-6 rounded-xl space-y-3 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              <Calendar size={18} /> <span>{project.date}</span>
            </li>
            <li>
              <strong>Role:</strong> {project.role}
            </li>
            {project.link && (
              <li>
                <strong>Live Demo:</strong>{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  {project.link}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="bg-darkBg p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1 px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 hover:bg-white/20 transition"
              >
                <Tag size={14} /> {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      {project.gallery?.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl bg-darkBg shadow-md"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Case Study */}
      {project.caseStudy && (
        <div className="bg-darkBg p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Case Study</h3>
          <div className="space-y-4 text-white/70 leading-relaxed">
            {project.caseStudy.split("\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
