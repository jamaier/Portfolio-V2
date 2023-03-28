import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import Img from "../assets/num2.jpg";

const Sidebar = () => {
  return (
    <div>
      <Image
        src={Img}
        alt="Photo of Jacob Maier"
        className="w-32 h-32 mx-auto border-2 border-green-500 rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Jacob
        <span className="text-green-500"> Maier</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500">
        Web Developer
      </p>
      <a
        className="flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href="/assets/JacobMaierResume.pdf"
        download
      >
        <GiTie size={20} /> Download Resume
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://github.com/jamaier" target="_blank">
          <AiFillGithub size={35} />
        </a>
        <a href="https://www.linkedin.com/in/jacobamaier/" target="_blank">
          <AiFillLinkedin size={35} />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Portland, OR </span>
        </div>
        <p className="my-2 "> jacobamaier@gmail.com </p>
        <p className="my-2"> Phone </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:code.jacobamaier@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={() => {}}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </div>
  );
};

export default Sidebar;
