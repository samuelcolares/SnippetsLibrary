"use client";
import React from "react";
import { Button, Input, ButtonGroup } from "@nextui-org/react";
import { Editor } from "@monaco-editor/react";
import { Textarea } from "@nextui-org/react";

import { SnippetType } from "../../../../../types";
import { useRouter } from "next/navigation";
import * as actions from "@/actions";
import ModalDelete from "@/components/modal-delete";

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

const Category = ["LeetCode", "Shadcn/UI"];

const View: React.FC<SnippetType> = ({
  category,
  description,
  id,
  language,
  snippet,
  title,
}) => {
  const router = useRouter();
  const edit = () => router.push(`/${id}/edit`);
  const del = actions.deleteSnippet.bind(null, id);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="p-2 pl-0 text-2xl">View Snippet</h2>
        <div className="flex gap-2">
          <Button color="primary" onClick={edit} variant="faded">
            Edit
          </Button>
          {/* <form action={del}>
          <Button color="danger" variant="faded" type="submit">
            Delete
          </Button>
        </form> */}
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
      </div>
      <div className="border p-2 rounded-md border-grey-200 flex flex-col gap-2">
        <div className="flex gap-2">
          <Input
            type="text"
            label="Title"
            className="max-w-[50%]"
            name="title"
            defaultValue={title}
            readOnly
          />
          <Input
            type="text"
            label="Category"
            className="max-w-[50%]"
            name="title"
            defaultValue={category}
            readOnly
          />
        </div>
        <Textarea
          label="Description"
          name="description"
          defaultValue={description}
          readOnly
        />
        <div>
          {/* <ButtonGroup radius="sm" className="mb-1" variant="ghost">
            <Button disabled>{language}</Button>
          </ButtonGroup> */}
          <p>{language}</p>
          <Editor
            height={"40vh"}
            theme="vs-dark"
            language={language}
            defaultValue={snippet}
            options={{
              minimap: { enabled: false },
              readOnly: true,
            }}
            className="rounded-md overflow-hidden"
          />
        </div>
      </div>
      <p className="text-gray-800">id: {id}</p>
    </>
  );
};

export default View;
