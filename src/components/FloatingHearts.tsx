import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialDelay: Math.random() * 2
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="absolute text-red-400/30"
          initial={{ 
            x: `${heart.initialX}vw`,
            y: '100vh',
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{
            y: '-20vh',
            x: `${heart.initialX + (Math.random() * 20 - 10)}vw`
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: heart.initialDelay,
            ease: 'linear'
          }}
        >
          <Heart className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  );
};