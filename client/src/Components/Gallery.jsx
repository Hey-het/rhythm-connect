"use client"
import { useEffect, useState } from "react"

export default function contantPage() {
  
//   const [content, setContant] = useState([]);
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");

//   console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  
//  useEffect(() => {
//   fetch(`${apiUrl}/content`)
//     .then(res => res.json())
//     .then(data => setContant(data))
//     .catch(err => console.log("Fetch error:", err));
// }, []);



  return (
    <>
      <h1>Welcome to My HomePage</h1>
      {/* <div>
       { content.map(item => (
        <div key ={item.id}
        >
             <h2>{item.title}</h2>
          <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Watch</a>
        </div>

        ))}
        </div> */}
    
    </>
  )
}