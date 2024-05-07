import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend ZRP - PokeApp",
  description: "PokeApp for job interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
