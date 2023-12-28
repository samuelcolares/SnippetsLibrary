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
} from "@nextui-org/react";
import { DeleteIcon } from "./delete-icon";
import { SnippetType } from "../../types";
import * as actions from "@/actions";

type ModalProps = SnippetType & {
  variant?: boolean;
};

export default function ModalDelete({
  category,
  description,
  id,
  language,
  snippet,
  title,
  variant = false,
}: ModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const deleteAction = actions.deleteSnippet.bind(null, id);
  return (
    <>
      {!variant && (
        <button
          className="text-lg text-danger cursor-pointer active:opacity-50"
          onClick={onOpen}
        >
          <DeleteIcon />
        </button>
      )}
      {variant && (
        <Button color="danger" variant="faded" onPress={onOpen}>
          Delete
        </Button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Attention!
              </ModalHeader>
              <ModalBody>
                <p>Deleting {title}</p>
                <p>This action cannot be undone.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <form action={deleteAction} className="">
                  <Button color="danger" onPress={onClose} type="submit">
                    Delete
                  </Button>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
