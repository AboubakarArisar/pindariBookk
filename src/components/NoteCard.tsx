import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, GraduationCap } from 'lucide-react';
import { format } from 'date-fns';
import { Note } from '../types';
import { DEFAULT_NOTE_IMAGE } from '../utils/constants';

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-102 transition-transform duration-300">
      <img 
        src={note.imageUrl || DEFAULT_NOTE_IMAGE}
        alt={note.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-emerald-900">{note.title}</h3>
        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1 text-emerald-600" />
            <span>{note.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-emerald-600" />
            <span>{format(note.createdAt, 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center">
            <GraduationCap className="w-4 h-4 mr-1 text-emerald-600" />
            <span>{note.department}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {note.content}
        </p>
        <Link 
          to={`/notes/${note.id}`}
          className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}