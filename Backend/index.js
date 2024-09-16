import express, { urlencoded } from "express";
import chatbotRouter from "./routers/chatbotRoutes.js";
import authRouter from "./routers/authRoutes.js";
import cors from "cors"
import { config } from "dotenv"

config()

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

app.use(express.json())
app.use(cors());
app.use("/api/chatbot", chatbotRouter);
app.use("/api/auth", authRouter);
// app.use("*", (req, res) => {
//   res.send("Welcome to API's");
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error running server on PORT: ${PORT}`);
    process.exit(1);
  }
  console.log(`Server running on PORT: ${PORT}`);
});