import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/products.js";
import userRouter from "./routes/users.js";
import { connectDB } from "./utils/DB.js";

dotenv.config();

const app = express();


connectDB();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
