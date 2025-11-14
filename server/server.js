import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "https://rhythm-connect.vercel.app"]
}));

app.use(express.json());

// DB
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Rhythm Connect Server (Vercel)");
});

app.get("/content", async (req, res) => {
  const sampleContent = await db.query("SELECT * FROM content;");
  res.json(sampleContent.rows);
});

// ❗ IMPORTANT: Do NOT listen to a port on Vercel
export default app;
