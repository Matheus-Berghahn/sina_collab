import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sina",
  description: "CRIATIVIDADE QUE IMPULSIONA SEU NEGÓCIO",
  icons: "images/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header>
        </header>
        {children}
      </body>
    </html>
  );
}