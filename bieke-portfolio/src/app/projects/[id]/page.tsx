import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowLeft, PlayCircle } from "lucide-react";
import Link from "next/link";
import { projects } from "../../data/siteData";


// const projects = [
//   {
//     id: "1",
//     title: "Mix and Move",
//     description:
//       "A full creative package for Mix and Move, including a custom website, promotional video, logo design, and graphic assets for both digital and print use.",
//     cover: "/images/mixandmove/mixandmovehero.png",
//     gallery: [
//       "/images/mixandmove/mixandmove1.png",
//       "/images/mixandmove/mixandmove2.png",
//       "/images/mixandmove/mixandmove3.png",
//     ],
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // vervang door je eigen upload
//     date: "2024-01-20",
//     technologies: ["React", "Next.js", "TailwindCSS", "Adobe After Effects", "Illustrator"],
//     role: "Full-stack & Creative Designer",
//     link: "https://example.com/mixandmove", // vervang door echte site als je die online zet
//     caseStudy: `
// For Mix and Move, I handled the complete creative direction.  
// The project included designing and developing their promotional website, creating a dynamic launch video, and producing both digital and print graphics to unify their brand identity.  

// The website was built in Next.js with a clean, modern UI to match their energetic branding.  
// The promotional video was edited in After Effects, featuring animated typography and bold transitions.  
// Additionally, I designed their logo and social media templates to ensure brand consistency across all platforms.  

// This holistic approach helped Mix and Move launch with a strong, recognizable visual identity and digital presence.
//     `,
//   },

//   {
//     id: "2",
//     title: "AI Chatbot",
//     description:
//       "Custom AI-powered chatbot that integrates seamlessly with a client’s support system. Trained with domain-specific knowledge and optimized for quick, human-like responses.",
//     cover: "https://picsum.photos/1000/500?random=20",
//     gallery: [
//       "https://picsum.photos/600/400?random=21",
//       "https://picsum.photos/600/400?random=22",
//       "https://picsum.photos/600/400?random=23",
//     ],
//     video: null,
//     date: "2024-03-05",
//     technologies: ["Python", "FastAPI", "Hugging Face", "PostgreSQL"],
//     role: "Backend Developer",
//     link: "https://example.com/chatbot",
//     caseStudy: `
// The chatbot was designed to reduce support tickets for the client by 40%.  
// I developed the backend using FastAPI, integrated NLP models from Hugging Face, and connected everything to a PostgreSQL database.  

// The system could understand customer intent, provide instant responses, and escalate complex cases to human operators.  
// End result: faster customer service and happier clients.
//     `,
//   },
// ];


export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white">
      {/* Back link */}
      <Link
        href="/"
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
     {/* Video Section */}
{project.video && (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
      <PlayCircle size={22} /> Project Video
    </h3>

    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
      {project.video.endsWith(".mp4") ? (
        // Local video
        <video
          src={project.video}
          controls
          className="w-full h-full object-cover"
        />
      ) : (
        // Assume YouTube embed URL
        <iframe
          src={project.video}
          title={`${project.title} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
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
