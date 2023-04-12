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
        About Me Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Maiores labore sint quaerat qui quibusdam deserunt consequuntur
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
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1 "
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
