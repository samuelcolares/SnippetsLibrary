"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Snippets
export async function createSnipet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const language = formData.get("language");
    const snippet = formData.get("snippetCode");

    if (typeof title !== "string" || title.length < 3)
      return { message: "Title must be longer" };

    if (typeof category !== "string" || category.length < 1)
      return { message: "Select Category" };

    if (typeof description !== "string" || description.length < 1)
      return { message: "Description must be longer" };

    if (typeof language !== "string" || language.length < 1)
      return { message: "Select language" };

    if (typeof snippet !== "string" || snippet.length < 1)
      return { message: "Code must be longer" };

    await db.snippet.create({
      data: {
        title,
        category,
        description,
        language,
        snippet,
      },
    });

    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong." };
    }
  } finally {
    redirect("/");
  }
}

export async function editSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const language = formData.get("language");
    const snippet = formData.get("snippetCode");
    const id = formData.get("id");

    if (typeof title !== "string" || title.length < 3)
      return { message: "Title must be longer" };

    if (typeof category !== "string" || category.length < 1)
      return { message: "Select Category" };

    if (typeof description !== "string" || description.length < 1)
      return { message: "Description must be longer" };

    if (typeof language !== "string" || language.length < 1)
      return { message: "Select language" };

    if (typeof snippet !== "string" || snippet.length < 1)
      return { message: "Code must be longer" };

    if (typeof id !== "string" || id.length < 1)
      return { message: "Incorrect ID" };

    await db.snippet.update({
      where: {
        id,
      },
      data: {
        title,
        category,
        description,
        language,
        snippet,
      },
    });

    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong." };
    }
  } finally {
    redirect("/");
  }
}

export async function deleteSnippet(id: string) {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
}


// Categories
export async function editCategory(
  formState: { message: string },
  formData: FormData
) {
  try {
    const categoryTitle = formData.get("categoryTitle");

    const id = formData.get("id");

    if (typeof categoryTitle !== "string" || categoryTitle.length < 3)
      return { message: "Category name must be longer" };

    if (typeof id !== "string" || id.length < 1)
      return { message: "Incorrect ID" };

    await db.category.updateMany({
      where: {
        id,
      },
      data: {
        categoryTitle,
      },
    });

    revalidatePath("/category");
    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong." };
    }
  } finally {
    redirect("/category");
  }
}

export async function createCategory(
  formState: { message: string },
  formData: FormData
) {
  try {
    const categoryTitle = formData.get("categoryTitle");

    if (typeof categoryTitle !== "string" || categoryTitle.length < 3)
      return { message: "Category name must be longer" };

    await db.category.create({
      data: {
        categoryTitle,
      },
    });

    revalidatePath("/category");
    revalidatePath("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong." };
    }
  } finally {
    redirect("/category");
  }
}

export async function deleteCategory(id: string) {
  await db.category.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  revalidatePath("/category");
  redirect("/category");
}
