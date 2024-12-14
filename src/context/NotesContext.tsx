import React, { createContext, useContext, useState, useEffect } from "react";
import { Note, Department } from "../types";
import client from "../utils/sanityClient";

interface NotesContextType {
  notes: Note[];
  addNote: (note: Omit<Note, "id" | "createdAt">) => void;
  filterNotes: (department: Department) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await client.fetch('*[_type == "note"]');
        setNotes(data);
        setFilteredNotes(data);
      } catch (error) {
        console.error("Error fetching notes from Sanity:", error);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (note: Omit<Note, "id" | "createdAt">) => {
    try {
      const newNote = {
        _type: "note",
        title: note.title,
        content: note.content,
        department: note.department,
        author: note.author,
        createdAt: new Date().toISOString(),
        imageUrl: note.imageUrl,
      };

      const createdNote = await client.create(newNote);

      setNotes((prev) => [...prev, createdNote]);
    } catch (error) {
      console.error("Error adding note to Sanity:", error);
    }
  };

  const filterNotes = (department: Department) => {
    const filtered = notes.filter((note) => note.department === department);
    setFilteredNotes(filtered);
  };

  return (
    <NotesContext.Provider
      value={{ notes: filteredNotes, addNote, filterNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
}
