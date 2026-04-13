import express from "express";
import cors from "cors";

const app = express()

// Some Basic Configurations
app.use(express.json({ limit: "16kb" })); // parse JSON
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static('public'))

// Some Basic CORS
app.use(cors
    ({
        origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ["Content-Type", "Authorization"]
    }))

app.get('/api/home', (req, res) => {
    res.json("You are in the Home Section")
})

export default app