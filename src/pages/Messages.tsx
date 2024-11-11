import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import { saveMessages, loadMessages } from '../utils/storage';
import type { Message } from '../types';

export const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedMessages = loadMessages();
    setMessages(storedMessages);
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const newMessages = [
      {
        id: Date.now(),
        text: newMessage.trim(),
        likes: 0,
        timestamp: Date.now()
      },
      ...messages
    ];
    
    setMessages(newMessages);
    saveMessages(newMessages);
    setNewMessage('');
  };

  const handleLike = (id: number) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
    );
    setMessages(updatedMessages);
    saveMessages(updatedMessages);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Heart className="w-8 h-8 text-red-500" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 max-w-2xl mx-auto">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Love Messages
      </motion.h2>

      <motion.form 
        onSubmit={handleSubmit}
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write a love message..."
            className="flex-1 px-4 py-2 rounded-full border border-red-200 focus:outline-none focus:border-red-400"
            maxLength={200}
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden md:inline">Send</span>
          </button>
        </div>
      </motion.form>

      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-800 mb-2">{message.text}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <button
                onClick={() => handleLike(message.id)}
                className="text-red-500 flex items-center gap-1 hover:text-red-600 transition-colors duration-300"
              >
                <Heart className="w-4 h-4" />
                <span>{message.likes}</span>
              </button>
              <time>
                {new Date(message.timestamp).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </time>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {messages.length === 0 && (
        <motion.p
          className="text-center text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No messages yet. Be the first to share your love!
        </motion.p>
      )}
    </div>
  );
};