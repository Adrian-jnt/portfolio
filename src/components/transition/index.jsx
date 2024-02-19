import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
}

const Transition = () => {
  
  return (
  <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#002240]'
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#003A63]'
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#004E82]'
        variants={variants}
        initial='initial'
        animate='animate'
        transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
    </>
  )
}

export default Transition;