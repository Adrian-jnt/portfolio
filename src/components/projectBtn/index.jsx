import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import roundedTextImage from '../../images/rounded-text.png';

const ProjectBtn = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNavigate = (path) => {
    setShowOverlay(true);

    setTimeout(() => {
      navigate(path);
    }, 600);
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {showOverlay && (
          <motion.div
            key="overlay"
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#002240]"
            initial={{ x: "0%", width: "0%" }}
            animate={{ x: "100%", width: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <div className="mx-auto xl:mx-0">
        <Link className="relative width-[195px] height-[195px] flex justify-center items-center bg-cover bg-center bg-no-repeat group p-6">
          <motion.img
            src={roundedTextImage}
            width={148}
            height={140}
            alt=""
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="w-full h-full max-w-[148px] max-h-[140px] "
          />
          <HiArrowRight
            onClick={() => handleNavigate("/work")}
            className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 z-10"
            color={"#ffffff"}
          />
        </Link>
      </div>
    </>
  );
};

export default ProjectBtn;
