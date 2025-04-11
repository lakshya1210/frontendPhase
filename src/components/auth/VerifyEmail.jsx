import React from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function VerifyEmail() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = React.useState('');
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isLoaded) {
      return;
    }

    setIsVerifying(true);
    setError('');
    
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });
      
      if (completeSignUp.status !== 'complete') {
        console.log(JSON.stringify(completeSignUp, null, 2));
        throw new Error('Something went wrong during email verification');
      }
      
      await setActive({ session: completeSignUp.createdSessionId });
      navigate('/');
    } catch (err) {
      setError(err.message || 'Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            RA
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Verify your email</h2>
        <p className="text-center text-gray-600 mb-6">
          We've sent a verification code to your email address. Please enter it below.
        </p>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="code" className="block text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              id="code"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter verification code"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isVerifying || !verificationCode}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded disabled:opacity-50"
          >
            {isVerifying ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;