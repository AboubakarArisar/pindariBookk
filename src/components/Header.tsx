import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='bg-emerald-700 text-white shadow-lg'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center space-x-2'>
            <GraduationCap className='h-8 w-8' />
            <span className='text-2xl font-bold'>PindariBook</span>
          </Link>
          <nav className='block md:hidden'>
            {showMenu ? (
              <X className='h-8 w-8' onClick={() => setShowMenu(false)} />
            ) : (
              <Menu className='h-8 w-8' onClick={() => setShowMenu(true)} />
            )}
            {showMenu && (
              <div className='absolute top-0 right-0 mt-12  bg-emerald-700 shadow-lg rounded-lg w-48'>
                <ul className='flex flex-col p-4 space-y-2'>
                  <li>
                    <Link
                      to='/'
                      className='block px-4 py-2 rounded hover:bg-emerald-600'
                      onClick={() => setShowMenu(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/notes'
                      className='block px-4 py-2 rounded hover:bg-emerald-600'
                      onClick={() => setShowMenu(false)}
                    >
                      Browse Notes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/create'
                      className='block px-4 py-2 rounded bg-white text-emerald-700 hover:bg-emerald-50'
                      onClick={() => setShowMenu(false)}
                    >
                      Create Note
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
          <nav className='space-x-6 hidden md:block'>
            <Link to='/' className='hover:text-emerald-200'>
              Home
            </Link>
            <Link to='/notes' className='hover:text-emerald-200'>
              Browse Notes
            </Link>
            <Link
              to='/create'
              className='bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-50'
            >
              Create Note
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
