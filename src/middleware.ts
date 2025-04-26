import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const PROTECTED_ROUTES = ["/"];
const AUTH_ROUTES = ["/login", "/register"];

export default async function middleware(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const pathname = request.nextUrl.pathname;

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname === route);
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname === route);

  const sessionCookie = (await cookies()).get("session")?.value || "";

  const res = await fetch(`${origin}/api/session`, {
    method: "POST",
    headers: {
      Cookie: `session=${sessionCookie};`,
    },
  });

  const authRes = await res.json();

  if (isProtectedRoute) {
    if (!authRes.isAuthValid) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  } else if (isAuthRoute) {
    if (authRes.isAuthValid) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\svg).*)"],
};
