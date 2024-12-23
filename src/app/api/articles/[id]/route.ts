import { NextResponse } from "next/server";
import db from "@/db";
interface IParams {
  params: { id: string };
}

// DELETE => /api/articles/:id
export async function DELETE(request: Request, { params }: IParams) {
  await db.update(({ posts }) => {
    const idx = posts.findIndex((post) => post.id === params.id);
    posts.splice(idx, 1);
  });
  return NextResponse.json({
    code: 0,
    message: "删除成功",
  });
}

export async function PATCH(request: Request, { params }: IParams) {
  const data = await request.json();
  let idx = -1;
  await db.update(({ posts }) => {
    idx = posts.findIndex((post) => post.id === params.id);
    posts[idx] = { ...posts[idx], ...data };
  });
  return NextResponse.json({
    code: 0,
    message: "修改成功",
    data: db.data.posts[idx],
  });
}

export async function GET(request: Request, { params }: IParams) {
  const data = db.data.posts.find((post) => post.id === params.id);
  return NextResponse.json({
    code: 0,
    message: "查找成功",
    data,
  });
}

// export async function POST(request: Request) {
//   // console.log("test1111", request);
//   const data = await request.json();
//   await db.update(({ posts }) =>
//     posts.unshift({
//       id: Math.random().toString(36).slice(-8),
//       ...data,
//     })
//   );
//   return NextResponse.json({ data, code: 0, message: "success" });
// }
