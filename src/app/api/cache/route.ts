import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      tags: ["dog"],
    },
  });
  console.log(res);
  const data = await res.json();
  console.log(data);
  return NextResponse.json(data);
}
