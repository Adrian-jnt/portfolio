import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import Layout from "../../components/layout";
import { fadeIn } from "../../variants";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  document.title = "Sobre mim";

  const aboutData = [
    {
      title: "Habilidades",
      info: [
        {
          title: "Desenvolvimento web",
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <FaGitAlt />,
            <FaGithub />,
            <FaNpm />,
          ],
        },
        {
          title: "UI/UX Design",
          icons: [<FaFigma />, <SiAdobeillustrator />, <SiAdobephotoshop />],
        },
      ],
    },
    {
      title: "experiências",
      info: [
        {
          title: "Front-end Bonfire Tech",
          stage: "2022 - Presente",
        },
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <div className="h-full py-32 text-center xl:text-left ">
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
          <div className="flex-1 flex flex-col justify-center mt-10">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold"
            >
              Boas <span className="text-[#f13024]">Histórias</span> geram
              designs magníficos.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              Olá! Sou Adrian Jonathan, nascido em 2005, programador front-end
              desde 2022. Estudo Engenharia de Software na Estácio desde 2023 e
              busco me especializar em JavaScript para criar experiências web
              dinâmicas e responsivas. Estou comprometido em crescer na
              indústria de tecnologia e ansioso para colaborar em projetos
              inovadores.
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                <div className="relative flex-1  after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-[#f13024] mb-2">
                    <CountUp start={0} end={1} duration={2} delay={1} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Ano de experiência
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full xl:max-w-[40%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-[#f13024] after:w-[100%] after:bg-[#f13024] after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 xl:mt-20`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="py-2 xl:py=6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md-flex"></div>
                    <div className="font-bold">{item.stage}</div>
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className="text-2xl text-white">{icon}</div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
