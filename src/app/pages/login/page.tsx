'use client';

import TopHeader from '@/components/TopHeader';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    // Access environment variables
    const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      console.log('Login successful!');
      setError('');
      // Redirect to admin dashboard or home page
      window.location.href = '/'; // Replace with your desired route
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <>
      <TopHeader />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-image">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          {/* Logo and Back to Home Button */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/">
              <div className="flex justify-center gap-2">
                        <Image src="/img/logo/logo.png" alt="logo" width={40} height={40} />
                        <h1 className="text-[26px] font-inter font-semibold text-[#272343]">Comforty</h1>
                      </div>
            </Link>
          </div>

          {/* Login Form */}
          <div>
            <h2 className="text-center text-3xl font-bold text-[#111111]">Admin Login</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please enter your credentials to access the admin panel.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#00A9A9] focus:border-[#00A9A9] focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-[#00A9A9] focus:border-[#00A9A9] focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00A9A9] hover:bg-[#008f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A9A9] transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}