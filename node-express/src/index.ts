import express from "express";
import { Pool } from "pg";
import cors from "cors";

const app = express();
const port = process.env.DEPLOYMENT === "production" ? 3001 : 5000;

app.use(cors());

const pool = new Pool({
  user: "myuser",
  host: process.env.DEPLOYMENT === "production" ? "postgres" : "localhost",
  database: "mydatabase",
  password: "mypassword",
  port: 5432,
});

app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT NOW()");
    res.json({ success: true, currentTime: data.rows[0].now });
  } catch (error) {
    res.status(500).send((error as Error).toString());
  }
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
