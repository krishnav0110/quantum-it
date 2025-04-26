"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/lib/mongoose/models";

import { SESSION_COOKIE_NAME } from "@/lib/constants";

const expiresIn = 86400;

export const login = async (credentials: { username: string; password: string }) => {
  try {
    await connectDB();
    const user = await UserModel.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("User not found");
    }

    if (!bcrypt.compareSync(credentials.password, user.password)) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_API_SECRET!, {
      expiresIn: expiresIn,
    });

    const options = {
      maxAge: expiresIn,
      sameSite: true,
      httpOnly: true,
      secure: true,
    };
    (await cookies()).set(SESSION_COOKIE_NAME, token, options);

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Unknown error" };
  }
};

export const logout = async () => {
  (await cookies()).delete(SESSION_COOKIE_NAME);
  redirect("/login");
};
