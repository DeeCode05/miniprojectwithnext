import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Add connection string validation
if (!MONGODB_URI.startsWith('mongodb://') && !MONGODB_URI.startsWith('mongodb+srv://')) {
  throw new Error('Invalid MongoDB connection string. Must start with "mongodb://" or "mongodb+srv://"');
}

async function dbConnect(): Promise<typeof mongoose> {
  try {
    const connection = await mongoose.connect(MONGODB_URI, {
      dbName: "urbanSetGo",
      bufferCommands: false,
    });
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default dbConnect;