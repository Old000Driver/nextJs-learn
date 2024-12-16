import React from "react";
import homeSrc from "/public/images/home.jpg";
import Hero from "@/components/hero";

export const metadata = {
  title: "Home",
};
export default function page() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home"
      content="Professional Cloud Hosting"
    />
  );
}
