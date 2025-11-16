"use client";
import { useEffect, useState } from "react";
import UploadPage from "@/Components/UploadPage";

export default function galleryPage() {

    const [content, setContent] = useState([]);
    const [upload, setUpload] = useState();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");

    // console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

    useEffect(() => {
        // Fetch content from API or database
        fetch(`${apiUrl}/content`).then
            (rep => rep.json())
            .then(data => {
                setContent(data)
                // console.log(data);
            })
    }, []);
    return (
        <div className="min-h-screen bg-[#EEAECA] bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(158,230,204,1)_71%,rgba(148,187,233,1)_96%)]">

            <header className="max-w-4xl mx-auto p-6 text-center md:text-left">
                <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">  Browse Content</h1>
                <p className="text-blue-950 text-lg drop-shadow-sm"> Find and enjoy dance, Music, Fitness content, share, and learn with the community! </p>
            </header>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-10">
                <input
                    type="search"
                    className="flex-1 p-3 rounded-xl border-0 focus:ring-4 focus:ring-blue-300 bg-white/10 text-blue-900 placeholder-white/70 transition"
                    placeholder="Search content..."
                />
                <select className=" focus:ring-4 focus:ring-pink-300 bg-white/10 text-blue-900 placeholder-white/70 transition p-3 rounded-xl border-0">
                    <option value="">Filter by Category</option>
                    <option value="">Dance</option>
                    <option value="">Music</option>
                    <option value="">Fitness</option>
                </select>
                <button
                    onClick={() => setUpload(true)}
                    className="bg-linear-to-r from-pink-400 via-purple-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transform transition">
                    Upload
                </button>
            </div>
            {/* show upload form if state is true */}
            {upload && <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 shadow-2xl w-full max-w-md relative">
                    {/* Close button */}
                    <button className="absolute top-2 right-2 text-xl" onClick={() => setUpload(false)}>
                        &times;
                    </button>
                    <UploadPage />
                </div>
            </div>
            }
            <main className="flex-1 py-8 px-10 overflow-y-auto">
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {content.map(item => (
                        <div key={item.id}
                            className="rounded-2xl p-6 flex flex-col shadow-2xl bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 hover:scale-105 transform transition duration-300 border border-white/20"
                        >
                            <h2 className="font-bold text-xl text-white mb-2 drop-shadow-sm">{item.title}</h2>
                            <p className="text-white/90 mb-4 drop-shadow-sm">{item.description}</p>
                            <a
                                className="inline-block mt-auto bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-center border border-white/30 hover:bg-white/30 transition"
                                href={item.url} target="_blank" rel="noopener noreferrer">Watch</a>
                        </div>
                    ))}
                </div>
            </main>


        </div>
    );
}