import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextUI } from "./providers/providers";
import SessionProvider from "./providers/session-providers";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Library",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <NextUI>{children}</NextUI>
        </body>
      </html>
    </SessionProvider>
  );
}
