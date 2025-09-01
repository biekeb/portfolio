import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        Hi, I'm <span className="text-blue-500">Bieke</span>!
      </h1>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-500">

      </div>
      <p className="text-center text-lg sm:text-xl max-w-xl">
        Welcome to my portfolio! I'm a passionate developer with a love for creating beautiful and functional web applications. Explore my projects and get in touch!
      </p>
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          View Projects
        </a> 
        <div/>
    </div>
        </div>

  );
}
