import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-emerald-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-2xl font-bold">PindariBook</span>
          </Link>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-emerald-200">Home</Link>
            <Link to="/notes" className="hover:text-emerald-200">Browse Notes</Link>
            <Link to="/create" className="bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-50">
              Create Note
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}