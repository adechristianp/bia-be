import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cors from "cors";
const app = express();
const port = 7055;

try {
    await db.authenticate();
    console.log("Database connected");
    await db.sync();
} catch (error) {
    console.log("Database error: ", error)
}

app.use(cors())
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));