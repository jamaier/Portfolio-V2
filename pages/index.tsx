import { motion } from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { fadeInUp, routeFade, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Head from "next/head";

const Index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Jacob Maier | Web Developer</title>
      </Head>
      <h5 className="my-3 font-medium">
        As a lifelong builder, I've always enjoyed creating something new with
        my hands and my mind. My passion for building has led me to pursue a
        career in web development, where I can use my problem-solving skills to
        create innovative digital solutions.<br/><br/>
        
        I bring a wealth of knowledge and expertise to my work as a web developer. I love
        the challenge of learning new technical skills and using a variety of
        tools to bring my ideas to life.<br/><br/>
        
        Whether I'm building a new website from
        scratch or automating processes to save time and resources, I approach
        each project with enthusiasm and dedication. I believe that my skills as
        a builder have translated seamlessly to the world of web development,
        and I'm excited to continue building and creating in this exciting
        field.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide text-gray-900">
          What I am doing
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 tracking-wider bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1 shadow-custom-light"
              key={service.title}
              variants={fadeInUp}
              // animate="animate"
              // initial="initial"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
