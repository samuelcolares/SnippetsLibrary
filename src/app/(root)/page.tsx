import db from "@/lib/db";

import SnippetsTable from "@/components/snippets/table";

export default async function Home() {
  const snippets = await db.snippet.findMany({});
  const categories = await db.category.findMany({});

  return <SnippetsTable snippets={snippets} categories={categories} />;
}
