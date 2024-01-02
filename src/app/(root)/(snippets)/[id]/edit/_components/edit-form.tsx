"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { Button, Input, ButtonGroup } from "@nextui-org/react";
import { Editor } from "@monaco-editor/react";
import { Textarea } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import ModalDelete from "@/components/modal-delete";

import * as actions from "@/actions";
import { CategoryType, SnippetType } from "@/types";
import { languages } from "@/languages";

type EditFormProp = SnippetType & {
  categories: CategoryType[];
};

const EditSnippetForm: React.FC<EditFormProp> = ({
  category,
  description,
  id,
  language,
  snippet,
  title,
  categories,
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
  return (
    <>
      <div className="flex justify-between">
        <h2 className="p-2 pl-0 text-2xl">Edit Snippet</h2>
        <ModalDelete
            category={category}
            id={id}
            description={description}
            language={language}
            snippet={snippet}
            title={title}
            variant
          />
      </div>
      <form
        className="border p-2 rounded-md border-grey-200 flex flex-col gap-2"
        action={editAction}
      >
        <div className="flex gap-2 lg:flex-row flex-col">
          <Input
            type="text"
            label="Title"
            className="lg:max-w-[50%]"
            name="title"
            defaultValue={title}
          />
          <Autocomplete
            label="Select Category"
            className="lg:max-w-[50%]"
            defaultItems={categories}
            name="category"
            defaultInputValue={category}
          >
            {(item) => (
              <AutocompleteItem key={item.id}>
                {item.categoryTitle}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Autocomplete
            label="Select Language"
            className="lg:max-w-[50%]"
            defaultItems={languages}
            name="language"
            defaultInputValue={language}
            onInputChange={(value: string) => setLanguage(value.toLowerCase())}
          >
            {(item) => (
              <AutocompleteItem key={item.label}>
                {item.value.toUpperCase()}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <Textarea
          label="Description"
          name="description"
          defaultValue={description}
        />
        <div>
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
