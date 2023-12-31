import React from "react";
import { notFound } from "next/navigation";
import prismadb from "@/lib/db";

import EditSnippetForm from "./_components/edit-form";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const snippet = await prismadb.snippet.findFirst({
    where: {
      id,
    },
  });

  const categories = await prismadb.category.findMany();

  if (!snippet) notFound();

  return <EditSnippetForm {...snippet} categories={categories} />;
};

export default EditPage;
