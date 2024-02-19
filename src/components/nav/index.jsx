import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  HiViewColumns,
  HiEnvelope,
  HiHome,
  HiUser,
} from "react-icons/hi2";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const navData = [
    {
      name: "Início",
      path: "/",
      Icon: HiHome,
    },
    {
      name: "Sobre",
      path: "/about",
      Icon: HiUser,
    },
    {
      name: "Projetos",
      path: "/work",
      Icon: HiViewColumns,
    },
    {
      name: "contato",
      path: "/contacts",
      Icon: HiEnvelope,
    },
  ];

  const [showOverlay, setShowOverlay] = useState(false);

  const handleNavigate = (path) => {
    if(path !== pathname) {
    setShowOverlay(true);
    }
    setTimeout(() => {
      navigate(path);
    }, 600);
  };

  return (
    <div>
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
      <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-10 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
        <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 xl:px-0 h-[80px] bg-red-200/10 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full ">
          {navData.map(({ name, path, Icon }, index) => (
            <div
              className="relative flex items-center group"
              key={index}
              onClick={() => handleNavigate(path)}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex cursor-pointer ">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize text-[#000000]">
                    {name}
                  </div>

                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <Icon
                size={24}
                color={path === pathname ? "#F13024" : "#ffffff"}
              />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
