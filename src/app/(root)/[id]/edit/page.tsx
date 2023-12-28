import prismadb from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";
import EditSnippetForm from "./_components/edit-form";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const snippet = await prismadb.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  return <EditSnippetForm {...snippet} />;
};

export default EditPage;
