import React, { createContext, useContext, useState } from "react";
import { Note } from "../types";
import { useEffect } from "react";
import config from "../utils/config";
import { axiosInstance } from "../utils/config";

interface NotesContextType {
  notes: Note[];
  addNote: (note: Omit<Note, "id" | "createdAt">) => void;
}
const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(config.apiUrl);
      try {
        const apiResponse = await axiosInstance.get("/notes");
        const data = apiResponse.data;

        setNotes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const addNote = (note: Omit<Note, "id" | "createdAt">) => {
    const newNote: Note = {
      ...note,
      id: Math.random().toString(36).substr(2, 9),
    };
    setNotes((prev) => [...prev, newNote]);
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
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
}
