"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { useFormState } from "react-dom";

import * as actions from "@/actions";

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
