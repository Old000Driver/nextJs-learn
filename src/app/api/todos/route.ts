import { NextResponse } from "next/server";

const data = ["todo 1", "todo 2", "todo 3"];

export async function GET() {
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const todo = formData.get("todo") as string;
  data.push(todo);
  return NextResponse.json({ data });
}
