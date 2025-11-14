"use client"
import { useEffect, useState } from "react"

export default function contantPage() {
  
  const [content, setContant] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/content").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setContant(data)
      }
    )
  }, [])


  return (
    <>
      <h1>Welcome to My HomePage</h1>
      <div>
       { content.map(item => (
        <div key ={item.id}
        >
             <h2>{item.title}</h2>
          <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Watch</a>
        </div>

        ))}
        </div>
    
    </>
  )
}