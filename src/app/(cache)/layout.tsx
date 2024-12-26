import Link from "next/link";
export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href="/news">新闻</Link>
        <Link href="/sports">体育</Link>
      </nav>
      {children}
    </div>
  );
}
