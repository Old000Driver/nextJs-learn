import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { login, password } = await request.json();

  const r = await fetch("https://api.zhihur.com/admin/auth/sign_in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
  });

  const data = await r.json();

  return NextResponse.json({ data });
}
