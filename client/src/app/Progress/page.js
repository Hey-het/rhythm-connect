"use client";
import { useState, useEffect } from "react";
import ProgressBar from "@/Components/ProgressBar";
import ProgressCategoryChart from "@/Components/ProgressCategoryChart";
import LogFormPage from "@/Components/LogForm";

export default function ProgressPage() {
  //   //  Set user id here (replace with auth/session value)
  const user_id = 1;
  
  const [progress, setProgress] = useState([]);
  

  const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");
  
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
<ProgressCategoryChart progress={progress} />
{/* Log New Progress Button & Modal */}
<LogFormPage progress={progress} />


        </div>
      </div>
    </>
  );

}
