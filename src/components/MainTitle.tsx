import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const MainTitle = () => {
  const letters = "喜欢你".split("");
  
  return (
    <motion.div className="relative">
      <div className="flex items-center justify-center gap-1 md:gap-2">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-4xl md:text-6xl font-bold text-red-600 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.2,
              color: "#ff1493",
              transition: { duration: 0.2 }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="absolute -top-2 -right-2"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="text-yellow-400 w-4 h-4 md:w-6 md:h-6" />
      </motion.div>
    </motion.div>
  );
};