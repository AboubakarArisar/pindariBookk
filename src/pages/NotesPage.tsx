import React, { useState } from 'react';
import { NoteCard } from '../components/NoteCard';
import { DepartmentFilter } from '../components/DepartmentFilter';
import { Department } from '../types';
import { useNotes } from '../context/NotesContext';

export function NotesPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const { notes } = useNotes();

  const filteredNotes = selectedDepartment
    ? notes.filter(note => note.department === selectedDepartment)
    : notes;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Notes</h1>
      <DepartmentFilter
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}