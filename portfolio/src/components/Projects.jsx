import { FaGithub } from "react-icons/fa"; // Importing GitHub Icon

const projects = [
  {
    title: "Shopsy",
    description:
      "A full-stack e-commerce platform with responsive product listings, shopping cart, secure checkout, and an admin panel for managing products and orders.",
    github: "#",
    demo: "https://shopsy-demo.vercel.app",
    image: "/illustrations/shopsy.svg",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website developed using React.js to showcase projects, skills, and resume. Features modern UI design, and a responsive layout.",
    github: "https://github.com/shrutika-gawande/portfolio",
    demo: "https://portfolio-delta-gold-27.vercel.app/",
    image: "/illustrations/portfolio.svg",
  },
  {
    title: "BitLinks",
    description:
      "A simple and efficient URL shortener app built with Next.js and MongoDB. Users can shorten long URLs into compact links.",
    github: "https://github.com/shrutika-gawande/bitlinks",
    demo: "https://shopsy-demo.vercel.app",
    image: "/illustrations/bitlinks.svg",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen text-white px-10 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center m-4">
        My <span className="text-purple-400">Recent Works</span>
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Here are a few projects I've worked on recently.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#121235] w-full p-6 rounded-2xl shadow-md hover:shadow-purple-500/50 border border-purple-700/20 transition"

          >
            <div>
              {/* Image section */}
              <div className="overflow-hidden rounded-lg mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-center">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* button */}
            <div className="flex justify-center gap-3 mt-6">
             <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2  bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-3 rounded-lg transition"
              >
                🌐 Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-5 rounded-lg transition"
              >
                <FaGithub size={18} /> GitHub
              </a>    
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
