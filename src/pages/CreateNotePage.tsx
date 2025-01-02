import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { departments } from "../data/departments";
import { Department } from "../types";
import { useNotes } from "../context/NotesContext";

export function CreateNotePage() {
  const navigate = useNavigate();
  const { addNote } = useNotes();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    department: "" as Department,
    imageUrl: "",
    author: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote(formData);
    navigate("/notes");
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8'>
          <h1 className='text-3xl font-bold mb-8 text-emerald-900'>
            Create New Note
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='space-y-6'>
              <div>
                <label
                  htmlFor='title'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Title
                </label>
                <input
                  type='text'
                  id='title'
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='author'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Author Name
                </label>
                <input
                  type='text'
                  id='author'
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='department'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Department
                </label>
                <select
                  id='department'
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      department: e.target.value as Department,
                    })
                  }
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  required
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
                <label
                  htmlFor='imageUrl'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Image URL (optional)
                </label>
                <input
                  type='url'
                  id='imageUrl'
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
                  placeholder='https://example.com/image.jpg'
                />
              </div>

              <div>
                <label
                  htmlFor='content'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Content
                </label>
                <textarea
                  id='content'
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 h-64'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium'
              >
                Create Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
