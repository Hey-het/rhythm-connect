"use client";
import { useState, useEffect } from "react";
import ProgressBar from "@/Components/ProgressBar";

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
  console.log("API URL:", apiUrl);


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

  
  return (
    <>
      <div className="min-h-screen bg-[#EEAECA] bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(158,230,204,1)_71%,rgba(148,187,233,1)_96%)] p-6">
        <div className="bg-white/70 mx-w-md w-full p-8 rounded-3xl shadow-xl">
          {/* Icon/progress section */}
        <div className="flex items-center gap-4 mb-6">
  <div className="bg-blue-400 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-bold">
    🏆
  </div>
  <h2 className="text-2xl font-extrabold text-blue-900">My Progress</h2>
</div>

{/* Progress Bars */}
<ProgressBar progress={progress} />

{/* Logs */}
<div className="mt-6">
  {progress.map(item => (
    <div key={item.id} className="mb-4 border-b pb-2">
      <div className="font-semibold text-blue-800">Completed: {item.completion_percentage}%</div>
      <div className="text-gray-700">{item.notes}</div>
      <div className="text-xs text-gray-400">{item.log_date}</div>

      {/* Category will now appear! */}
      <div className="text-xs text-gray-500">Category: {item.category}</div>
    </div>
  ))}
</div>


        </div>
      </div>
    </>
  );

}
