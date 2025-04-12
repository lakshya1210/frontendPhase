import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';

function SignUp() {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            RA
          </div>
        </div>
        <ClerkSignUp 
          signInUrl="/sign-in" 
          routing="path" 
          path="/sign-up"
          redirectUrl="/sign-up/verify-email-address"
        />
      </div>
    </div>
  );
}

export default SignUp;