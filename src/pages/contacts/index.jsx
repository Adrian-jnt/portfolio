import { BsArrowRight } from "react-icons/bs";
import Layout from "../../components/layout";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import React from "react";

const Contacts = () => {
  document.title = "Contato";

  return (
    <Layout>
      <div className="h-full">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px] ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-[35px] leading-tight md:text-[40px] md:leading-[1.3] mt-4 mb-4 font-semibold text-center mb-12"
            >
              Vamos <span className="text-[#f13024]">Conversar</span>
            </motion.h2>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="flex-1 flex flex-col gap-6 w-full mx-auto px-3"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  className="input w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-[#f13024] border border-white/20 placeholder:text-white/30 placeholder:font-light"
                  type="text"
                  placeholder="Nome"
                />

                <input
                  className="input w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-[#f13024] border border-white/20 placeholder:text-white/30 placeholder:font-light"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <input
                className="input w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 focus:ring-[#f13024] border border-white/20 placeholder:text-white/30 placeholder:font-light"
                type="text"
                placeholder="Assunto"
              />
              <textarea
                placeholder="Mensagem"
                className=" textarea bg-transparent outline-none focus:ring-1 focus:ring-[#f13024] border border-white/20 placeholder:text-white/30 placeholder:font-light w-full h-[180px] p-6 capitalize rounded-lg resize-none "
              ></textarea>
              <button className="btn h-[52px] rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#f13024] group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Vamos conversar
                </span>
                <BsArrowRight className="btn translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
