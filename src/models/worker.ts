import mongoose, { Schema, models } from "mongoose";

const workerSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: String,
    city: String,
    state: String,
    pincode: String,
    skills: String,
    experience: String,
    description: String,
  },
  { timestamps: true }
);

const Worker = models.Worker || mongoose.model("Worker", workerSchema);
export default Worker;
