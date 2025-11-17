"use client";

export default function UploadPage({ action }) {
    
    return (
        <>
            <h1>Upload</h1>

            <form
                action={action}
                className="bg-linear-to-r from-pink-400 via-purple-600 to-blue-500 text-white font-semibold p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto"
            >
                <label className="block mb-3">Title:</label>
                <input
                    type="text"
                    name="title"
                    className="mt-1 w-full p-2 rounded text-blue-900"
                    required
                />

                <label className="block mb-3">Description: </label>
                <textarea
                    name="description"
                    className="mt-1 w-full p-2 rounded text-blue-900"
                    required
                />

                <label className="block mb-3">URL: </label>
                <input
                    type="text"
                    name="url"
                    className="mt-1 w-full p-2 rounded text-blue-900"
                    required
                />

                <label className="block mb-6">Category: </label>
                <select
                    name="category"
                    className="mt-1 w-full py-6 rounded text-blue-900"
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
