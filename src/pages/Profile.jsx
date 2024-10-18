
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


// Firebase configuration
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

function Profile() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('John Doe');
  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState('+1 234 567 890');
  const [address, setAddress] = useState('1234 Elm Street, Springfield, USA');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
      // Format name from email
      const formattedName = user.email.split('@')[0].split('_').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
      setName(formattedName);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can also save the updated details to your database
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon 
              icon={faUser} 
              size="6x" 
              className="text-gray-500" 
            />
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-gray-600">Premium Member</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Email:</span>
          {isEditing ? (
            <input
              type="email"
              value={email}
              className="border border-gray-300 p-1 rounded w-64"
              readOnly // Email should not be editable
            />
          ) : (
            <span>{email}</span>
          )}
        </div>


          <div className="flex justify-between">
            <span className="font-semibold">Phone:</span>
            {isEditing ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 p-1 rounded w-64"
              />
            ) : (
              <span>{phone}</span>
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Address:</span>
            {isEditing ? (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 p-1 rounded w-64"
              />
            ) : (
              <span>{address}</span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={isEditing ? handleSave : handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">Order History</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between border-b pb-2">
              <span>500 RPM center-shaft DC gear motor</span>
              <span>Rs.130.00</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Rainbow 10 Core Color Flat Ribbon Wire Cable</span>
              <span>Rs. 30.00</span>
            </li>
          </ul>
          <div className="mt-2 text-right">
            <Link to="/orders" className="text-blue-500 hover:underline">
              View all orders
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">Payment Methods</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between border-b pb-2">
              <span>DebitCard</span>
              <span>Exp: 12/25</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Mastercard</span>
              <span>Exp: 05/24</span>
            </li>
          </ul>
          <div className="mt-2 text-right">
            <Link to="/payment-methods" className="text-blue-500 hover:underline">
              Manage payment methods
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
