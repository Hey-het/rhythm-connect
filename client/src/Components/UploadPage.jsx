"use client";
import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");

  const handleSubmit = (e) => {
  e.preventDefault();

  const payload = {
    user_id: 1, // replace with actual user id if you have auth
    title,
    description,
    url,
    category,
  };

  // send POST request to server
  fetch(`${apiUrl}/content`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log("Response from server:", data); // logs in **client console**
      // you can optionally clear the form
      setTitle("");
      setDescription("");
      setUrl("");
      setCategory("");
    });
};


  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Upload</h1>

      <form
        onSubmit={handleSubmit} // ✅ use onSubmit here
        className="bg-linear-to-r from-pink-400 via-purple-600 to-blue-500 text-white font-semibold p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto flex flex-col gap-4"
      >
        <label className="block mb-1">Title:</label>
        <input
          type="text"
          name="title"
          className="mt-1 w-full p-2 rounded text-blue-900"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block mb-1">Description:</label>
        <textarea
          name="description"
          className="mt-1 w-full p-2 rounded text-blue-900"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="block mb-1">URL:</label>
        <input
          type="text"
          name="url"
          className="mt-1 w-full p-2 rounded text-blue-900"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <label className="block mb-1">Category:</label>
        <select
          name="category"
          className="mt-1 w-full py-2 rounded text-blue-900"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="dance">Dance</option>
          <option value="music">Music</option>
          <option value="fitness">Fitness</option>
        </select>

        <button
          type="submit"
          className="bg-white bg-opacity-30 text-blue-950 font-bold px-6 py-3 rounded-xl shadow hover:bg-opacity-50 transition w-full mt-4"
        >
          Submit
        </button>
      </form>
    </>
  );
}
