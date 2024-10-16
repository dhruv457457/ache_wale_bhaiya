import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Profile({ initialEmail }) {
  const [email, setEmail] = useState(initialEmail);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe"); // Example user name
  const [phone, setPhone] = useState("+1 234 567 890"); // Example phone
  const [address, setAddress] = useState("1234 Elm Street, Springfield, USA"); // Example address

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Save the updated info (you can integrate this with your backend)
    setIsEditing(false);
  };

  return (
    
    <div>

      <Navbar />
    <div className="min-h-screen bg-gray-100 py-6 flex justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="flex flex-col sm:flex-row items-start">
            {/* Left Column - Profile Info */}
            <div className="w-full sm:w-1/3 p-4">
              <div className="text-center sm:text-left">
                <img
                  className="w-32 h-32 rounded-full mx-auto sm:mx-0 sm:mb-4 border-4 border-indigo-600"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  />
                <h1 className="text-2xl font-semibold text-gray-900 mt-4 sm:mt-0">
                  {name}
                </h1>
                <p className="text-gray-600 mt-2">Premium Member</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">Email:</span>
                  {isEditing ? (
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="ml-2 p-1 border border-gray-300 rounded"
                    />
                  ) : (
                    <span className="ml-2 text-gray-600">{email}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">Phone:</span>
                  {isEditing ? (
                    <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="ml-2 p-1 border border-gray-300 rounded"
                    />
                  ) : (
                    <span className="ml-2 text-gray-600">{phone}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">Address:</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="ml-2 p-1 border border-gray-300 rounded"
                      />
                    ) : (
                    <span className="ml-2 text-gray-600">{address}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">Member since:</span>
                  <span className="ml-2 text-gray-600">January 2023</span>
                </div>
                <div className="mt-8">
                  <button
                    onClick={isEditing ? handleSave : handleEdit}
                    className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                    >
                    {isEditing ? "Save Profile" : "Edit Profile"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - E-commerce Info */}
            <div className="w-full sm:w-2/3 p-4">
              {/* Order History */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Order History
                </h2>
                <ul className="space-y-2">
                  <li className="flex justify-between bg-gray-50 p-4 rounded-md shadow-md">
                    <span>Order #12345</span>
                    <span>$120.00</span>
                  </li>
                  <li className="flex justify-between bg-gray-50 p-4 rounded-md shadow-md">
                    <span>Order #12346</span>
                    <span>$200.00</span>
                  </li>
                </ul>
                <div className="text-right mt-2">
                  <a href="/orders" className="text-indigo-600 hover:underline">
                    View all orders
                  </a>
                </div>
              </div>

              {/* Saved Items */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Saved Items
                </h2>
                <ul className="space-y-2">
                  <li className="flex justify-between bg-gray-50 p-4 rounded-md shadow-md">
                    <span>Product 1</span>
                    <span>$50.00</span>
                  </li>
                  <li className="flex justify-between bg-gray-50 p-4 rounded-md shadow-md">
                    <span>Product 2</span>
                    <span>$80.00</span>
                  </li>
                </ul>
                <div className="text-right mt-2">
                  <a
                    href="/saved-items"
                    className="text-indigo-600 hover:underline"
                    >
                    View all saved items
                  </a>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Payment Methods
                </h2>
                <ul className="space-y-2">
                  <li className="flex justify-between bg-gray-50 p-4 rounded-md shadow-md">
                    <span>Visa ending in 1234</span>
                    <span>Exp: 12/25</span>
                  </li>
                  <li className="flex justify-between bg-gray-50 p-4 rounded-md shadow-md">
                    <span>Mastercard ending in 5678</span>
                    <span>Exp: 05/24</span>
                  </li>
                </ul>
                <div className="text-right mt-2">
                  <a
                    href="/payment-methods"
                    className="text-indigo-600 hover:underline"
                    >
                    Manage payment methods
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                    </div>
  );
}

export default Profile;
