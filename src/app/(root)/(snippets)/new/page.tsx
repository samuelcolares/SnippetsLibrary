import React from "react";
import NewSnippetForm from "./_components/new-form";
import prismadb from "@/lib/db";

const NewSnippet = async () => {
  const categories = await prismadb.category.findMany({})
  return <NewSnippetForm categories={categories}/>;
};

export default NewSnippet;
