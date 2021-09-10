import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Congrats({
  isOpen,
  onClose,
  data,
}: {
  data: any;
  isOpen: any;
  onClose: any;
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro exitoso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{data &&
            (<><h1>{data.name}</h1>
            <p>Your folio of registration is: <strong>{data._id}</strong></p>
            <span>Save it, to continue the process</span> </>)
          }</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
