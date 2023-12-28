"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Snippets = {
  formState: { message: string };
  formData: FormData;
  language: string;
  snippet: string;
};

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

    // await new Promise((resolve) => setTimeout(resolve, 1000));

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

export async function deleteSnippet(id: string) {
  await db.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
}

export async function editSnippet(
  formState: { message: string },
  formData: FormData,
) {
  try {
    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");
    const language = formData.get("language");
    const snippet = formData.get("snippetCode");
    const id = formData.get("id")

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