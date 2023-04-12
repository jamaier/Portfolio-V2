import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInUp, routeFade } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Jacob Maier | Web Developer</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Web Development
            </h5>
            <p className="font-semibold">Epicodus (2023)</p>
            <p className="my-3">
            I am currently pursuing a Full Stack Web Development course.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Internship</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">TBD</p>
            <p className="my-3">More to come.</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Tools</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Frameworks</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;