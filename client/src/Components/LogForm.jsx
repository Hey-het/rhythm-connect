"use client";
import { useState, useEffect } from "react";

export default function LogFormPage({ progress }) {
  const [showProgress, setShowProgress] = useState(false); // Use boolean
  const [percentage, setPercentage] = useState();
  const [notes, setNotes] = useState();
  const [contentId, setContentId] = useState("");
  const [date, setDate] = useState("");


  const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/content`) // your endpoint returning all contents
      .then(res => res.json())
      .then(data => setContents(data))
      .catch(err => console.error(err));
  }, []);


  // 
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      user_id: 1,
      content_id: contentId, // temporary example
      percentage,
      notes,
      date,
    };

    // Just log to client console
    fetch(`${apiUrl}/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data); // check in browser console
        setPercentage("");
        setNotes("");
      })
    // .catch((err) => console.error("Fetch error:", err));
  };



  return (
    <>
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 transition mb-6"
        onClick={() => setShowProgress(true)}
      >
        Log New Progress
      </button>
      {showProgress && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setShowProgress(false)}
            >
              &times;
            </button>
            <div className="font-bold text-blue-900 text-lg mb-2">Log New Progress</div>
            <form onSubmit={handleSubmit}>
              <select
                className="w-full rounded border mb-2"
                value={contentId}
                onChange={(e) => setContentId(e.target.value)}
              >
                <option value="">Select Content</option>

                {contents.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title || item.name || `Content #${item.id}`}
                  </option>
                ))}
              </select>
              <input
                className="w-full rounded border mb-2"
                type="number"
                placeholder="Completion Percentage"
                min={0}
                max={100}
                value={percentage || ""}
                onChange={(e) => setPercentage(e.target.value)}
              />

              <textarea
                className="w-full rounded border"
                placeholder="Notes"
                value={notes || ""}
                onChange={(e) => setNotes(e.target.value)}
              />
              <input
                type="date"
                className="w-full rounded border mt-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />


              <button
                type="submit"
                className="bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 mt-4 transition"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
