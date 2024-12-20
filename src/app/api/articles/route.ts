import { NextResponse } from "next/server"
import db from '@/db'
// GET => /api/articles
export async function GET(request: Request) {
  // ...
}

// POST => /api/articles
export async function POST(request: Request) {
  const data = await request.json()
  await db.update(({ posts }) => posts.unshift({
    id: Math.random().toString(36).slice(-8),
    ...data,
  }))
  return NextResponse.json({
    code: 0,
    message: '添加成功',
    data
  })
}