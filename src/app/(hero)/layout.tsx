import Header from "@/components/header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 字体颜色为白色 */}
        <Header />
        {children}
      </body>
    </html>
  );
}