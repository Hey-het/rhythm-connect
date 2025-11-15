// "use client"
// import { useEffect, useState } from "react"

// export default function contantPage() {
  
// //   const [content, setContant] = useState([]);
// //   const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");

// //   console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  
// //  useEffect(() => {
// //   fetch(`${apiUrl}/content`)
// //     .then(res => res.json())
// //     .then(data => setContant(data))
// //     .catch(err => console.log("Fetch error:", err));
// // }, []);



//   return (
//     <>
//    <div className="min-h-screen bg-[#EEAECA] bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(158,230,204,1)_71%,rgba(148,187,233,1)_96%)]">


//       <h1>Welcome to My HomePage</h1>
//       {/* <div>
//        { content.map(item => (
//         <div key ={item.id}
//         >
//              <h2>{item.title}</h2>
//           <p>{item.description}</p>
//             <a href={item.url} target="_blank" rel="noopener noreferrer">Watch</a>
//         </div>

//         ))}
//         </div> */}
//         </div>
    
//     </>
//   )
// }
export default function BrowseContentPage() {
  return (
  <div className="min-h-screen bg-[#EEAECA] bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(158,230,204,1)_71%,rgba(148,187,233,1)_96%)]">
  {/* Header */}
  <header className="max-w-4xl mx-auto pb-6 text-center md:text-left">
    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
      Browse Content
    </h1>
    <p className="text-blue-100 text-lg drop-shadow-sm">
      Find and enjoy dance content, share, and learn with the community!
    </p>
  </header>

  {/* Filter/Search Row */}
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-10">
    <input
      type="search"
      className="flex-1 p-3 rounded-xl border-0 focus:ring-4 focus:ring-blue-300 bg-white/10 text-white placeholder-white/70 transition"
      placeholder="Search content..."
    />
    <select className="p-3 rounded-xl border-0 focus:ring-4 focus:ring-pink-300 bg-white/10 text-white placeholder-white/70 transition">
      <option value="">Filter by Category</option>
      <option value="Dance">Dance</option>
      <option value="Music">Music</option>
    </select>
    <button className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transform transition">
      Upload
    </button>
  </div>

  {/* Content Cards */}
  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="rounded-2xl p-6 flex flex-col shadow-2xl bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 hover:scale-105 transform transition duration-300 border border-white/20"
      >
        <div className="font-bold text-xl text-white mb-2 drop-shadow-sm">
          Content Title
        </div>
        <div className="text-white/90 mb-4 drop-shadow-sm">
          Short description of the content goes here.
        </div>
        <span className="inline-block mt-auto bg-white/20 text-white px-4 py-2 rounded-lg font-semibold text-center border border-white/30 hover:bg-white/30 transition">
          Play / View
        </span>
      </div>
    ))}
  </div>
</div>

  );
}
