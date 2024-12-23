import { NextResponse, NextRequest } from "next/server";
import db from "@/db";
// GET => /api/articles
export async function GET(request: NextRequest) {
  // 分页
  const searchParams = request.nextUrl.searchParams;
  const pageNum = Number(searchParams.get("pageNum")) || 1;
  const pagesize = Number(searchParams.get("pagesize")) || 10;
  const query = searchParams.get("query") || "";

  const data = db.data.posts;
  const lowerCaseQuery = query.toLowerCase();
  let filteredData = query
    ? data.filter((item) => {
        const { id, ...rest } = item;
        return Object.values(rest).some((value) =>
          String(value).toLowerCase().includes(lowerCaseQuery)
        );
      })
    : data;
  const total = filteredData.length;
  const startIndex = (pageNum - 1) * pagesize;
  const endIndex = Math.min(startIndex + pagesize, total);

  filteredData = filteredData.slice(startIndex, endIndex);
  return NextResponse.json({
    code: 0,
    message: "获取成功",
    data: filteredData,
    total,
  });
}

// POST => /api/articles
export async function POST(request: NextRequest) {
  const data = await request.json();
  await db.update(({ posts }) =>
    posts.unshift({
      id: Math.random().toString(36).slice(-8),
      ...data,
    })
  );
  return NextResponse.json({
    code: 0,
    message: "添加成功",
    data,
  });
}
