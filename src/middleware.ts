import { NextRequest } from "next/server";

export function middleware(request:NextRequest){
  console.log(request.nextUrl.pathname,'🐂');
}


export const config = {
  matcher: ["/about"],
};