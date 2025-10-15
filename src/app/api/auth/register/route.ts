import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/dbConnect";
import Worker from "@/models/worker";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      password,
      address,
      city,
      state,
      pincode,
      skills,
      experience,
      description,
    } = body;

    if (!fullName || !email || !phone || !password) {
      return NextResponse.json(
        { message: "Please fill all required fields" },
        { status: 400 }
      );
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save worker data
    const newWorker = new Worker({
      fullName,
      email,
      phone,
      password: hashedPassword,
      address,
      city,
      state,
      pincode,
      skills,
      experience,
      description,
    });

    await newWorker.save();

    return NextResponse.json(
      { message: "Worker registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering worker:", error);
    return NextResponse.json(
      { message: "Server error. Try again later." },
      { status: 500 }
    );
  }
}
