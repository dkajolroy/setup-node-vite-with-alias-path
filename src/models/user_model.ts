import { IUser } from "@src/types/data";
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>(
  {
    name: { type: "String", minlength: 2, maxlength: 50, required: true },
    email: { type: "String", minlength: 5, maxlength: 500, required: true },
    phone: { type: "String", minlength: 4, maxlength: 20 },
    password: { type: "String", minlength: 4, maxlength: 500, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const User = model("Users", userSchema);
