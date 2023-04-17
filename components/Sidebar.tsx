import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
// import { GiTie } from "react-icons/gi";
import Image from "next/image";

import Img from "../public/assets/images/num2.jpg";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={Img}
        width={240}
        height={240}
        alt="Photo of Jacob Maier"
        className="mx-auto border-2 rounded-full border-1"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Jacob
        <span className="text-green-500"> Maier</span>
      </h3>
      <p
        className="py-4 my-5 bg-gray-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        Web Developer
      </p>
      
      <div>
        <a href="/pdfs/Jacob_Maier_Resume.pdf" download>
          <button className="w-8/12 px-5 py-2 text-white rounded-full cursor-pointer w-65 bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none dark:from-black-100 dark:to-black-300 dark:text-white">
            Download Resume
          </button>
        </a>

        {/* Email Button */}
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none dark:from-black-100 dark:to-black-300 dark:text-white"
          onClick={() => window.open("mailto:jacobamaier@gmail.com")}
        >
          Email me
        </button>
      </div>
      
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full ">
        <a href="https://github.com/jamaier" target="_blank">
          <AiFillGithub size={45} />
        </a>
        <a href="https://www.linkedin.com/in/jacobamaier/" target="_blank">
          <AiFillLinkedin size={45} />
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

      <button
        onClick={changeMode}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full cursor-pointer ptext-white bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none dark:from-black-100 dark:to-black-300 dark:text-white"
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </div>
  );
};

export default Sidebar;
