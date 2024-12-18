// "use client";
import React from "react";
import { Metadata } from "next";
import BlogList from "../components/blogLIst";

export const metadata: Metadata = {
  title: "博客列表",
};

export default function () {
  return (
    <div>
      <BlogList />
    </div>
  );
}
