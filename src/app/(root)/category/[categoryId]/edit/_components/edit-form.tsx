"use client";
import React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { CategoryType } from "../../../../../../../types";
import { Button, Input } from "@nextui-org/react";

const EditForm = ({ category }: { category: CategoryType }) => {
  const [formState, action] = useFormState(actions.editCategory, {
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
          defaultValue={category.categoryTitle}
        />
        <input className="hidden" value={category.id} name="id"/>
        <Button type="submit" size="lg" color="secondary">
          Update
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
