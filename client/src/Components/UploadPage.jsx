"use client";
import { useState } from "react";

export default function UploadPage() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; // e.g. "/api/content" or full backend URL
    const [formData, setFormData] = useState({
        user_id: "",
        title: "",
        description: "",
        url: "",
        category: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Response Data:", data); // <-- See the result ONLY in the frontend console!
        } else {
            // Just for debugging, you can also log the error details:
            console.warn("Request failed:", response.status);
            const text = await response.text();
            console.warn("Error response body:", text);
        }
    }

    return (
        <>
            <h1>Upload</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-linear-to-r from-pink-400 via-purple-600 to-blue-500 text-white font-semibold p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto"
            >
                <h1 className="text-2xl mb-6 font-bold text-white">Upload</h1>
                <label className="block mb-3">Title:</label>
                <input
                    type="text"
                    name="title"
                    className="mt-1 w-full p-2 rounded text-blue-900"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label className="block mb-3">Description: </label>
                <textarea
                    name="description"
                    className="mt-1 w-full p-2 rounded text-blue-900"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label className="block mb-3">URL: </label>
                <input
                    type="text"
                    name="url"
                    className="mt-1 w-full p-2 rounded text-blue-900"
                    value={formData.url}
                    onChange={handleChange}
                />
                <label className="block mb-6">Category: </label>
                <select
                    name="category"
                    className="mt-1 w-full py-6 rounded text-blue-900"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="">Select a category</option>
                    <option value="dance">Dance</option>
                    <option value="music">Music</option>
                    <option value="fitness">Fitness</option>
                </select>
                <button
                    type="submit"
                    className="bg-white bg-opacity-30 text-blue-950 font-bold px-6 py-6 rounded-xl shadow hover:bg-opacity-50 transition w-full"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
