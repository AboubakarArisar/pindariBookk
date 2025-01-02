import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User, GraduationCap } from "lucide-react";
import { useNotes } from "../context/NotesContext";
import { DEFAULT_NOTE_IMAGE } from "../utils/constants";

export function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes } = useNotes();
  const note = notes.find((n) => n.id === id);
  console.log(note?.content);

  if (!note) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold text-red-600'>Note not found</h1>
        <button
          onClick={() => navigate("/notes")}
          className='mt-4 flex items-center bg-emerald-600 text-white'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          Back to Notes
        </button>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <button
        onClick={() => navigate("/notes")}
        className='mt-4 flex items-center px-2 py-4 mb-4 rounded-lg  bg-emerald-600 text-white'
      >
        <ArrowLeft className='w-4 h-4 mr-2' />
        Back to Notes
      </button>

      <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
        <img
          src={note.imageUrl || DEFAULT_NOTE_IMAGE}
          alt={note.title}
          className='w-full h-64 object-cover'
        />

        <div className='p-8'>
          <h1 className='text-3xl font-bold text-emerald-900 mb-4'>
            {note.title}
          </h1>

          <div className='flex flex-wrap gap-4 mb-6 text-gray-600'>
            <div className='flex items-center'>
              <User className='w-5 h-5 mr-2 text-emerald-600' />
              <span>{note.author}</span>
            </div>
            <div className='flex items-center'>
              <Calendar className='w-5 h-5 mr-2 text-emerald-600' />
              <span>{format(note.createdAt, "MMMM d, yyyy")}</span>
            </div>
            <div className='flex items-center'>
              <GraduationCap className='w-5 h-5 mr-2 text-emerald-600' />
              <span>{note.department}</span>
            </div>
          </div>

          <div className='prose max-w-none'>
            <p className='text-gray-700 whitespace-pre-wrap'>{note.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
