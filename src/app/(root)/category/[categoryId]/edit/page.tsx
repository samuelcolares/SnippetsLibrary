import prismadb from "@/lib/db";
import React from "react";
import EditForm from "./_components/edit-form";
import { notFound } from "next/navigation";

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
