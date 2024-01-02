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

import { DeleteIcon } from "@/components/ui/delete-icon";

import { CategoryType } from "@/types";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import { PlusIcon } from "lucide-react";

// type ModalProps = CategoryType & {
//   variant?: boolean;
// };

export default function ModalCreateCategory() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formState, action] = useFormState(actions.createCategory, {
    message: "",
  });
  return (
    <>
      <Button
        variant="solid"
        onPress={onOpen}
        color="primary"
        endContent={<PlusIcon />}
        className="h-12"
      >
        New Category
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-10",
          base: "border-[#f5f5f5] bg-[#000] dark:bg-[#1d1d1d] text-[#f5f5f5]",
          // header: "border-b-[1px] border-[#f5f5f5]",
          // footer: "border-t-[1px] border-[#f5f5f5]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p>Create Category</p>
              </ModalHeader>
              <form action={action}>
                <ModalBody>
                  <Input
                    type="text"
                    placeholder="Category Title"
                    className=""
                    size="sm"
                    name="categoryTitle"
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
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={onClose}
                >
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
