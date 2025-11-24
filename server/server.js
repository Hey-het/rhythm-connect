import express from "express";
// import cors from "cors";
import { corsMiddleware } from "./coreMiddleware.js";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
app.use(corsMiddleware);

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

app.get('/progress', async (req, res) => {
  const result = await db.query(`
    SELECT
      progress.*,
      content.category,
      content.title
    FROM
      progress
    JOIN
      content ON progress.content_id = content.id
    ORDER BY
      progress.log_date DESC
  `);
  res.json(result.rows);
  console.log("Fetched progress records:", result.rows);
});

app.post('/progress', async (req, res) => {
  const { user_id, content_id, percentage, notes } = req.body;

  // Validate input
  if (!content_id || !percentage) {
    return res.status(400).json({ error: "content_id and percentage required" });
  }

  const newProgress = await db.query(
    `INSERT INTO progress (user_id, content_id, percentage, notes) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [user_id, content_id, percentage, notes]
  );

  res.json(newProgress.rows[0]);
  console.log("New progress logged:", newProgress.rows[0]);
});

// ❗ IMPORTANT: Do NOT listen to a port on Vercel
export default app;
