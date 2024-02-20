"use client";
import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests
import { useRouter } from 'next/navigation';


// Define the Signup component
const Signup = () => {
    // Define state to manage form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        email: '',
        password: ''
    });

    // Initialize router
    const router = useRouter();

    // Define handleChange function to update form data
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Define handleSubmit function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            age: parseInt(formData.age),
            email: formData.email,
            password: formData.password
        };

        try {
            // Send POST request to server with form data
            const res = await axios.post('http://localhost:5000/signup', data);
            console.log(res);
            if (res.status === 200) {
                console.log('Signup successful');
                router.push('/login');
            }
            else {
                console.log('Signup failed');
            }
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    // Render the Signup form
    return (
        <div className="max-w-xs mx-auto">
            <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* First Name field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstname"
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </div>
                {/* Last Name field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastname"
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>
                {/* Age field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="age"
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                {/* Email field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                {/* Password field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {/* Submit button */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
