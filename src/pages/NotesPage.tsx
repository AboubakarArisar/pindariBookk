import { useState } from "react";
import { NoteCard } from "../components/NoteCard";
import { DepartmentFilter } from "../components/DepartmentFilter";
import { Department } from "../types";
import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";

export function NotesPage() {
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);
  const { notes } = useNotes();

  const filteredNotes = selectedDepartment
    ? notes.filter((note) => note.department === selectedDepartment)
    : notes;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Browse Notes</h1>
      <DepartmentFilter
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 w-full'>
        {filteredNotes.length === 0 && (
          <div className='w-full h-screen '>
            <div className=''>
              <h2 className='text-xl font-bold mb-4'>No notes found</h2>
              <p className='text-gray-500'>
                Try adjusting the filters or{" "}
                <Link to='/create' className='text-emerald-600 hover:underline'>
                  create a new note
                </Link>
                .
              </p>
            </div>
          </div>
        )}
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
