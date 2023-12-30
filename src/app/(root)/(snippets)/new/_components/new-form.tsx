"use client";
import React, { useState } from "react";
import { Button, Input, ButtonGroup } from "@nextui-org/react";
import { Editor } from "@monaco-editor/react";
import { Textarea } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { redirect } from "next/navigation";
import { CategoryType } from "@/types";
import { languages } from "@/languages";

const Category = [
  {
    label: "LeetCode",
    value: "LeetCode",
  },
  {
    label: "Shadcn/UI",
    value: "Shadcn/UI",
  },
];

const NewSnippetForm = ({ categories }: { categories: CategoryType[] }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [snippetCode, setSnippetCode] = useState<string>("");
  const [language, setLanguage] = useState<string>("txt");

  const [formState, action] = useFormState(actions.createSnipet, {
    message: "",
  });

  const handleEditorChange = (value: string = "") => {
    setSnippetCode(value);
  };

  return (
    <>
      <h2 className="p-2 pl-0 text-2xl">New Snippet</h2>
      <form
        className="border p-2 rounded-md border-grey-200 flex flex-col gap-2"
        action={action}
      >
        <div className="flex gap-2">
          <Input
            type="text"
            label="Title"
            className="max-w-[50%]"
            name="title"
          />
          <Autocomplete
            label="Select Category"
            className="max-w-[50%]"
            defaultItems={categories}
            name="category"
          >
            {(item) => (
              <AutocompleteItem key={item.id}>
                {item.categoryTitle}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <Textarea label="Description" name="description" />
        <div>
          <ButtonGroup radius="sm" className="mb-1" variant="ghost">
            {languages.map((lang) => (
              <Button
                key={lang.label}
                onClick={() => setLanguage(lang.value)}
                color={language === lang.value ? "primary" : "default"}
                variant={language === lang.value ? "solid" : "ghost"}
              >
                {lang.label}
              </Button>
            ))}
          </ButtonGroup>
          <Editor
            height={"40vh"}
            theme="vs-dark"
            language={language}
            defaultValue=""
            options={{
              minimap: { enabled: false },
            }}
            className="rounded-md overflow-hidden"
            onChange={handleEditorChange}
          />
          <input
            type="text"
            className="hidden"
            value={language}
            name="language"
          />
          <textarea className="hidden" value={snippetCode} name="snippetCode" />
        </div>
        <Button type="submit">Create Snippet</Button>
      </form>
    </>
  );
};

export default NewSnippetForm;

