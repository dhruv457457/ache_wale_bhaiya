import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";

// Firebase configuration (make sure this is correct for your project)
const firebaseConfig = {
  apiKey: "AIzaSyCOEELr8MeueOSS1WyJX5_CkjCBMU1CjuU",
  authDomain: "achewalebhaiya-8ea02.firebaseapp.com",
  projectId: "achewalebhaiya-8ea02",
  storageBucket: "achewalebhaiya-8ea02.appspot.com",
  messagingSenderId: "803953226016",
  appId: "1:803953226016:web:8fd1a398a1d02bf109e745",
  measurementId: "G-V050YEBNEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully!", userCredential);
      alert("Registration successful!");
      
      // Here you might want to add additional steps, such as saving user info to a database

    } catch (error) {
      console.error("Error during registration:", error.code, error.message);
      setError("Error during registration: " + error.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://i.ibb.co/rFzSmGG/Black-and-White-Minimalist-Wedding-Monogram-Logo-removebg-preview.png"
          className="mx-auto h-16 w-16"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm mt-2">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Register;
