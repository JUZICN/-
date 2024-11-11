import { Message } from '../types';

const STORAGE_KEY = 'love_messages';

export const saveMessages = (messages: Message[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

export const loadMessages = (): Message[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};