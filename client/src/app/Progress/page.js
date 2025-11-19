"use client";
import { useState, useEffect } from "react";

export default function ProgressPage() {
//   //  Set user id here (replace with auth/session value)
  const user_id = 1;
  const [content, setContent] = useState([]);
  const [progress, setProgress] = useState([]);

//   const [selectedContentId, setSelectedContentId] = useState("");
//   const [completionPercentage, setCompletionPercentage] = useState(0);
//   const [notes, setNotes] = useState("");
//   const [success, setSuccess] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");

  // useEffect(() => {
  //   //  Fetch content from API or database
  //   fetch(`${apiUrl}/content`).then
  //     (rep => rep.json())
  //     .then(data => {
  //       setProgress(data)
  //       // console.log(data);
  //     })
  // }, []);
    useEffect(() => {
    //  Fetch content from API or database
    fetch(`${apiUrl}/progress`).then
      (rep => rep.json())
      .then(data => {
        setProgress(data)
        console.log(data);
      })
  }, []);


  return(
    <>
    <div className="min-h-screen bg-[#EEAECA] bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(158,230,204,1)_71%,rgba(148,187,233,1)_96%)] p-6">
    This my Progress Page
    {progress.map ( item => (
      <div key={item.id}>
        <h2>{item.completion_percentage}</h2>
        <p>{item.notes}</p>
        <p>{item.log_date}</p>
        </div>

    ))}
    </div>
    </>
  );
//   //  Example demo progress stats — replace with values from DB if you want
//   const progressStats = [
//     { label: "Dance", percentage: 85, color: "bg-pink-400", barBg: "bg-pink-200" },
//     { label: "Music", percentage: 70, color: "bg-blue-400", barBg: "bg-blue-200" },
//     { label: "Fitness", percentage: 80, color: "bg-purple-400", barBg: "bg-pink-200" },
//   ];

//   //  const handleLogProgress = async (e) => {
//   //    e.preventDefault();
//   //    const log_date = new Date().toISOString().slice(0, 10);

//   //    const res = await fetch(`${apiUrl}/progress`, {
//   //      method: "POST",
//   //      headers: { "Content-Type": "application/json" },
//   //      body: JSON.stringify({
//   //        user_id,
//   //        content_id: selectedContentId,
//   //        completion_percentage: completionPercentage,
//   //        notes,
//   //        log_date,
//   //      }),
//   //    });
//   //    if (res.ok) {
//   //      setSuccess(true);
//   //      setShowLogProgress(false);
//   //      setCompletionPercentage(0);
//   //      setNotes("");
//   //    }
//   //  };

//   return (
//     <>
//       <div className="min-h-screen bg-[#EEAECA] bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(158,230,204,1)_71%,rgba(148,187,233,1)_96%)] flex items-center justify-center p-6">
//         <div className="max-w-lg w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg p-8">
//           <h2 className="text-3xl font-bold text-blue-900 mb-6">My Progress</h2>
//           {/* Progress Bars */}
//           <div className="space-y-6 mb-8">
//             {progressStats.map(stat => (
//               <div key={stat.label}>
//                 <span className={`font-semibold ${stat.color.replace('bg-', 'text-')}`}>{stat.label}</span>
//                 <div className={`w-full h-2 ${stat.barBg} rounded-full mt-1`}>
//                   <div
//                     className={`${stat.color} h-2 rounded-full`}
//                     style={{ width: `${stat.percentage}%` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mb-8">
//             <span className="font-semibold text-blue-900 mb-2 block">Progress by Category</span>
//             <div className="flex items-end gap-8 h-24">
//               {progressStats.map(stat => (
//                 <div className="flex flex-col items-center flex-1" key={stat.label}>
//                   <div className={`${stat.color} w-10 rounded`} style={{ height: `${stat.percentage}%` }}></div>
//                   <span className="text-xs mt-1 text-blue-900">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <button
//               className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
//               onClick={() => setProgress(true)}
//             >
//               Log New Progress
//             </button>
//             <button className="bg-pink-400 text-white px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 transition">
//               View History
//             </button>
//           </div>
//           {/* Log New Progress Modal/Form */}
//           {progress && (
//             <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//               <div className="bg-white rounded-xl p-8 shadow w-full max-w-md relative">
//                 <button className="absolute top-2 right-2 text-xl" onClick={() => setProgress(false)}>
//                   &times;
//                 </button>
//                 <div className="font-bold text-blue-900 text-lg mb-2">Log New Progress</div>
//                 <form 
//                 // onSubmit={handleLogProgress}
//                 >
//                   <label className="block font-semibold mb-2">
//                     Select Content:
//                     <select
//                       className="w-full rounded border mt-1"
//                       value={selectedContentId}
//                       onChange={e => setSelectedContentId(e.target.value)}
//                       required
//                     >
//                       {content.map(item => (
//                         <option key={item.id} value={item.id}>
//                           {item.title} ({item.category})
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                   <label className="block font-semibold mb-2">
//                     Completion Percentage:
//                     <input
//                       type="number"
//                       className="w-full rounded border mt-1"
//                       min={0}
//                       max={100}
//                       value={completionPercentage}
//                       onChange={e => setCompletionPercentage(Number(e.target.value))}
//                       required
//                     />
//                   </label>
//                   <label className="block font-semibold mb-2">
//                     Notes:
//                     <textarea
//                       className="w-full rounded border mt-1"
//                       value={notes}
//                       onChange={e => setNotes(e.target.value)}
//                       placeholder="Describe your progress..."
//                     />
//                   </label>
//                   <button
//                     type="submit"
//                     className="bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 mt-4"
//                   >
//                     Save
//                   </button>
//                 </form>
//                 {success && <div className="text-green-700 mt-2">Progress saved!</div>}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
 }
