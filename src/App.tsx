import React from 'react';
import ActivityImg from "./assets/activity.svg";
import Cards from './components/Cards';
import { motion } from "framer-motion"
function App() {

  const fadeTitleLeft = {
    hidden: {
      opacity: 0,
      x: -80
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .8,
      }
    }
  }

  return (
    <div className="px-12 py-12 md:py-40 font-tomorrow">

      <motion.div variants={fadeTitleLeft} initial="hidden" animate="visible" className='flex flex-1 space-x-2'>
        <img src={ActivityImg} alt="Activity" width="20" height="20" />
        <p className='text-white font-semibold text-xl'>Trending Assets</p>
      </motion.div>

      <Cards />

    </div>
  );
}

export default App;
