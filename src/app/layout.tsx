import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melissa Julie Anne Hicks",
  description: "Traditional Artist: Portraiture - Concept Art - Illustration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
