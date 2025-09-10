"use client";

import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowLeft, PlayCircle } from "lucide-react";
import Link from "next/link";
import { projects } from "../../data/siteData";

interface PageProps {
  params: { id: string };
}

export default async function ProjectPage({ params }: PageProps) {
  // Find project by ID
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white">
      {/* Back link */}
      <Link
        href="/projects"
        className="flex items-center gap-2 text-white/60 hover:text-white transition mb-6"
      >
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      {/* Project Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.title}</h1>
      <p className="text-lg text-white/70 mb-6">{project.description}</p>

      {/* Cover Image */}
      <img
        src={project.cover}
        alt={project.title}
        className="rounded-xl shadow-lg mb-10 w-full"
      />

      {/* Metadata */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-3">Project Details</h3>
          <ul className="space-y-2 text-white/80">
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

        <div>
          <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                <Tag size={14} /> {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {project.gallery?.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {project.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </>
      )}

      {/* Video Section */}
      {project.video && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <PlayCircle size={22} /> Project Video
          </h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            {project.video.endsWith(".mp4") ? (
              <video
                src={project.video}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <iframe
                src={project.video}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      )}

      {/* Case Study */}
      {project.caseStudy && (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Case Study</h3>
          <div className="prose prose-invert max-w-none">
            {project.caseStudy.split("\n").map((para, idx) => (
              <p key={idx} className="text-white/70 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
