import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

// DB
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Routes
// app.get("/", (req, res) => {
//   res.send("Hello from Rhythm Connect Server (Vercel)");
// });

app.get("/content", async (req, res) => {
  const sampleContent = await db.query(`SELECT * FROM content`);
  res.json(sampleContent.rows);
});


app.post("/content", async (req,res)=>{
  const {user_id, title, description, url, category}= req.body;
  const newContent = await db.query(
    `INSERT INTO content (user_id, title, description, url, category) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [user_id, title, description, url, category]
  )
  
  res.json(newContent.rows[0]);
  console.log("New content added:", newContent.rows[0]);
})

// ❗ IMPORTANT: Do NOT listen to a port on Vercel
export default app;
