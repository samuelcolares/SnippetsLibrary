import React from "react";
import prismadb from "@/lib/db";

import NewSnippetForm from "./_components/new-form";

const NewSnippet = async () => {
  const categories = await prismadb.category.findMany({});

  return <NewSnippetForm categories={categories} />;
};

export default NewSnippet;
