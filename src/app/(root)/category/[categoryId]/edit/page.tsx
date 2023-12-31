import React from "react";
import { notFound } from "next/navigation";
import prismadb from "@/lib/db";

import EditForm from "./_components/edit-form";

const EditCategory = async ({ params }: { params: { categoryId: string } }) => {
  const category = await prismadb.category.findFirst({
    where: {
      id: params.categoryId,
    },
  });

  if (!category) notFound();

  return <EditForm category={category} />;
};

export default EditCategory;
