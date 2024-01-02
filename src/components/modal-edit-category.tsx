"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

import { CategoryType } from "@/types";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import { EditIcon } from "lucide-react";

export default function ModalEditCategory(props: { category: CategoryType }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formState, action] = useFormState(actions.editCategory, {
    message: "",
  });
  return (
    <>
      <button onClick={onOpen}>
        <EditIcon className="text-gray-600"/>
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-10",
          base: "border-[#f5f5f5] bg-[#000] dark:bg-[#1d1d1d] text-[#f5f5f5]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Edit Category</p>
              </ModalHeader>
              <form action={action}>
                <ModalBody>
                  <Input
                    type="text"
                    placeholder="Category Title"
                    defaultValue={props.category.categoryTitle}
                    size="sm"
                    name="categoryTitle"
                  />
                  <input
                    className="hidden"
                    value={props.category.id}
                    name="id"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    className="shadow-lg shadow-indigo-500/20"
                    color="primary"
                    type="submit"
                    onPress={onClose}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
