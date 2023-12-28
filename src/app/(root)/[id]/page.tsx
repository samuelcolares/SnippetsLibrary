import prismadb from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import View from "./_components/view";

const ViewPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const snippet = await prismadb.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) notFound();
  console.log(snippet);

  return <View {...snippet} />;
};

export default ViewPage;
