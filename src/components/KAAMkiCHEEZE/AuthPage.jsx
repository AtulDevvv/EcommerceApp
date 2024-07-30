// AuthPage.jsx
import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase/firebase';
import { useSignInWithEmailAndPassword, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [currentUser] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      signInWithEmailAndPassword(email, password);
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div    className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 ">
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg backdrop-blur-md">
        {currentUser ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome, {currentUser.email}</h1>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>
            <button 
              onClick={() => signInWithGoogle()} 
              className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Sign in with Google
            </button>
            <p 
              onClick={() => setIsLogin(!isLogin)} 
              className="mt-4 text-blue-500 cursor-pointer hover:underline"
            >
              {isLogin ? 'Create an account' : 'Already have an account? Login'}
            </p>
            {loading && <p className="mt-2 text-gray-700">Loading...</p>}
            {error && <p className="mt-2 text-red-500">Error: {error.message}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
