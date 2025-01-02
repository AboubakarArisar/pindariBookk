import { Link } from "react-router-dom";
import { Calendar, User, GraduationCap } from "lucide-react";
import { format } from "date-fns";
import { Note } from "../types";
import { DEFAULT_NOTE_IMAGE } from "../utils/constants";

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  let department = note.department;
  function getShortForm(department: string) {
    switch (department) {
      case "Computer Science":
        return "CS";
      case "Accounting & Finance":
        return "A&F";
      case "Electrical Engineering":
        return "EE";
      case "Computer System Engineering":
        return "CSE";
      case "Mathematics":
        return "Maths";
      case "Media Studies":
        return "Media";
      default:
        return department;
    }
  }

  let userDepartment = getShortForm(department);
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden h-[70vh] transform hover:scale-102 transition-transform duration-300'>
      <img
        src={note.imageUrl || DEFAULT_NOTE_IMAGE}
        alt={note.title}
        className='w-full h-48 object-cover'
      />
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-emerald-900'>
          {note.title}
        </h3>
        <div className='flex items-center space-x-4 text-gray-600 mb-4'>
          <div className='flex items-center'>
            <User className='w-4 h-4 mr-1 text-emerald-600' />
            <span className='truncate max-w-xs'>{note.author}</span>
          </div>
          <div className='flex items-center'>
            <Calendar className='w-4 h-4 mr-1 text-emerald-600' />
            <span>{format(note.createdAt, "MMM d, yyyy")}</span>
          </div>
          <div className='flex items-center'>
            <GraduationCap className='w-4 h-4 mr-1 text-emerald-600' />
            <span>{userDepartment}</span>
          </div>
        </div>
        <p className='text-gray-600 mb-4 line-clamp-3'>
          {note.content.length > 50
            ? `${note.content.substring(0, 50)}...`
            : note.content}
        </p>
        <Link
          to={`/notes/${note.id}`}
          className='inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300'
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
