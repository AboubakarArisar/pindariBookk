import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Share2 } from "lucide-react";

export function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-24'>
        <div className='container mx-auto px-4 text-center'>
          <div className='flex justify-center mb-6'>
            <GraduationCap className='h-20 w-20' />
          </div>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Welcome to PindariBook
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-emerald-100'>
            Your ultimate platform for sharing and discovering university study
            notes
          </p>
          <Link
            to='/create'
            className='bg-white text-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 shadow-lg'
          >
            Share Your Knowledge
          </Link>
        </div>
      </div>

      <div className='container mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white  p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300'>
            <GraduationCap className='w-12 h-12 mx-auto mb-4 text-emerald-600' />
            <h2 className='text-xl font-semibold mb-4'>Expert Notes</h2>
            <p className='text-gray-600'>
              Access high-quality study materials created by your fellow
              students
            </p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300'>
            <Users className='w-12 h-12 mx-auto mb-4 text-emerald-600' />
            <h2 className='text-xl font-semibold mb-4'>Community Learning</h2>
            <p className='text-gray-600'>
              Join a vibrant community of learners and share your expertise
            </p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300'>
            <Share2 className='w-12 h-12 mx-auto mb-4 text-emerald-600' />
            <h2 className='text-xl font-semibold mb-4'>Easy Sharing</h2>
            <p className='text-gray-600'>
              Create and share your notes with a simple, intuitive interface
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
