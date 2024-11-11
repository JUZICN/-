import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer 
      className="text-center py-4 text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p>
        Copyright 2024{' '}
        <a 
          href="https://juz1.cn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-600 transition-colors duration-300"
        >
          Juzi
        </a>
        {' '}Made with <span className="text-red-500">❤</span>
      </p>
    </motion.footer>
  );
};