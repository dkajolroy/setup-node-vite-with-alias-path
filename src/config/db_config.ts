import { env_config } from "@src/config/env_config";

import mongoose from "mongoose";

export function db_config() {
  const { DATABASE_URL } = env_config();

  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => console.log("DB connection failed"));
}
