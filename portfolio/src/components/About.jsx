// import { FaHtml5, FaNodeJs, FaTools, FaCertificate, FaReact } from "react-icons/fa";
import { skills, data } from "../utils/data";

const About = () => {
  return (
    <section id="about" className="py-12 text-white">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-8">

        {/* Intro */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Know Who I'M</h2>
          <p className="md:text-lg leading-relaxed">
            Hi Everyone, I am <span className="text-purple-400">{data.fullname}</span> from <span className="text-purple-400">{data.location}</span>.<br /><br />
            I am passionate about creating digital experiences that are not only functional but visually appealing.<br /><br />
            Here, you'll find projects, insights into my background, and milestones achieved during my journey.
          </p>
        </div>

        {/* Illustration */}
        <div className="md:w-1/3 pt-5 flex justify-center">
          <img src="\illustrations\img.svg" alt="Coding Illustration" className="w-3/4" />
        </div>

      </div>

      {/* Skills Section */}
      <div className="container mx-auto mt-16 px-4 text-center">
        <h2 className="sm:text-3xl text-2xl font-bold mb-10">Technical Proficiency</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-10 grid-cols-1 justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-purple-500 rounded-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p>
                {skill.items.join(", ")}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>

  );
};

export default About;

