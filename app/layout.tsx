import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dinload",
  description: "Movie and series download website",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
