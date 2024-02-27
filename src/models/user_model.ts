import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 30 },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false }
);

export const User = model("users", userSchema);
