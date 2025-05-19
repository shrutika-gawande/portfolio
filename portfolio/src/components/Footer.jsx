import { data } from "../utils/data";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/10 text-white p-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">{data.fullname}</h1>
          <p className="text-sm text-gray-400">Building Dreams into Reality 🚀</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-6 text-2xl">
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="iconsHover">
            <FaGithub />
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="iconsHover">
            <FaLinkedin />
          </a>
          <a href= {data.email} className="iconsHover">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
