"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // for making HTTP requests
import { useRouter } from 'next/navigation';

// Define the Login component
const Login = () => {
    // Define state to manage form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Initialize router
    const router = useRouter();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            router.push('/');
        }
    }, [token]);

    // Define handleChange function to update form data
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Define handleSubmit function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Send POST request to server with form data
            const res = await axios.post('http://localhost:3000/user/login', formData);
            console.log(res);
            if (res.status === 200) {
                const token = res.data.token;
                localStorage.setItem('token', token);
                
                console.log('Login successful');
                router.push('/');
            }
            else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    // Render the Login form
    return (
        <div className="max-w-xs mx-auto">
            <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login; // Export the Login component
