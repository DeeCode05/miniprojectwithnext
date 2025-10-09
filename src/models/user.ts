import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  role: "user" | "worker";
  email: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "worker"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
