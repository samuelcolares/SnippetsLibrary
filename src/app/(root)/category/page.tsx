import App from "@/components/categories/table";
import prismadb from "@/lib/db";
import React from "react";

const CategoryPage = async () => {
  const categories = await prismadb.category.findMany()
  return <App categories={categories}/>;
};

export default CategoryPage;
