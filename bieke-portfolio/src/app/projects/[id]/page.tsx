"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import {
  Calendar,
  Tag,
  ArrowLeft,
  PlayCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { projects } from "../../data/siteData";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

// helper to normalize video URLs
function getEmbedUrl(url: string) {
  if (!url) return url;

  if (url.includes("youtu.be")) {
    const id = url.split("/").pop();
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("youtube.com/watch")) {
    const id = new URL(url).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }

  return url;
}

// Small reusable animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// @ts-expect-error: params type mismatch with Next.js internal PageProps
export default function ProjectPage({ params }) {
  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const prevProject = projects[currentIndex - 1] || null;
  const nextProject = projects[currentIndex + 1] || null;

  const project = projects.find((p) => p.id === params.id);
  const [modalImgIndex, setModalImgIndex] = useState<number | null>(null);

  if (!project) return notFound();
  const gallery = project.gallery || [];

  const openModal = (index: number) => setModalImgIndex(index);
  const closeModal = () => setModalImgIndex(null);

  const prevImage = () => {
    if (modalImgIndex === null) return;
    setModalImgIndex((modalImgIndex - 1 + gallery.length) % gallery.length);
  };

  const nextImage = () => {
    if (modalImgIndex === null) return;
    setModalImgIndex((modalImgIndex + 1) % gallery.length);
  };

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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl mb-4">
          {project.title2}{" "}
          <span className="bg-themeGradient bg-clip-text text-transparent">
            {project.title2Span}
          </span>
        </h1>
        <p className="text-lg text-white/70 max-w-3xl mb-10">
          {project.description}
        </p>
      </motion.div>

      {/* Video */}
      {project.video && (
        <motion.div
          className="mb-12 md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="w-full md:w-4/5 lg:w-3/5 mx-auto aspect-video rounded-xl overflow-hidden shadow-lg bg-darkBg">
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
        </motion.div>
      )}

      {/* Project Details + Technologies */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="bg-darkBg p-6 rounded-xl space-y-4 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              <Calendar size={18} /> <span>{project.date}</span>
            </li>
            <li>
              <strong>Role:</strong> {project.role}
            </li>
            {project.link && (
              <li className="mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500 text-white font-medium rounded-lg shadow-md hover:bg-purple-600 transition"
                >
                  <PlayCircle size={18} /> Live Demo
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
      </motion.div>

      {/* Gallery */}
      {gallery.length > 0 && (
        <motion.div
          className="mb-12 md:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 md:mb-6">Gallery</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg bg-darkBg shadow-md cursor-pointer"
                onClick={() => openModal(i)}
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-48 md:h-56 lg:h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Modal */}
      {modalImgIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white p-2 hover:bg-white/20 rounded-full transition"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 text-white p-2 hover:bg-white/20 rounded-full transition"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-5 text-white p-2 hover:bg-white/20 rounded-full transition"
          >
            <ChevronRight size={32} />
          </button>

          <img
            src={gallery[modalImgIndex]}
            alt="Enlarged screenshot"
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-xl"
          />
        </div>
      )}

      {/* Case Study Section */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 py-24 xl:py-28 text-white lg:flex gap-10">
        <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
          <div className="sticky top-24">
            <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
              case
            </h6>
            <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
              case{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                study
              </span>
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-2/3 space-y-6">
          {project.caseStudy?.map((block, i) => (
            <motion.div
              key={i}
              className="p-8 bg-[#1a1a1a] rounded-lg relative overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{block.title}</h3>
              {block.description.includes("•") ? (
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  {block.description.split("•").map((item, idx) =>
                    item.trim() ? <li key={idx}>{item.trim()}</li> : null
                  )}
                </ul>
              ) : (
                <p className="text-white/80 leading-relaxed whitespace-pre-line">
                  {block.description}
                </p>
              )}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
