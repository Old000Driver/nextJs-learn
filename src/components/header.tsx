"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const linkData = [
  { name: "Performance", path: "/performance" },
  { name: "Reliability", path: "/reliability" },
  // { name: "Dashboard", path: "/dashboard" },
  { name: "Scale", path: "/scale" },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between items-center container mx-auto text-white p-8">
        <Link href={"/"} className="text-3xl font-bold">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={pathName === item.path ? "text-purple-500" : ""}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
