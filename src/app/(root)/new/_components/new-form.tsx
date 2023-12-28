"use client";
import React, { useState } from "react";
import { Button, Input, ButtonGroup } from "@nextui-org/react";
import { Editor } from "@monaco-editor/react";
import { Textarea } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { redirect } from "next/navigation";

const languages = [
  {
    label: "Javascript",
    value: "javascript",
  },
  {
    label: "Typescript",
    value: "typescript",
  },
  {
    label: "Text",
    value: "txt",
  },
];

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

const NewSnippetForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [snippetCode, setSnippetCode] = useState<string>("");
  const [language, setLanguage] = useState<string>("txt");

  const [formState, action] = useFormState(actions.createSnipet, {
    message: "",
  });

  const handleEditorChange = (value: string = "") => {
    setSnippetCode(value);
  };

  const createAction = action.bind(null);

  return (
    <>
      <h2 className="p-2 pl-0 text-2xl">New Snippet</h2>
      <form
        className="border p-2 rounded-md border-grey-200 flex flex-col gap-2"
        action={createAction}
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
            defaultItems={Category}
            name="category"
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <Textarea label="Description" name="description" />
        <div>
          <ButtonGroup radius="sm" className="mb-1" variant="ghost">
            <Button
              onClick={() => setLanguage("javascript")}
              color={language === "javascript" ? "primary" : "default"}
              variant={language === "javascript" ? "solid" : "ghost"}
            >
              JavaScript
            </Button>
            <Button
              onClick={() => setLanguage("typescript")}
              color={language === "typescript" ? "primary" : "default"}
              variant={language === "typescript" ? "solid" : "ghost"}
            >
              TypeScript
            </Button>
            <Button
              onClick={() => setLanguage("txt")}
              color={language === "txt" ? "primary" : "default"}
              variant={language === "txt" ? "solid" : "ghost"}
            >
              txt
            </Button>
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
