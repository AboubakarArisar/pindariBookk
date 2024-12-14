import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { Note, Department } from "../types";
import toast, { Toaster } from "react-hot-toast";
import { departments } from "../data/departments";

const CreateNote: React.FC = () => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [department, setDepartment] = useState<Department | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!department) {
      toast.error("Please select a department");
      return;
    }

    const newNote: Omit<Note, "id" | "createdAt"> = {
      _id: "",
      title,
      author,
      content,
      department,
      imageUrl,
    };

    addNote(newNote);

    setTitle("");
    setAuthor("");
    setContent("");
    setDepartment(null);
    setImageUrl("");
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <Toaster />
      <h1 className='text-3xl font-bold text-emerald-900 mb-6'>
        Create New Note
      </h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Title
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Author
          </label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Department
          </label>
          <select
            value={department || ""}
            onChange={(e) => setDepartment(e.target.value as Department)}
            required
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3'
          >
            <option value=''>Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Image URL
          </label>
          <input
            type='url'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-md hover:bg-emerald-700'
        >
          Create Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
