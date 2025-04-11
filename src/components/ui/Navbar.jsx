import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';

function Navbar() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm py-4 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
            RA
          </div>
          <span className="font-bold text-xl">ResumeAI</span>
        </Link>
        <div className="space-x-4">
          {isSignedIn ? (
            <>
              <span className="font-semibold text-gray-600">Hello, {user.firstName || 'User'}</span>
              <button 
                onClick={handleSignOut}
                className="font-semibold text-gray-600 hover:text-gray-900"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="font-semibold text-gray-600 hover:text-gray-900">
                Log in
              </Link>
              <Link to="/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;