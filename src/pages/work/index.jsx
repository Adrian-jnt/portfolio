import React from "react";
import Layout from "../../components/layout";
import WorkSlider from "../../components/workSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  document.title = 'Projetos';
  return (
    <Layout>
      <div className="h-full py-36 px-4 flex items-center">
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row gap-x-8 ">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold xl:mt-8"
              >
                Meus Projetos<span className="text-[#f13024]">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                Aqui estão alguns dos projetos que desenvolvi.
              </motion.p>
            </div>
            <motion.div 
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              className="w-full xl:max-w-[50%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
