import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { data } from "../utils/data";

const Home = () => {
  return (
    <section id="home" className=" md:max-h-screen flex items-center justify-center gap-10 p-8 ">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left z-[1]">
          <h3 className="text-purple-200 text-lg md:mt-20 mb-2">A Full Stack Developer</h3>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
          I'M <span className="wave text-purple-400">{data.name}👋</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-lg mb-3">{data.para}</p>
          <p className="text-gray-300 text-lg md:mt-0 mb-5"> {data.tagline}</p>
          <a href="\resume.pdf">
          <button className="contactBtn text-xl">My Resume</button></a>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="bg-[#0c0c2d] backdrop-blur-lg p-8 rounded-2xl w-[400px] text-center shadow-xl border border-white/10">
            <img 
              className="profileImg md:w-40 md:h-40 border" src={data.profileImg} alt="Profile Image"
            />
            <div className="cardBoxClr p-4">
              <h2 className="text-white  sm:text-2xl mb-2 text-xl font-semibold">{data.fullname}</h2>
              <p className="text-sm text-gray-400">{data.jobTitle}</p>
              {/* <p className="text-gray-400 ">{data.location}</p> */}
            </div>

            <a href={data.email}>
              <div className="cardBoxClr text-sm text-left"> {data.gmail} </div>
            </a>

            <div className="flex items-center justify-center mb-4 gap-2 text-white">
              <i className="ri-time-line"></i>
              <span>{data.yearOfExperience}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 justify-center text-xs sm:text-sm">
              {data.skills.map((item) => (
                <span key={item} className="cardBoxClr items-center whitespace-normal mb-0">
                  {item}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <a href={data.github} target="_blank" className=" text-2xl iconsHover">
                <FaGithub size={25} />
              </a>
              <a href={data.linkedin} target="_blank" className="text-2xl iconsHover">
                <FaLinkedin size={25} />
              </a>
              <a href={data.twitter} target="_blank" className="text-2xl iconsHover">
                <FaXTwitter size={25} />
              </a>
            </div>
          </div>
        </div>
        {/* <div class="ui-circle absolute top-50 left-0 md:top-13 "></div> */}
      </div>
    </section>
  );
};

export default Home;
