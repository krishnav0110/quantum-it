import { NextResponse } from "next/server";

import { verifySession } from "@/actions/auth";

export async function POST() {
  try {
    const authRes = await verifySession();
    return NextResponse.json(authRes, { status: 200 });
  } catch {
    return NextResponse.json({}, { status: 500 });
  }
}
