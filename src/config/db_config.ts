import mongoose from "mongoose";
import { importEnv } from "./env_config";

export default function db_connect() {
  mongoose
    .connect(importEnv().DATABASE_URL)
    .then(() => console.log("DB⚡Connected 😍"))
    .catch(() => console.log("DB connection failed 😢!"));
}
