import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
  "The best thing to hold onto in life is each other.",
  "When I saw you, I fell in love, and you smiled because you knew."
];

export const LoveQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 mt-6 px-4 max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentQuote}
          className="text-center text-gray-600 italic text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {quotes[currentQuote]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};