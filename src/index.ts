import { db_config } from "@src/config/db_config";
import { handleError } from "@src/utils/error_handler";
import dotenv from "dotenv";
import express from "express";
// import authorRouter from "./routes/author.router";
// import bookRouter from "./routes/book.router";
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
db_config();

// app.use("/authors", authorRouter);
// app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(handleError);
