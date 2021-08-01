import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Congrats({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro exitoso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hola!</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
