'use client'; 
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const RouterComponent = dynamic(() => import('next/router'), { ssr: false }); // Dynamically import useRouter

const Page = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const Router = RouterComponent(); // Use the dynamic import here
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.password) {
      console.log("Missing required fields");
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        Router.push('/login'); // Now use the router for redirection
      } else {
        console.log('Registration failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="email@company.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500">Remember me</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full text-black bg-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{' '}
                <a href="/login" className="font-medium text-primary-600 hover:underline">
                  Log In.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
