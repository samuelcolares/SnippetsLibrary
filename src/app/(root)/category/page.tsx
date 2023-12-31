import React from "react";
import prismadb from "@/lib/db";

import CategoriesTable from "@/components/categories/table";

const CategoryPage = async () => {
  const categories = await prismadb.category.findMany();

  return <CategoriesTable categories={categories} />;
};

export default CategoryPage;
