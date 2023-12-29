"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

const NewCategoryPage = () => {
  const [formState, action] = useFormState(actions.createCategory, {
    message: "",
  });
  return (
    <form action={action}>
      <div className="flex gap-3 items-center justify-center">
        <Input
          type="text"
          placeholder="Category Title"
          className="w-[200px]"
          size="sm"
          name="categoryTitle"
        />
        <Button type="submit" size="lg" color="primary">
          Create
        </Button>
      </div>
    </form>
  );
};

export default NewCategoryPage;
