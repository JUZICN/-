import React from 'react';
import { motion } from 'framer-motion';

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
    title: "First Meeting",
    date: "2024-01-01"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    title: "Sweet Moments",
    date: "2024-02-14"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b",
    title: "Together Forever",
    date: "2024-03-01"
  }
];

export const Memories = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Beautiful Memories
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <img 
              src={memory.image} 
              alt={memory.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600">{memory.title}</h3>
              <p className="text-sm text-gray-500">{memory.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};