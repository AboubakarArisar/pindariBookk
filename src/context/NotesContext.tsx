import React, { createContext, useContext, useState } from 'react';
import { Note, Department } from '../types';
import { useNavigate } from 'react-router-dom';

interface NotesContextType {
  notes: Note[];
  addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Introduction to Data Structures',
      content: 'A comprehensive guide to understanding basic data structures including arrays, linked lists, and trees...',
      department: 'Computer Science' as Department,
      author: 'John Doe',
      createdAt: new Date('2024-03-10'),
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128'
    },
    {
      id: '2',
      title: 'Financial Management Basics',
      content: 'Understanding the fundamentals of financial management, including budgeting, forecasting...',
      department: 'BBA' as Department,
      author: 'Jane Smith',
      createdAt: new Date('2024-03-09'),
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2128'
    }
  ]);

  const addNote = (note: Omit<Note, 'id' | 'createdAt'>) => {
    const newNote: Note = {
      ...note,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date()
    };
    setNotes(prev => [...prev, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}