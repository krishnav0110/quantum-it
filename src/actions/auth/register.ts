"use server";

import { connectDB } from "@/lib/mongoose";
import { User, UserModel } from "@/lib/mongoose/models";

import * as bcrypt from "bcryptjs";

export const register = async (credentials: User) => {
  credentials.password = bcrypt.hashSync(credentials.password, 10);

  try {
    await connectDB();
    await UserModel.create(credentials);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Unknown error" };
  }
};
