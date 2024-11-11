import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FloatingHearts } from '../components/FloatingHearts';
import { MainTitle } from '../components/MainTitle';
import { LoveQuotes } from '../components/LoveQuotes';

export const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden px-4 pb-16">
      <FloatingHearts />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-8 cursor-pointer"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 }
          }}
        >
          <Heart className="w-20 h-20 md:w-24 md:h-24 text-red-500 mx-auto hover:fill-current transition-all duration-300" />
        </motion.div>

        <MainTitle />

        <motion.p 
          className="text-lg md:text-xl text-red-700 mt-4 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{
            scale: 1.05,
            color: "#ff1493",
            transition: { duration: 0.2 }
          }}
        >
          Forever & Always
        </motion.p>

        <LoveQuotes />
      </motion.div>
    </div>
  );
};