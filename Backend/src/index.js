import bodyparser from "body-parser";
import cors from "cors";
import express from "express";
import connectMongodb from "./db/connectMongodb.js";
import userRoute from "./routes/user.route.js";
import faqRoute from "./routes/faq.route.js";
import guidedLessonRoute from "./routes/guidedLessons.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyparser.json());
connectMongodb();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use("/user", userRoute);
app.use("/faq", faqRoute);
app.use("/guidedLessons", guidedLessonRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
