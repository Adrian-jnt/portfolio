import ParticlesContainer from "../../components/particlesContainer";
import ProjectBtn from "../../components/projectBtn";
import Layout from "../../components/layout";
import { fadeIn } from "../../variants.js";
import { motion } from "framer-motion";
import React from "react";
import explosionImage from '../../images/explosion.jpg';

const Home = () => {
  document.title = "Início";

  return (
    <Layout>
      <div className="bg-primary/60 h-full">
        
        <div className="w-full h-full">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              className="text-[35px] leading-tight md:text-[68px] md:leading-[1.3] mb-8 font-semibold"
            >
              Transformando Ideias <br /> em{" "}
              <span className="text-[#f13024]">Realidade</span>
            </motion.h1>
            
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12"
            >
              Seja bem-vindo ao meu portfólio! Aqui, você encontrará os projetos que desenvolvi como programador front-end.
            </motion.p>
              
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              className="flex justify-center xl:hidden relative"
            >
              <ProjectBtn />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              className="hidden xl:flex"
            >
              <ProjectBtn />
            </motion.div>
          </div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <div
            style={{
              backgroundImage: `url(${explosionImage})`,
            }}
            className="bg-none xl:bg-cover xl:bg-center xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 z-0"
          ></div>
          <div className="hidden lg:block">
            <ParticlesContainer />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
