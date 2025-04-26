"use server";
import React from "react";

import { cookies } from "next/headers";

import * as jwt from "jsonwebtoken";

import { SESSION_COOKIE_NAME } from "@/lib/constants";

export const verifySession = React.cache(async () => {
  const token = (await cookies()).get(SESSION_COOKIE_NAME);

  if (!token) {
    return { isAuthValid: false };
  }

  try {
    jwt.verify(token.value, process.env.JWT_API_SECRET!);
    return { isAuthValid: true };
  } catch {
    return { isAuthValid: false };
  }
});
