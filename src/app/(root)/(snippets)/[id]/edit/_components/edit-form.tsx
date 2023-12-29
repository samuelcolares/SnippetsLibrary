"use client";
import React, { useState } from "react";
import { Button, Input, ButtonGroup } from "@nextui-org/react";
import { Editor } from "@monaco-editor/react";
import { Textarea } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { redirect } from "next/navigation";
import { SnippetType } from "@/types";
import { cn } from "@/lib/utils";

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

const EditSnippetForm: React.FC<SnippetType> = ({
  category,
  description,
  id,
  language,
  snippet,
  title,
}) => {
  const [snippetCode, setSnippetCode] = useState<string>(snippet);
  const [languageType, setLanguage] = useState<string>(language);

  const [formState, action] = useFormState(actions.editSnippet, {
    message: "",
  });

  const handleEditorChange = (value: string = "") => {
    setSnippetCode(value);
  };

  const editAction = action.bind(null);
  const del = actions.deleteSnippet.bind(null, id);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="p-2 pl-0 text-2xl">Edit Snippet</h2>
        <form action={del}>
          <Button color="danger" variant="faded" type="submit">
            Delete
          </Button>
        </form>
      </div>
      <form
        className="border p-2 rounded-md border-grey-200 flex flex-col gap-2"
        action={editAction}
      >
        <div className="flex gap-2">
          <Input
            type="text"
            label="Title"
            className="max-w-[50%]"
            name="title"
            defaultValue={title}
          />
          <Autocomplete
            label="Select Category"
            className="max-w-[50%]"
            defaultItems={Category}
            name="category"
            defaultInputValue={category}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <Textarea
          label="Description"
          name="description"
          defaultValue={description}
        />
        <div>
          <ButtonGroup radius="sm" className="mb-1" variant="ghost">
            <Button
              onClick={() => setLanguage("javascript")}
              color={languageType === "javascript" ? "primary" : "default"}
              variant={languageType === "javascript" ? "solid" : "ghost"}
            >
              JavaScript
            </Button>
            <Button
              onClick={() => setLanguage("typescript")}
              color={languageType === "typescript" ? "primary" : "default"}
              variant={languageType === "typescript" ? "solid" : "ghost"}
            >
              TypeScript
            </Button>
            <Button
              onClick={() => setLanguage("txt")}
              color={languageType === "txt" ? "primary" : "default"}
              variant={languageType === "txt" ? "solid" : "ghost"}
            >
              txt
            </Button>
          </ButtonGroup>
          <Editor
            height={"40vh"}
            theme="vs-dark"
            language={languageType}
            defaultValue={snippetCode}
            options={{
              minimap: { enabled: false },
            }}
            className="rounded-md overflow-hidden"
            onChange={handleEditorChange}
          />
          <input
            type="text"
            className="hidden"
            value={languageType}
            name="language"
          />
          <input type="text" className="hidden" value={id} name="id" />
          <textarea className="hidden" value={snippetCode} name="snippetCode" />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
      <p className="text-gray-800">id: {id}</p>
    </>
  );
};

export default EditSnippetForm;
