import { NextResponse } from "next/server";
import db from '@/db'
interface IParams { params: { id: string } }

// DELETE => /api/articles/:id
export async function DELETE(request: Request, { params }: IParams) {
  await db.update(({ posts }) => {
    const idx = posts.findIndex(post => post.id === params.id)
    posts.splice(idx, 1)
  })
  return NextResponse.json({
    code: 0,
    message: '删除成功'
  })
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
