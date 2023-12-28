import App from "@/components/table";
import db from "@/lib/db";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
// export const revalidate = 0;
export default async function Home() {
  const snippets = await db.snippet.findMany({})
  return <App snippets={snippets}/>;
}
