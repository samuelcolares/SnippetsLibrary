import App from "@/components/snippets/table";
import db from "@/lib/db";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
// export const revalidate = 0;
export default async function Home() {
  const snippets = await db.snippet.findMany({})
  const categories = await db.category.findMany({})
  return <App snippets={snippets} categories={categories}/>;
}
